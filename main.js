'use strict';
/*
  kada vuce iz htmla: ucitava sadrzaj, cuva izvornu verziju, i evaluira svaki put
  kad prevodi iz js-a: pravi sablon, koji mora vracati iz funkcije

  razmisliti da ipak sve bude u posebnim html stranicama?
*/

/*** KONFIG ***/

var tabela;
var zaglavlje;

let scena = {
  naslov: "Bitka za Krupanj",
  zadatak: "Dovedi Žikicu do nemačkog bunkera."
}
let statistike = {
  ime: 'Daman',
  zivoti: 2,
  poeni: 222,
  energija: 100
}

/*** LOGIKA ***/

window.onload = init;
setInterval(update, 1000)

function init() {
  zaglavlje = document.getElementById('zaglavlje');
  zaglavlje.innerHTML = eval('`' + zaglavlje.innerHTML + '`');
  tabela = document.getElementById('tabela') || document.createElement('div');
  document.body.appendChild(tabela);
} // init

function update() {
  statistike.energija++
  tabela.innerHTML = praviTabelu(statistike);
} // update


/* POMOĆNE FUNKCIJE */

function praviTabelu(statistike) {
  return `
  <h3>Tabela</h2>
  <div>
    Životi: ${statistike.zivoti}<br>
    Poeni: ${statistike.poeni}<br>
    Energija: ${statistike.energija}<br>
    ${statistike.poeni} je ${ (statistike.poeni % 2 === 0 ? "par" : "nepar") }
  </div>`
} // praviTabelu
