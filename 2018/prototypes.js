function Person(name, lastName, height) {
  this.name = name
  this.lastName = lastName
  this.height = height
}

Person.prototype.saludar = function () {
  console.log(`Hola, me llamo ${this.name} ${this.lastName}`)
  if ( this.height >= 180 ) {
    console.log(`Soy ${this.name} y soy alto`)
  } else {
    console.log('No soy alto')
  }
}
var paola = new Person('Paola', 'Vargas', '158')
var eileen = new Person('Eileen', 'Vargas', '157')
var david = new Person('David', 'Germán', '185')
var tonito = new Person('Tigre', 'Toñito', '180')

paola.saludar()
eileen.saludar()
david.saludar()
tonito.saludar()
