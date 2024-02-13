const computerChoiceDisplay = document.getElementById('computer-choice');
const usersChoiceDisplay = document.getElementById('users-choice');
const resultDisplay = document.getElementById('result');
const possibleChoices = document.querySelectorAll('button')
const secondpossibleChoices = ['rock', 'paper', 'scissors']

let usersChoice
let computerChoice
let result

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
    console.log(possibleChoice)
    usersChoice = e.target.id
    console.log(usersChoice)
    usersChoiceDisplay.innerHTML = usersChoice
    generateComputerChoice()
    generateResults()
    })

)

function generateComputerChoice() {
    const randomNumber = Math.floor(Math.random() * possibleChoices.length)
    console.log('Number:', randomNumber)
    
    if (randomNumber === 0) {
        computerChoice = secondpossibleChoices[Math.floor(Math.random() * possibleChoices.length)]
    }
    if (randomNumber === 1) {
        computerChoice = 'rock'
    }

    if (randomNumber === 2) {
        computerChoice = 'scissors'
    }

    if (randomNumber === 3) {
        computerChoice = 'paper'
    }
    console.log(computerChoice)
    computerChoiceDisplay.innerHTML = computerChoice
}

function generateResults() {
    if (computerChoice === usersChoice) {
        result = "It's a tie!"
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
    console.log('Result: ', result)
}