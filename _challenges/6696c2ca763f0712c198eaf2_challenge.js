// NAMEEN:
// NAMERU:Замена пробелов в строке на null

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `replaceSpaces`, которая принимает строку и возвращает массив из символов этой строки.

В строке могут быть пробелы. В массиве эти пробелы должны быть заменены на `null`.

В результате функция вернет массив, в котором строка будет перевернута и в конце будут `null` в количестве пробелов в строке.

Используйте методы массива: `push`, `unshift`.

Примеры запуска функции:
```js
replaceSpaces('hi there') // [ 'e', 'r',  'e', 'h', 't',  'i', 'h', null ]
replaceSpaces('abcdef') // [ 'f', 'e', 'd', 'c', 'b', 'a' ]
replaceSpaces('a b c d') // [ 'd', 'c', 'b', 'a', null, null, null ]
replaceSpaces('    ') // [ null, null, null, null ]
replaceSpaces('') // []
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
fun
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function replaceSpaces(string) {
  const arr = [];
  for (let i = 0; i < string.length; i++) {
    if (string[i] === ' ') arr.push(null);
    else arr.unshift(string[i]);
  }
  return arr;
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function replaceSpaces', () => {
  expect(replaceSpaces).to.be.a('function');
});

it("replaceSpaces('hello world') should return ['d', 'l', 'r', 'o', 'w', 'o', 'l', 'l', 'e', 'h', null]", () => {
  expect(replaceSpaces('hello world')).to.deep.equal(['d', 'l', 'r', 'o', 'w', 'o', 'l', 'l', 'e', 'h', null]);
});

it("replaceSpaces('ca lif or nia') should return ['a', 'i', 'n', 'r', 'o', 'f', 'i', 'l', 'a', 'c', null, null, null]", () => {
  expect(replaceSpaces('ca lif or nia')).to.deep.equal(['a', 'i', 'n', 'r', 'o', 'f', 'i', 'l', 'a', 'c', null, null, null]);
});

it("replaceSpaces('new j e r s e y') should return ['y', 'e', 's', 'r', 'e', 'j', 'w', 'e', 'n', null, null, null, null, null, null]", () => {
  expect(replaceSpaces('new j e r s e y')).to.deep.equal(['y', 'e', 's', 'r', 'e', 'j', 'w', 'e', 'n', null, null, null, null, null, null]);
});

it("replaceSpaces('a b c d') should return ['d', 'c', 'b', 'a', null, null, null]", () => {
  expect(replaceSpaces('a b c d')).to.deep.equal(['d', 'c', 'b', 'a', null, null, null]);
});

it("replaceSpaces('APPLES') should return ['S', 'E', 'L', 'P', 'P', 'A']", () => {
  expect(replaceSpaces('APPLES')).to.deep.equal(['S', 'E', 'L', 'P', 'P', 'A']);
});

it("replaceSpaces('     ') should return [null, null, null, null, null]", () => {
  expect(replaceSpaces('     ')).to.deep.equal([null, null, null, null, null]);
});

it("replaceSpaces('') should return []", () => {
  expect(replaceSpaces('')).to.deep.equal([]);
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
