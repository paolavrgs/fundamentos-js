var signo = prompt('¿Cuál es tu signo?')

function conocerSigno(signo) {
  switch (signo.toLowerCase()) {
    case 'aries':
      return 'eres aries'
      break
    case 'tauro':
      return 'eres bonito'
      break
    case 'geminis':
      return 'eres bonito'
      break
    case 'cancer':
      return 'eres bonito'
      break
    case 'leo':
      return 'leo leo leee leo leo laaa'
      break
    case 'virgo':
      return 'eres bonito'
      break
    case 'libra':
      return 'te amo bae'
      break
    case 'escorpio':
      return 'eres bonito'
      break
    case 'sagitario':
      return 'eres bonito'
      break
    case 'capricornio':
      return 'eres bonito'
      break
    case 'acuario':
      return 'eres feo'
      break
    case 'piscis':
      return 'eres bonito'
      break
    default:
      return 'Equivocado'
      break
  }
}

$('.signo').append(signo)
$('.horoscopo').append(conocerSigno(signo))
