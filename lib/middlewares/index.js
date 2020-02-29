const { error } = require('../utils')

module.exports = {
    wordValidator: (word, callback) => {
        if (!word) {
            console.log(
                error('ERROR: Enter a valid word')
            );
            return;
        }
        callback(word);
    }
}