import { defineConfig } from 'cypress';
import allureWriter from '@shelex/cypress-allure-plugin/writer';

export default defineConfig({
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
