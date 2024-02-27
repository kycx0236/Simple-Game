const grid = document.querySelector('.grid')
const resultsDisplay = document.querySelector('.results')
let currentShooterIndex = 202
let width = 15
let direction = 1
let invadersID
let goingRight = true
let aliensRemove = []

for (let i=0; i < 225; i++) {
    const square = document.createElement('div')
    grid.appendChild(square)
}

const squares = Array.from(document.querySelectorAll('.grid div'))
console.log('Length of the squares', squares.length)

const alienInvaders = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39]

function drawInvaders() {
    for (let i=0; i < alienInvaders.length; i++){
        if(!aliensRemove.includes(i)){
        squares[alienInvaders[i]].classList.add('invader')}
    }

}

drawInvaders()

function removeDraw() {
    for (let i=0; i < alienInvaders.length; i++){
        squares[alienInvaders[i]].classList.remove('invader')
    }

}

squares[currentShooterIndex].classList.add('shooter')

function moveShooter(e) {
    squares[currentShooterIndex].classList.remove('shooter')
    switch (e.key) {
        case 'ArrowLeft':
            if (currentShooterIndex % width !== 0) currentShooterIndex -= 1
            break
        case 'ArrowRight':
            if (currentShooterIndex % width < width - 1) currentShooterIndex += 1
            break
    }
    squares[currentShooterIndex].classList.add('shooter')
}
document.addEventListener('keydown', moveShooter)

function moveInvaders() {
    const leftEdge = alienInvaders[0] % width === 0
    const rightEdge = alienInvaders[alienInvaders.length - 1] % width === width - 1 
    removeDraw()

    if (rightEdge && goingRight) {
        for (let i = 0; i < alienInvaders.length; i++) {
            alienInvaders[i] += width +1
            direction = -1
            goingRight = false
        }
    }

    if (leftEdge && !goingRight) {
        for (let i = 0; i < alienInvaders.length; i++) {
            alienInvaders[i] += width -1
            direction = 1
            goingRight = true
        }
    }

    for (let i=0; i < alienInvaders.length; i++) {
        alienInvaders[i] += direction
    }

    drawInvaders()

    if (squares[currentShooterIndex].classList.contains('invader', 'shooter')) {
        console.log('Game Over')
        resultsDisplay.innerHTML = 'GAME OVER'
        clearInterval(invadersID)
    }

    for (let i=0; i < alienInvaders.length; i++){
        console.log('Length of the squares', squares.length)

        if (alienInvaders[i] > squares.length) {
            resultsDisplay.innerHTML = "GAME OVER"
            clearInterval(invadersID)
        }
    }

    if (aliensRemove.length === alienInvaders.length) {
        resultsDisplay.innerHTML = "CONGRATULATIONS, YOU WON THE GAME!"
        clearInterval(invadersID)
    }
}

invadersID = setInterval(moveInvaders, 200)

function shootInvaders(e) {
    let laserID
    let currentLaserIndex = currentShooterIndex

    function moveLaser() {
        squares[currentLaserIndex].classList.remove('laser')
        currentLaserIndex -= width
        squares[currentLaserIndex].classList.add('laser')

        if (squares[currentLaserIndex].classList.contains('invader')) {
            squares[currentLaserIndex].classList.remove('laser')
            squares[currentLaserIndex].classList.remove('invader')
            squares[currentLaserIndex].classList.add('boom')

            setTimeout(()=> squares[currentLaserIndex].classList.remove('boom'), 300)
            clearInterval(laserID)

            const alienRemoved = alienInvaders.indexOf(currentLaserIndex)
            aliensRemove.push(alienRemoved)
            console.log("Removed aliens", aliensRemove)

            resultsDisplay.innerHTML = aliensRemove.length
        }

    }

    switch(e.key) {
        case 'ArrowUp':
            laserID = setInterval(moveLaser, 100)
    }
}
document.addEventListener('keydown', shootInvaders)