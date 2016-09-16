// ucitava html i evaluira

let zaglavlje;
const scena = {
  naslov: "Bitka za Krupanj",
  zadatak: "Dovedi Žikicu do nemačkog bunkera."
}

window.onload = function () {
  zaglavlje = document.querySelector('#zaglavlje');
  zaglavlje.innerHTML = eval('`' + zaglavlje.innerHTML + '`');
}
