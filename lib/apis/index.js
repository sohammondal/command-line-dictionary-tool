module.exports = {
    getWordExamples: (word) => require('./word-examples')(word),
    getWordSynonyms: (word) => require('./word-synonyms')(word),
    getWordAntonyms: (word) => require('./word-antonyms')(word),
    getWordDefinitions: (word) => require('./word-definitions')(word),
    getWordFullDetails: (word) => require('./word-full')(word),
    getRandomWordFullDetails: (word) => require('./word-random')(word),
}