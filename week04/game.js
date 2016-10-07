// get the window size
var width = window.innerWidth
var height = window.innerHeight

// get the canvas, set it to the window size
var canvas = document.querySelector('canvas')
canvas.width = width
canvas.height = height
canvas.style.background = 'black'

// get the canvas' 2d context so we can draw
var context = canvas.getContext('2d')

// these variables will contain all of our game state and assets (images, sounds, etc.)
var mario = document.createElement('img'),
    marioRatio = null,
    marioX = width / 12,
    marioY = height / 3,
    left = false,
    right = false,
    speed = width / 130

// wait for mario.png to load
// this has to come before you set src!!
// otherwise it won't fire if you have the image cached
mario.addEventListener('load', function () {
    marioRatio = mario.width / mario.height
})

// now we start loading mario.png
mario.setAttribute('src', 'mario.png')

// listen for arrow keys being pressed
document.addEventListener('keydown', function(event) {
    var key = event.keyCode

    if (key === 37) {
        left = true

    } else if (key === 39) {
        right = true
    }
})

// listen for key pressing to stop
document.addEventListener('keyup', function(event) {
    var key = event.keyCode

    if (key === 37) {
        left = false // moving LEFT

    } else if (key === 39) {
        right = false // moving RIGHT
    }
})

// this is where we change our variables to move things around
function update() {
    if (left) {
        marioX = marioX - speed
    }
    if (right) {
        marioX = marioX + speed
    }
}

// this is where we use our variables to draw a picture
function draw() {
    context.clearRect(0, 0, width, height)

    if (marioRatio) {
        // scale mario to be 1/4 the height of the screen
        context.drawImage(mario, marioX, marioY, marioRatio * height / 4,  height / 4)
    }
}

function loop() {
    update()
    draw()

    requestAnimationFrame(loop)
}

loop()
