const { defineConfig } = require('cypress');
const allureWriter = require('@shelex/cypress-allure-plugin/writer');


module.exports = defineConfig({
  experimentalWebKitSupport: true,
  e2e: {
    setupNodeEvents(on, config) {
      // allureWriter(on, config);
      // return config;
    },
    projectId: '82a1no',
    hideXHRInCommandLog: true,
  },
  blockHosts: ['**.kargo.com'],
});
