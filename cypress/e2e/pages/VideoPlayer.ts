export class VideoPlayer {
  wrapper() {
    return cy.get("div[id='adthrive-contextual-container']");
  }

  video() {
    return cy.get("div[class='jw-media jw-reset']>video");
  }

  collapsedVideoCloseBtn() {
    return cy.get("div[id='adthrive-collapse-close']");
  }

  playBtn() {
    return cy.get("div>svg[class='jw-svg-icon jw-svg-icon-play']");
  }

  pauseBtn() {
    return cy.get("svg[class='jw-svg-icon-pause']");
  }

  nextBtn() {
    return cy.get("div[id='next-video']");
  }

  stayBtn() {
    return cy.get("div[id='stay-video']");
  }

  footer() {
    return cy.get("div[id^='AdThrive_Footer_1']");
  }
}
