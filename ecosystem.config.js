module.exports = {
    apps: [
        {
            name: "Portfolio",
            script: "./node_modules/@vue/cli-service/bin/vue-cli-service.js",
            args: "serve",
            env: {
                PORT:"3000",
                NODE_ENV:"development"
            }
        }
    ]
};