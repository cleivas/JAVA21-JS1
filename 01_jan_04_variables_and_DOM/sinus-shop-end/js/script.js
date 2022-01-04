//Hämta en lista med alla h2-element
console.log(allH2);
//ändra bakgrundsfärgen för det första h2-elementet
allH2[0].style.backgroundColor = 'hotpink';

//Nedan fungerar ej eftersom det inte är ett enskilt element utan en lista
//allH2.style.color = 'green';

//Hämta första a-elementet och ändra href-attributet
const a = document.querySelector('a');
console.log(a);
a.href = 'https://www.svt.se/';
//Det går även att göra på följande sätt
// a.setAttribute('href', 'https://www.svt.se/');

//Hämta den första knappen och ta bort den
const btn = document.querySelector('button');
btn.remove();

//Hämta första h3-elementet och logga dess inre text
const h3 = document.querySelector('h3');
console.log(h3.innerText);