const korisnik = {
  ime: 'Damjan',
  prezime: `Pavlica`
}

function rastavi(strune, ...vrednosti) {
  console.log('statičan tekst:', strune)
  console.log('vrednosti:', vrednosti)
  let recenica = ``
  let recenica2 = ``
  for (let i = 0; i < vrednosti.length; i++) {
    recenica += strune[i] + vrednosti[i]
    recenica2 += strune[i] + 'Miki'
  }
  console.log(recenica)
  console.log(recenica2)
}

rastavi `Zdravo, moje ime je ${korisnik.ime}, a prezime ${korisnik.prezime}`
