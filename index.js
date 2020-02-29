#!/usr/bin/env node

const { wordValidator } = require('./lib/middlewares'); // Middlewares
const {
    getWordExamples,
    getWordSynonyms,
    getWordAntonyms,
    getWordDefinitions,
    getWordFullDetails,
    getRandomWordFullDetails
} = require('./lib/apis'); // Word APIs

const main = (args = process.argv.slice(2)) => {

    const option = args[0];
    const word = args[1];

    switch (option) {

        case 'defn': // Word Definitions
            wordValidator(word, getWordDefinitions);
            break;

        case 'syn': // Word Synonyms
            wordValidator(word, getWordSynonyms);
            break;

        case 'ant': // Word Antonyms
            wordValidator(word, getWordAntonyms);
            break;

        case 'ex': // Word Examples
            wordValidator(word, getWordExamples);
            break;

        case 'play': // Word Game

            break;

        default:

            if (option) { // Given Word Full Dict
                wordValidator(option, getWordFullDetails);
            } else { // Word of the Day - Random Word Full Dict
                getRandomWordFullDetails();
            }

            break;
    }

}


main();