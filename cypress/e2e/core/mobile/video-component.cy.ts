import Ads from '../../pages/ads';

context('Mobile resolution', () => {
  beforeEach(() => {
    cy.viewport(375, 667); // Set viewport to 550px x 750px
    cy.viewport('iphone-se2'); // Set viewport to 375px x 667px
  });

  it.only('user verify video is collapsing', function () {
    cy.visit(
      'https://damndelicious.net/2022/08/05/weeknight-lemon-chicken-breasts/',
    );
    const ad = new Ads();
    const under_the_video = ad.element_under_the_video();
    cy.scrollTo('bottom');
    const closeButton = ad.collapse_video_close_button();
    cy.wait(20000);
    closeButton.click();
    closeButton.should('not.be.visible');
  });

  it('user verify able to click on the next button', function () {
    cy.visit(
      'https://damndelicious.net/2022/08/05/weeknight-lemon-chicken-breasts/',
    );
    const ad = new Ads();
    ad.sticky_video().then(($element) => {
      cy.wrap($element).scrollIntoView();
    });
    cy.wait(0);
    const video_src_before_next_button = ad
      .video_change_src()
      .invoke('attr', 'src');
    const next_button = ad.video_next_button();
    next_button.click();
    cy.wait(10000);
    const video_src_after_next_button = ad
      .video_change_src()
      .invoke('attr', 'src');

    if (video_src_before_next_button === video_src_after_next_button) {
      cy.log('NOOOOOT  working as expected');
      assert.fail;
    } else {
      cy.log('working as expected');
    }
  });

  it('user verify able to click on the stay button', function () {
    cy.visit('https://www.wellplated.com/carnitas/');
    const ad = new Ads();
    ad.sticky_video().then(($element) => {
      cy.wrap($element).scrollIntoView();
    });
    const video_src_before_next_button = ad
      .video_change_src()
      .invoke('attr', 'src');
    const stay_button = ad.video_stay_button();
    stay_button.click();
    const video_src_after_next_button = ad
      .video_change_src()
      .invoke('attr', 'src');
    cy.log('hello world');
    cy.log(JSON.stringify(video_src_before_next_button));
    cy.log(JSON.stringify(video_src_after_next_button));
    if (video_src_before_next_button === video_src_after_next_button) {
      cy.log('NOOOOOT  working as expected');
      assert.fail;
    } else {
      cy.log('working as expected');
    }
    // expect(video_src_before_next_button).equal(video_src_after_next_button)
  });

  it('user verify video location', function () {
    cy.visit('https://www.wellplated.com/carnitas/');
    const ad = new Ads();
    const under_the_video = ad.element_under_the_video();
    cy.scrollTo('bottom');
    const closeButton = ad.collapse_video_close_button();

    cy.get(
      "div[class='adthrive-player-position adthrive-player-without-wrapper-text adthrive-collapse-mobile adthrive-collapse-medium adthrive-collapse-bottom-right']",
    ).should('have.css', 'right', '10px');
  });
});
