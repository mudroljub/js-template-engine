'use strict';

let recnik = {
  ime: 'Daman',
  zivoti: 2,
  poeni: 222,
  energija: 100
}

// parsuje sa es6
let tabela = `
<p>Zdravo, moje ime je ${recnik.ime}</p>
<div>
  Životi: ${recnik.zivoti}<br>
  Poeni: ${recnik.poeni}<br>
  Energija: ${recnik.energija}<br>
  ${recnik.poeni} je ${ (recnik.poeni % 2 === 0 ? "par" : "nepar") }
</div>
`

// var element = document.createElement('div');
// element.innerHTML = tabela;
// document.body.appendChild(element);

document.body.innerHTML += tabela;
