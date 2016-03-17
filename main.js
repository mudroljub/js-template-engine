'use strict';

let recnik = {
  ime: 'Daman',
  zivoti: 2,
  poeni: 222,
  energija: 100
}

var tabela;
var tabela2;

window.onload = function functionName() {
  tabela = document.createElement('div');
  document.body.appendChild(tabela);
  tabela2 = document.getElementById('tabela2')
}


function update() {
  recnik.energija++

  let statistike = `
  <h3>Tabela</h2>
  <div>
    Životi: ${recnik.zivoti}<br>
    Poeni: ${recnik.poeni}<br>
    Energija: ${recnik.energija}<br>
    ${recnik.poeni} je ${ (recnik.poeni % 2 === 0 ? "par" : "nepar") }
  </div>
  `
  tabela.innerHTML = statistike;

  let parsirano = eval('`' + tabela2.innerHTML + '`');
  console.log(tabela2.innerHTML);
  tabela2.innerHTML = parsirano;
} // update


// document.body.innerHTML += statistike;

setInterval(update, 1000)
