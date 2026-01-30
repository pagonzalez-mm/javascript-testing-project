describe("Prueba de productos si estan en la plataforma",()=>{

    beforeEach(()=>{
    //ARRANGE
        cy.visit(Cypress.env("SHOP_URL"))
    })


    it(("prueba de la palabra dress"),()=>{                     //si da resultados con dress
        //ACT
        cy.get('#search_query_top').type("dress");
        cy.get("#searchbox > button").click();
        //ASSERT
        cy.get('.heading-counter').should('not.contain', '0 results');
    })

    it(("prueba de que todos los elementos de la busqueda dress contenga la palabra"),()=>{         //debe fallar porque hay mas resultados que no tienen dress
        //ACT
        cy.get('#search_query_top').type("dress");
        cy.get("#searchbox > button").click();
        //ASSERT
        cy.get('ul.product_list li .product-name').should('contain', 'dress');

    })

})

//la primera funciono porque da mas de un resultado

//la segunda no funciono y es lo que se esperaba ya que hay mas de un elemento que no contiene la palabra dress
