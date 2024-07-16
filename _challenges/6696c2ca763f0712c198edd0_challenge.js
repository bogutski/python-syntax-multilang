// NAMEEN:
// NAMERU:Сколько дубликатов в строке?

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Функция `countDuplicates` принимает строку, состоящую из слов в одинаковом регистре.

Необходимо посчитать сколько cлов-дубликатов содержится в строке.

Первое вхождение слова не считается дубликатом. Дубликаты разных слов суммируются между собой.

Пример запуска функции:
```javascript
countDuplicates('abc cde def') // 0
countDuplicates('abc abc abc abc def def def') // 5
countDuplicates('abc cde abc cde') // 2
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
fun
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function countDuplicates(str) {
  let count = 0;
  let word = '';
  const obj = {};
  for (let i = 0; i < str.length; i++) {
    if (str[i] !== ' ') word += str[i];

    if (str[i] === ' ' || i === str.length - 1) {
      if (word && !obj[word]) {
        obj[word] = 1;
      } else if (obj[word] === 1) {
        count++;
      }
      word = '';
    }
  }
  return count
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function countDuplicates', () => {
  expect(countDuplicates).to.be.a('function');
});

it('countDuplicates("abc cde def") should returns 0', () => {
  expect(countDuplicates('abc cde def')).to.equal(0);
});

it('countDuplicates("abc cde abc") should returns 1', () => {
  expect(countDuplicates('abc cde abc')).to.equal(1);
});

it('countDuplicates("abc cde abc cde") should returns 2', () => {
  expect(countDuplicates('abc cde abc cde')).to.equal(2);
});

it('countDuplicates("") should returns 0', () => {
  expect(countDuplicates('')).to.equal(0);
});

it('countDuplicates("abc abc abc abc def def def") should returns 5', () => {
  expect(countDuplicates('abc abc abc abc def def def')).to.equal(5);
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
