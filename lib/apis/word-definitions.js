const { getWordDefinitions } = require('../routes');

const { error, info, status } = require('../utils');

module.exports = async (word) => {

    try {
        status.start(); // Start Spinner

        const definitions = await getWordDefinitions(word); // Get definitions

        console.log(
            info(`\nSome definitions of '${word}' are - `)
        );

        definitions.forEach((definition, index) => { // Log the definitions

            console.log(
                info(`${index + 1}. `) + definition.text
            );

        });

    } catch (err) {

        console.log(
            error(`\n${err}`)
        );

    } finally {

        status.stop(); // Stop Spinner

    }

}