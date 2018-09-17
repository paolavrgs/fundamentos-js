// FOR
var john = {
  nombre: 'John',
  apellido: 'Doe',
  edad: 33,
  peso: 70
}

console.log(`Al inicio de año ${john.nombre} tiene un peso de ${john.peso}`)

const CAMBIO_PESO = 0.3

const aumentaPeso = (persona) => ( persona.peso += CAMBIO_PESO )
const reducePeso = (persona) => ( persona.peso -= CAMBIO_PESO )


for (let i = 1; i <= 365; i++) {
  var random = Math.random()

  if (random < 0.25) {
    aumentaPeso(john)
  } else if (random < 0.5) {
    reducePeso(john)
  }
}

console.log(`Al final de año ${john.nombre} tiene un peso de ${john.peso}`)

// WHILE
const META = john.peso - 3
var dias = 0
const comeMucho = () => Math.random() < 0.3
const deporte = () => Math.random() < 0.4

while (john.peso > META) {
  if (comeMucho()) {
    aumentaPeso(john)
  }
  if (deporte()) {
    reducePeso(john)
  }
  dias += 1
}

console.log(`Pasaron ${dias} dias hasta que ${john.nombre} adelgazó 3kg`)

// DO WHILE
var counter = 0

const rain = () => Math.random() < 0.25

do {
  counter++
  // console.log(rain())
} while (!rain()) {
  console.log(`Fui a ver si llovía ${counter} ${ counter == 1 ? 'vez' : 'veces'}`)
}