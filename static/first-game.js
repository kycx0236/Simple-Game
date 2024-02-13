const computerChoiceDisplay = document.getElementById('computer-choice');
const usersChoiceDisplay = document.getElementById('users-choice');
const resultDisplay = document.getElementById('result');
const possibleChoices = document.querySelectorAll('button')

let usersChoice
let computerChoice
let result

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
    usersChoice = e.target.id
    console.log(usersChoice)
    usersChoiceDisplay.innerHTML = usersChoice
    generateComputerChoice()
    generateResults()
    })

)

function generateComputerChoice() {
    const randomNumber = Math.floor(Math.random() * possibleChoices.length)
    console.log(randomNumber)

    if (randomNumber === 1) {
        computerChoice = 'rock'
    }

    if (randomNumber === 2) {
        computerChoice = 'scissors'
    }

    if (randomNumber === 3) {
        computerChoice = 'paper'
    }

    computerChoiceDisplay.innerHTML = computerChoice
}

function generateResults() {
    if (computerChoice === usersChoice) {
        result = "It's a tie!"
        resultDisplay.innerHTML = result
    }

    if (computerChoice === "rock" && usersChoice === "paper") {
        result = "Player wins!"
    }

    if (computerChoice === "rock" && usersChoice === "scissors") {
        result = "Computer wins!"
    }

    if (computerChoice === "paper" && usersChoice === "scissors") {
        result = "Player wins!"
    }

    if (computerChoice === "paper" && usersChoice === "rock") {
        result = "Computer wins!"
    }

    if (computerChoice === "scissors" && usersChoice === "paper") {
        result = "Computer wins!"
    }

    if (computerChoice === "scissors" && usersChoice === "rock") {
        result = "Player wins!"
    }
    resultDisplay.innerHTML = result
}