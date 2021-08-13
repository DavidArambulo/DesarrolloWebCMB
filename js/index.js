console.log('Entre en el archivo');

// VARIABLES
let nombreDeLaVariable;
let nombreDeOtraVariable = 0;

// CONSTANTES

const constante = 0;

// ---- METODOS UTILES ----

let inputUsuario = prompt('ingrese su Nombre: '); // prompt pide el ingreso de datos al usuario

// EJEMPLO IF
if (inputUsuario === 'David'){
    alert('Hola ' + inputUsuario + '!'); // alert muestra por pantalla una cuadro de dialogo al usuario

} else if (inputUsuario === 'tomi spuch') {
    alert('Sos feo no me hables');

} else {
    alert('hola humano')
}


// BUCLES FOR y WHILE. MINI REPASO ARRAYS

let arrayEdades = [16, 18, 20, 50, 30]
// Indices          0,  1,  2,  3,  4


// EJEMPLO FOR
for (let i = 2; i < arrayEdades.length; i++) { // i++ es lo mismo que  i = i + 1
    console.log(arrayEdades[i])
}


// EJEMPLO WHILE
let i = 0; // Inicializo el indice (i) a 0
let numeroMayor = arrayEdades[i]; // Inicializo numeroMayor y le asigno el primer valor del arrayEdades

// Este while va a recorrer el arrayEdades y va a escribir en consola el numero, 
// hasta que encuentre alguno que no sea menor que 0 o hasta que se llegue al final del array
while (i < arrayEdades.length && numeroMayor < 40){

    console.log(arrayEdades[i] + ' es menor que 40');
    
    i++ ; // sumo 1 al indice

    // Pregunto si el numeroMayor es menor que el numero actual del arrayEdades,
    // de ser asi le cambio el valor al numeroMayor
    if (numeroMayor < arrayEdades[i]){ 
        numeroMayor = arrayEdades[i]
    }
}


// EJEMPLO SWITCH
let inputNumero = parseInt(prompt('Escribe un numero'))

switch (inputNumero) {
    case 1:
        console.log('sos lo mas')
        break;

    case 2:
        console.log('sos lo menos')
        break;

    case 5:
        console.log('sos lo raro')
        break;

    case 6:
        console.log('sos lo especial')
        break;

    case 10:
        console.log('sos lo unico')
        break;

    default:
        console.log('no se que sos')
        break;
}