class Ads {
  allContentAdds() {
    let totalCount;

    const allAds = cy.get("div[class*='adthrive-ad adthrive-content']").find('iframe').its('length').should('be.gte', 1)

    return cy.get("div[class*='adthrive-ad adthrive-content']");
  }

  elementAttribute(){ 
    const allAds = cy.get("div[id='AdThrive_Content_1_desktop'] iframe")
  }
  // https://tpc.googlesyndication.com/safeframe/1-0-40/js/ext.js

  
  footerElement() {
    return cy.get("div[id='AdThrive_Footer_1_desktop']");
  }
  
  sideBarElement() {
    return cy.get("//div[contains(@class,'adthrive-ad adthrive-sidebar')]");
  }

  elementUnderTheVideo() {
    return cy.xpath(
      "(//div[contains(@id,'cls-video-container')]/following-sibling::p)[2]",
    );
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

  videoNextButton() {
    return cy.get("div[id='next-video']");
  }

  videoStayButton() {
    return cy.get("div[id='stay-video']");
  }

  videoChangeSrc() {
    return cy.get("div[class='jw-media jw-reset']>video");
  }

  newsletterCloseBtn() {
    return cy.get("button[class^='CloseButton__ButtonElement']>svg");
  }

  popUpCloseButton() {
    return cy.get("button[title='Close']");
  }

  mobileVideoCollapse(){
    return cy.get(
      "div[class='adthrive-player-position adthrive-player-without-wrapper-text adthrive-collapse-mobile adthrive-collapse-medium adthrive-collapse-bottom-right']",
    )
  }
}

export default Ads;
