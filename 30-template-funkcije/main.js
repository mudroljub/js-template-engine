'use strict';

const recnik = {
  ime: 'Damjan',
  prezime: `Pavlica`
}

// destructuring
let {ime, prezime} = recnik

let prdi = function(strune, ...vrednosti) {
  console.log('strune:', strune)
  console.log('vrednosti:', vrednosti)
};

prdi `Zdravo, moje ime je ${ime}, a prezime ${prezime}`
console.log('prevedeno:', `Zdravo, moje ime je ${ime}, a prezime ${prezime}`)
