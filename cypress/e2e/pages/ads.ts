class Ads {
  allAdds() {
    let totalCount;
    cy.get("div[class*='adthrive-ad adthrive-content']").then((value) => {
      totalCount = Cypress.$(value).length;
      cy.log(totalCount);
      cy.log(totalCount);
    });
    // Can we check the Iframe in the slot it would be more reliable test.
    return cy.get("div[class*='adthrive-ad adthrive-content']");
  }

  footerElement() {
    return cy.get("div[id='AdThrive_Footer_1_desktop']");
  }

  sideBarElement() {
    return cy.get("//div[contains(@class,'adthrive-ad adthrive-sidebar')]");
  }

  element_under_the_video() {
    return cy.xpath(
      "(//div[contains(@id,'cls-video-container')]/following-sibling::p)[2]",
    );
    // return cy.get("div[class='GoogleActiveViewClass GoogleActiveViewElement']")
  }
  video() {
    return cy.get("div[id='adthrive-contextual-container']");
  }
  stickyVideo() {
    return cy.get("div[class='adthrive']");
  }

  collapseVideoCloseButton() {
    return cy.get("div[id='adthrive-collapse-close']");
  }

  video_next_button() {
    return cy.get("div[id='next-video']");
  }

  video_stay_button() {
    return cy.get("div[id='stay-video']");
  }

  video_change_src() {
    return cy.get("div[class='jw-media jw-reset']>video");
  }

  newsletterCloseBtn() {
    return cy.get("button[class^='CloseButton__ButtonElement']>svg");
  }
}

export default Ads;
