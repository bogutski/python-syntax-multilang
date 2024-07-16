// NAMEEN:
// NAMERU:Преобразование строки в массив

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `stringToArray`, которая принимает строку и возвращает массив, состоящий из символов этой строки.

В функцию будут передаваться только строки.

В случае пустой строки функция должна вернуть пустой массив.

Примеры запуска функции:
```javascript
stringToArray('hello'); // ['h', 'e', 'l', 'l', 'o']
stringToArray('123456'); // ['1', '2', '3', '4', '5', '6']
stringToArray(''); // []
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
fun
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function stringToArray(string) {
  const array = [];
  for (let i = 0; i < string.length; i++) {
    array.push(string[i]);
  }
  return array;
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function stringToArray', () => {
  expect(stringToArray).to.be.a('function');
});

it("stringToArray('hello') should return ['h', 'e', 'l', 'l', 'o']", () => {
  expect(stringToArray('hello')).to.eql(['h', 'e', 'l', 'l', 'o']);
});

it("stringToArray('hello world') should return ['h', 'e', 'l', 'l', 'o', ' ', 'w', 'o', 'r', 'l', 'd']", () => {
  expect(stringToArray('hello world')).to.eql(['h', 'e', 'l', 'l', 'o', ' ', 'w', 'o', 'r', 'l', 'd']);
});

it("stringToArray('123456789') should return ['1', '2', '3', '4', '5', '6', '7', '8', '9']", () => {
  expect(stringToArray('123456789')).to.eql(['1', '2', '3', '4', '5', '6', '7', '8', '9']);
});

it("stringToArray('') should return []", () => {
  expect(stringToArray('')).to.eql([]);
});

it("stringToArray('abc') should return ['a', 'b', 'c']", () => {
  expect(stringToArray('abc')).to.eql(['a', 'b', 'c']);
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
