import { VideoPlayer } from 'cypress/e2e/pages/VideoPlayer';
import Ads from '../../pages/ads';

context('video player', () => {
  const url = 'https://www.wellplated.com/carnitas';
  const debug = '/?pbjs_debug=true';
  const videoPlayer = new VideoPlayer();
  const ads = new Ads();

  beforeEach(() => {
    cy.visit(`${url}${debug}`);
    Cypress.config('defaultCommandTimeout', 60000);
  });

  it('user can close collapsed video', () => {
    videoPlayer.video().scrollIntoView({ easing: 'linear' });
    videoPlayer.video().should('exist');
    cy.scrollTo('bottom', { easing: 'linear' });
    ads.newsletterCloseBtn().click();
    videoPlayer.collapsedVideoCloseBtn().click();
    videoPlayer.collapsedVideoCloseBtn().then((res) => {
      expect(res).to.not.be.visible;
    });
  });

  it('collpased video is in correct bottom right position', () => {
    videoPlayer.video().scrollIntoView({ easing: 'linear' });
    expect(videoPlayer.video()).to.exist;
    cy.scrollTo('bottom', { easing: 'linear' });
    ads.newsletterCloseBtn().click();
    cy.wait(3000);
    videoPlayer.video().then((res) => {
      let offset = res.offset();
      let bottom = offset.top + res.outerHeight();
      let right = offset.left + res.outerWidth();

      videoPlayer.footer().then((res) => {
        bottom += res.outerHeight();
        cy.window().then((win) => {
          let bodyHeight = win.document.body.scrollHeight;
          let bodyWidth = win.document.body.scrollWidth;
          expect(bottom).to.be.within(bodyHeight * 0.97, bodyHeight);
          expect(right).to.be.within(bodyWidth * 0.97, bodyWidth);
        });
      });
    });
  });

  it('"Next" button changes video', () => {
    videoPlayer.video().scrollIntoView();
    videoPlayer.video().should((res) => {
      expect(res.attr('src')).to.not.be.empty;
    });
    videoPlayer
      .video()
      .invoke('attr', 'src')
      .then((initial) => {
        videoPlayer.nextBtn().click();
        videoPlayer
          .video()
          .invoke('attr', 'src')
          .then((updated) => {
            expect(initial).to.not.be.eql(updated);
          });
      });
  });

  it('"Stay" button keeps same video', () => {
    videoPlayer.video().scrollIntoView();
    videoPlayer.video().should((res) => {
      expect(res.attr('src')).to.not.be.empty;
    });
    videoPlayer
      .video()
      .invoke('attr', 'src')
      .then((initial) => {
        videoPlayer.stayBtn().click();
        videoPlayer
          .video()
          .invoke('attr', 'src')
          .then((updated) => {
            expect(initial).to.be.eql(updated);
          });
      });
  });
});
