/* 
 * Referencia:
 * Objeto pasado por parametro, se pasa por referencia
 * Si es modificado en una función, fuera de la función también
**/


var paola = {
  name: 'Paola',
  lastName: 'Vargas',
  age: 21
}

var sacha = {
  name: 'Sacha',
  lastName: 'Lifszyc',
  age: 20
}

function birthday(persona) {
  persona.age += 1 // Modifica la edad del objeto fuera de la función
}

birthday(paola)

function birthdayNewObject(persona) {
  var newObject = {
    ...persona,
    age: persona.age + 1
  } // Crea un nuevo objecto, con edad alterado, sólo dentro de la función
  console.log(newObject)
}

birthdayNewObject(paola)
console.log(paola)