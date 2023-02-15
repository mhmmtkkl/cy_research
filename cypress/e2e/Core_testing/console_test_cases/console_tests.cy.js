// Questions 
 // can we access to the browser console. 

import console_data from '../../utilities/console_data.js' 



// const config: Config = {
// consoleMessages: ['foo', /^some bar-regex.*/],
// consoleTypes: ['error', 'warn', 'info'],
// debug: false,
// };

context('720p resolution', () => {
    beforeEach(() => {
      // run these tests as if in a desktop
      // browser with a 720p monitor
    //   cy.viewport(1280, 720)
      Cypress.config('defaultCommandTimeout', 30000);
    })

    // Cypress.on('window:before:load', (win) => {
    //     cy.stub(win.console, "error").as("errors")
    //     cy.stub(win.console, "warn").as("warnings")
        

    //     })
    
    // var spy1;
    // var spy2;
    
    // beforeEach(() => {
    //     cy.window().then((win) => {
    //         spy1 = cy.spy(win.console, "error");
    //         spy2 = cy.spy(win.console, "warn");
    //     });    
    // });
    

    // Cypress.on(`window:before:load`, win => {

    //     cy.stub( win.console, `error`, msg => {
    //         // log to Terminal
    //         cy.now(`task`, `error`, msg );
    //         // log to Command Log & fail the test
    //         cy.log("-123123123------------")
    //         cy.log(msg)
    //     });
    // });
    

    // it('verify there is no any unexpected errors/warnings' , ()=> {
        
    //     // cy.visit('https://www.wellplated.com/carnitas/?pbjs_debug=true', {
    //     //     onBeforeLoad(win) {
    //     //       cy.stub(win.console, 'warn').as('consoleLog')
    //     //       cy.stub(win.console, 'error').as('consoleError')
    //     //     }
    //     //   })

    //     cy.visit('https://www.wellplated.com/carnitas/?pbjs_debug=true')
    //     cy.wait(10000)
    //     cy.log("-----------")

          
    //     //   const ele = findConsoleMessageIncluded('Prebid').getConfig()
    //     //   cy.log(ele)        
        
        
    //     // WARNING: Number of user syncs exceeded for "pubm_ss"
    // })

    // this is working yay. 
    // We need change 
    // expect(String(arg)).to.not.contain('Prebid')
    // "Prebid" to text which we dont want to see in the console. 
    it.only('verify there is no any unexpected errors/warnings' , ()=> {
        cy.visit('https://www.wellplated.com/carnitas/?pbjs_debug=true')
            cy.window()
        .its('console')
        .then((console) => {
            cy.spy(console, 'log').as('log')
        })
        // perform some action or give app time to
        // do its thing that might log an error message
        cy.wait(1000)
        // check the logs by going through all recorded calls
        cy.get('@log')
        .invoke('getCalls')
        .then((calls) => {
            // open the DevTools to see the dumped table
            console.table(calls)
        })
        // cy.each can work with an array of objects
        .each((call) => {
            // inspect each console.log argument
            call.args.forEach((arg) => {
            expect(String(arg)).to.not.contain('Prebid')
            })
        })
    })


    // console diff browser. 
    // are we able to write a data in the console. 

    // can we write the code with typescript.



   



    it('verify there is no any unexpected errors/warnings' , ()=> {
        cy.visit('https://www.wellplated.com/carnitas/?pbjs_debug=true')
        cy.wait(5000)
        cy.window().its('console').then((console) => {
            cy.stub(console, 'warn').callsFake((...args) => {
            args.forEach((arg) => {
                cy.log("arg12345")
                cy.log(arg)
                expect(arg).to.contain('to not include error')
            })
            // all is good, call the original log method
            console.log.wrappedMethod(...args)
            })
        })
        // perform some action or give app time to
        // do its thing that might log an error message
        cy.wait(1000)
    })

    // it('verify there is no any unexpected errors/warnings' , function() {

    //     cy.visit('https://www.wellplated.com/carnitas/?pbjs_debug=true', {
    //         onLoad(win) {
                
    //           cy.stub(win.console, 'log').as('consoleLog')
    //           cy.stub(win.console, 'error').as('consoleError')
    //         }
    //       })
          
    //       cy.log("---------------------------------")
    //       cy.log(cy.get('@consoleLog'))
    //       cy.log("---------------------------------")
    //       cy.log(cy.get('@consoleError'))
    //       cy.log("---------------------------------")

    // })

}) 




// Cypress.Commands.addAll({
//     getConsoleMessages: () => cy.wrap(getConfig().consoleMessages),
//     setConsoleMessages: (consoleMessages: (string | RegExp)[]) => 
//         setConfig({ ...getConfig(), consoleMessages });

//     })