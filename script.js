console.log("hej");


// Variabeltyper
var oldVariable = 10 // vi vill inte använda var längre


let newVariable = 10
const newConstantVariable = 10

console.log(newVariable)
console.log(newConstantVariable)

newVariable = 'kökskniv'
// newConstantVariable = 'fotboll'

console.log(newVariable)
console.log(newConstantVariable)


// Datatyper

const string = 'vi kan skriva vad vi vill här'
const number = 23894
const boolean = false // true
const symbol = Symbol()
const bigint = BigInt("123456789012345678901234567890")

const array = []

const obj = {
    name: 'jesper',
    age: 34,
    favoriteFruit: 'Satsumas'
}

const und = undefined
const nullValue = null // är av typen objekt



console.log(typeof array)


// if/else

if(obj.age >= 100) {
    console.log("du är för gammal för att komma in.")
}
else if(obj.age >= 80) {
    console.log("du börjar bli lite för gammal. men du kan få komma in idag.")
}
else if(obj.age >= 20) {
    console.log("välkommen in till systembolaget!")

    // Här händer saker!

}
else {
    console.log("du är för ung för att beträda butiken.")
}

// Loopar

let looping = 100

while(looping < 100) {
    looping = looping + 1
    console.log(looping)
}

do {
    looping = looping + 1
    console.log(looping)
}while(looping < 10)



for(let i = 0, j = 90 ; i < 1 ; i++, j += 10) {
    console.log("det här händer!", i, j)
}

const fruits = ['apple', 'banana', 'kiwi', 'satsumas']

let index = 0

while(index < fruits.length) {
    console.log(fruits[index])
    index++
}

console.log('--------------------')

for(let i = 0 ; i < fruits.length ; i++) {
    console.log(fruits[i])
}

console.log('--------------------')

console.log(fruits.forEach((fruit) => {console.log(fruit)}))

console.log('texten vi vill skriva ut')




const myString = "det här är en string"


// ta bort siffran 3, 4 och 5
const myArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

console.log("min lista innan splice:", myArray)
myArray.splice(3, 3)
console.log("min lista efter splice:", myArray)
