
const url = `https://dog.ceo/api/breed/hound/images/random`; //Giltig url
const urlError = `https://dog.ceo/api/breed/ERROR/images/random`; //Ogiltig url eftersom ERROR inte är en hundras

//Första fetch lyckas
fetch(url).then(responseCallback).then(showImgCallback);

//Andra fetch kommer misslyckas eftersom URL:en är fel. Genom att använda catch kan vi fånga upp om något går fel
fetch(urlError).then(responseCallback).then(showImgCallback).catch( handleError );

//Om statuskoden inte är 200-299 hanterar vi det som ett error
function responseCallback(response){
    console.log(response);
    if(response.status >= 200 && response.status<300){
        return response.json();
    }
    else{
        throw 'not 200';
    }
}

// Visa bilderna, anropas endast om inget error skett
function showImgCallback(data){
    const img = document.createElement('img');
    img.src = data.message;
    document.body.append(img);
}

//Om vi får ett error hanterar vi det i den här funktionen
function handleError(error){
    console.log(error);
    if(error === 'not 200'){
        const p = document.createElement('p');
        p.innerText = 'Something went wrong when trying to fetch the img';
        document.body.append(p);
    }
}