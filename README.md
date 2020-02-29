# Command Line Dictionary Tool

## System Requirements

- nodejs
- npm

## Running the project 
- `git clone https://github.com/sohammondal/command-line-dictionary-tool.git`
- `cd command-line-dictionary-tool`
- DEV
  - `npm install` installs dependencies
  - `npm run test` run tests
- PROD 
  - `npm install -g` makes `dict` globally available

## Usage
- `dict defn <word>` Display definitions of a given word.
- `dict syn <word>` Display synonyms of a given word. 
- `dict ant <word>` Display antonyms of a given word. Note that not all words would have Antonyms (End point: /relatedWords). Example words with antonyms: single, break, start.
- `dict ex  <word>` Display examples of usage of a given word in a sentence. 
- `dict <word>` Display Word Definitions, Word Synonyms, Word Antonyms & Word Examples for a given word.
- `dict play` Display Word Definitions, Word Synonyms, Word Antonyms & Word Examples for a random word.
- `dict` The command should display a definition, a synonym or an antonym and ask the user to guess the word. 


## Folder Structure

- `package.json` contains dependencies, node scripts and project description
- `index.js` entry point of the app
- `lib/config` stores configuration
- `lib/apis` contains word apis
- `lib/routes` contains rest api word routes
- `lib/middlewares` contains express middlewares errorHandler
- `lib/util` contains a helper functions to be used throughout the app
- `__tests__` contains the test files