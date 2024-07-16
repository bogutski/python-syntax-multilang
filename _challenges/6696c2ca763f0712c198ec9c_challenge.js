// NAMEEN:
// NAMERU:Посчитать гласные

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Функция `countVowels` принимает строку и возвращает количество гласных букв в строке.

Строка состоит только из строчных букв.

Примеры запуска функции:
```javascript
countVowels("hello") // 2
countVowels("why") // 0
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
function
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function countVowels(str) {
  let vowel = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === 'e' || str[i] === 'u' || str[i] === 'i' || str[i] === 'o' || str[i] === 'a') {
      vowel += 1
    }
  }
  return vowel
}

// SOLUTIONEND


// OPENTESTSSTART
it('Created function countVowels', () => {
  expect(countVowels).to.be.a('function');
});

it('countVowels("hello") returns 2', () => {
  expect(countVowels("hello")).to.equal(2);
});

it('countVowels("why") returns 0', () => {
  expect(countVowels("why")).to.equal(0);
});

it('countVowels("mississippi") returns 4', () => {
  expect(countVowels("mississippi")).to.equal(4);
});

it('countVowels("aaaaa") returns 5', () => {
  expect(countVowels("aaaaa")).to.equal(5);
});

// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
