/*
const myName = "jesper"


function myFunction(enText, enSiffra) {
    return enText + enSiffra
}



const myArrowFunction = (text, siffra) => {
    console.log("text från min arrow function")
}





const myArray = [1, 2, 3]

myArray.forEach((number, index, array) => {
    if(number === 2) {
        myArray.push('nallebjörn')
    }

    console.log(number)
    console.log(index)
    console.log(array)
    console.log('--------')
})





console.log(add(5, 10))

class Person {
    constructor(name, age) {
        this.name = name
        this.age = age
    }
}

const person = new Person("jesper", 34)

console.log(person)
*/

const add = (x, y) => {
    return x + y
}


const title = document.querySelector(`#title`)
const paragraph = document.querySelectorAll('.text')
const button = document.querySelector('button')
const buttonFive = document.querySelector('.five')

let colorNumber = 0

button.addEventListener('click', (event) => {
    colorNumber = add(1, colorNumber)
    
    title.innerText = colorNumber
    console.log(event)
})

buttonFive.addEventListener('click', (event) => {
    colorNumber = add(5, colorNumber)
    
    title.innerText = colorNumber
})

document.addEventListener('keydown', (event) => {
    console.log(event)

    if(event.key === 'w') {
        console.log('walk forward')
    }
})
