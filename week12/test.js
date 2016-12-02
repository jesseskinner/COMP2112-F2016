var getGreeting = require('./src/dependency')

if (getGreeting() !== "Hello!") {
    throw "Should return hello"
}
