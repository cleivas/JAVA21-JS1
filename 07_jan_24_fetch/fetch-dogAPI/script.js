const url = `https://dog.ceo/api/breed/dalmatian/images/random`;

//fetch returnerar ett promise
const dogPromise = fetch(url);
console.log(dogPromise);

//När promiset är fulfilled anropas callback funktionen i then-metoden. Callback-funktionen tar emot värdet i value, alltså ett response, och returnerar i sin tur ett promise i och med json()-metoden
const jsonPromise = dogPromise.then(
    function(response){
        console.log(response);
        return response.json();
    }
);
console.log(jsonPromise);

//När detta promise är fulfilled anropas callbackfunktionen i then. Callbackfunktionen tar emot värdet i value som är ett objekt
jsonPromise.then(
    function(data){
        console.log(data.message);

        const img = document.createElement('img');
        img.src = data.message;
        document.body.append(img);
    }
);

//Exakt samma men med arrowfunktioner
fetch(url).then( response => response.json() ).then(data => {
    const img = document.createElement('img');
    img.src = data.message;
    document.body.append(img);
})

//Exakt samma men med definierade callbackfunktioner
fetch(url).then(responseCallback).then(showImgCallback);

function responseCallback(response){
    return response.json();
}

function showImgCallback(data){
    const img = document.createElement('img');
    img.src = data.message;
    document.body.append(img);
}