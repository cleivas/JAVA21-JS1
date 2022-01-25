const btn = document.querySelector('button');
console.log(btn);

btn.addEventListener( 'click', function(event){
    const input = document.querySelector('input');
    console.log(input.value);

    clearImages(); //Ta bort alla eventuella bilder som redan finns på sidan

    const url = `https://dog.ceo/api/breed/pomeranian/images/random/${input.value}`;

    fetch(url).then( fetchCallback ).then( handleData );
});


function fetchCallback(response){
    // console.log(response);
    return response.json();
}

function handleData(data){
    // console.log(data.message);

    for(const url of data.message){
        // console.log(url);
        const img = document.createElement('img');
        img.src = url;
        document.body.append(img);
    }
}

function clearImages(){
    const images = document.querySelectorAll('img');
    // console.log(images);

    for(const img of images){
        img.remove();
    }
}