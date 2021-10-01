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

// TODAS ESTAS CONSTANTES YA NO LAS NECESITAMOS! Porque estamos usando JQuery
// const catalogoRecetas = document.getElementById('catalogo-de-recetas')
// const btnMostrar = document.getElementById('btn-mostrar')
// const btnBorrar = document.getElementById('btn-borrar')
// const btnToggle = document.getElementById('btn-toggle')


// L
$('#btn-ocultar').click( () => {
    ocultarRecetas()
})

// btnMostrar.addEventListener('click', (event) => {
//     event.preventDefault()
//     mostrarRecetas()
// })

$('#btn-mostrar').click( () => {
    mostrarRecetas()
})

// btnBorrar.addEventListener('mouseover', function (event) {
    //     event.preventDefault()
    //     borrarRecetas()
    // }

$('#btn-borrar').hover( () => {
    borrarRecetas()
})

let isShown = false

// btnToggle.addEventListener('click', function (event){
    //     event.preventDefault()
    //     toggleRecetas()
    // })

$('#btn-toggle').click( () => {
    toggleRecetas()
})

// FUNCIONES

const ocultarRecetas = () => {
    $('#catalogo-de-recetas').addClass('oculto')
}

function mostrarRecetas() {
    for (let index = 0; index < recetas.length; index++) {
        $('#catalogo-de-recetas').append(`
        <li class='receta'>
            <h2>${recetas[index].nombre}</h2>
            <p>${recetas[index].preparacion}</p>
        </li>`)
    }
}

function borrarRecetas(){
    $('#catalogo-de-recetas').empty()
}

function toggleRecetas() {
    if (isShown) {
        borrarRecetas()
        isShown = false
    } else {
        mostrarRecetas()
        isShown = true
    }
}


function hola() {
    return 'hola'
}

// let arr = [1, 2, 3]

// arr.forEach( elemento => console.log(elemento) );

const sumar = (num1, num2) => num1 + num2;

const restar = (num1, num2) => num1 - num2;

// funcion Anonima
() => console.log('hola');

const operar = (suma, resta) =>{
    console.log(suma(2, 2))
    console.log(resta(2, 2))
}

operar( sumar, restar)

let comida = true
comida ? console.log('hola') : console.log('adios')