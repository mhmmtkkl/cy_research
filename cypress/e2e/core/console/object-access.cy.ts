// note that this section is to check if we are able to access and test with the adthrive object
// current tests aren't core and wip
context('console object logs', () => {
  var browserName = Cypress.browser.name
  beforeEach(() => {
    cy.visit(
      `${Cypress.env('desktopUrl')}?${Cypress.env('debugMode')}&${Cypress.env(
        'pluginHash',
      )}`,
    );
  });

  it(`adDensityEnabled is true in ${browserName} browser`, () => {
    cy.window()
      .its('adthrive')
      .then((adthrive) => {
        let siteAds = adthrive.siteAds;

        cy.log('leaving this in so you can see the obj', siteAds);
        expect(siteAds.adDensityEnabled).to.be.eql(true);
      });
  });
});
