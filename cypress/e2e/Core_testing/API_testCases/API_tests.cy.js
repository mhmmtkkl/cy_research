import ads from '../../page_object_model/ads.js' 
// import config from './config.json'


context('720p resolution', () => {
  beforeEach(() => {
    // run these tests as if in a desktop
    // browser with a 720p monitor
    cy.viewport(1280, 720)
    Cypress.config('defaultCommandTimeout', 60000);
  })

it('verify ads.min and prebid.min API are getting called and response status is 200' , function() {
    // cy.visit('https://damndelicious.net/2022/08/05/weeknight-lemon-chicken-breasts/?pbjs_debug=true')
    cy.request( "GET", 
                "https://ads.adthrive.com/sites/52e41fac28963d1e058a110e/ads.min.js?referrer=https%3A%2F%2Fdamndelicious.net%2F2022%2F08%2F05%2Fweeknight-lemon-chicken-breasts%2F&cb=41").then((response) => {
                expect(response.status).to.eq(200);
      }).as('details')
      cy.get('@details').then((response)=>{
        cy.log(JSON.stringify(response.body))
      })

      cy.request("GET", "https://ads.adthrive.com/builds/core/d13c9c3/vendor/prebid/es2018/prebid.min.js").then((response) => {
        expect(response.status).to.eq(200);
      })

    })
    it.only('response header' , function() {
        // cy.visit('https://damndelicious.net/2022/08/05/weeknight-lemon-chicken-breasts/?pbjs_debug=true')
        cy.request( "GET", 
                    "https://ads.adthrive.com/sites/52e41fac28963d1e058a110e/ads.min.js?referrer=https%3A%2F%2Fdamndelicious.net%2F2022%2F08%2F05%2Fweeknight-lemon-chicken-breasts%2F&cb=41").then((response) => {
                    expect(response.status).to.eq(200);
          }).as('details')
          cy.get('@details').then((response)=>{
            cy.log(JSON.stringify(response))
          })
    
          cy.request("GET", "https://ads.adthrive.com/builds/core/d13c9c3/vendor/prebid/es2018/prebid.min.js").then((response) => {
            expect(response.status).to.eq(200);
          })
    
        })
    
})