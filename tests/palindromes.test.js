const palindromes = require('../palindromes');

describe('palindromes()', () => {
  it('identifies one-word palindromes', () => {
    expect(palindromes('madam')).toEqual(['madam']);
    expect(palindromes('holloh')).toEqual(['holloh']);
  });
});
