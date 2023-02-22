class iframes {
    const getIframeDocument = () => {
        return cy
        .get('div[id="AdThrive_Footer_1_desktop"] iframe')
        .its('0.contentDocument').should('exist')
    }
    
    const getIframeBody = () => {
        cy.log("getIframeBody123")
        return this.getIframeDocument().its('body').should('not.be.undefined').then(cy.wrap)
    }

    const frame_attribute= () => {
        cy.log("frame_attribute123")
        return this.getIframeBody().find('div[class="GoogleActiveViewInnerContainer"]')
            .invoke('attr', 'data-google-av-cxn')
    }
}

export default iframes;
