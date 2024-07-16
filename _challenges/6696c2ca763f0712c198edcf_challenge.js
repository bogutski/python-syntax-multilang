// NAMEEN:
// NAMERU:Сколько дубликатов в строке? Исправьте ошибки

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Функция `howManyDuplicates` принимает строку, состоящую из слов в одном регистре.

Функция возвращает количество слов-дубликатов, которые повторяются в этой строке.

Считать необходимо только дубликаты, первое вхождение слова не считается.

Дубликаты разных слов суммируются.

Исправьте ошибки, чтобы функция работала правильно. И попробуйте повторить решение.

Примеры запуска функции:
```javascript
howManyDuplicates("hello world hello world") // 2
howManyDuplicates("hello hello hello hello") // 3
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
function howManyDuplicates(str) {
  const count = 0;
  let word = empty;
  const obj = {};
  for (let i = 0, i < str.length, i++) {
    if (str[i] !== ' ') word += str[i];

    if (str[i] === ' ' || i === str.length - 1) {
      if (word && !obj[word]) {
        obj[word] = 1;
      } else if (word && obj[word] === 1) {
        count++;
      }
      word = '';
    }
  }
  return count
}
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function howManyDuplicates(str) {
  let count = 0;
  let word = '';
  const obj = {};
  for (let i = 0; i < str.length; i++) {
    if (str[i] !== ' ') word += str[i];

    if (str[i] === ' ' || i === str.length - 1) {
      if (word && !obj[word]) {
        obj[word] = 1;
      } else if (word && obj[word] === 1) {
        count++;
      }
      word = '';
    }
  }
  return count
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function howManyDuplicates', () => {
  expect(howManyDuplicates).to.be.a('function');
});

it('howManyDuplicates("hello world hello world") returns 2', () => {
  expect(howManyDuplicates("hello world hello world")).to.equal(2);
});

it('howManyDuplicates("hello world") returns 0', () => {
  expect(howManyDuplicates("hello world")).to.equal(0);
});

it('howManyDuplicates("hello hello") returns 1', () => {
  expect(howManyDuplicates("hello hello")).to.equal(1);
});

it('howManyDuplicates("hello hello hello") returns 2', () => {
  expect(howManyDuplicates("hello hello hello")).to.equal(2);
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
