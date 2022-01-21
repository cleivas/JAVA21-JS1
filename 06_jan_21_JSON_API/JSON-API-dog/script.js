//Svaret i JSON-format från https://dog.ceo/dog-api/documentation/random
const dogString = `{"message":"https:\/\/images.dog.ceo\/breeds\/lhasa\/n02098413_8685.jpg","status":"success"}`;
console.log(dogString);

//Vi gör om JSON-stringen till ett JS objekt
const dogObj = JSON.parse(dogString);
console.log(dogObj.message); //Vi loggar stringen i egenskapen message, som innehåller url:en till bilden

//Vi skapar och lägger till en img med dogObj.message som src 
const img = document.createElement('img');
img.src = dogObj.message;
document.body.append(img);

//Skriv om ovan kod så att om vi har gjort en förfrågan om flera random bilder kommer alla visas i varsin img, oavsett hur många där är

const multipleDogs = `{"message":["https:\/\/images.dog.ceo\/breeds\/bulldog-boston\/n02096585_4451.jpg","https:\/\/images.dog.ceo\/breeds\/dhole\/n02115913_4047.jpg","https:\/\/images.dog.ceo\/breeds\/terrier-kerryblue\/n02093859_2880.jpg"],"status":"success"}`;
const multipleDogsObj = JSON.parse(multipleDogs);
console.log(multipleDogsObj.message); //Detta är nu en array som vi kan iterera igenom

for(const url of multipleDogsObj.message){
    console.log(url);

    const img = document.createElement('img');
    img.src = url;
    document.body.append(img);
}