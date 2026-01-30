
/// <reference types="cypress" />   
//para que el codigo se autocomplete y evitar errores

describe('API - StarWar', () => {
  //ARRANGE
  const baseUrl=Cypress.env("API_SWAPI");
  const basStar="/people/1";
  const urlCompleta=`${baseUrl}${basStar}`;

    const datos = {
    height: "172",
    mass: "77",
    eye_color: "blue"
    };

it("primera prueba de star war",()=>{

  //ACT
  cy.request("GET",urlCompleta).then((respuesta)=>{

  //ASSERT
    expect(respuesta.status).to.eq(200);
    expect(respuesta.body.name).to.eq("Luke Skywalker");
    expect(respuesta.body).to.be.an("object");
  //ASSERT
    expect(respuesta.body).to.include({
      height:datos.height,
      mass:datos.mass,
      eye_color:datos.eye_color
    })

  })



})



});
