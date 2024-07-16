// NAMEEN:
// NAMERU:Посчитать количество гласных в строке. Исправьте ошибки

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Функция `countOnlyVowel` принимает строку, которая может содержать гласные и согласные строчные буквы.

Необходимо посчитать только количество вхождений гласных букв в строку и вернуть результат в виде строки в формате:

`${str} includes ${vowel} vowels and ${str.length - vowel} consonants`

Необходимо исправить ошибки в коде, чтобы функция работала правильно.

Примеры запуска функции
```javascript
countOnlyVowel('hello') // 'hello includes 2 vowels and 3 consonants'
countOnlyVowel('world') // 'world includes 1 vowels and 4 consonants'
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
function countOnlyVowel(str) {
  let vowel = 0
  for (let i = 0, i = str.length, i++) {
    if (str[i] === 'e' || str[i] === 'u' || str[i] === 'i' || str[i] === 'o' || str[i] === 'a') {
      vowel++
    }
  }
  return  `${str} includes ${vowel} vowels and ${str.length - vowel} consonants`;
}
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function countOnlyVowel(str) {
  let vowel = 0
  for (let i = 0; i < str.length; i++) {
    if (str[i] === 'e' || str[i] === 'u' || str[i] === 'i' || str[i] === 'o' || str[i] === 'a') {
      vowel += 1;
    }
  }
  return `${str} includes ${vowel} vowels and ${str.length - vowel} consonants`;
}

// SOLUTIONEND


// OPENTESTSSTART
it('Created function countOnlyVowel', () => {
  expect(countOnlyVowel).to.be.a('function');
});

it('countOnlyVowel("hello") should return "hello includes 2 vowels and 3 consonants"', () => {
  expect(countOnlyVowel('hello')).to.be.equal('hello includes 2 vowels and 3 consonants');
});

it('countOnlyVowel("world") should return "world includes 1 vowels and 4 consonants"', () => {
  expect(countOnlyVowel('world')).to.be.equal('world includes 1 vowels and 4 consonants');
});

it('countOnlyVowel("a") should return "a includes 1 vowels and 0 consonants"', () => {
  expect(countOnlyVowel('a')).to.be.equal('a includes 1 vowels and 0 consonants');
});

it('countOnlyVowel("b") should return "b includes 0 vowels and 1 consonants"', () => {
  expect(countOnlyVowel('b')).to.be.equal('b includes 0 vowels and 1 consonants');
});

it('countOnlyVowel("aeiou") should return "aeiou includes 5 vowels and 0 consonants"', () => {
  expect(countOnlyVowel('aeiou')).to.be.equal('aeiou includes 5 vowels and 0 consonants');
});

it('countOnlyVowel("bcdfghjklmnpqrstvwxyz") should return "bcdfghjklmnpqrstvwxyz includes 0 vowels and 21 consonants"', () => {
  expect(countOnlyVowel('bcdfghjklmnpqrstvwxyz')).to.be.equal('bcdfghjklmnpqrstvwxyz includes 0 vowels and 21 consonants');
});

it('countOnlyVowel("") should return "hello world includes 0 vowels and 0 consonants"', () => {
  expect(countOnlyVowel('')).to.be.equal(' includes 0 vowels and 0 consonants');
});

// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
