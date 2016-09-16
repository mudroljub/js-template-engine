'use strict';

let firstName = 'Damjan'
let lastName = `Pavlica`

let prdi = function(strune, ...vrednosti) {
  console.log('strune:', strune)
  console.log('vrednosti:', vrednosti)
};

prdi `Zdravo, moje ime je ${firstName}, a prezime ${lastName}`
console.log('prevedeno:', `Zdravo, moje ime je ${firstName}, a prezime ${lastName}`)
