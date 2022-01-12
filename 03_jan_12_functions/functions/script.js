logga();
logga();
addH1();
addH1();
addH1();
createElement('p', 'Hej, Clara!');
createElement('h5', 'Hej, Fredrik!');
createElement('h1', 'Ett till element');
createElement('p', 'Fler element', 8);


function logga(){
    console.log('det här är en funktion!');
}

function addH1(){
    const h1 = document.createElement('h1');
    document.body.append(h1);
    h1.innerText = 'I addH1-funktionen';
}

function createElement(element, text, numberOfElements=1){
    for(let i=0; i<numberOfElements; i++){
        const el = document.createElement(element);
        document.body.append(el);
        el.innerText = text;
    }

    console.log('Argument: ', arguments);
}