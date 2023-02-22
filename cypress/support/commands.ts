/// <reference types="cypress" />

// Cypress.on('uncaught:exception', (err, runnable) => {
//     // returning false here prevents Cypress from
//     // failing the test
//     return false
//   })

//   require('cypress-xpath');

/// <reference types="cypress">

Cypress.Commands.add('getIframe', (iframe) => {
    return cy.get(iframe)
        .its('0.contentDocument.body')
        .should('be.visible')
        .then(cy.wrap);
})