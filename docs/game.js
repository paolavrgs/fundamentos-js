// DOM elements
const blue = $('#blue')
const purple = $('#purple')
const orange = $('#orange')
const green = $('#green')
const btnStart = $('#btnStart')
const lastLevel = 10

// Clase Game, donde estará toda la logica del programa.
class Game {
  constructor() {
    // Ejecutar funciones
    this.init = this.init.bind(this)
    this.init()
    this.sequence()
    setTimeout(this.nextLevel, 500)
  }

  init() {
    this.chooseColor = this.chooseColor.bind(this)
    this.nextLevel = this.nextLevel.bind(this)
    btnStart.toggleClass('hide') // Se oculta el botón al comenzar el juego
    this.level = 1 // se inicializa el nivel en 1
    this.colors = {
      blue,
      purple,
      orange,
      green
    }
  }

  sequence() { // Secuencia de numeros aleatorios en un arreglo. 
    this.sequence = new Array(lastLevel).fill(0).map(n => Math.floor(Math.random() * 4)) //Math.random() * 4 retornará valores decimales hasta el 4, nunca llegando a este. Se utilizar Math.floor para redonder hacia abajo y obtener numeros enteros. 0,1,2,3 (ya que tenemos cuatro colores)
    console.log(this.sequence)
  }

  nextLevel() {
    this.sublevel = 0
    this.glowSequence()
    this.addClickEvents()
  }

  numberToColor(num) {
    switch(num) {
      case 0: 
        return 'blue'
      case 1: 
        return 'purple'
      case 2: 
        return 'orange'
      case 3: 
        return 'green'
    }
  }

  colorToNumber(color) {
    switch(color) {
      case 'blue': 
        return 0
      case 'purple': 
        return 1
      case 'orange': 
        return 2
      case 'green': 
        return 3
    }
  }

  glowSequence() {
    for (let i = 0; i < this.level; i++) {
      const color = this.numberToColor(this.sequence[i])
      setTimeout(() => this.glowColor(color), 1000 * i)
    }
  }

  glowColor(color) {
    this.colors[color].addClass('light').addClass('click-shadow')
    setTimeout(() => this.duskColor(color), 350)
  }

  duskColor(color) {
    this.colors[color].removeClass('light').removeClass('click-shadow')
  }

  addClickEvents() {
    this.colors.blue.bind('click', this.chooseColor)
    this.colors.purple.bind('click', this.chooseColor)
    this.colors.orange.bind('click', this.chooseColor)
    this.colors.green.bind('click', this.chooseColor)
  }

  removeClickEvents() {
    this.colors.blue.unbind('click', this.chooseColor)
    this.colors.purple.unbind('click', this.chooseColor)
    this.colors.orange.unbind('click', this.chooseColor)
    this.colors.green.unbind('click', this.chooseColor)
  }

  chooseColor(ev) {
    const nameColor = ev.target.dataset.color
    const numColor = this.colorToNumber(nameColor)

    this.glowColor(nameColor)
    
    if ( numColor === this.sequence[this.sublevel]) {
      this.sublevel++
      if (this.sublevel === this.level) {
        this.level++
        this.removeClickEvents()

        if (this.level === ( lastLevel+1 )) {
          this.winner()
          console.log('u win')
        } else {
          setTimeout(this.nextLevel, 1500)
        }
      }
    } else {
      this.loser()
      console.log('u lose')
    }
  }

  winner() {
    swal(
      'Felicidades!',
      'Ganaste',
      'success'
    ).then(this.init)
  }

  loser() {
    swal(
      'Sigue intentando',
      'Perdiste',
      'error'
    ).then(() => {
      this.removeClickEvents()
      this.init()
    })
  }
}

function gameStart() { // Funcion que se ejecuta al dar click en el botón 'empezar'
  window.game = new Game()
}