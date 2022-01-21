// Hur ska varje objekt alltså kort se ut?

// {
//     suit: 'Hjärter',
//     value: 1,
//     char: 'E'
// }

const characters = ['E', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'Kn', 'D', 'K'];
const suits = ['Hjärter', 'Spader', 'Ruter', 'Klöver'];

//Tom array som ska fyllas med kortobjekt
const deck = [];

//En loog per character
for(let i=0; i<characters.length; i++){

    //En loop per suit
    for(let j=0; j<suits.length; j++){
        //Vi skapar ett kortobjekt
        const card = {
            suit: suits[j], 
            value: i+1,
            char: characters[i]
        }
        //Lägger till objektet till kortleksarrayen
        deck.push(card);
    }
}
console.log(deck); //Kortleken är oblandad

//Blanda kortlek
const shuffledDeck = shuffle(deck);
console.log(shuffledDeck); //Kortleken är blandad

//Funktionen har en parameter - en array med kortobjekt
function shuffle(deckToShuffle){
    const deckToReturn = []; //Tom array som ska fyllas med random kort

    //Loopa 52 gånger
    for(let i=0; i<52; i++){
        //Generera ett random nummer mellan 0 och längden på deckToShuffle arrayen. Eftersom vi tar bort ett element från den arrayen vid varje loop kommer längden minska vid varje loop.
        const randomIndex = Math.floor( Math.random() * deckToShuffle.length);

        //Lägg till ett random kort till deckToReturn
        deckToReturn.push( deckToShuffle[randomIndex]);

        //Ta bort det kortet från deckToShuffle
        deckToShuffle.splice(randomIndex, 1);
    }

    //Returnera arrayen som nu är fylld med random kort
    return deckToReturn;
}
