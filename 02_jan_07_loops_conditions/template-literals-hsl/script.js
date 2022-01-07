//Bakgrundsfärgen går från hue=0 på första elementet och ökar sedan med 20 för varje element
for(let i=0; i<5; i++){
    const h3 = document.createElement('h3');

    const hue = 0 + (i*20);
    h3.style.backgroundColor = `hsl(${hue}, 74%, 77%)`;

    h3.innerText = `h3 element nummer ${i+1} med hue-värdet ${hue}`;
    document.body.append(h3);
}

/*
  Hue för första elementet ska alltid vara 180
  Hue för sista elementet ska alltid vara 300
  Elementen där emellan ska gradvis skifta från det första till det sista
*/

const numberOfLoops = 20;

for(let i=0; i<numberOfLoops; i++){
  const h3 = document.createElement('h4');
  h3.style.margin = 0;

  //180 är startvärdet, 120 den totala ändringen i hue, 120/numberOfLoops är ändringen i hue per element
  /**
   * 180 är start värdet och 300 slutvärdet
   * Den totala förändringen i hue är 300-180=120
   * Förändringen av hue i varje steg beror på antal steg: 120/numberOfLoops
   * 
   */
  const hue = 180 + (i*(120/numberOfLoops));
  h3.style.backgroundColor = `hsl(${hue}, 74%, 77%)`;

  h3.innerText = `${i+1}) hue = ${hue}`;
  document.body.append(h3);
}