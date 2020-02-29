const axios = require('axios');
const { API_HOST, API_KEY } = require('../config');

const query = `?api_key=${API_KEY}`;

module.exports = {
    getRandomWord: async () => {
        try {
            const { data } = await axios.get(`${API_HOST}/words/randomWord` + query);
            return data.word;
        } catch (error) {
            return Promise.reject(error.message);
        }
    },
    getWordDefinitions: (word) => { },
    getWordExamples: async (word) => {
        try {
            const { data } = await axios.get(`${API_HOST}/word/${word}/examples` + query);
            return data.examples;
        } catch (error) {
            return Promise.reject('Error: ' + error.response.data.error)
        }
    },
    getWordSynonyms: (word) => { },
    getWordAntonyms: (word) => { }
}