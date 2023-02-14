// note that this section is to check if we are able to access and test with the adthrive object
// current tests aren't core and wip
context('console object logs', () => {
  const aspicyURL =
    'https://damndelicious.net/2019/04/01/honey-mustard-chicken-salad/';
  const debug = '?pbjs_debug=true';

  beforeEach(() => {
    cy.visit(`${aspicyURL}${debug}`);
  });

  it('adDensityEnabled is true', () => {
    cy.window()
      .its('adthrive')
      .then((adthrive) => {
        let siteAds = adthrive.siteAds;

        cy.log('leaving this in so you can see the obj', siteAds);
        expect(siteAds.adDensityEnabled).to.be.eql(true);
      });
  });
});
