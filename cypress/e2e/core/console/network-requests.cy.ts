context('network request', () => {
  let browserName = Cypress.browser.name
  it(`request for ads.min.js status is 200 OK in ${browserName} browser`, () => {
    cy.intercept({
      method: 'GET',
      pathname: '/sites/**/ads.min.js',
    }).as('ads');
    cy.visit(`${Cypress.env('desktopUrl')}?${Cypress.env('pluginHash')}`);
    cy.wait('@ads').then(({ response }) => {
      expect(response.statusCode).to.be.oneOf([200, 304]);
    });
  });

  it(`request for prebid.min.js status is 200 OK in ${browserName} browser`, () => {
    cy.intercept({
      method: 'GET',
      pathname: '**/prebid/**/prebid.min.js',
    }).as('prebid');
    cy.visit(`${Cypress.env('desktopUrl')}?${Cypress.env('pluginHash')}`);
    cy.wait('@prebid').then(({ response }) => {
      expect(response.statusCode).to.be.oneOf([200, 304]);
    });
  });
});
