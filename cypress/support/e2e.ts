import './commands';
import 'cypress-xpath';

Cypress.on('uncaught:exception', (err, runnable) => {
  return false;
});
