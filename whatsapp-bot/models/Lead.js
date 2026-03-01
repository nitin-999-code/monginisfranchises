const mongoose = require('mongoose');

const leadSchema = new mongoose.Schema({
    name: String,
    city: String,
    budget: String,
    phone: String,
    source: { type: String, default: "whatsapp" },
    createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Lead', leadSchema);
