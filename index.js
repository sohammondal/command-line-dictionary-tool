#!/usr/bin/env node

const main = (args = process.argv.slice(2)) => {

    const option = args[0];
    const word = args[1];

    switch (option) {

        case 'defn': // Word Definitions

            break;

        case 'syn': // Word Synonyms

            break;

        case 'ant': // Word Antonyms

            break;

        case 'ex': // Word Examples

            break;

        case 'play': // Word Game

            break;

        default:

            if (option) { // Given Word Full Dict

            } else { // Word of the Day - Random Word Full Dict

            }

            break;
    }

}


main();