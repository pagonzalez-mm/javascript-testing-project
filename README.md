# PROYECTO-TEST — API Testing con Cypress (JavaScript Avanzado)
## --------------------------ARCHIVOS PROBADOS API:-------------------------------------------------------


## (1) Api /api/respuestaServidor.cy.js  //extraemos la url del cypress.config.js

## ▶️ Archivo probado: `/api/respuestaServidor.cy.js`
Este proyecto implementa pruebas automatizadas **API** usando **Cypress**, siguiendo el patrón **AAA** y buenas prácticas de automatización. Se prueban endpoints públicos reales como **JSONPlaceholder**.
### ✔ Validaciones incluidas: **Esta prueba pasa correcta**
- Verificamos una direccion y vemos que contiene un arrays or json
- Verificamos el status code:200 que es OK
- Verificamos que sea un json
- Verificamos que contengo 100 elementos json
- Verificamos que el primer json tenga las siguientes llaves
- La segunda prueba agregamos con el metodo Post un nuevo json
- Verificamos el status
- Que la respuesta contenga lo que mandamos
- Tambien que el json contenga un id
- Verificamos que el con un Get el Post   <-----ERROR!!!!!!!!!!!!!!!!!!!!!!!!!!!!!..


## (2) Api /api/StarWarApi.cy.js  //extraemos la url del cypress.config.js


## ▶️ Archivo probado: `/api/StarWarApi.cy.js`
Este módulo contiene pruebas API contra el endpoint público de **https://swapi.dev/api** utilizando **Cypress**, aplicando el patrón **AAA** (Arrange – Act – Assert) y validaciones con Chai.
### ✔ Validaciones incluidas: **Esta prueba pasa correcta**
- Verificamos el status code:200 que es OK
- Validación del campo name sea → debe ser “Luke Skywalker”
- Validar que el body sea un objeto
- Verificar campos específicos:
  - `height`
  - `mass`
  - `eye_color`

## Tecnologías utilizadas

JavaScript (Node.js) **Lenguaje:**
Cypress **Framework de pruebas:**
Chai (incluido en Cypress) **Aserciones:**
AAA (Arrange / Act / Assert) **Patrón:**

##  Comandos

npm init -y **Para iniciar nuesto package.json**
npm install cypress --save-dev **intalamos las dependencias de cypress**

## Ejecutar Cypress en consola 

npx cypress run **todas las pruebas**
npx cypress run --spec "cypress/e2e/api/respuestaServidor.cy.js" **solo la el archivo que necesitemos probar**
npx cypress run --spec "cypress/e2e/api/starWarApi.cy.js" **solo la el archivo que necesitemos probar**

## Ejecutar Cypress en la interfaz (modo interactivo)

npx cypress open

## Estructura de los proyectos

cypress/
  e2e/
    api/
    respuestaServidor.cy.js
    starWarApi.cy.js



# PROYECTO-TEST — Web Testing con Cypress (JavaScript Avanzado)
## --------------------------ARCHIVOS PROBADOS WEB:-------------------------------------------------------
Este proyecto implementa pruebas automatizadas  **WEB** usando **Cypress**, siguiendo el patrón **AAA (Arrange / Act / Assert)** y buenas prácticas de  automatización.


## (3) WEB /web/BuscarTest.cy.js   //PROBLEMAS NO SE CONSIGUE RESPUESTA !!!!!!

## ▶️ Archivo probado: `/web/BuscarTest.cy.js`

Se haran pruebas reales en **http://www.automationpractice.pl**
Este módulo valida la funcionalidad de **búsqueda de productos** en la tienda online.

### ✔ Validaciones incluidas: **Esta prueba pasa correcta**
- Ingresar el texto *dress*
- Hacer clic en el botón de búsqueda
- Validar que **NO** aparezca “0 results”
- Validar que existan elementos listados

### ✔ Validaciones incluidas: **Esta prueba debe fallar**  
- Validar que todos los resultados contengan “dress”  
- Buscar “dress”
- Validar cada `.product-name`
- Afirmar que todos contengan “dress”


## (3) WEB /web/Login.cy.js     //USAMOS UN HOOK: beforeEach  y la url esta en cypress.config.js

## ▶️ Archivo probado: `/web/Login.cy.js`

 Las pruebas se ejecutan contra el sitio de autenticación básica: **https://the-internet.herokuapp.com/basic_auth**
Este módulo valida el comportamiento del **login con autenticación básica (Basic Auth)** tanto para credenciales correctas como incorrectas.

### ✔ Validaciones incluidas: **Esta prueba pasa correcta**
- Login válido (credenciales correctas)
- Ingresar **usuario correcto** → `admin`  
- Ingresar **contraseña correcta** → `admin`
- Hacer clic en el enlace hacia “Basic Auth”
- Validar texto esperado:  **"Congratulations! You must have the proper credentials."**
- Validar que la URL contenga:  **"/basic_auth"**

### ✔ Validaciones incluidas: **Esta prueba debe fallar**  

- Login inválido (credenciales incorrectas)
- Ingresar **usuario incorrecto**
- Ingresar **contraseña incorrecta**
- Ingresar nuevamente a `/basic_auth`
- Validar que el sistema muestre el mensaje de error: **"Congratulations! You must have the proper credentials."**  
  (mensaje por defecto del sitio ante fallo de autenticación)
- Validar que la URL contenga: **"/basic_auth"**


## (3) WEB /web/PruebaTestDOMMVC.cy.js   // USAMOS UN POM (PAGE OBJECT MODEL) Y UN HOOK = beforeEach

## ▶️ Archivo probado: `/web/PruebaTestDOMMVC.cy.js`

Las pruebas se ejecutan contra el sitio de **"https://todomvc.com/examples/react/dist/"**
Este módulo valida la funcionalidad de **agregar tareas, completar tareas y verificar persistencia al recargar la página**.

### ✔ Validaciones incluidas: **Esta prueba pasa correcta**

**Agregar y marcar tareas como completadas**
- Ingresar una lista de tareas en el campo principal
- Añadir múltiples elementos usando `.each()`
- Confirmar que las tareas se agregaron correctamente a la lista
- Marcar tareas como:
  - activas  
  - completadas  
  - restantes  
- Confirmar visualmente que Cypress interactúa con:
  - casilla completa  
  - filtros (All / Active / Completed)
- Guardar los cambios al hacer clic fuera del input o presionar ENTER
- Validar que el contador de tareas se actualice


### ✔ Validaciones incluidas: **Esta prueba pasa correcta**

- Recargar la página
- Confirmar que **las tareas previamente creadas SE MANTIENEN**
- Confirmar que el estado de cada tarea sigue igual después del reload
  (ejemplo: “lavar ropa”, “barrer la sala” deben seguir apareciendo)

# Tecnologías utilizadas

- **JavaScript (Node.js)**
- **Cypress** – framework de pruebas
- **Chai** – librería de aserciones
- **AAA (Arrange / Act / Assert)** – patrón usado en cada prueba

##  Comandos

npm init -y **Para iniciar nuesto package.json**
npm install cypress --save-dev **intalamos las dependencias de cypress**

## Ejecutar Cypress en consola 

npx cypress run **todas las pruebas**
npx cypress run --spec "cypress/e2e/api/BuscarTest.cy.js" **solo la el archivo que necesitemos probar**
npx cypress run --spec "cypress/e2e/api/Login.cy.js" **solo la el archivo que necesitemos probar**
npx cypress run --spec "cypress/e2e/api/PruebasTODOMVC.cy.js" **solo la el archivo que necesitemos probar**

## Ejecutar Cypress en la interfaz (modo interactivo)

npx cypress open

## Estructura de los proyectos

cypress/
  e2e/
    web/
    BuscarTest.cy.js
    Login.cy.js
    PruebasEnTODOMVC.cy.js

## Como crear un repositorio

PASO 1: Inicializar Git 
git init

PASO 2: Agregar archivos
git add .

PASO 3: Crear un commit
git commit -m "primer commit proyecto testing"
Guarda una “foto” de tu proyecto
Con un mensaje descriptivo

PASO 4: Renombra la rama a main
git branch -M main

PASO 5: Crear repo en GitHub 
New repository
Nombre: "nombre"

PASO 6: Conectar tu proyecto con GitHub
git remote add origin https://github.com/TU_USUARIO/"nombre".git

PASO 7: Subir el código
git push -u origin main
Crea la rama main

🔥 RESULTADO
https://github.com/TU_USUARIO/"nombre"
