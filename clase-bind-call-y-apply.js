const owner = 'Lucy'
const address = 'mi casa'
function dogGreeting(owner,address){
    console.log(`Hi, i'm ${this.dogName} y vivo con ${owner} en ${address}`)
}
const newhouse = {
    dogName: 'coconut'
}


dogGreeting.call(newhouse,owner,address)

const necessaryValues = [owner,address]
dogGreeting.apply(newhouse,necessaryValues)

const bidingWithBind = dogGreeting.bind(newhouse,owner,address)
bidingWithBind()