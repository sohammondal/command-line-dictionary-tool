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
    getWordDefinitions: async (word) => {
        try {
            const { data } = await axios.get(`${API_HOST}/word/${word}/definitions` + query)
            return data;
        } catch (error) {
            return Promise.reject('Error: ' + error.response.data.error);
        }
    },
    getWordExamples: async (word) => {
        try {
            const { data } = await axios.get(`${API_HOST}/word/${word}/examples` + query);
            return data.examples;
        } catch (error) {
            return Promise.reject('Error: ' + error.response.data.error);
        }
    },
    getWordSynonyms: async (word) => {
        try {
            let { data } = await axios.get(`${API_HOST}/word/${word}/relatedWords` + query);
            data = data.filter(d => d.relationshipType === "synonym");
            return data.length ? data[0].words : [];
        } catch (error) {
            return Promise.reject('Error: ' + error.response.data.error);
        }
    },
    getWordAntonyms: async (word) => {
        try {
            let { data } = await axios.get(`${API_HOST}/word/${word}/relatedWords` + query);
            data = data.filter(d => d.relationshipType === "antonym");
            return data.length ? data[0].words : [];
        } catch (error) {
            return Promise.reject('Error: ' + error.response.data.error);
        }
    }
}