const { getWordDefinitions, getWordSynonyms, getWordAntonyms, getWordExamples } = require('./index');

const { error } = require('../utils');

module.exports = async (word) => {

    try {

        await getWordDefinitions(word);
        await getWordSynonyms(word);
        await getWordAntonyms(word);
        await getWordExamples(word);

    } catch (err) {

        console.log(
            error(`\n${err}`)
        );
    }

}