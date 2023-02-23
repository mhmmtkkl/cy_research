import Ads from '../../pages/ads';

context('Mobile resolution', () => {
  beforeEach(() => {
    cy.viewport(375, 667); // Set viewport to 550px x 750px
    cy.viewport('iphone-se2'); // Set viewport to 375px x 667px
  });

  it.only('user verify video is collapsing', function () {
    cy.visit(`${Cypress.env('mobileUrl')}?${Cypress.env('pluginHash')}`);
    const ad = new Ads();
    cy.scrollTo('bottom');
    const closeButton = ad.collapseVideoCloseButton();
    cy.wait(20000);
    closeButton.click();
    closeButton.should('not.be.visible');
  });

  it('user verify able to click on the next button', function () {
    cy.visit(`${Cypress.env('mobileUrl')}?${Cypress.env('pluginHash')}`);
    const ad = new Ads();
    ad.stickyVideo().then(($element) => {
      cy.wrap($element).scrollIntoView();
    });
    cy.wait(0);
    const videoSrcBeforeNextButton = ad.videoChangeSrc().invoke('attr', 'src');
    const nextButton = ad.videoNextButton();
    nextButton.click();
    cy.wait(10000);
    const videoSrcAfterNextButton = ad.videoChangeSrc().invoke('attr', 'src');

    if (videoSrcBeforeNextButton === videoSrcAfterNextButton) {
      cy.log('NOOOOOT  working as expected');
      assert.fail;
    } else {
      cy.log('working as expected');
    }
  });

  it('user verify able to click on the stay button', function () {
    cy.visit(`${Cypress.env('desktopUrl')}?${Cypress.env('pluginHash')}`);
    const ad = new Ads();
    ad.stickyVideo().then(($element) => {
      cy.wrap($element).scrollIntoView();
    });
    const videoSrcBeforeNextButton = ad.videoChangeSrc().invoke('attr', 'src');
    const stayButton = ad.videoStayButton();
    stayButton.click();
    const videoSrcAfterNextButton = ad.videoChangeSrc().invoke('attr', 'src');
    cy.log('hello world');
    cy.log(JSON.stringify(videoSrcBeforeNextButton));
    cy.log(JSON.stringify(videoSrcAfterNextButton));
    if (videoSrcBeforeNextButton === videoSrcAfterNextButton) {
      cy.log('NOOOOOT  working as expected');
      assert.fail;
    } else {
      cy.log('working as expected');
    }
  });

  it('user verify video location', function () {
    cy.visit(`${Cypress.env('desktopUrl')}?${Cypress.env('pluginHash')}`);
    const ad = new Ads();
    cy.scrollTo('bottom');
    const closeButton = ad.collapseVideoCloseButton();

    ad.mobileVideoCollapse().should('have.css', 'right', '10px');
  });
});
