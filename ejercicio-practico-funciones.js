// create powerfuffgirl objets

function powerfuffgirl (name,color,superpower){
    this.name= name
    this.color= color
    this.superpower = superpower
    this.isLeader=false
    this.displayInfo = function () {
        console.log(`Pwerpuff Girl Information:
        Name: ${this.name}
        Color: ${this.color}
        Superpower: ${this.superpower}
        ${this.isLeader ? 'Is the leader':'Is not the leader'}
        `)
    }
    this.becomeLeader  = function (){
        this.isLeader=true
        console.log(`${this.name} has become the leader of the team`)
    }
}
const blossom = new powerfuffgirl('Blossom','Pink','Ice Breath')
const buttercup = new powerfuffgirl('Buttercup','Green','Super Strength')
const bubbles = new powerfuffgirl('Bubbles','Blue','Flight')

blossom.displayInfo()
buttercup.displayInfo()
bubbles.displayInfo()

blossom.becomeLeader()

blossom.displayInfo()
buttercup.displayInfo()
bubbles.displayInfo()