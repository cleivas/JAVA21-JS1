const btn = document.querySelector('button');

btn.addEventListener('click', getText);

function getText(e){
    console.log(e)

    const h1 = document.querySelector('h1');
    const input = document.querySelector('input');

    h1.innerText = input.value;
    input.value = '';
}