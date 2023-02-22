import Ads from '../../pages/ads';
import iframes from '../../utilities/iframes.ts';

context('Core testing ads display', () => {
  beforeEach(() => {
    cy.viewport(1280, 720);
    Cypress.config('defaultCommandTimeout', 30000);
  });

  it('user verify all the content ads are displaying', function () {
    cy.visit('https://www.wellplated.com/carnitas/');
    const ad = new Ads();
    const allads = ad.all_content_adds();
    allads.should('be.visible');

  });

  it('user verify footer is displaying', function () {
    cy.visit('https://www.wellplated.com/carnitas/');
    const ad = new Ads();
    const allads = ad.footer_element();
    allads.should('be.visible').and('have.length', 1);
  });

  it.only('gets the post', () => {
    cy.visit('https://www.wellplated.com/carnitas/')
    const frame = new iframes();
    // getIframeBody().find('#GoogleActiveViewElement').should('have.text', 'Try it').click()

    const attr = frame.getIframeBody().find('#GoogleActiveViewElement')..invoke('attr', 'data-google-av-cxn')
    
    cy.log("attr")
    cy.log(attr)
    cy.log(attr)
    cy.wait(20000)
    // getIframeBody().find('#`result`').should('include.text', '"delectus aut autem"')
  })
});
