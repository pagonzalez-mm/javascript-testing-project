
/// <reference types="cypress" />    
// solo es para completado y no marque errores

describe('API - JSONPlaceholder (Posts)', () => {

  it('Primer test Get/Posts', () => {

    //ARRANGE:

    // Tomamos la URL base desde cypress.config.js (env.API_JSON)
    const baseUrl = Cypress.env('API_JSON');
    const endpoint = '/posts';
    const urlCompleta = `${baseUrl}${endpoint}`;

    //ACT

    //https://jsonplaceholder.typicode.com/posts
    // Hacemos una petición HTTP GET al endpoint /posts
    cy.request('GET', urlCompleta).then((respuesta) => {


    //ASSERT

      // 1) Verificamos código de estado HTTP
      expect(respuesta.status).to.eq(200);

      // 2) Verificamos que el body sea un arreglo
      expect(respuesta.body).to.be.an('array');

      // 3) Verificamos que tenga 100 elementos (JSONPlaceholder tiene 100 posts)
      expect(respuesta.body).to.have.length(100);

      // 4) Verificamos la estructura del primer post
      //    (que tenga: userId, id, title, body)
      expect(respuesta.body[0]).to.have.all.keys('userId', 'id', 'title', 'body');

    });
  });




it('POST /posts - prueba 2', () => {

  //ARRANGE
    const baseUrl = Cypress.env('API_JSON');
    const endpoint = '/posts';
    const urlCompleta = `${baseUrl}${endpoint}`;

  // Body que vamos a enviar en el POST
  const dato = {
    title: 'Post de prueba - Pablo',
    body: 'Este es un post creado desde Cypress',
    userId: 10,
  };

  //ACT
  // En Cypress, para POST podemos pasar: método, url, body
  cy.request('POST', urlCompleta, dato).then((respuesta) => {

  
  //ASSERT
    // 1) Status esperado: 201 (Created)
    expect(respuesta.status).to.eq(201);

    // 2) La respuesta debe contener lo que enviamos
    expect(respuesta.body).to.include({
      title: dato.title,
      body: dato.body,
      userId: dato.userId,
    });

    // 3) Debe existir un id en la respuesta
    expect(respuesta.body).to.have.property('id');
    expect(respuesta.body.id).to.be.a('number'); // opcional (bonus)
  });
});


});


//verificamos una direccion y vemos que contiene un arrays or json
//verificamos el status code:200 que es OK
//verificamos que sea un json
//verificamos que contengo 100 elementos json
//verificamos que el primer json tenga las siguientes llaves

//la segunda prueba agregamos con el metodo Post un nuevo json
//verificamos el status
//que la respuesta contenga lo que mandamos
//y que el json contenga un id



