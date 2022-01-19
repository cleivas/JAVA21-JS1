//Arrayer är objekt
const array1 = [1, 2, 3, 4, 5];
console.log(array1[1]);

const array2 = array1;
console.log(array1, array2);
array1[1] = 200;
console.log(array1, array2); //Båda arrayerna är fortfarande lika. Använd Object.assign() för att göra en kopia

//Arrayer är egentligen objekt där egenskaps namnen är nummer där det första alltid heter 0
const obj1 = {
    0: 1,
    1: 2,
    2: 3,
    3: 4,
    4: 5,
    fem: 6,
}
console.log(obj1[0], obj1['fem']); 

const str = 'Det här är en string';
console.log(str[5]) 