const { getRandomWord, getWordExamples, getWordDefinitions, getWordSynonyms, getWordAntonyms } = require('../lib/routes');

const mockKnownWord = 'shift';
const mockUnknownWord = 'uplift';

describe('Testing Word Routes', () => {

    it('should return a random string', () => {
        return expect(getRandomWord().then(randomWord => typeof randomWord)).resolves.toBe("string");
    })

    describe('Testing {apihost}/word/{word}/examples', () => {
        it('should return examples of known word', () => {
            return expect(getWordExamples(mockKnownWord)).resolves.toBeInstanceOf(Array);
        })

        it('should throw error for examples of unknown word', () => {
            return expect(getWordExamples(mockUnknownWord)).rejects.toBe('Error: word not found');
        })
    })

    describe('Testing {apihost}/word/{word}/definitions', () => {
        it('should return definitions of known word', () => {
            return expect(getWordDefinitions(mockKnownWord)).resolves.toBeInstanceOf(Array);
        })
        it('should reject because of unknown word', () => {
            return expect(getWordDefinitions(mockUnknownWord)).rejects.toMatch('Error: word not found');
        })
    })

    describe('Testing {apihost}/word/{word}/relatedWords for synonyms', () => {
        it('should return synonyms of known word', () => {
            return expect(getWordSynonyms(mockKnownWord)).resolves.toBeInstanceOf(Array);
        })
        it('should reject because of unknown word', () => {
            return expect(getWordSynonyms(mockUnknownWord)).rejects.toMatch('Error: word not found');
        })
    })

    describe('Testing {apihost}/word/{word}/relatedWords for antonyms', () => {
        it('should return antonyms of known word', () => {
            return expect(getWordAntonyms(mockKnownWord)).resolves.toBeInstanceOf(Array);
        })
        it('should reject because of unknown word', () => {
            return expect(getWordAntonyms(mockUnknownWord)).rejects.toMatch('Error: word not found');
        })
    })

})
