//Push
const arr = [3, 52, 47, 32];
console.log(arr);

const length = arr.push(333, 666); //Metoden lägger till två element och returnerar den nya längden
console.log(arr, length, arr.length)

//Pop
let poppedElement = arr.pop(); //tar bort det sista elementet i en array och returnerar värdet av det elementet som togs bort, alltså 666
console.log(poppedElement, arr); 
poppedElement = arr.pop(); //tar bort det sista elementet i en array och returnerar värdet av det elementet som togs bort, alltså 333
console.log(poppedElement, arr); 

//includes
console.log( arr.includes(52)); //true
console.log(arr.includes(52, 2)); //false

//forEach
arr.forEach( e => console.log(e));
// arr.forEach(
//     function(element){
//         console.log(element);
//     }
// )
const arr2 = [];
arr.forEach(e => arr2.push(e*10) );
// arr.forEach(
//     function(element){
//         arr2.push(e*10);
//     }
// )
console.log(arr, arr2);


//splice
const removedElements = arr2.splice(1, 2);
console.log(removedElements, arr2);

