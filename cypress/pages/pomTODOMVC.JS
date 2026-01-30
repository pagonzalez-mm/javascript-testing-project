class Formulario {
    elements = {
        inputLista: () => cy.get('#todo-input'),
        todoLista: () => cy.get('.todo-list li'),
        // Este es un selector interno, no necesita ser llamado desde afuera
        cadaTarea: (index) => this.elements.todoLista().eq(index).find('.toggle')
    }

    agregarTareas(tareas) {
        tareas.forEach(tarea => {
            this.elements.inputLista().type(`${tarea}{enter}`);
        });
    }

    tacharElementos(index) {
        this.elements.cadaTarea(index).click();
    }
    
    verificarTareaVisible(indice, texto) {
    this.elements.todoLista()
        .eq(indice)
        .should('be.visible')
        .and('contain', texto);
}
}
export const listaFormulario = new Formulario();