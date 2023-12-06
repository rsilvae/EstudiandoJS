// funciones puras

// side efffects que hacen que una funcion deje de ser pura
// 1. modificar valriables globales
// 2. modificar parametros
// 3. solicitudes http
// 4. imprimir mensajes en panatalla o consola
// 5. manipulacion del DOM 
// 6. obtener hora actual

// estructura de una funcion pura

function sum (a,b){
    return a+b
}
// estructura de una funcion impura
function sum (a,b){
    console.log('A: ',a)
    return a+b
}

let total = 0 
function sumWithSideEffect (a) {
    total += a
    return total
}
//funcion pura
function square (x) {
    return x*x
}

function addTen (y) {
    return y+10
}
const number = 5 
const finalResult = addTen(square(number))
console.log(finalResult)