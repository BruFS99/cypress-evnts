const { defineConfig } = require("cypress");

module.exports = defineConfig({

chromeWebSecurity: true,
  viewportWidth: 1366,
  viewportHeight: 768,
  e2e: {
    baseUrl: 'http://localhost:3000/',
    specPattern: 'cypress/e2e/**/*.{js,jsx,ts,tsx}',
  },
});
