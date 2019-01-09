const reverseString = str => {
  return str
    .split('')
    .reverse()
    .join('');
};

const stripPunctuation = str => {
  return str.replace(/[^a-z]/g, '');
};

const isPalindrome = str => {
  return str === reverseString(str);
};

const palindromes = str => {
  str = stripPunctuation(str.toLowerCase());

  let results = [];

  for (let i = 0; i < str.length; i++) {
    for (let j = 0; j < str.length; j++) {
      let part = str.substring(i, j + 1);
      if (part.length > 2 && isPalindrome(part)) {
        if (results.indexOf(part) < 0) {
          results.push(part);
        }
      }
    }
  }

  let strippedResults = [];
  results.forEach((element, index, array) => {
    let isContained = false;
    for (let i = 0; i < array.length; i++) {
      if (i != index && array[i].indexOf(element) >= 0) {
        isContained = true;
      }
    }

    if (!isContained) {
      strippedResults.push(element);
    }
  });

  return strippedResults;
};

palindromes.reverseString = reverseString;
palindromes.stripPunctuation = stripPunctuation;
palindromes.isPalindrome = isPalindrome;

module.exports = palindromes;
