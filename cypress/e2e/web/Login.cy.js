describe('Login a https://the-internet.herokuapp.com/', () => {


  beforeEach(() => {
    cy.visit('/'); 
  });

  it('Login válido', () => {

  //ARRANGE
    const username = 'admin';
    const password = 'admin';

  //ACT
    cy.get("#content > ul > li:nth-child(3) > a").click
    cy.visit('https://admin:admin@the-internet.herokuapp.com/basic_auth')
  
  //ASSET
    cy.get('p').should('contain', 'Congratulations! You must have the proper credentials.')
    cy.log("validando la url");
    cy.url().should('include', '/basic_auth');

  });

  it('Login incorrecto con otra clave', () => {
  //ARRANGE
    const username = 'admin';
    const noPassword = 'noadmin';

  cy.visit('https://admin:noadmin@the-internet.herokuapp.com/basic_auth')
  //ACT
   cy.get('p').should('contain', 'Congratulations! You must have the proper credentials.')
    cy.log("validando la url");
  //ASSET
    cy.url().should('include', '/basic_auth');
  });
});

//esta prueba usamos config para guardar la url base

//validamos dos escenarios el del login funcionando y el del login sin funcionar
