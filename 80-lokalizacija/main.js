const {i18n, i18nConfig} = window

const name = 'Steffen'
const amount = 1250.33
const date = new Date(2012, 11, 20, 19, 0, 0)

const render = () => {
  const jezik = i18n `English:`
  const izvestaj = i18n `Hello ${ name }, you have ${ amount }:c(EUR) in your bank account.`
  const datum = i18n `The date is: ${date}:t(D).`

  document.write(`
    <p>
      ${jezik}<br>
      ${izvestaj}<br>
      ${datum}
    </p>
  `)
}

render()

// menja na nemacki
i18nConfig({
  locales: 'de-DE',
  translations: {
    "Hello ${0}, you have ${1} in your bank account.": "Hallo ${0}, Sie haben ${1} auf Ihrem Bankkonto.",
    "The date is: ${0}.": "Das Datum ist: ${0}.",
    "English:": "Deutsch:"
  }
})

render()

// vraca na engleski
i18nConfig({
  locales: 'en-US',
  translations: {}
})

render()
