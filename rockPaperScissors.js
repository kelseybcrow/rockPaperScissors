const getUserChoice = (userInput) => {
    userInput = userInput.toLowerCase()
    if (
        userInput === 'rock' ||
        userInput === 'scissors' ||
        userInput === 'paper' ||
        userInput === 'bomb'
    ) {
        return userInput
    } else {
        console.log('Error!')
    }
}

// console.log(getUserChoice('rock'))
// console.log(getUserChoice('Rock'))
// console.log(getUserChoice('hello'))

const getComputerChoice = () => {
    const randomNumber = Math.floor(Math.random() * 3)

    switch (randomNumber) {
        case 0:
            return 'rock'
            break
        case 1:
            return 'paper'
            break
        case 2:
            return 'scissors'
            break
    }

    return randomNumber
}

// console.log(getComputerChoice())
// console.log(getComputerChoice())
// console.log(getComputerChoice())

const determineWinner = (userChoice, computerChoice) => {
    if (userChoice === 'bomb') {
        return 'You have won!'
    }
    if (userChoice === computerChoice) {
        return 'The game was a tie!'
    }
    if (userChoice === 'rock') {
        if (computerChoice === 'paper') {
            return 'The computer has won!'
        } else {
            return 'You have won!'
        }
    }
    if (userChoice === 'paper') {
        if (computerChoice === 'scissors') {
            return 'The computer has won!'
        } else {
            return 'You have won!'
        }
    }
    if (userChoice === 'scissors') {
        if (computerChoice === 'rock') {
            return 'The computer has won!'
        } else {
            return 'You have won!'
        }
    }
}

// console.log(determineWinner('paper', 'scissors'))
// console.log(determineWinner('paper', 'paper'))
// console.log(determineWinner('paper', 'rock'))

const playGame = () => {
    const userChoice = getUserChoice('rock')
    const computerChoice = getComputerChoice()
    console.log(
        `You threw: '${userChoice}' and the computer threw: '${computerChoice}'`
    )
    console.log(determineWinner(userChoice, computerChoice))
}

playGame()
