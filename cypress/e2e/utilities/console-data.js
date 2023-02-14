class ConsoleData {
  get_console_error() {
    cy.log('in the method');
    console.defaultWarn = console.warn.bind(console);
    console.warns = [];
    console.warn = function () {
      // default &  console.warn()
      console.defaultWarn.apply(console, arguments);
      // new & array data
      console.warns.push(Array.from(arguments));
    };
    cy.log('print in the method');
    cy.log(console.warns);
  }
}

export default ConsoleData;
