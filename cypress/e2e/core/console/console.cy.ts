import ConsoleData from '../../utilities/console-data';

// const config: Config = {
// consoleMessages: ['foo', /^some bar-regex.*/],
// consoleTypes: ['error', 'warn', 'info'],
// debug: false,
// };
context('Desktop console test cases', () => {
  var browserName = Cypress.browser.name
  it.only(`verify there is no any unexpected errors/warnings in ${browserName} browser`, () => {
    cy.visit(
      `${Cypress.env('desktopUrl')}?${Cypress.env('debugMode')}&${Cypress.env(
        'pluginHash',
      )}`,
    );
    cy.window()
      .its('console')
      .then((console) => {
        cy.stub(console, 'error').callsFake((...args) => {
          args.forEach((arg) => {
            expect(arg).to.not.contain('to not include error');
          });
        });
      });
  });
});
