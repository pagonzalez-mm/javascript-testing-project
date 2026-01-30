
// cypress/support/e2e.js

// Evita que errores JS del sitio rompan el test si no impactan el flujo
Cypress.on('uncaught:exception', (err) => {
  // Puedes aplicar filtros si quieres ignorar errores de 3rd-party
  return false; // evita que falle el test por excepciones no controladas
});

// Hook global opcional: screenshot on failure (si deseas activar video y screenshots)
/*
afterEach(function () {
  if (this.currentTest.state === 'failed') {
    cy.screenshot(`FAILED_${this.currentTest.title}`);
  }
});
*/
