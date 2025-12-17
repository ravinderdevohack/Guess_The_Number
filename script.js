let randomGuess = parseInt(Math.random()*(100)+1)
console.log(`randon value = ${randomGuess}`)

const submit = document.querySelector('#guessSubmit')
const userInput = document.querySelector('#guessField')
const previousGuesses = document.querySelector('.previousGuesses')
const remainingGuesses = document.querySelector('.remainingGuesses')
const lowOrHigh = document.querySelector('.lowOrHigh')
const startOver = document.querySelector('.result')

const p = document.createElement('p')

const totalGuess = 10;

let previousGuess = [];
let numGuess = 0;

let playGame = true;

if (playGame){
    submit.addEventListener('click', function(e){
        e.preventDefault()
        const guess = parseInt(userInput.value)
        console.log(`user Input = ${guess}`)
        validateGuess(guess)
    })
}

function validateGuess(guess){
    if(isNaN(guess)){
        alert('Please enter a Valid Number')
    } else if(guess < 1){
        alert('Please enter a number greater then 0')
    } else if(guess > 100){
        alert('Please enter a number less then 100')
    } else {
        previousGuess.push(guess)
        if( numGuess === totalGuess){
            displayMessage(`Game Over. Random number was ${guess}`)
            displayGuess()
            endGame()
        } else {
            checkGuess(guess)
            displayGuess()
        }   
    }   
}

function checkGuess(guess){
    if(guess === randomGuess) {
        displayMessage(`Congratulation!!!  You Have Guess The Right Number.`)
        endGame()
    } else  if(guess > randomGuess) {
        displayMessage(`Guess number is high`)
    } else if(guess < randomGuess) {
        displayMessage(`Guess number is low`)
    }
}

function displayGuess(){
    numGuess++;
    userInput.value = ''
    previousGuesses.innerText = `${previousGuess} `
    remainingGuesses.innerText = `${ totalGuess - numGuess}`
}

function displayMessage(message){
    lowOrHigh.innerText = `${message}`
}

function endGame(){
    let h2 = document.createElement('h2')

    userInput.value = '';
    userInput.setAttribute('disabled', '')

    p.classList.add('button');
    h2.id = "newGame";
    h2.textContent = "Start New Game";
    p.appendChild(h2)

    startOver.appendChild(p);
    playGame = false;
    newGame();
}

function newGame(){   
    const newGameButton = document.querySelector('#newGame')
    console.log(newGameButton)

    newGameButton.addEventListener('click', function(e){
        
        randomGuess = parseInt(Math.random()*(100)+1)
        console.log(`random Guess = ${randomGuess}`)
        
        userInput.value = ''
        previousGuess = []
        numGuess = 0

        displayGuess()
      
        p.innerText = ''
        lowOrHigh.innerText = ''
        
        userInput.removeAttribute('disabled')
        playGame = true
    })
}
