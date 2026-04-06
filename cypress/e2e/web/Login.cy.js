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
  //1. lo tenemos que hacer asi ya que la identificacion tiene un popup y no es parte del DOM no se maneja con cy.get
  //1. cypress no puede escribir ahi entonces colocamos los datos en la URL
    cy.visit('https://admin:admin@the-internet.herokuapp.com/basic_auth')
  
  //ASSET
  //QUE SALGA EL TEXTO
    cy.get('p').should('contain', 'Congratulations! You must have the proper credentials.')
    cy.log("validando la url");
  //URL CON ESTA DIRECCION
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
