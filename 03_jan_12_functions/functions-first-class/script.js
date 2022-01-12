const multiply = function(x, y){
    return x*y;
}

console.log( multiply(3, 4) );
console.log( multiply );
console.log(typeof multiply);
console.log('-------------');

//Call back and higher order
const firstFunc = function(){
    console.log('firstFunc, en callback-funktion');
}
const secondFunc = function(callback){
    console.log('secondFunc, en higher-order-funktion');
    callback();
}

secondFunc( firstFunc ); 
console.log('-------------');

function square(x){
    return x*x;
}
function timesTwo(x){
    return x*2;
}
//Första alternativet, vi använder for-loops
const arr = [43, 2346, 1, 35, 654];
console.log('original', arr);

for(let i=0; i<arr.length; i++){
    arr[i] = square(arr[i]);
}

console.log('Square', arr);

for(let i=0; i<arr.length; i++){
    arr[i] = timesTwo(arr[i]);
}
console.log('Times two', arr);
console.log('-------------');

//Andra alternativet, vi vill kunna byta ut arrayen
const arr2 = [2, 2, 6, 1, 5];
console.log('Arr2 original', arr2)
function arrSquare(arrOfNumb){
    for(let i=0; i<arrOfNumb.length; i++){
        arrOfNumb[i] = square(arrOfNumb[i]);
    }
}
function arrTimesTwo(arrOfNumb){
    for(let i=0; i<arrOfNumb.length; i++){
        arrOfNumb[i] = timesTwo(arrOfNumb[i]);
    }
}

arrSquare(arr2);
console.log('Arr2 square', arr2);
arrTimesTwo(arr2);
console.log('Arr2 times two', arr2);

//Tredje alternativet, vi vill kunna byta ut både arrayen och uträkningsfunktionen
console.log('------------');
function mathOnArray(arrOfNumb, mathFunction){
    for(let i=0; i<arrOfNumb.length; i++){
        arrOfNumb[i] = mathFunction(arrOfNumb[i]);
    }
}

mathOnArray(arr2, square);
console.log('square from higher order', arr2);
mathOnArray(arr, timesTwo);
console.log('Times two from higher order', arr);