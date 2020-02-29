const { getWordAntonyms } = require('../routes');

const { error, info, warn, status } = require('../utils');

module.exports = async (word) => {
    try {
        status.start(); // Start Spinner

        const antonyms = await getWordAntonyms(word); // Get antonyms


        if (!antonyms.length) { // No antonyms
            console.log(
                warn(`\nNo antonyms of '${word}' are available.`)
            );
            return;
        }

        console.log(
            info(`\nAntonyms of '${word}' are - `), ...antonyms
        );

    } catch (err) {

        console.log(
            error(`\n${err}`)
        );

    } finally {

        status.stop(); // Stop Spinner

    }

}