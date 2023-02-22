class IFrames {
    getIframeDocument(){
        return cy
        .get('div[id="AdThrive_Footer_1_desktop"] iframe')
        .its('0.contentDocument').should('exist');
    }
    
    getIframeBody(){
        return this.getIframeDocument().its('body').should('not.be.undefined').then(cy.wrap);
    }

    frameAttribute(){
        
        return this.getIframeBody().find('div[class="GoogleActiveViewInnerContainer"]')
            .invoke('attr', 'data-google-av-cxn');
    }
}

export default IFrames;
