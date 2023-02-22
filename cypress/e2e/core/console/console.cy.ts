import ConsoleData from '../../utilities/console-data';

// const config: Config = {
// consoleMessages: ['foo', /^some bar-regex.*/],
// consoleTypes: ['error', 'warn', 'info'],
// debug: false,
// };
const aspicyURL =
    'https://damndelicious.net/2019/04/01/honey-mustard-chicken-salad/';
  const debug = '?pbjs_debug=true';

context('Desktop console test cases', () => {
  beforeEach(() => {
    Cypress.config('defaultCommandTimeout', 30000);
  });

  it.only('verify there is no any unexpected errors/warnings', () => {
    cy.visit(`${aspicyURL}${debug}`);
    cy.window()
      .its('console')
      .then((console) => {
        cy.stub(console, 'error').callsFake((...args) => {
          args.forEach((arg) => {
            cy.log('arg12345');
            cy.log(arg);
            expect(arg).to.not.contain('to not include error');
          });
        });
      });
  });
});
