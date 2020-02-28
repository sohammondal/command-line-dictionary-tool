const axios = require('axios');
const chalk = require('chalk');
const { API_HOST, API_KEY } = require('../config');

const query = `?api_key=${API_KEY}`;

module.exports = {
    getRandomWord: async () => {
        try {
            const { data } = await axios.get(`${API_HOST}/words/randomWord` + query);
            return data.word;
        } catch (error) {
            chalk.red(error.message);
            return null;
        }
    },
    getWordDefinitions: (word) => { },
    getWordExamples: (word) => { },
    getWordSynonyms: (word) => { },
    getWordAntonyms: (word) => { }
}