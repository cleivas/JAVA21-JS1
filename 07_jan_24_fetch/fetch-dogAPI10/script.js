const url = `https://dog.ceo/api/breed/pomeranian/images/random/10`; 

fetch(url).then( fetchCallback ).then( handleData );

function fetchCallback(response){
    console.log(response);
    return response.json();
}

function handleData(data){
    // console.log(data.message);

    for(const url of data.message){
        console.log(url);

        const img = document.createElement('img');
        img.src = url;

        document.body.append(img);
    }
}