var getGreeting = require('./dependency')

// says hello to someone
const hello = name => {
    const greeting = getGreeting()

    alert(`${greeting}, ${name}!`)
}

hello('Jesse');

module.exports = hello
