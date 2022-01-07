/*
- skapa tio element i en loop
- de fem första elementen ska ha bakgrundsfärg ljusblå
- det sjunde elementet ska bakgrundsfärg röd
- resten ska ha valfri bakgrundsfärg 
*/

for(let i=0; i<10; i++){
    const h3 = document.createElement('h3');
    h3.innerText = i;
    document.body.append(h3);

    if(i<5){
        h3.style.backgroundColor = 'skyblue';
    }
    else if(i===7){
        h3.style.backgroundColor = 'red';
    }
    else{
        h3.style.backgroundColor = 'cornflowerblue';
    }
}

//Tio nya h3-element där varannan rad har bakgrundsfärgen hotpink
for(let i=0; i<10; i++){
    const h3 = document.createElement('h3');
    document.body.append(h3);

    //När i= ... är i%2 = ...
    h3.innerText = 'När i=' + i + ' är i%2 = ' + i%2;
    
    if( i%2 === 0){
        h3.style.backgroundColor = 'hotpink';
    }
    else{
        h3.style.backgroundColor = 'skyblue';
    }
}
//Switch
const randomNumber = Math.ceil( Math.random()*10 );
console.log(randomNumber);
switch (randomNumber) {
  case 1:
    console.log("En etta");
    // break;
  case 2:
    console.log("En tvåa");
    // break;
  case 3:
    console.log("En trea");
    // break;
  default:
    console.log('Numret är mer än tre');
}
