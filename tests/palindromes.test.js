const palindromes = require('../palindromes');

const { reverseString, stripPunctuation, isPalindrome } = palindromes;

describe('reverseString()', () => {
  it('reverses a string', () => {
    expect(reverseString('abc')).toEqual('cba');
  });
});

describe('stripPunctuation()', () => {
  it('removes commas', () => {
    expect(stripPunctuation('a,b,c')).toEqual('abc');
  });
  it('removes white spaces ', () => {
    expect(stripPunctuation('   a b  c     ')).toEqual('abc');
  });
});

describe('isPalindrome()', () => {
  it('recognizes a true palindrome', () => {
    expect(isPalindrome('ama')).toBeTruthy();
  });
  it('recognizes a false palindrome', () => {
    expect(isPalindrome('akma')).toBeFalsy();
  });
});

describe('palindromes()', () => {
  it('identifies one-word palindromes', () => {
    expect(palindromes('madam')).toEqual(['madam']);
    expect(palindromes('hooh')).toEqual(['hooh']);
  });
  it('returns an empty array when given no palindromes', () => {
    expect(palindromes('tic tac toe')).toEqual([]);
  });
  it('ignores casing', () => {
    expect(palindromes('WoW')).toEqual(['wow']);
  });
  it('ignores punctuation', () => {
    expect(palindromes('yo, banana boy!')).toEqual(['yobananaboy']);
  });
  it('detects multi-word palindromes', () => {
    expect(palindromes('A man, a plan, a canal, Panama')).toEqual([
      'amanaplanacanalpanama',
    ]);
  });
  it('detects multiple palindromes in a text', () => {
    expect(palindromes('mananamullu')).toEqual(['mananam', 'ullu']);
    expect(palindromes('mananamullupogop')).toEqual([
      'mananam',
      'ullu',
      'pogop',
    ]);
  });
});
