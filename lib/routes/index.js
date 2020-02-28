const axios = require('axios');
const { API_HOST, API_KEY } = require('../config');

const query = `?api_key=${API_KEY}`;

module.exports = {
    getRandomWord: (word) => { },
    getWordDefinitions: (word) => { },
    getWordExamples: (word) => { },
    getWordSynonyms: (word) => { },
    getWordAntonyms: (word) => { }
}