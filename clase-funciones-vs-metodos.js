// capacidades que tienen las funciones al igual que los objetos

// 1 pasar funciones como argumentos --> callback

// function a () {}
// function b (a) {}
// b(a)

// retornar funciones

// function a () {
//     function b () {
//         return b
//     }
// }

// asignar funciones a variables --> expresion de funciones

// const a = function () {} 


// tener propiedades y metodos

// function a () {}
// const obj = {}
// a.call(obj)

// // anidar funciones  -> nested functions

// function a () {
//     function b () {
//         function c () {
        
//         }
//         c()
//     }
 
//     b()
// }
// a()

// es posibvle almacenar funciones en objetos?

const rocket = {
    name: 'Falcon 9',
    launchMessage: function launchMessage () {
        console.log("launched")
    }
}

rocket.launchMessage()