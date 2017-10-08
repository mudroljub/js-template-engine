// ucitava html i evaluira

const scena = {
  naslov: "Bitka za Krupanj",
  zadatak: "Dovedi Žikicu do nemačkog bunkera."
}

window.onload = () =>
  document.body.innerHTML = eval('`' + document.body.innerHTML + '`')
