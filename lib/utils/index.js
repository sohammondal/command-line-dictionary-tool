const chalk = require('chalk');
const CLI = require('clui');
const Spinner = CLI.Spinner;
const status = new Spinner('Please wait....');

module.exports = {
    error: chalk.bold.red,
    warn: chalk.yellow,
    success: chalk.greenBright,
    info: chalk.blueBright,
    status,
    getRandomNumberWithinLimit: (limit) => Math.floor(Math.random() * Math.floor(limit)),
    wordScrambler: (word) => {
        let wordArr = word.split('');
        let counter = wordArr.length;
        let temp, index;

        while (counter > 0) { // While there are elements in the array

            index = Math.floor(Math.random() * counter); // Pick a random index
            counter--; // Decrease ctr by 1

            // And swap the last element with it
            temp = wordArr[counter];
            wordArr[counter] = wordArr[index];
            wordArr[index] = temp;
        }
        return wordArr.join('');
    }
}