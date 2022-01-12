let TEST;

// function func(){
//     const variable = 'in func';
//     TEST = variable;
// }
// func();
// console.log(TEST);

//en parameter har local scope i en funktion. Precis som en variabel som har deklarerats i en funktion
// function func(variable){
//     variable = 'in func';
//     TEST = variable;
// }
// func();
// console.log(TEST);

//let har block scope, men det har inte var
// function func(){
//     {
//         var variable = 'in func';
//     }
    // TEST = variable; 
// }
// func();
// console.log(TEST);

// outer scope är tillgängligt i de inre funktionerna
// function outerFunc(){
//     const variable = 'outer';

//     function innerFunc(){
//         TEST = variable;
//     }
//     innerFunc();
// }
// outerFunc();
// console.log(TEST);

//En variabel i yttre scope som har samma namn som en variabel i inre scope kommer inte vara tillgänglig i inner scope. Inner scope skriver över den variabeln. 
// function outerFunc(){
//     const variable = 'outer';

//     function innerFunc(){
//         const variable = 'inner';
//         TEST = variable;
//     }
//     innerFunc();
// }
// outerFunc();
// console.log(TEST);

// function outerFunc(){
//     const variable = 'outer';

//     function innerFunc(){
//         const variable = 'inner';
//     }
//     innerFunc();
//     TEST = variable;
// }
// outerFunc();
// console.log(TEST);

// let a;
// a = a || 10;
// console.log(a);

//Counter deklareras på nytt varje gång funktionen anropas
function func(){
    let counter;
    console.log(counter);
    counter = counter || 10;
    counter++;
    TEST = counter;
}
func();
console.log(TEST);
func();
console.log(TEST);
func();
console.log(TEST);


