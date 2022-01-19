let var1 = 0;
let var2 = var1;
console.log(var1, var2);

var1 = 10;
console.log(var1, var2); //Olika värden 

const obj1 = {
    key: 10,
}
const obj2 = obj1;
console.log(obj1, obj2); 

obj1.key = 100;
console.log(obj1, obj2);//Samma värden

//Eftersom vi använder Object.assign() nedan kommer obj3 aldrig ändras när obj1 eller obj2 ändras
const obj3 = {};
Object.assign(obj3, obj2);
console.log(obj1, obj2, obj3);

obj1.key = 0;
console.log(obj1, obj2, obj3);

obj2.key = 3;
console.log(obj1, obj2, obj3);

obj3.key = 30;
console.log(obj1, obj2, obj3);