const syncTranslation = require('sync-translation-files')

syncTranslation
    .editConfig({
        mainLanguage: 'en',
        root: ['locales'],
        languages: ['ru', 'en', 'zn'],
    })
    .run()
