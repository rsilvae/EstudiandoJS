// Enlace implicito Implicit binding
const house = {
    dogName: 'fido',
    dogGreeting: function () {
        console.log(`Hi, i'm ${this.dogName}`)
    }
}
house.dogGreeting()

function dogGreeting(){
    console.log(`Hi, i'm ${this.dogName}`)
}
const houst1 = {
    dogName:'Coco',
    dogAge:3
}
dogGreeting.call(houst1)

function newDogGreeting(owner,address){
    console.log(`Hi, i'm ${this.dogName} and i live with ${owner} on ${address}`)
}
const owner = 'lucy'
const addres = "mi casa"
newDogGreeting.call(houst1,owner,addres)