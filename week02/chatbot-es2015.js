// import { ajax } from 'jquery'

const notDefined = undefined;
const confusing = null;
const veryConfusing = NaN;
const variable = 1234;
let boolean = true;
boolean = false;

let string = "hello"
string = 'goodbye'

function thisIsMyFunction(ingredient = 'sugar'){
  return ingredient;
}

thisIsMyFunction("sugar")

const makeCake = (flour, sugar) => flour * 2;

makeCake("flour", "sugar")

const array = ["hi", true, 123]

const value = array[1]

const object = {
    "property": {
        "subproperty": 123
    },
    "other": true
}


let { property, other } = object
let { property: { subproperty }} = object

const promise = new Promise(function (resolve, reject) {

    // go do some ajax
    // ajax(function (data) {
    //     if (data) {
    //         resolve(data)
    //     } else {
    //         reject()
    //     }
    // })

    resolve(123)
})

promise.then(function (result) {
    console.log('i got', result)
})

promise.catch(function (error) {
    console.error('somethings wrong', error)
})

const firstName = `Jesse`
const lastName = "Skinner"

//const name = firstName + ' ' + lastName
//const name = `${firstName} ${lastName}`

const html = `
    <p>Hello, ${firstName},</p>

    <p>Goodbye, Mr. ${lastName}</p>
`

// old way
// const html =
//     "<p>Hello, " + firstName + "</p>" +
//     "<p>Goodbye, Mr. " + lastName + "</p>"

function chatbot(message) {
    if (message === undefined) {
        return "Hello."
    }

    const lowerMessage = message.toLowerCase()

    if (lowerMessage === "hi") {
        return "How are you?"
    }

    if (/thank/i.test(message)) {
        return "You're welcome."
    }

    if (/^hello/i.test(message)) {
        return "Hey."
    }

    if (/\?$/i.test(message)) {
        return "Honestly I don't know."
    }

    if (/[0-9]/.test(message)) {
        return "What's that number for?"
    }

    return "Sorry, I don't understand."
}

let botMessage, humanMessage

do {
    botMessage = chatbot(humanMessage)
    humanMessage = prompt(botMessage)

} while (humanMessage.toLowerCase() != 'bye');
