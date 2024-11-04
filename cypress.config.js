const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
    },
    env: {
      API_TOKEN: "78a0d343c72b05c77bb0f61a2aff03f929168ace6bd99539262f9387f620e650",
      UNIVERSE: "https://wilma1.sp.backtrace.io/"
    },
    pageLoadTimeout: 120000
  },
});