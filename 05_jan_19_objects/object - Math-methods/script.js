//PI
console.log('PI', Math.PI); //Värdet av pi

//random
console.log('Random', Math.random()); //random värde mellan 0 och upp till men inte lika med 1

//abs
console.log('abs', Math.abs(-87)); //Absoluta värdet av ett nummer


// ceil
console.log('ceil', Math.ceil(0.1)); //Avrundar upp

// floor
console.log('floor', Math.floor(0.9));//Avrundar ner

// round
console.log('round', Math.round(0.5));//Avrundar som vanigt

// max
const numbers= [5, 0.5, 99]
console.log('max', Math.max(...numbers)); //Returnerar högsta numret i arrayen numbers
//För förklaring av ... se: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax

// min
console.log('min', Math.min(...numbers)); //Returnerar minsta numret i arrayen numbers
