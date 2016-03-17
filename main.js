'use strict';
/*
  moze da prevodi sablone iz html-a i iz js-a
  kada vuce iz htmla, mora negde sacuvati izvornu verziju, da bi mogao da je evaluira svaki put
  kad prevodi iz js-a, mora svaki put pripisivati varijablu kako bi je azurirao (nece sa eval kao iz htmla; mozda da je vraca iz funkcije?)
*/

let recnik = {
  ime: 'Daman',
  zivoti: 2,
  poeni: 222,
  energija: 100
}

var tabela;
var tabela2;
var tabelaSablon2;

function tabelaSablon3() {
  return `
  <h3>Tabela</h2>
  <div>
    Životi: ${recnik.zivoti}<br>
    Poeni: ${recnik.poeni}<br>
    Energija: ${recnik.energija}<br>
    ${recnik.poeni} je ${ (recnik.poeni % 2 === 0 ? "par" : "nepar") }
  </div>
  `
}

window.onload = function init() {
  tabela = document.createElement('div');
  document.body.appendChild(tabela);
  tabela2 = document.getElementById('tabela2')
  tabelaSablon2 = tabela2.innerHTML;
} // init


function update() {
  recnik.energija++

  let tabelaSablon = `
  <h3>Tabela</h2>
  <div>
    Životi: ${recnik.zivoti}<br>
    Poeni: ${recnik.poeni}<br>
    Energija: ${recnik.energija}<br>
    ${recnik.poeni} je ${ (recnik.poeni % 2 === 0 ? "par" : "nepar") }
  </div>
  `
  tabela.innerHTML = tabelaSablon;

  let parsirano2 = eval('`' + tabelaSablon2 + '`');
  tabela2.innerHTML = parsirano2;
} // update


setInterval(update, 1000)
