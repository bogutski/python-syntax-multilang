// NAMEEN:
// NAMERU:Соединение строк по индексу

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `twoStrings`, которая принимает две строки и возвращает массив, состоящий из соединенных строк по индексу.

Например: `twoStrings('abc', 'def')` должно вернуть `['ad', 'be', 'cf']`

* `str1[0] + str2[0] = 'ad'`
* `str1[1] + str2[1] = 'be'`
* `str1[2] + str2[2] = 'cf'`

Две строки будут иметь одинаковую длину.

Пример запуска функции:
```js
twoStrings('abc', 'def'); // ['ad', 'be', 'cf']
twoStrings('123', '456'); // ['14', '25', '36']
twoStrings('a', 'b'); // ['ab']
twoStrings('', ''); // []
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
fun
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function twoStrings(str1, str2) {
  const arr = [];
  for(let i = 0; i < str1.length; i++) {
    arr.push(str1[i] + str2[i]);
  }
  return arr;
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function twoStrings', () => {
  expect(twoStrings).to.be.a('function');
});

it("twoStrings('abc', 'def') should return ['ad', 'be', 'cf']", () => {
  expect(twoStrings('abc', 'def')).to.deep.equal(['ad', 'be', 'cf']);
});

it("twoStrings('123', '456') should return ['14', '25', '36']", () => {
  expect(twoStrings('123', '456')).to.deep.equal(['14', '25', '36']);
});

it("twoStrings('apples', 'orange') should return ['ao', 'pr', 'pa', 'ln', 'eg', 'se']", () => {
  expect(twoStrings('apples', 'orange')).to.deep.equal(['ao', 'pr', 'pa', 'ln', 'eg', 'se']);
});

it("twoStrings('a', 'b') should return ['ab']", () => {
  expect(twoStrings('a', 'b')).to.deep.equal(['ab']);
});

it("twoStrings('', '') should return []", () => {
  expect(twoStrings('', '')).to.deep.equal([]);
});

it("twoStrings('123456', 'abcdef') should return ['1a', '2b', '3c', '4d', '5e', '6f']", () => {
  expect(twoStrings('123456', 'abcdef')).to.deep.equal(['1a', '2b', '3c', '4d', '5e', '6f']);
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
