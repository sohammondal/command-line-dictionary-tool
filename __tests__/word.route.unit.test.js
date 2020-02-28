const { getRandomWord } = require('../lib/routes');

describe('Testing Word Routes', () => {

    it('should return a random string', () => {
        expect(getRandomWord()).resolves.toBeInstanceOf(String);
    })

})
