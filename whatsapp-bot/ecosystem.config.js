module.exports = {
    apps: [{
        name: "monginis-whatsapp-bot",
        script: "./index.js",
        watch: false,
        autorestart: true,
        max_memory_restart: "1G",
        env: {
            NODE_ENV: "production",
        }
    }]
};
