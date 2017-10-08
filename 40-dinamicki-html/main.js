const pica = [
  {
    naziv: 'Pivo',
    cena: 100,
    kolicina: 50
  }, {
    naziv: 'Limunada',
    cena: 60,
    kolicina: 20
  }, {
    naziv: 'Kafa',
    cena: 50,
    kolicina: 5
  }, {
    naziv: 'Rakija',
    cena: 200,
    kolicina: 0
  },
  {
    naziv: 'Viski',
    cena: 400,
    kolicina: 7,
  }
]

function napraviHTML(pice) {
  return `
    <div class="pice">
      <h3>${pice.naziv}</h3>
      <p>Cena: ${pice.cena}</p>
      <p>Količina: ${pice.kolicina}</p>
    </div>
  `
}

pica.map(pice => document.write(napraviHTML(pice)))
