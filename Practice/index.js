
//!Intro
/*
const name = 'Anthony'
const age = 30
const isTall = false
const KB = null
const futuro = undefined
let x

//concatenation
console.log('My name is ' + name + ' I am ' + age + ' years of age')

//template string
const hello = `My name is ${name} and I am ${age} years old`

console.log(hello)

console.log(hello.length)

console.log(hello.toUpperCase())
console.log(hello.substring(3, 7).toUpperCase())

const color = 'red, blue, green'

console.log(color.split(','))

*/

//! Array
/*
const fruits = ['apple', 'orange', 'stawberry']
fruits[3] = 'grapes'
fruits.push('banana')
fruits.unshift('mangoes')
fruits.pop()
console.log(fruits)
console.log(Array.isArray(fruits))
console.log(fruits.indexOf('grapes')) */

//!Object literals
/*
const person = {
    firstName : 'Anthony',
    lastName : 'Alabado',
    age : 21,
    hobbies: ['coding', 'reading', 'running'],
    address: {
        purok : 'CdA',
        municipality : 'RTLim',
        province : 'ZSP'
    }
}

person.email = 'yahoo'

console.log(person)

console.log(person.firstName, person.lastName)
console.log(person.hobbies[1])
console.log(person.address.municipality)

const {firstName, lastName, address: {municipality}} = person

console.log(municipality)*/

//! Arrays of Objects
/*
const todos = [
    {
        id: 1,
        text: 'Eat',
        isCompleted: true
    }, 
    {
        id: 2,
        text: 'Code',
        isCompleted: true
    },
    {
        id: 3,
        text: 'Sleep',
        isCompleted: false
    }, 
]
console.log(todos)

const todosJSON = JSON.stringify(todos)

console.log(todosJSON)*/

for(let i =0; i<10; i++){
    console.log(`Number ${i}`)
}

let i = 0
while (i<=12){
    console.log(`Number ${i}`)

    i++
}


