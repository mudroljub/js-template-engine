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
  Životi: ${recnik.zivoti}
  Poeni: ${recnik.poeni}
  Energija: ${recnik.energija}
  ${recnik.poeni} je ${ (recnik.poeni % 2 === 0 ? "par" : "nepar") }
</div>
`

console.log(tabela);
