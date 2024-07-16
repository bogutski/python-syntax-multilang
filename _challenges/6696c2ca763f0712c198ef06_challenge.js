// NAMEEN:
// NAMERU:Разделите строку на слова

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Исправьте функцию `wordsDivider` так, чтобы она разделяла строку на отдельные слова и возвращала массив слов.

Условия будут следующими:

* Слова разделяются одним пробелом
* Слова могут содержать только буквы и цифры
* Строка не будет начинаться или заканчиваться пробелом
* Строка не будет состоять из одних пробелов


Пример запуска функции:
```js
wordsDivider('Hello world'); // ['Hello', 'world']
wordsDivider('hi there'); // ['hi', 'there']
wordsDivider('12345 67890'); // ['12345', '67890']
wordsDivider('ab cd ef'); // ['ab', 'cd', 'ef']
wordsDivider(''); // []
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
fun
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function wordsDivider(str) {
  if (str.length === 0) return [];
  const array = [];
  let chunk = '';
  for (let i = 0; i < str.length; i++) {
    if (str[i] !== ' ') {
      chunk += str[i];
    } else {
      array.push(chunk);
      chunk = '';
    }
  }
  array.push(chunk);
  return array;
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function wordsDivider', () => {
  expect(wordsDivider).to.be.a('function');
});

it('wordsDivider("Hello world") should return ["Hello", "world"]', () => {
  expect(wordsDivider('Hello world')).to.deep.equal(['Hello', 'world']);
});

it('wordsDivider("P A S V world!") should return ["P", "A", "S", "V", "world!"]', () => {
  expect(wordsDivider('P A S V world!')).to.deep.equal(['P', 'A', 'S', 'V', 'world!']);
});

it('wordsDivider("123 456 789") should return ["123", "456", "789"]', () => {
  expect(wordsDivider('123 456 789')).to.deep.equal(['123', '456', '789']);
});

it('wordsDivider("ABC def GHI") should return ["ABC", "def", "GHI"]', () => {
  expect(wordsDivider('ABC def GHI')).to.deep.equal(['ABC', 'def', 'GHI']);
});

it('wordsDivider("") should return []', () => {
  expect(wordsDivider('')).to.deep.equal([]);
});

it('wordsDivider("banana") should return ["banana"]', () => {
  expect(wordsDivider('banana')).to.deep.equal(['banana']);
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
