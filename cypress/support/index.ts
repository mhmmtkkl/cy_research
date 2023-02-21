// import './commands'

// require('cypress-xpath')

/// <reference types="cypress" />
export {};

declare global {
  namespace Cypress {
    interface Chainable {
      /**
       * Custom commands here
       */
    }
    interface ResolvedConfigOptions {
      hideXHRInCommandLog?: boolean;
    }
  }
}
