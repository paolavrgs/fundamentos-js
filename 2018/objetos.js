
var paola = {
  name: 'Paola',
  lastName: 'Vargas',
  age: 21
}

var enma = {
  name: 'Enmanuel',
  lastName: 'Chirinos',
  age: 20
}

const putNameAge = (persona) => {
  var { name, lastName, age } = persona;
  console.log(`Hola mi nombre es ${name} ${lastName} y tengo ${age} años`)
}

putNameAge(enma)
putNameAge(paola)