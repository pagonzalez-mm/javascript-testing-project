//Un Smoke Test es una suite muy corta
//  de pruebas que valida lo 
// mínimo crítico para saber si el sistema “está vivo” y se puede seguir testeando.




/// <reference types="cypress" />

describe('SMOKE', () => {

  it('SMOKE WEB - Debe cargar la página de login', () => {
    const urlcompleta= ('/');
    cy.request('GET', urlcompleta).then((resp) => {
    expect(resp.status).to.eq(200);
  });

  it('SMOKE API - GET /posts debe responder 200', () => {
    const apiBase = Cypress.env('API_JSON');
    const url = `${apiBase}/posts`;
    cy.request('GET', url).then((resp) => {
      expect(resp.status).to.eq(200);
    });
  });

});

})



//pruebas rapidas para asegurar que no este fallando la conexion 
