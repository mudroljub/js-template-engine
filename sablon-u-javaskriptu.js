// prevodi iz js-a: pravi sablon, koji mora vracati iz funkcije

/*** KONFIG ***/

var tabela;

let vrednosti = {
  ime: 'Daman',
  zivoti: 2,
  poeni: 222,
  energija: 100,
  tagovi: ['JavaScript', 'Node', 'Learning']
}

/*** LOGIKA ***/

window.onload = function () {
  tabela = document.getElementById('tabela');
  update()
  setInterval(update, 1000)
}

function update() {
  vrednosti.energija++
  tabela.innerHTML = praviTabelu(vrednosti);
}


/* FUNKCIJE */

function praviTabelu(vrednosti) {
  return `
  <h3>Tabela</h2>
  <div>
    Životi: ${vrednosti.zivoti}<br>
    Poeni: ${vrednosti.poeni}<br>
    Energija: ${vrednosti.energija}<br>
    ${vrednosti.poeni} je ${ (vrednosti.poeni % 2 === 0 ? "par" : "nepar") }
  </div>
  <ul>
    ${vrednosti.tagovi.map(tag => `<li>${tag}</li>`)}
  </ul>
  `
}
