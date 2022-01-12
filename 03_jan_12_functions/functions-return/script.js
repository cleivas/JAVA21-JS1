const result = multiply(56, 87);
console.log(result);

function multiply(x, y){
    return x*y;
}

console.log( isEven(8) );

function isEven(x){
    // if(x%2 === 0){
    //     return true;
    // }
    // else{
    //     return false;
    // }
    return !(x%2);
}

//En funktion som inte har några parametrar definierade
//Den ska kunna ta emot hur många argument som helst 
// och returnera det högsta numret av argumenten
console.log( highestNumber(3, 23, 1, 65) );
console.log( highestNumber(34, 765, 214, 6547) );

function highestNumber(){
    //console.log( arguments );
    let highest = 0;

    for(let i=0; i<arguments.length; i++){

        if(arguments[i]>highest){
            highest = arguments[i];
        }
    }
    return highest;
}


console.log( isEven( highestNumber(5, 13, 63, 2) ) );

const res = highestNumber(5, 13, 63, 2);
const isResEven = isEven(res);
console.log(isResEven);