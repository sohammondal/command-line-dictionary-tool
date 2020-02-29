const { getWordExamples } = require('../routes');

const { error, info, status } = require('../utils');

module.exports = async (word) => {

    try {
        status.start(); // Start Spinner

        const examples = await getWordExamples(word); // Get Examples

        console.log(
            info('\nSome examples of ' + word + ' are - ')
        );

        examples.forEach((example, index) => { // Log the examples

            console.log(
                info(`${index + 1}. `) + example.text
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