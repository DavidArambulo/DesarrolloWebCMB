// CREO UN ARRAY DE PRODUCTOS
const productos = [
    {
        id: 1,
        nombre: "producto 1",
        precio: 99,
        stock: 5
    },
    {
        id: 2,
        nombre: "producto 2",
        precio: 1245,
        stock: 5
    },
    {
        id: 3,
        nombre: "producto 3",
        precio: 4543,
        stock: 5
    },
    {
        id: 4,
        nombre: "producto 4",
        precio: 1002,
        stock: 5
    },
    {
        id: 5,
        nombre: "producto 5",
        precio: 56000,
        stock: 5
    }
];

console.log(productos);

for (let i = 0; i < productos.length ; i++){
    console.log(productos[i].nombre);
}

productos.forEach( producto => {
    console.log(producto.id)
});

const listaProductos = document.getElementById('lista-productos')

listaProductos.innerHTML = '';

for (let i = 0; i < productos.length ; i++){
    listaProductos.innerHTML += `
    <li id='producto${productos[i].id}'>
        <h2>${productos[i].nombre}</h2>
        <p class='precio'>${productos[i].precio}</p>
        <p>En stock ${productos[i].stock}</p>
    </li>`
}


//listaProductos.innerHTML = '<li><h2>'+ productos[0].nombre +'</h2></li>' MUY FEO MUY MAL NO LO HAGAN