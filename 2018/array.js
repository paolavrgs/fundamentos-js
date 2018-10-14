var sacha = {
  name: 'Sacha',
  lastName: 'Lifszyc',
  height: 1.72,
  books: 82
}

var alan = {
  name: 'Alan',
  lastName: 'Perez',
  height: 1.86,
  books: 12
}

var martin = {
  name: 'Martin',
  lastName: 'Gomez',
  height: 1.85,
  books: 100
}

var dario = {
  name: 'Dario',
  lastName: 'Juarez',
  height: 1.71,
  books: 54
}

var vicky = {
  name: 'Vicky',
  lastName: 'Zapata',
  height: 1.56,
  books: 20
}

var paula = {
  name: 'Paula',
  lastName: 'Barros',
  height: 1.76,
  books: 32
}

var persons = [ sacha, alan, martin, dario, vicky, paula ]

// for (let i = 0; i < persons.length; i++) {
//   var persona = persons[i]
//   console.log(`${persona.name} mide ${persona.height}`)
// }
persons.map(item => console.log(`${item.name} mide ${item.height}`))

// Filtrar un array
const tallPerson = person => person.height > 1.8
const smallPerson = ({ height }) => height < 1.8

console.log(persons.filter(tallPerson))
console.log(persons.filter(smallPerson))

// Transformar un array (.map)
const heightToCms = (person) => {
  // Modifica el array original
  // person.height *= 100
  // return person

  // Crea un nuevo array sin modificar el original
  return {
    ...person,
    height: person.height * 100
  }
}
var asd = persons.map(heightToCms)

// Reducir un array

// var acum = 0;
// for (var i= 0; i < persons.length; i++) {
//   acum = acum + persons[i].books
// }
// console.log(`En total todos tienen ${acum} libros`)

const reducer = (acum, { books }) => acum + books

var booksTotal = persons.reduce(reducer, 0)

console.log(`En total todos tienen ${booksTotal} libros`)

