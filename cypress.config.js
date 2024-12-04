const { defineConfig } = require("cypress");
const { spawn } = require("child_process");

let server;
let baseUrl;

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      require('@cypress/code-coverage/task')(on, config);
      // Start and stop the backend server for the tests
      on("task", {
        startServer() {
          return new Promise((resolve, reject) => {
            if (server) {
              resolve(baseUrl); // Server already running
            }
            server = spawn("node", ['-r', 'nyc', 'index-test.js']); // Adjust to your backend entry point
            server.stdout.on("data", (data) => {
              const output = data.toString();
              const baseUrlPrefix = "DevOps project at: ";
              if (output.includes(baseUrlPrefix)) {
                baseUrl = output.substring(output.indexOf(baseUrlPrefix) + baseUrlPrefix.length).trim();
                resolve(baseUrl); // Resolve the base URL once server is ready
              }
            });
            server.stderr.on("data", (data) => {
              reject(data.toString());
            });
          });
        },
        stopServer() {
          if (server) {
            server.kill(); // Stop the backend server
            server = null;
          }
          return null;
        },
      });

      return config;
    },
  },
});
