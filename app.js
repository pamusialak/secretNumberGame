let arrayOfGeneratedNumbers = [];
let maxNumber = 50;
let secretNumber = generateRandomNumber();
let tries = 1;

function showTextOnScreen(tag, text){
    let field = document.querySelector(tag);
    field.innerHTML = text;
}


function showInitialMessage(){
    showTextOnScreen('h1', 'Secret Number Game')
    showTextOnScreen('p', 'Choose a number between 1 and 50')
}

showInitialMessage()

function checkGuess(){
    let guess = document.querySelector('input').value;
    
    if (guess == secretNumber){
        showTextOnScreen('h1', 'You got it! Yaaay!!');
        let wordTry = tries > 1 ? 'tries' : 'try';
        let triesMessage = `You found out the secret number in ${tries} ${wordTry}!`;
        showTextOnScreen('p', triesMessage);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (guess > secretNumber){
            showTextOnScreen('p', 'The secret number is lower');
        } else {
            showTextOnScreen('p', 'The secret number is bigger');
        }
        tries++;
        cleanField();
    }
}

function generateRandomNumber() {
    let secretNumber = parseInt(Math.random() * maxNumber +1);
    let quantityOfElementsOnTheList = arrayOfGeneratedNumbers.length;

    if(quantityOfElementsOnTheList == maxNumber){
        arrayOfGeneratedNumbers = [];
    }
    if(arrayOfGeneratedNumbers.includes(secretNumber)){
        return generateRandomNumber();
    }else{
        arrayOfGeneratedNumbers.push(secretNumber);
        return secretNumber;
    }
}

function cleanField(){
    guess = document.querySelector('input');
    guess.value = '';
}

function restartGame(){
    cleanField();
    secretNumber = generateRandomNumber();
    tries = 1;
    checkGuess();
    showInitialMessage();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}