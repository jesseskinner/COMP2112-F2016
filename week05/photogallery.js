var PhotoGallery = {
    popup: function (url) {
        const body = document.querySelector('body')

        // create a popup container <div>
        const popup = Util.createAndAppend('div', body)
        popup.setAttribute('class', 'popup')

        // create the image <img>
        const img = Util.createAndAppend('img', popup)
        img.setAttribute('src', url)

        // add a close <button>
        const close = Util.createAndAppend('button', popup)
        close.appendChild(document.createTextNode('Close'))

        // remove the popup when the close button is clicked
        close.addEventListener('click', event =>
            body.removeChild(popup)
        )

        // or, we could remove when anything in the popup is clicked
        popup.addEventListener('click', event => {
            if (popup.parentElement) {
                body.removeChild(popup)
            }
        })
    }
}
