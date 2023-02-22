class Ads {
  all_content_adds() {
    let totalCount;


    const all_ads = cy.get("div[class*='adthrive-ad adthrive-content'] iframe")
    cy.wrap(all_ads).should('be.gte', 1);
    return all_ads;
  }

  element_attribute(){ 
    const all_ads = cy.get("div[id='AdThrive_Content_1_desktop'] iframe")
  }
  https://tpc.googlesyndication.com/safeframe/1-0-40/js/ext.js

  
  footer_element() {
    return cy.get("div[id='AdThrive_Footer_1_desktop']");
  }
  
  side_bar_element() {
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

  sticky_video() {
    return cy.get("div[class='adthrive']");
  }

  collapse_video_close_button() {
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
