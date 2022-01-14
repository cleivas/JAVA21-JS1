const btn = document.querySelector('button');
const p = document.querySelector('p');
const h1 = document.querySelector('h1');


btn.addEventListener('click', callbackButton);
h1.addEventListener('click', callbackH1);
h1.addEventListener('mouseenter', mouseEnterH1);
h1.addEventListener('mouseleave', () => p.innerText = 'Nu har muspekaren lämnat H1');

document.body.addEventListener('mousemove', function(event){
    console.log(event.clientX);

    document.body.style.backgroundColor = `hsl(${event.clientX}, 80%, 70%)`;m
});


function mouseEnterH1(event){
    p.innerText = 'Nu är muspekaren på H1';
}

function callbackH1(){
    // console.log(event);
    const hue = Math.round( Math.random() * 360 );
    console.log(hue);
    h1.style.backgroundColor = `hsl(${hue}, 80%, 70%)`;
}


function callbackButton(event){
    console.log(event);
    p.innerText = 'Nu har någon klickat på knappen.';
};