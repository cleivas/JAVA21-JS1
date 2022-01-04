let age = 35;
console.log(age, typeof age);
age++; //samma som age = age+1
console.log(age);

const firstName = 'Linda';
console.log(firstName, typeof firstName);
//Följande ger ett error eftersom variabeln är en const
//firstName = 'Lennart';

let cloudy = true;
console.log(cloudy, typeof cloudy);

let empty;
console.log(empty); //undefined

const lastName = 'Pettersson';
const fullName = firstName + ' ' + lastName;
console.log(fullName); //Vi kan lägga ihop strings med + tecken

const test = lastName * firstName;
console.log(test); //NaN - Not a number

const salary = 75000;
const taxes = 0.5;
const moneyToSpend = salary*taxes;
console.log(moneyToSpend);

//Array
const val = 1;
const randomVals = ['text', val, true];
console.log(randomVals);
console.log(randomVals.length);
console.log(randomVals[2]);

randomVals[0] = 7;
console.log(randomVals[0]);

// randomVals = false;
// console.log(randomVals);
randomVals[1] = 2;
console.log(randomVals[1]);