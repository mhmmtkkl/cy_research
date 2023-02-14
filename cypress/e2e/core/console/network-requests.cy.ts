context('network request', () => {
  const aspicyURL =
    'https://damndelicious.net/2019/04/01/honey-mustard-chicken-salad/';
  const debug = '?pbjs_debug=true';

  it('request for ads.min.js status is 200 OK', () => {
    cy.intercept({
      method: 'GET',
      pathname: '/sites/**/ads.min.js',
    }).as('ads');
    cy.visit(`${aspicyURL}${debug}`);
    cy.wait('@ads').then(({ response }) => {
      expect(response.statusCode).to.eq(200);
    });
  });

  it('request for prebid.min.js status is 200 OK', () => {
    cy.intercept({
      method: 'GET',
      pathname: '**/prebid/**/prebid.min.js',
    }).as('prebid');
    cy.visit(`${aspicyURL}${debug}`);
    cy.wait('@prebid').then(({ response }) => {
      expect(response.statusCode).to.eql(200);
    });
  });
});
