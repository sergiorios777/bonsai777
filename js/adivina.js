let randomNumber = Math.floor(Math.random() * 100) + 1;

const guesses = document.querySelector('.guesses');
const lastResult = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');

const guessSubmit = document.querySelector('.guessSubmit');
const guessField = document.querySelector('.guessField');

let guessCount = 1;
let resetButton;

guessField.focus();

guessSubmit.addEventListener('click', checkGuess);

const resetParas = document.querySelectorAll('.resultParas p');

for (let i = 0 ; i < resetParas.length ; i++) 
{
    resetParas[i].textContent = '';
}

function checkGuess()
{
    let userGuess = Number(guessField.value);
    if (guessCount === 1) 
    {
        guesses.textContent = 'Intentos previos: ';
    }
    guesses.textContent += userGuess + ' ';

    if (userGuess === randomNumber) 
    {
        lastResult.textContent = '¡Felicidades! ¡Acertaste!';
        //lastResult.style.backgroundColor = 'green';
        lastResult.className = 'lastResult'
        lowOrHi.textContent = '';
        setGameOver();
    } 
    else if (guessCount === 10) 
    {
        lastResult.className = 'lastResult'
        lastResult.textContent = '!!!PERDIÓ EL JUEGO!!!';
        setGameOver();
    } 
    else 
    {
        lastResult.textContent = '¡No acertaste! ¡Inténtalo de nuevo!';
        //lastResult.style.backgroundColor = 'red';
        lastResult.className = 'lastResult'
        if(userGuess < randomNumber) 
        {
            lowOrHi.textContent = '¡El último intento fue muy bajo!';
        } 
        else if(userGuess > randomNumber) 
        {
            lowOrHi.textContent = '¡El último intento fue muy alto!';
        }
    }

    guessCount++;
    guessField.value = '';
    guessField.focus();
}

function setGameOver() 
{
    guessField.disabled = true;
    guessSubmit.disabled = true;
    resetButton = document.createElement('button');
    resetButton.textContent = 'Iniciar nueva partida';
    resetButton.className = "btn";
    //document.body.append(resetButton);
    document.getElementById("formulario").append(resetButton);
    resetButton.addEventListener('click', resetGame);
}

function resetGame() 
{
    guessCount = 1;

    const resetParas = document.querySelectorAll('.resultParas p');
    for (let i = 0 ; i < resetParas.length ; i++) 
    {
        resetParas[i].textContent = '';
    }

    resetButton.parentNode.removeChild(resetButton);

    guessField.disabled = false;
    guessSubmit.disabled = false;
    guessField.value = '';
    guessField.focus();

    //lastResult.style.backgroundColor = 'white';
    lastResult.className = 'lastResult'

    randomNumber = Math.floor(Math.random() * 100) + 1;
}
