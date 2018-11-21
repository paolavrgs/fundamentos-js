//Herencia prototipal, no existe herencia de clases como tal
function Person(name, lastName, height) {
  this.name = name
  this.lastName = lastName
  this.height = height
}

Person.prototype.saludar = function () {
  console.log(`Hola, me llamo ${this.name} ${this.lastName}`)
}

Person.prototype.soyAlto = function () {
  return this.height >= 1.8
}

var paola = new Person('Paola', 'Vargas', '1.58')
var tonito = new Person('Tigre', 'Toñito', '1.82')