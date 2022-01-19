const dog = {
    tail: true,
    legs: 4,
    sound: 'woof',
    makeSound: function(){
        console.log(this.sound, this.sound);
    }
};

console.log( dog.sound); //Loggar egenskapen sound
console.log(dog); //loggar hela objektet
console.log( dog.makeSound) //Loggar metoden makeSound
dog.makeSound(); //anropar metoden makeSound



const domEl = {
    type: 'h1',
    fontSize: '100px',
    color: 'hotpink',
    innerText: 'Objektet'
}
const domEl2 = {
    type: 'p',
    fontSize: '10px',
    color: 'blue',
    innerText: 'Paragrafen'
}

function createEl(obj){
    const el = document.createElement(obj.type);
    el.innerText = obj.innerText;
    el.style.fontSize = obj.fontSize;
    el.style.color = obj.color;
    document.body.append(el);
}

createEl(domEl);
createEl(domEl2);

// Följande kod utför exakt samma som ovan
// Skillnaden är att funktionen som skapar DOM-elementet är en metod i varje objekt istället för en funktion som tar ett objekt som argument
const domEl3 = {
    type: 'h1',
    fontSize: '100px',
    color: 'hotpink',
    innerText: 'Objektet',
    create: function(){
        const el = document.createElement(this.type);
        el.innerText = this.innerText;
        el.style.fontSize = this.fontSize;
        el.style.color = this.color;
        document.body.append(el);
    }
}
const domEl4 = {
    type: 'p',
    fontSize: '10px',
    color: 'blue',
    innerText: 'Paragrafen',
    create: function(){
        const el = document.createElement(this.type);
        el.innerText = this.innerText;
        el.style.fontSize = this.fontSize;
        el.style.color = this.color;
        document.body.append(el);
    }
}
domEl3.create();
domEl4.create();