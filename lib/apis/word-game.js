const inquirer = require('inquirer');
const { getRandomWord, getWordDefinitions, getWordSynonyms, getWordAntonyms } = require('../routes');
const { getWordFullDetails } = require('./');
const { info, success, status, getRandomNumberWithinLimit, wordScrambler } = require('../utils');


const play = async () => {

    try {
        status.start(); // Start Spinner

        const word = await getRandomWord(); // get a random word to play with
        const definitions = await getWordDefinitions(word); // get word definition
        const antonyms = await getWordAntonyms(word); // get word antonyms
        const synonyms = await getWordSynonyms(word); // get word synonyms

        let count = 0; // a count varibale to keep track of re-tries & what hints showed

        // Displays hints to user
        const hint = () => {

            let hints = []; // to Store the hints 

            // store the jumbled word hint first
            hints.push(`Jumbled word: ${wordScrambler(word)}`);

            // then a definition of the word
            hints.push(`\nDefinition: ${info(definitions[count].text)}`);

            // then an antonym of the word if only antonyms exist for the word
            antonyms.length ? hints.push(`Antonym: ${info(antonyms[count])}`) : null

            // then a synonym of the word if only synonyms exist for the word
            synonyms.length ? hints.push(`Synonym: ${info(synonyms[count])}`) : null

            if (count) { // if count > 0, user is retring

                console.log(hints[getRandomNumberWithinLimit(4)]); // so, give a random hint from the hints array

            } else {  // user attempting for the first time

                // give him 2 hints from the hints array 
                console.log(hints[1]);
                console.log(hints[2]);

            }

            // generic message for all attempts
            console.log('Can you guess the word?');
        }

        // to check if user's answer is correct or not
        // rule: it is correct if user guesses the actual word or a synonym of the word
        const isCorrect = (answer) => answer === word || synonyms.includes(answer)

        hint();

        const start = async () => {

            const questions = [
                {
                    type: 'input',
                    name: 'word',
                    message: 'Enter your answer:',
                },
                {
                    when: (input) => !isCorrect(input.word), // ask re-attempt questions of if user's answer is incorrect
                    type: 'list',
                    name: 'choice',
                    message: 'Opps! That was wrong. What do you want to do?',
                    choices: [
                        'Try Again',
                        'Hint',
                        'Quit'
                    ]
                }
            ]

            const answer = await inquirer.prompt(questions);

            if (isCorrect(answer.word)) {
                console.log('🎉 ', success('Hurray! You guessed it right.'));
                return;
            }

            switch (answer.choice) {
                case 'Try Again':
                    count++; // increment count
                    start(); // and re-start the game
                    break;
                case 'Hint':
                    count++; // increment count
                    hint(); // provide hints to user
                    start(); // and re-start the game
                    break;
                case 'Quit':
                    console.log(`The correct word - ${info(word)}.`) // tell user the correct word
                    getWordFullDetails(word); // and provide full details of the word
                    break;
                default:
                    break;
            }

        };

        return start;

    } catch (err) {

        console.log(
            error(`\n${err}`)
        );

    } finally {
        status.stop(); // Stop Spinner
    }
};

module.exports = play();