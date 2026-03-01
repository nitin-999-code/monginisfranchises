require('dotenv').config();

const { Client, LocalAuth } = require('whatsapp-web.js');
const qrcode = require('qrcode-terminal');
const { GoogleGenAI } = require("@google/genai");
const mongoose = require('mongoose');
const http = require('http');
const Lead = require('./models/Lead');

/* ===========================
   MONGODB CONNECTION
=========================== */

mongoose.connect(
  process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/monginis-leads'
);

mongoose.connection.once('open', () => {
  console.log('✅ MongoDB connected successfully');
});

mongoose.connection.on('error', (err) => {
  console.error('❌ MongoDB Connection Error:', err);
});

/* ===========================
   GEMINI SETUP (NEW SDK)
=========================== */

if (!process.env.GEMINI_API_KEY) {
  console.error("❌ GEMINI_API_KEY missing in .env");
  process.exit(1);
}

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
});

/* ===========================
   WHATSAPP CLIENT
=========================== */

const client = new Client({
  authStrategy: new LocalAuth({
    clientId: process.env.WHATSAPP_SESSION_NAME || 'monginis-session'
  }),
  puppeteer: {
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  }
});

client.on('qr', (qr) => {
  console.log("📱 Scan the QR below:");
  qrcode.generate(qr, { small: true });
});

client.on('ready', () => {
  console.log('🚀 WhatsApp Bot is ready and logged in!');
});

/* ===========================
   SYSTEM PROMPT
=========================== */

const SYSTEM_PROMPT = `
You are a professional franchise sales assistant for Monginis Franchise India.
Respond in a business-focused tone.
Collect: Name, City, Investment Budget.
Keep replies concise.
Do not use emojis.

IMPORTANT:
When all 3 details are collected, respond exactly like:

|||LEAD_CAPTURED|||
{
"name": "Rahul Sharma",
"city": "Pune",
"budget": "15-20 Lakhs"
}

No extra text before marker.
`;

/* ===========================
   MESSAGE HANDLER
=========================== */

client.on('message', async (msg) => {

  console.log("🔥 MESSAGE EVENT TRIGGERED");

  if (msg.fromMe) return;

  let chat;
  try {
    chat = await msg.getChat();
  } catch (err) {
    console.error("Chat fetch error:", err);
    return;
  }

  if (!chat || chat.isGroup || msg.from === 'status@broadcast') return;

  const userId = msg.from;
  const userText = msg.body;

  console.log("📩 Received message from:", userId);

  try {
    console.log("🤖 Calling Gemini 2.5 Flash...");

    const prompt = `
${SYSTEM_PROMPT}

User: ${userText}
`;

    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: prompt,
    });

    const aiText = response.text;

    console.log("🧠 Gemini Response:", aiText);

    let replyText = aiText;

    /* ===========================
       LEAD CAPTURE LOGIC
    =========================== */

    if (aiText.includes("|||LEAD_CAPTURED|||")) {

      const jsonPart = aiText.split("|||LEAD_CAPTURED|||")[1]?.trim();

      let leadData;
      try {
        leadData = JSON.parse(jsonPart);
      } catch (e) {
        console.error("❌ JSON Parse Error:", e);
        leadData = null;
      }

      if (leadData) {

        const phone = userId.replace('@c.us', '');

        const existing = await Lead.findOne({ phone });

        if (!existing) {
          await Lead.create({
            name: leadData.name || "Unknown",
            city: leadData.city || "Unknown",
            budget: leadData.budget || "Unknown",
            phone,
            source: "whatsapp"
          });

          console.log("💾 Lead saved to MongoDB");
        }

        if (process.env.TEXTMEBOT_API_KEY && process.env.ADMIN_WHATSAPP) {

          const message = encodeURIComponent(
`🚀 New Franchise Lead

Name: ${leadData.name}
City: ${leadData.city}
Budget: ${leadData.budget}
Phone: ${phone}`
          );

          const url = `http://api.textmebot.com/send.php?apikey=${process.env.TEXTMEBOT_API_KEY}&text=${message}&phone=${process.env.ADMIN_WHATSAPP}`;

          http.get(url, () => {
            console.log("📲 Admin notified via TextMeBot");
          });
        }

        replyText = "Thank you for sharing your details. Our franchise team will contact you shortly.";
      }
    }

    /* ===========================
       SEND REPLY
    =========================== */

    await chat.sendStateTyping();

    setTimeout(async () => {
      await client.sendMessage(userId, replyText);
      await chat.clearState();
      console.log("✅ Reply sent");
    }, 3000);

  } catch (error) {
    console.error("❌ Gemini Error:", error);
  }

});

/* ===========================
   START CLIENT
=========================== */

client.initialize();