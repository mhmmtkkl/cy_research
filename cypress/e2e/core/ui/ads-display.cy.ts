import Ads from '../../pages/ads';
import iframes from '../../utilities/IFrames';


context('Core testing ads display', () => {
  beforeEach(() => {
    cy.viewport(1280, 720);
    Cypress.config('defaultCommandTimeout', 50000);
  });


  it('user verify all the content ads are displaying', function () {
    cy.visit('https://www.wellplated.com/carnitas/');
    const ad = new Ads();
    const allads = ad.allContentAdds();
    allads.should('be.visible');

  });

  it('user verify footer is displaying', function () {
    cy.visit('https://www.wellplated.com/carnitas/');
    const ad = new Ads();
    const allads = ad.footerElement();
    allads.should('be.visible').and('have.length', 1);
  });

  it('Verify ads are refreshing after 30 seconds', () => {
    cy.visit('https://www.wellplated.com/carnitas/')
    const frame = new iframes();
    const ad = new Ads();
    cy.scrollTo('bottom');
    
    ad.popUpCloseButton().click();
    

    ad.footerElement().invoke('attr', 'data-google-query-id').then((attr1)=>{
      
      cy.wait(30000)
      ad.footerElement().invoke('attr', 'data-google-query-id').then((attr2)=>{
        
        expect(attr1).to.not.equal(attr2)
      })
    });

  })
});
