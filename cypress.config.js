
const { defineConfig } = require("cypress");

module.exports = defineConfig({
  
  e2e: {
    baseUrl:"https://the-internet.herokuapp.com",       //base
    video: false,
    retries: {
      runMode: 2,
      openMode: 0
    },
    env: {        //sitios web
      TODO_MVC_URL:"https://todomvc.com/examples/react/dist/",
      SHOP_URL:"http://www.automationpractice.pl",
      API_JSON:"https://jsonplaceholder.typicode.com",
      API_SWAPI:"https://swapi.dev/api"
    },
    reporter: "mochawesome",
    reporterOptions: {
      reportDir: "cypress/reports/json",
      overwrite: false,
      html: false,
      json: true 
    }
  }
});
