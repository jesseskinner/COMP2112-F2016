/*var notDefined = undefined;
var confusing = null;
var veryConfusing = NaN;
var variable = 1234;
var boolean = true;
boolean = false;

var string = "hello"
string = 'goodbye'

function thisIsMyFunction(ingredient){
  return cake;
}

thisIsMyFunction("sugar")

var makeCake = function (flour, sugar) {
    return flour * 2;
}

makeCake("flour", "sugar")

var array = ["hi", true, 123]

var value = array[1]

var object = {
    "property": {
        "subproperty": 123
    }
}

var property = object.property
var subproperty = property.subproperty
subproperty = object.property.subproperty

property = object["property"]
*/

function chatbot(message) {
    if (message === undefined) {
        return "Hello."
    }

    var lowerMessage = message.toLowerCase()

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

var botMessage, humanMessage

do {
    botMessage = chatbot(humanMessage)
    humanMessage = prompt(botMessage)

} while (humanMessage.toLowerCase() != 'bye');
