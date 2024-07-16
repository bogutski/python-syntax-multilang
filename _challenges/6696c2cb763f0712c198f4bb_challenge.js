// NAMEEN:
// NAMERU:Перевести текст массива в верхний регистр

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `uppercaseArray`, которая принимает массив строк и использует метод `forEach` для перевода каждой строки массива в верхний регистр.

Функция должна возвращать новый массив с изменёнными строками.


Пример запуска функции:
```javascript
uppercaseArray(["a", "b", "c"]); // [ 'A', 'B', 'C' ]
uppercaseArray(["hello", "world", "javascript"]); // [ 'HELLO', 'WORLD', 'JAVASCRIPT' ]
uppercaseArray([]); // []
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
function uppercaseArray(){

}
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function uppercaseArray(arr) {
  let res = [];
  arr.forEach(str => res.push(str.toUpperCase()))

  return res;
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function uppercaseArray', () => {
  expect(uppercaseArray).to.be.a('function');
});

it('Function uppercaseArray should include method forEach()', () => {
  const res = uppercaseArray.toString()
  expect(res).to.include('.forEach(')
});

it("uppercaseArray(['hello', 'world', 'javascript']) should return ['HELLO', 'WORLD', 'JAVASCRIPT']", () => {
  expect(uppercaseArray(["hello", "world", "javascript"])).to.deep.equal(["HELLO", "WORLD", "JAVASCRIPT"]);
});

it("uppercaseArray(['']) should return ['']", () => {
  expect(uppercaseArray([''])).to.deep.equal(['']);
});

it("uppercaseArray(['apple', 'banana']) should return ['APPLE', 'BANANA']", () => {
  expect(uppercaseArray(["apple", "banana"])).to.deep.equal(["APPLE", "BANANA"]);
});

it("uppercaseArray(['Test', 'tESt', 'test']) should return ['TEST', 'TEST', 'TEST']", () => {
  expect(uppercaseArray(["Test", "tESt", "test"])).to.deep.equal(["TEST", "TEST", "TEST"]);
});

it("uppercaseArray([]) should return []", () => {
  expect(uppercaseArray([])).to.deep.equal([]);
});

it("uppercaseArray(['Mixed', 'CaSe', 'WoRds']) should return ['MIXED', 'CASE', 'WORDS']", () => {
  expect(uppercaseArray(["Mixed", "CaSe", "WoRds"])).to.deep.equal(["MIXED", "CASE", "WORDS"]);
});

it("uppercaseArray(['one', 'two', 'three', 'four']) should return ['ONE', 'TWO', 'THREE', 'FOUR']", () => {
  expect(uppercaseArray(["one", "two", "three", "four"])).to.deep.equal(["ONE", "TWO", "THREE", "FOUR"]);
});

it("uppercaseArray(['', ' ', '   ']) should return ['', ' ', '   ']", () => {
  expect(uppercaseArray(['', ' ', '   '])).to.deep.equal(['', ' ', '   ']);
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
