function showName (firstName, lastName) {
    var nameIntro = "Your name is ";

    // Closure es una funcion interna y tiene acceso a las variables de la funcion externa
    // y a sus parametros. 
    function makeFullName () {        
        return nameIntro + firstName + " " + lastName;    
    }

    return makeFullName ();
}

showName ("Paola", "Vargas");


//Generar Prefijo
function preFixer(prefix) {
    return function nose(word) {
        console.log(`${prefix}${word}`)
    }
}
const addPrefixer = preFixer('re');
addPrefixer('bueno');

//Generar prefijo => Arrow function
const preFixer = (prefix) => (word) => console.log(`${prefix}${word}`)

const addPrefixRe = preFixer("re")
const addPrefixAnti = preFixer("anti")

addPrefixRe("bueno")
addPrefixAnti("bueno")