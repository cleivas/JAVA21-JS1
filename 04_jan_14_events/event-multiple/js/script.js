//Ändra bakgrundsfärgen på diven till det som står på knappen

const div = document.querySelector('div');
div.addEventListener('click', function(e){
    div.style.backgroundColor = e.target.innerText;
});

//Nedan är exakt samma men med en arrowfunktion
// div.addEventListener('click', e => div.style.backgroundColor = e.target.innerText );


