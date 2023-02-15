import './commands';
import 'cypress-xpath';
import '@shelex/cypress-allure-plugin';

Cypress.on('uncaught:exception', (err, runnable) => {
  return false;
});
