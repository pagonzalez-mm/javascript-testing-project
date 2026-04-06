import { listaFormulario } from "../../pages/pomTODOMVC.JS";

describe("PRIMERA PARTE: Prueba de pagina de tabla de tareas:", () => { 
    //ARRANGE
    beforeEach(() => {
        cy.visit(Cypress.env("TODO_MVC_URL"));
    });

  

    it("debe agregar y tachar las 4 primeras tareas usando POM", () => { 
        cy.log("agregar tareas") 
        const misTareas = ["1) lavar trastes", "2) lavar ropa", "3) lavar carro", "4) ordenar cuarto", "5) barrer sala"];
        listaFormulario.agregarTareas(misTareas);

        cy.log("tachar")  

        listaFormulario.tacharElementos(0);
        listaFormulario.tacharElementos(1);
        listaFormulario.tacharElementos(2);
        listaFormulario.tacharElementos(3);
    //ACT
        cy.get("#root > footer > ul > li:nth-child(2) > a").click();    //activas
        cy.get("#root > footer > ul > li:nth-child(3) > a").click();    //completadas
        cy.get("#root > footer > ul > li:nth-child(1) > a").click();    //todas

        cy.get(".clear-completed").click();                             //clear completed

    });




    it("SEGUNDA PARTE: debe recargar la página y verificar que la tarea 5 persiste", () => {
    //ASSERT
    // 1. Recargar la página
    cy.reload();

    // 2. Verificar que la quinta tarea (índice 4) sigue ahí
    listaFormulario.verificarTareaVisible(4, "5) barrer la sala");
    
});



});

//se uso pom para minimizar el codigo y hacerlo mas controlable desde el archivo pages

//verificamos 2 pruebas con 1) la listas agregandose, cumpliendo todos sus botones 

//2) de la pagina recargandose y da error esto es lo que se esperaba ya que cuando se recarga no da resultado
