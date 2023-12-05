// Creacion de string 
const primeraOpcion = 'Comillas Simples'
const segundaOpcion = "Comillas Simples"
const terceraOpcion = `Comillas Simples`

//Concatenacion: Opcion +
const direccion = "calle 13"
const ciudad = 'springfield'
const direccionCompleta = 'Mi direccion Completa'+direccion+ciudad
console.log(direccionCompleta)

const direccionCompletaConEspacio = 'Mi derecion completa es '+ direccion + ' ' + ciudad
console.log(direccionCompletaConEspacio)

const nombre = 'Estefany'
const pais = "colombia"
const presentacion = `Hola, soy ${nombre} de ${pais}`
const primeraParte = 'Me encanta'
const segundaParte = 'la gente de'
const terceraParte = 'Mexico'
const pensamiento = [primeraParte,segundaParte,terceraParte]
console.log(pensamiento.join(' '))

//concatenacion: concat()

const hobbie1 = 'correr'
const hobbie2 = 'leer'
const hobbie3 = 'estudiar'
const hobbies = 'mis hobbies son '.concat(hobbie1,', ',hobbie2,', ',hobbie3)
console.log(hobbies)

//Caracteres de escape

// const whatDoIDo = 'i'm a Software Ingenieer'
// 1 escape alternativo
const escapeAlternativo = "I'm a Software Ingenieer"

// 2 barra invertida
const barraInvertida = 'I\'m a Software Ingenieer'

// 2 template literals

const escapeComillaInvertida = `I'm Software Ingenieer`

/*
    las rosas son rojas,
    las violetas son azules,
    caracter inesperado,
    en la linea 86.
*/
const poema = 'Las rosas son rojas, \n'+
'las violetas son azules,\n'+
'caracter inesperado,\n'+
'en la linea 86.\n'
console.log(poema)
const poema2 =   'Las rosas son rojas, \n\
las violetas son azules,\n\
caracter inesperado,\n\
en la linea 86.'
console.log(poema2)
const poema3 =   `Las rosas son rojas,
las violetas son azules,
caracter inesperado,
en la linea 86.`
console.log(poema3)