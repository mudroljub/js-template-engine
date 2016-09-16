const { i18n, i18nConfig } = window;


const writeText = () => {
    const name = 'Steffen';
    const amount = 1250.33;
    const date = new Date(2012, 11, 20, 19, 0, 0);

    document.write(i18n`<p>English:<br />`);
    // internationalize currency
    document.write(i18n`Hello ${ name }, you have ${ amount }:c(EUR) in your bank account.`);
    document.write('<br />');
    // internationalize date
    document.write(i18n`The date is: ${date}:t(D).`);
    document.write('</p>')
}

// change i18n config at runtime
i18nConfig({
    locales: 'de-DE',
    translations: {
        "Hello ${0}, you have ${1} in your bank account.": "Hallo ${0}, Sie haben ${1} auf Ihrem Bankkonto.",
        "The date is: ${0}.": "Das Datum ist: ${0}.",
        "<p>English:<br />": "<p>Deutsch:<br />"
    }
});

writeText();

// change i18n config at runtime
i18nConfig({
    locales: 'en-US',
    translations: {}
});

writeText();
