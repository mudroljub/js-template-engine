'use strict';
/*
  kada vuce iz htmla: ucitava sadrzaj, cuva izvornu verziju, i evaluira svaki put
  kad prevodi iz js-a: pravi sablon, koji mora vracati iz funkcije

  problem: kad zadatak nije definisan
  razmisliti da ipak sve bude u posebnim html stranicama?
*/

/*** KONFIG ***/

var naslov = "Bitka za Krupanj";
var zadatak = "Dovedi Žikicu do nemačkog bunkera.";
var tabela;
var zaglavlje;
var zaglavljeSadrzaj;

let statistike = {
  ime: 'Daman',
  zivoti: 2,
  poeni: 222,
  energija: 100
}

function napraviSablon(statistike) {
  return `
  <h3>Tabela</h2>
  <div>
    Životi: ${statistike.zivoti}<br>
    Poeni: ${statistike.poeni}<br>
    Energija: ${statistike.energija}<br>
    ${statistike.poeni} je ${ (statistike.poeni % 2 === 0 ? "par" : "nepar") }
  </div>`
} // napraviSablon


/*** LOGIKA ***/

window.onload = function init() {
  zaglavlje = document.getElementById('zaglavlje')
  zaglavljeSadrzaj = zaglavlje.innerHTML;
  tabela = document.getElementById('tabela') || document.createElement('div');
  document.body.appendChild(tabela);
} // init


function update() {
  statistike.energija++
  zaglavlje.innerHTML = eval('`' + zaglavljeSadrzaj + '`'); // mora da evaluira
  tabela.innerHTML = napraviSablon(statistike);
} // update


setInterval(update, 1000)
