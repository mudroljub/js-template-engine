'use strict';
/*
  moze da prevodi sablone iz html-a i iz js-a
  kada vuce iz htmla, ucitava sablon, mora negde sacuvati izvornu verziju, da bi mogao evaluirati svaki put
  kad prevodi iz js-a, kreira sablon, mora svaki put vracati sablon iz funkcije
*/

/*** KONFIG ***/

var tabela;
var tabela2;
var tabelaSablonHTML;

var tabelaSablonJS = function() {
  return `
  <h3>Tabela</h2>
  <div>
    Životi: ${statistike.zivoti}<br>
    Poeni: ${statistike.poeni}<br>
    Energija: ${statistike.energija}<br>
    ${statistike.poeni} je ${ (statistike.poeni % 2 === 0 ? "par" : "nepar") }
  </div>`
} // tabelaSablonJS

let statistike = {
  ime: 'Daman',
  zivoti: 2,
  poeni: 222,
  energija: 100
}

/*** LOGIKA ***/

window.onload = function init() {
  tabela = document.createElement('div');
  document.body.appendChild(tabela);
  tabela2 = document.getElementById('tabela2')
  tabelaSablonHTML = tabela2.innerHTML;
} // init


function update() {
  statistike.energija++
  tabela.innerHTML = tabelaSablonJS();
  tabela2.innerHTML = eval('`' + tabelaSablonHTML + '`'); // mora evaluirati
} // update


setInterval(update, 1000)
