const h1 = document.createElement('h1');
document.body.appendChild(h1);

h1.innerText = 'Hello, world!';
//Nedan skriver över stilen från css-filen
// h1.style.color = 'black';
console.log(h1);

const p1 = document.createElement('p');
const p2 = document.createElement('p');

p1.innerText = 'Länk: <a href=#> Detta är en länk </a>';
p2.innerHTML = 'Länk: <a href=#> Detta är en länk </a>';

document.body.appendChild(p1);
document.body.appendChild(p2);

//En numrerad lista med tre punkter
const ol = document.createElement('ol');
document.body.appendChild(ol);

const li1 = document.createElement('li');
li1.innerText = 'Hund';
const li2 = document.createElement('li');
li2.innerText = 'Pingvin';
const li3 = document.createElement('li');
li3.innerText = 'katt';

ol.appendChild(li1);
ol.appendChild(li2);
ol.appendChild(li3);

li1.style.color = 'hotpink';
li2.style.color = 'hotpink';
li3.style.color = 'blue';