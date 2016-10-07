var Util = {
    createAndAppend: function (type, parent) {
        var element = document.createElement(type)
        parent.appendChild(element)
        return element
    }
}
