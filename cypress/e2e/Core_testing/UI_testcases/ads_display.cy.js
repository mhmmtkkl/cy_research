import ads from '../../page_object_model/ads.js' 

context('720p resolution', () => {
  beforeEach(() => {
    // run these tests as if in a desktop
    // browser with a 720p monitor
    cy.viewport(1280, 720)
    Cypress.config('defaultCommandTimeout', 90000);
  })

it.only('user verify ads are displaying' , function() {
    cy.visit('https://www.wellplated.com/carnitas/?pbjs_debug=true')
    const ad = new ads();
    const allads = ad.allAdds()
    // length is changing for each page.
    // Instead of using hard code ad count we need to get the current page ad count from API. 
    // Instead of checking the excact number of length we can check the some range of the ads between 3 - 10 ads like this. 
    // Make sure one ad is filling.  
    allads.should('be.visible')
})

it('user verify footer is displaying' , function() {
  cy.visit('https://www.wellplated.com/carnitas/?pbjs_debug=true')
  const ad = new ads();
  const allads = ad.footerElement()
  allads.should('be.visible').and('have.length',1)
})
})