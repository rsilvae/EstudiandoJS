// Social Media Profile

// 1 user information

const username = 'codingAdventurer'
const fullname = 'Jhon Doe'
const age = 25
const isStudent = true

// 2 address
const address= {
    street: '123 Main Street',
    city: 'techville',
    state:'Codingland',
    zipcode:1100000
}
// 3 hobbies
const hobbies = ['Coding','Reading','Gaming']

// 4 Generating personalized bio

const personalizedBio = `hi, i'm ${fullname}
I'm ${address.city}.
I love ${hobbies.join(', ')}.
Follow me for coding adventures`

// print the user profile and bio
console.log(personalizedBio)