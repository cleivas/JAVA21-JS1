//Callbackfunktionerna
function square(x){
    return x*x;
}
function timesTwo(x){
    return x*2;
}

const arr = [43, 2346, 1, 35, 654];
const arr2 = [2, 2, 6, 1, 5];

//Higher order funktionen
function mathOnArray(arrOfNumb, mathFunction){
    for(let i=0; i<arrOfNumb.length; i++){
        arrOfNumb[i] = mathFunction(arrOfNumb[i]);
    }
}

mathOnArray(arr2, square);
console.log('square from higher order', arr2);
mathOnArray(arr, timesTwo);
console.log('Times two from higher order', arr);

mathOnArray(arr, 
    function(x){
        return x+1;
    }
);
console.log(arr);

mathOnArray(arr, x => x+1 );
console.log(arr);