// Scope es el conjunto de variables y funciones que podemos llamar en una parte del código
// - Si definimos una variable en el scope global (window en el navegador) podemos acceder a ella dentro de cualquier lugar del código.
// - Si definimos una variable dentro de una función solo lo podemos utilizar dentro de esa función si lo declaramos con var, 
// - si lo declaramos con let solo podemos acceder a ella en el bloque de código.

// Concatenaciones: `${asi}`

//Operaciones con arrays: 

function suma(...numeros){
    console.log(numeros)
    //Método reduce para arrays: acumula, recibe como parametos(total,valorActual,index,array itself)
    numeros.reduce(function (acum,numero) {
        acum += numero
        return acum
    }, 0)
    return acum
}

suma(4, 8, 12, 8954, 7)

// Método reduce para arrays: arrow function
const euros = [30, 41, 46];
const acumu = euros.reduce((valorAnterior, valorActual) => valorAnterior + valorActual); 
console.log(acumu)

// Método reduce para arrays: arrow functions recibiendo valor inicial
const dollars = [110, 421, 436];
const sum = dollars.reduce((valorAnterior, valorActual) => {
    return valorAnterior + valorActual
},0);
console.log(sum)

//Método reduce de arrays: concat un array de arrays.
const data = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
const flat = data.reduce((total, amount) => {
  return total.concat(amount);
}, []);
console.log(flat)


// Método map: recorrer todas las posiciones del arreglo.
function dobles(...numeros) {
    return numeros.map(function(numero){
        return numero * 2
    })
}
dobles(5,6)


// Método map: arrow function
const dobles = (...numeros) => numeros.map(numero => numero * 2)
dobles(3,4)

// Método filter: arrow function
const pares = (...numeros) => numeros.filter(numero => numero % 2 == 0)
pares(5,6,4,2)