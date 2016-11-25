function chatbot(message) {
    if (typeof message === 'undefined') {
        return 'Hello.'
    }

    return "Sorry, I don't understand."
}

module.exports = chatbot
