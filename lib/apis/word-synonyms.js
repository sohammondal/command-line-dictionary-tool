const { getWordSynonyms } = require('../routes');

const { error, info, warn, status } = require('../utils');

module.exports = async (word) => {

    try {
        status.start(); // Start Spinner

        const synonyms = await getWordSynonyms(word); // Get Synonyms

        if (!synonyms.length) { // No Synonyms
            console.log(
                warn(`\nNo synonyms of '${word}' are available.`)
            );
            return;
        }

        console.log(
            info(`\nSynonyms of '${word}' are - `), ...synonyms
        );


    } catch (err) {

        console.log(
            error(`\n${err}`)
        );

    } finally {

        status.stop(); // Stop Spinner

    }

}