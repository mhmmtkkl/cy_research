import Ads from '../../pages/ads';
import iframes from '../../utilities/iframes';


context('Core testing ads display', () => {
  beforeEach(() => {
    cy.viewport(1280, 720);
    Cypress.config('defaultCommandTimeout', 50000);
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

  it('Verify ads are refreshing after 30 seconds', () => {
    cy.visit('https://www.wellplated.com/carnitas/')
    const frame = new iframes();
    const ad = new Ads();
    cy.scrollTo('bottom');
    
    ad.pop_up_close_button().click()
    

    cy.get('div[id="AdThrive_Footer_1_desktop"]').invoke('attr', 'data-google-query-id').then((attr1)=>{
      
      cy.wait(30000)
      cy.get('div[id="AdThrive_Footer_1_desktop"]').invoke('attr', 'data-google-query-id').then((attr2)=>{
        
        expect(attr1).to.not.equal(attr2)
      })
    });

  })
});
