// NAMEEN:
// NAMERU:Посчитать гласные строчные и прописные

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Функция `countLetters` принимает строку

Строка может состоять из букв латинского алфавита в разных регистрах и символов.

Функция должна возвращать объект со следующими свойствами:
* `vowelLowerCase` - количество гласных букв в нижнем регистре
* `vowelUpperCase` - количество гласных букв в верхнем регистре
* `others` - количество остальных символов и/или согласных букв

Пример запуска функции:
```javascript
countLetters('aAbcde') // { vowelLowerCase: 2, vowelUpperCase: 1, others: 3 }
countLetters('HI there! 123') // { vowelLowerCase: 2, vowelUpperCase: 1, others: 10 }
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
fun
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function countLetters(str) {
  let vowelLowerCase = 0;
  let vowelUpperCase = 0;
  let others = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === 'a' || str[i] === 'e' || str[i] === 'i' || str[i] === 'o' || str[i] === 'u') {
      vowelLowerCase++
    } else if (str[i] === 'A' || str[i] === 'E' || str[i] === 'I' || str[i] === 'O' || str[i] === 'U') {
      vowelUpperCase++
    } else {
      others++
    }
  }
  return {
    vowelLowerCase,
    vowelUpperCase,
    others,
  }
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function countLetters', () => {
  expect(countLetters).to.be.a('function');
});

it('countLetters("aAbcde") should return { vowelLowerCase: 2, vowelUpperCase: 1, others: 3 }', () => {
  expect(countLetters('aAbcde')).to.deep.equal({vowelLowerCase: 2, vowelUpperCase: 1, others: 3});
});

it('countLetters("Hello") should return { vowelLowerCase: 2, vowelUpperCase: 0, others: 3 }', () => {
  expect(countLetters('Hello')).to.deep.equal({vowelLowerCase: 2, vowelUpperCase: 0, others: 3});
});

it('countLetters("PASV") should return { vowelLowerCase: 0, vowelUpperCase: 1, others: 3 }', () => {
  expect(countLetters('PASV')).to.deep.equal({vowelLowerCase: 0, vowelUpperCase: 1, others: 3});
});

it('countLetters("123") should return { vowelLowerCase: 0, vowelUpperCase: 0, others: 3 }', () => {
  expect(countLetters('123')).to.deep.equal({vowelLowerCase: 0, vowelUpperCase: 0, others: 3});
});

it('countLetters("") should return { vowelLowerCase: 0, vowelUpperCase: 0, others: 0 }', () => {
  expect(countLetters('')).to.deep.equal({vowelLowerCase: 0, vowelUpperCase: 0, others: 0});
});

it('countLetters("JAVA SCRIPT") should return { vowelLowerCase: 0, vowelUpperCase: 3, others: 8 }', () => {
  expect(countLetters('JAVA SCRIPT')).to.deep.equal({vowelLowerCase: 0, vowelUpperCase: 3, others: 8});
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
