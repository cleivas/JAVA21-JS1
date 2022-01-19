//charAt
let str = "whassup yaaall";
console.log('charAt:', str.charAt(5), str[5]); //Båda två ger sjätte bokstaven, alltså den på index 5

//replace
let returned = str.replace('yaaall', 'allihop');
// let returned = str.replace(str[1], 'allihop');
console.log('replace:', str,'-', returned);

//concat
console.log('cooncat:',str.concat(returned)); //läger ihop str och returned

//includes
console.log('includes:',str.includes('ssu'));//reutnerar sant eftersom ssu finns i str

//substring
console.log('substring:', str.substring(1, 5)); //Från bokstaven på index 1 till bokstaven på index 5

//toUpperCase
console.log('toUpperCase:', str.toUpperCase());

//toLowerCase
console.log('toLowerCase:', str.toLowerCase());

//split
console.log('split:', str.split(' ')); //Delar upp sStringen vid mellan rum och returnerar en array med alla delar. 
