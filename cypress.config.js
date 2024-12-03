const { defineConfig } = require("cypress");
const { spawn } = require("child_process");

let server;
let baseUrl;

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      require("@cypress/code-coverage/task")(on, config);
      on("task", {
        startServer() {
          return new Promise((resolve, reject) => {
            if (server) {
              resolve(baseUrl);
            }
            server = spawn("node", ["-r", "nyc", "index-test.js"]);
            server.stdout.on("data", (data) => {
              console.log(data.toString()); // Log the output for debugging
              const baseUrlPrefix = "DevOps project at: ";
              const output = data.toString();
              if (output.includes(baseUrlPrefix)) {
                const startIndex = output.indexOf(baseUrlPrefix);
                if (startIndex !== -1) {
                  baseUrl = output
                    .substring(startIndex + baseUrlPrefix.length)
                    .trim();
                  resolve(baseUrl);
                }
              }
            });
            server.stderr.on("data", (data) => {
              reject(data);
            });
          });
        },
        stopServer() {
          if (server) {
            server.kill();
          }
          return null;
        },
      });
      return config;
    },
  },
});
