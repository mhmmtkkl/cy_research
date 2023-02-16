import Ads from '../../pages/ads';


context('video player', () => {
  const url = 'https://www.wellplated.com/carnitas'
  const debug = '/?pbjs_debug=true'
  const ad = new Ads();

  beforeEach(() => {
    // [TODO] probably delete this don't need to specify
    cy.viewport(1280, 720)
    cy.visit(`${url}${debug}`)
  })

  it('video collapses', () => {
    ad.video().scrollIntoView({ easing: 'linear' });
    expect(ad.video).to.exist
    cy.scrollTo('center', { easing: 'linear', duration: 5000 });
    cy.wait(5000)
    // i think it waits 5 seconds for 'x' button to appear
    ad.collapseVideoCloseButton().click();
    // expect(ad.collapseVideoCloseButton).to.not.exist;
  })
})

// context('720p resolution', () => {
//   beforeEach(() => {
//     // run these tests as if in a desktop
//     // browser with a 720p monitor
//     cy.viewport(1280, 720);
//     Cypress.config('defaultCommandTimeout', 60000);
//   });

//   it('user verify video is collapsing', function () {
//     cy.visit('https://www.wellplated.com/carnitas/');
//     const ad = new Ads();
//     const under_the_video = ad.element_under_the_video();
//     cy.scrollTo('bottom');
//     const closeButton = ad.collapseVideoCloseButton();
//     cy.wait(20000);
//     closeButton.click();
//     closeButton.should('not.be.visible');
//   });

//   it('user verify able to click on the next button', function () {
//     cy.visit('https://www.wellplated.com/carnitas/');
//     const ad = new Ads();
//     ad.stickyVideo().then(($element) => {
//       cy.wrap($element).scrollIntoView();
//     });
//     cy.wait(0);
//     const video_src_before_next_button = ad
//       .video_change_src()
//       .invoke('attr', 'src');
//     const next_button = ad.video_next_button();
//     next_button.click();
//     cy.wait(10000);
//     const video_src_after_next_button = ad
//       .video_change_src()
//       .invoke('attr', 'src');

//     if (video_src_before_next_button === video_src_after_next_button) {
//       cy.log('NOOOOOT  working as expected');
//       assert.fail;
//     } else {
//       cy.log('working as expected');
//     }
//   });

//   it('user verify able to click on the stay button', function () {
//     cy.visit('https://www.wellplated.com/carnitas/');
//     const ad = new Ads();
//     ad.stickyVideo().then(($element) => {
//       cy.wrap($element).scrollIntoView();
//     });
//     const video_src_before_next_button = ad
//       .video_change_src()
//       .invoke('attr', 'src');
//     const stay_button = ad.video_stay_button();
//     stay_button.click();
//     const video_src_after_next_button = ad
//       .video_change_src()
//       .invoke('attr', 'src');
//     cy.log('hello world');
//     cy.log(JSON.stringify(video_src_before_next_button));
//     cy.log(JSON.stringify(video_src_after_next_button));
//     if (video_src_before_next_button === video_src_after_next_button) {
//       cy.log('NOOOOOT  working as expected');
//       assert.fail;
//     } else {
//       cy.log('working as expected');
//     }
//     // expect(video_src_before_next_button).equal(video_src_after_next_button)
//   });

//   it('user verify video location', function () {
//     cy.visit('https://www.wellplated.com/carnitas/');
//     const ad = new Ads();
//     const under_the_video = ad.element_under_the_video();
//     cy.scrollTo('bottom');
//     const closeButton = ad.collapseVideoCloseButton();

//     cy.get(
//       "div[class='adthrive-player-position adthrive-player-without-wrapper-text adthrive-collapse-float adthrive-collapse-bottom-right adthrive-collapse-medium']",
//     ).should('have.css', 'right', '5px');
//   });

//   it.only('user verify stop the video', function () {
//     cy.visit('https://www.wellplated.com/carnitas/');
//     const ad = new Ads();
//     const under_the_video = ad.element_under_the_video();
//     cy.wait(10000);

//     cy.get('video')
//       .should('have.prop', 'paused', true)
//       .and('have.prop', 'ended', false)
//       .then(($video) => {
//         $video[0].play();
//       });

//     cy.get('video', { timeout: 90000 }).should('have.prop', 'ended', true);
//   });
// });

// // .should('have.class', 'jwplayer jw-reset jw-state-paused jw-stretch-uniform jw-flag-aspect-mode jw-breakpoint-4 jw-floating-dismissible jw-flag-user-inactive', true)

// // function getOffset(el) {
// //   const rect = el.getBoundingClientRect();
// //   return {
// //     left: rect.left + window.scrollX,
// //     top: rect.top + window.scrollY
// //   };
// // }
