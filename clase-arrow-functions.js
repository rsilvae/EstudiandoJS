const greeting = function (name){
    return `Hi, ${name}`
}
// Arrow function - explicit return
const newGreeting = (name) =>{
    return `Hi, ${name}`
}

// Arrow function - implicit return

const newGreetingImplicit = name => `Hi, ${name}`

const newGreetingImplicitWithTwoParameters = (name, lastname) => `Hi, i'm ${name} ${lastname}`

// lexical binding

const fictionalCharacter = {
    name:'Uncle ben',
    messageWithTraditionalFunction: function(message){
        console.log(`${this.name} says: ${message}`)
    },
    messageWithArrowFunction: function(message){
        console.log(`${this.name} says: ${message}`)
    }
}

fictionalCharacter.messageWithTraditionalFunction('With great power comes great responsability.')
fictionalCharacter.messageWithArrowFunction('Beware of dr octopus.')