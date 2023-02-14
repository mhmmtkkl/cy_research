import Ads from '../../pages/ads';

context('720p resolution', () => {
  beforeEach(() => {
    // run these tests as if in a desktop
    // browser with a 720p monitor
    cy.viewport(1280, 720);
    Cypress.config('defaultCommandTimeout', 30000);
  });

  it('user verify ads are displaying', function () {
    cy.visit('https://www.wellplated.com/carnitas/');
    const ad = new Ads();
    const allads = ad.allAdds();
    // length is changing for each page.
    // Instead of using hard code ad count we need to get the current page ad count from API.
    // Instead of checking the excact number of length we can check the some range of the ads between 3 - 10 ads like this.
    // Make sure one ad is filling.
    allads.should('be.visible').and('have.length', 14);
  });

  it('user verify footer is displaying', function () {
    cy.visit('https://www.wellplated.com/carnitas/');
    const ad = new Ads();
    const allads = ad.footerElement();
    allads.should('be.visible').and('have.length', 1);
  });
});
