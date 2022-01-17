let randomNumber = 0;
const message =  document.querySelector('p');
const btn = document.querySelector('button');

startGame();

btn.addEventListener('click', function(){
    // console.log( document.querySelector('input').value );
    compareNumbers( document.querySelector('input').value );
})

function startGame(){
    randomNumber = Math.round( Math.random()*100 );
    message.innerText = 'Gissa på ett nummer mellan 0 och 100.';
    // console.log(randomNumber);
}

function compareNumbers(inputNumber){
    if(inputNumber == randomNumber){
        // console.log('YOU WIN!');
        winFunction();
    }
    else if(inputNumber<randomNumber){
        // console.log('Guess something higher');
       message.innerText = 'Gissa på ett högre nummer.';
    }
    else if(inputNumber > randomNumber){
        // console.log('Guess something lower');
        message.innerText = 'Gissa på ett lägre nummer.';
    }
}

function winFunction(){
    alert('Du gjorde det! Du vann!');
    startGame();
}