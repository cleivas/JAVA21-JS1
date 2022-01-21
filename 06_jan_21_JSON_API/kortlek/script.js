// Hur ska varje objekt alltså kort se ut?

// {
//     suit: 'Hjärter',
//     value: 1,
//     char: 'E'
// }


const characters = ['E', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'Kn', 'D', 'K'];
const suits = ['Hjärter', 'Spader', 'Ruter', 'Klöver'];

//Tom array
const deck = [];

//En loog per character
for(let i=0; i<characters.length; i++){

    //En loop per suit
    for(let j=0; j<suits.length; j++){
        const card = {
            suit: suits[j],
            value: i+1,
            char: characters[i]
        }
        deck.push(card);
    }
}
console.log(deck);

//Blanda kortlek
const shuffledDeck = shuffle(deck);
console.log(shuffledDeck);

function shuffle(deckToShuffle){
    const deckToReturn = [];

    for(let i=0; i<52; i++){
        const randomIndex = Math.floor( Math.random() * deckToShuffle.length);

        deckToReturn.push( deckToShuffle[randomIndex]);
        deckToShuffle.splice(randomIndex, 1);
    }

    return deckToReturn;
}
