const h1 = document.querySelector('h1');
const b = document.body;
const input = document.querySelector('input');
let text = '';
let lightness = 50;


input.addEventListener('keydown', keyInput )

function keyInput(event){
    console.log(event);
    h1.innerText = event.key;
}

b.addEventListener('keydown', keyCallback);


function keyCallback(event){
    console.log(event);

    b.style.backgroundColor = `hsl(271, 76%, ${lightness}%)`;
    if(event.key === 'ArrowUp'){
        lightness++;
    }
    else if(event.key === 'ArrowDown'){
        lightness--;
    }

    // text += event.key;
    // h1.innerText = text;
}

//Bakgrundsfärgen ska gradvis ändras från svart till vitt när man trycker på arrUp och ArrowDown
//ArrowDown ska göra den mörkare
//ArrowUp ska göra den ljusare