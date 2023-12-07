const personalizedMessage = () => 'Goodbye everybody !'
function Rocket (name,ownMessage) {
    this.name = name
    this.launchMessage = ()=> ownMessage
}
const falcon9Rocket = new Rocket('falcon 9',personalizedMessage)
const falconHeavyRocket = new Rocket('falcon 9',personalizedMessage)
console.log(falcon9Rocket.name)
console.log(falcon9Rocket.launchMessage())
const RocketWithArrowFunction = (name,ownMessage) => ({
    name: name,
    launchMessage: ownMessage

})

const personalizedMessageForArrowFunction = ()=> 'Success'
const falcon9Rocket1 = RocketWithArrowFunction('Falcon 9',personalizedMessage)
console.group(falcon9Rocket1.name)
console.group(falcon9Rocket1.launchMessage())