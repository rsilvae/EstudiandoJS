// Null

const snoopy = null

console.log(snoopy)
console.log(typeof snoopy)

//Undifined
let name 
console.log(name)

// Symbol
const uniqueId = Symbol('id')
const symbol1 = Symbol(1)
const symbol2 = Symbol(1)
console.log(symbol1 == symbol2)

const ID = Symbol('id')
let user = {}
user[ID] = '1234'
console.log(user)

// BigInt

const bigNumber = 949498695499598984984984984n
console.log(bigNumber)

const numberOfParticlesInTheUniverse = 1981978191949865164859849845n
console.log(numberOfParticlesInTheUniverse)