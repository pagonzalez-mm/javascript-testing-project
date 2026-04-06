class Formulario {
    elements = {
        //busca el input donde se escribe una tarea
        inputLista: () => cy.get('#todo-input'),
        //busca cada tarea de la lista
        todoLista: () => cy.get('.todo-list li'),
        // Este es un selector interno, no necesita ser llamado desde afuera
        //busca cada tarea por su posicion (0),(1)
        cadaTarea: (index) => this.elements.todoLista().eq(index).find('.toggle')
    }

    //pasamos por cada tarea, toma el input, escribe el texto y presiona enter
    agregarTareas(tareas) {
        tareas.forEach(tarea => {
            this.elements.inputLista().type(`${tarea}{enter}`);
        });
    }
    //recarremos los elementos y los tachamos
    tacharElementos(index) {
        this.elements.cadaTarea(index).click();
    }
    //que se vea la tarea y que contenga un texto en nuestro caso da error porque al recargar se borra
    //indice=4
    //texto=5) barrer la sala 
    verificarTareaVisible(indice, texto) {
    this.elements.todoLista()
        .eq(indice)
        .should('be.visible')
        .and('contain', texto);
}
}
export const listaFormulario = new Formulario();