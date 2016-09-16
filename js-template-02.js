// prevodi iz js-a: pravi sablon, koji mora vracati iz funkcije

/*** KONFIG ***/

var tabela;

let statistike = {
  ime: 'Daman',
  zivoti: 2,
  poeni: 222,
  energija: 100
}

/*** LOGIKA ***/

window.onload = function () {
  tabela = document.getElementById('tabela');
  update()
  setInterval(update, 1000)
}

function update() {
  statistike.energija++
  tabela.innerHTML = praviTabelu(statistike);
}


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
}
