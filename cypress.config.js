const { defineConfig } = require("cypress");

module.exports = defineConfig({

chromeWebSecurity: true,
  viewportWidth: 1366,
  viewportHeight: 768,
  projectId: "au9tap",
  e2e: {
    baseUrl: 'https://chrigor-marvel-hero-app.netlify.app/',
    specPattern: 'cypress/e2e/**/*.{js,jsx,ts,tsx}',
  },
});
