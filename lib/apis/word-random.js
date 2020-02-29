const { getRandomWord } = require('../routes');
const { getWordFullDetails } = require('./index');
const { success, info } = require('../utils')

module.exports = async () => {
    try {
        const word = await getRandomWord();

        console.log(
            info(`Word of the day - ${success(word)}`)
        )

        await getWordFullDetails(word);

    } catch (err) {

        console.log(
            error(`\n${err}`)
        );

    }
}