const recetas = [
    {
        id: 0,
        nombre: 'receta0',
        preparacion: 'preparacion',
        ingredientes: ['ingrediente1', 'ingrediente2']
    },
    {
        id: 1,
        nombre: 'receta1',
        preparacion: 'preparacion',
        ingredientes: ['ingrediente1', 'ingrediente2']
    },
    {
        id: 2,
        nombre: 'receta2',
        preparacion: 'preparacion',
        ingredientes: ['ingrediente1', 'ingrediente2']
    },
    {
        id: 3,
        nombre: 'receta3',
        preparacion: 'preparacion',
        ingredientes: ['ingrediente1', 'ingrediente2']
    },
]

const catalogoRecetas = document.getElementById('catalogo-de-recetas')
const btnMostrar = document.getElementById('btn-mostrar')
const btnBorrar = document.getElementById('btn-borrar')
const btnToggle = document.getElementById('btn-toggle')

//console.log(catalogoRecetas)

btnMostrar.addEventListener('click', (event) => {
    event.preventDefault()
    mostrarRecetas()
})

btnBorrar.addEventListener('mouseover', function (event) {
    event.preventDefault()
    borrarRecetas()
})

let isShown = false

btnToggle.addEventListener('click', function (event){
    event.preventDefault()
    toggleRecetas()
})

// FUNCIONES

function mostrarRecetas() {
    for (let index = 0; index < recetas.length; index++) {
        catalogoRecetas.innerHTML += `
        <li class='receta'>
            <h2>${recetas[index].nombre}</h2>
            <p>${recetas[index].preparacion}</p>
        </li>`
    }
}

function borrarRecetas(){
    catalogoRecetas.innerHTML = ''
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