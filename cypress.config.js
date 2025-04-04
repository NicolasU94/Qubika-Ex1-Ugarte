const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://qubika.com",
    viewportWidth: 1280,
    viewportHeight: 720,
    defaultCommandTimeout: 12000,
    retries: {
      runMode: 1,
      openMode: 0,
    },
    video: true,
    screenshotOnRunFailure: false,

    setupNodeEvents(on, config) {
      on("task", {
        log(message) {
          console.log(message);
          return null;
        },
      });

      return config; // Always return config
    },
  },
});
