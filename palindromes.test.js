const palindromes = require('./palindromes')

describe('palindromes()', () => {
    it('idetifies one-word palinddromes', () => {
        expect(palindromes('madam')).toEqual(['madam'])
    })
})

