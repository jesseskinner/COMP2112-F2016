var App = {
    init: function() {
        // find all the <a> elements and loop over them
        document.querySelectorAll('a').forEach(link =>
            // take each link and attach a click listener to it
            link.addEventListener('click', event => {

                // prevent the default link clicking behaviour (don't change url)
                event.preventDefault()

                // instead, open a popup with the href from the <a> that was clicked
                const href = link.getAttribute('href')
                PhotoGallery.popup(href)

                console.log('link clicked')
            })
        )
    }
}
