const { getRandomWord, getWordExamples } = require('../lib/routes');

const mockKnownWord = 'shift';
const mockUnknownWord = 'uplift';

describe('Testing Word Routes', () => {

    it('should return a random string', () => {
        expect(getRandomWord()).resolves.toBeInstanceOf(String);
    })

    describe('/word/{word}/examples route test', () => {
        it('should return examples of known word', () => {
            expect(getWordExamples(mockKnownWord)).resolves.toBeInstanceOf(Array);
        })

        it('should throw error for examples of unknown word', () => {
            expect(getWordExamples(mockUnknownWord)).rejects.toBe('Error: word not found');
        })
    })

})
