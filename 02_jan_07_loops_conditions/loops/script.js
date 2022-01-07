//For-loopen loggar numrena 0-9
console.log('--------Första for-loopen-------');
for(let i=0; i<10; i++){
    console.log(i);
}

//For-loopen loggar numrena 9-0
console.log('--------Andra for-loopen-------');
for(let i=9; i>=0; i--){
    console.log(i);
}

//Vi skapar lika många li-element i en ol-lista som det finns element i arrayen animals och lägger till hela listan i bodyn
const ul = document.createElement('ol');
document.body.append(ul);

const animals = ['hund', 'pingvin', 'katt', 'häst', 'råtta', 'åsna', 'kamel'];

for(let i=0; i<animals.length; i++){
    const li = document.createElement('li');
    ul.append(li);
    li.innerText = animals[i];
}

//Vi gör exakt samma sak igen men med en for of loop
const ul2 = document.createElement('ol');
document.body.append(ul2);

for(const animal of animals){
    const li = document.createElement('li');
    ul2.append(li); 
    li.innerText = animal;
}

//While loop som loopar så länge  det genererade random numret inte är lika med 0
console.log('-------While med Random numbers---------')
let randomNumber = 10;

while(randomNumber != 0){ 
    randomNumber = Math.round( Math.random()*10 );
    console.log(randomNumber);
}

//Det går att använda en while loop på samma sätt som en for-loop. I det här fallet behöver vi deklarera en variabel utanför loopen vilket betyder att den är global.
console.log('-------While med Index---------');
 let index = 10;

while(index >= 0){ 
    console.log(index);
    index--;
}