const { defineConfig } = require("cypress");

module.exports = defineConfig({

chromeWebSecurity: true,
  viewportWidth: 1366,
  viewportHeight: 768,
  e2e: {
    setupNodeEvents(on, config) {
      on('before:browser:launch', (browser = {}, launchOptions) => {
        /* ... */
      })
      return require('./cypress/plugins/index.js')(on, config)
    },
    baseUrl: 'http://localhost:3001/',
    specPattern: 'cypress/e2e/**/*.{js,jsx,ts,tsx}',
  },
});
