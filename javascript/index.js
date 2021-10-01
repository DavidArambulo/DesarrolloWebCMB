// EL SIGUIENTE BLOQUE DE CODIGO ES PARA TRAER UN JSON EXTERNOS

// Esta URL la saque de aqui: https://myjson.dit.upm.es/1i9k es una página que nos permite publicar nuestro JSON
const recetasURL = 'http://myjson.dit.upm.es/api/bins/1i9k'

// Inicializo la variable antes para no tener errores en el codigo 
let recetas = []

// Fetch lo que hace es traer la data de una API (piensen una API como una especie de base de datos en la nube)
fetch(recetasURL)
    // then lo que hace es esperar a que haga la conexion con la API y cuando lo hace ejecuta una funcion
    .then(function (respuesta) {
        return respuesta.json()
    })
    // Este then espera a que termine de ejecutarse el then anterior y guarda la data en la variable
    .then(function (data) {
        recetas = data
    })

