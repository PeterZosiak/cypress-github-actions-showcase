const { defineConfig } = require("cypress");

module.exports = defineConfig({
  watchForFileChanges: false,
  projectId: "1i42de",
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
