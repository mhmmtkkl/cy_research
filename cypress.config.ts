const { defineConfig } = require('cypress');
const allureWriter = require('@shelex/cypress-allure-plugin/writer');

module.exports = defineConfig({
  experimentalWebKitSupport: true,
  defaultCommandTimeout: 50000,
  viewportWidth: 1280,
  viewportHeight: 720,
  e2e: {
    setupNodeEvents(on, config) {
      allureWriter(on, config);
      return config;
    },
    hideXHRInCommandLog: true,
    retries: {
      // Configure retry attempts for `cypress run`
      // Default is 0
      runMode: 2,
      // Configure retry attempts for `cypress open`
      // Default is 0
      openMode: 2,
    },
  },
  blockHosts: ['**.kargo.com'],
  env: {
    desktopUrl: 'https://www.wellplated.com/carnitas/',
    mobileUrl:
      'https://damndelicious.net/2022/08/05/weeknight-lemon-chicken-breasts/',
    debugMode: 'pbjs_debug=true',
    pluginHash: `plugin_remote_cls=${process.env.PLUGIN_HASH || 'prod'}`,
  },
});
