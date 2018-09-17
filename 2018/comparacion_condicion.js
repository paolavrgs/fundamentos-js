var caterina = {
  name: 'Caterina',
  lastName: 'Santomauro',
  age: 1,
  engineer: false,
  student: false,
  baby: true,
  singer: true
}

function whoIs(obj) {
  var { 
    name,
    engineer,
    student,
    baby,
    singer
  } = obj
  console.log(`${name} es:`)
  //console.log(`${name} ${ engineer ? 'es ingeniero' : 'no es ingeniero' }`)

  if (engineer) {
    console.log('Ingeniero')
  }
  
  if (student) {
    console.log('Estudiante')
  }

  if (baby) {
    console.log('Una bebé')
  }

  if (singer) {
    console.log('Cantante')
  }
}

whoIs(caterina)


//Desafío: Imprimir quién es mayor o menor de edad
var norma = {
  name: 'Norma',
  lastName: 'Medina',
  age: '57'
}

var jeannett = {
  name: 'Jeannett',
  lastName: 'Gonzalez',
  age: '41'
}

var mary = {
  name: 'Marianyela',
  lastName: 'Santomauro',
  age: '13'
}

function whoIsAdult(obj) {
  var { name, age } = obj

  /* if (age >= 18) {
    console.log(`${name} es Mayor de Edad`)
  } else {
    console.log(`${name} es Menor de Edad`)
  } */

  console.log(`${name} es ${ age >= 18 ? 'Mayor' : 'Menor' } de edad`)
}

whoIsAdult(jeannett)
whoIsAdult(mary)
whoIsAdult(norma)


//Funciones que retornan valores
var paola = {
  name: 'Paola',
  age: 21
}

// function adult(persona) {
//   return persona.age >= 18
// }

const adult = (persona) => ( persona.age >= 18 )
// const adult = persona => persona.age >= 18

function printWhoIsAdult(obj) {
  var { name } = obj

  // if (adult(obj)) {
  //   console.log(`${name} es Mayor de Edad`)
  // } else {
  //   console.log(`${name} es Menor de Edad`)
  // }

  console.log(`${name} es ${ adult(obj) ? 'Mayor' : 'Menor' } de edad`)
}

printWhoIsAdult(paola)