const url = `https://api.punkapi.com/v2/beers/random`;

fetch(url).then(
    function(response){
        console.log(response);
        return response.json();
    }
).then(
    function(data){
        console.log(data);

        //namnet
        console.log( data[0].name);

        //Bilden
        console.log( data[0].image_url)

        displayData(data[0].name, data[0].image_url);
    }
)

function displayData(name, imgUrl){

    const h1 = document.createElement('h1');
    h1.innerText = name;
    document.body.append(h1);

    const img = document.createElement('img');
    img.src = imgUrl;
    document.body.append(img);    
}