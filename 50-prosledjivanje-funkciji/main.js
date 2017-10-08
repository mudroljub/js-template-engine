const ime = 'Miki'
const godine = '77'

function naglasi(strune, ...vrednosti) {
  console.log('strune:', strune)
  console.log('vrednosti:', vrednosti)
  let recenica = ``
  strune.map((struna, i) =>
    recenica += struna + `<span class='hl'>${vrednosti[i] || ''}</span>`
  )
  return recenica
}

const rezultat = naglasi `Moj pas se zove ${ime} i ima ${godine} godina`
document.write(rezultat)
