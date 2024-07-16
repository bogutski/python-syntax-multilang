// NAMEEN:
// NAMERU:Добавить перевернутую строку в массив

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `reverseString`, которая принимает строку - `string` и символ - `breakPoint`.

Создайте цикл, который будет идти с конца строки и добавлять в массив символы, методом `push`.

При этом цикл должен остановиться, если встретит символ `breakPoint`.

Верните массив.


Пример запуска функции:
```js
reverseString('hello', 'l') // ['o']
reverseString('hello', 'w') // ['o', 'l', 'l', 'e', 'h']
reverseString('javascript', 'a') // ['t', 'p', 'i', 'r', 'c', 's']
reverseString('', 'p') // []
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
fun
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function reverseString(string, breakPoint) {
  const arr = [];
  for (let i= string.length - 1; i >= 0; i--) {
    if(string[i] === breakPoint) break;
    arr.push(string[i]);
  }
  return arr;
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function reverseString', () => {
  expect(reverseString).to.be.a('function');
});

it("reverseString('hello', 'l') should return ['o']", () => {
  expect(reverseString('hello', 'l')).to.be.eql(['o']);
});

it("reverseString('hello', 'e') should return ['o', 'l', 'l']", () => {
  expect(reverseString('hello', 'e')).to.be.eql(['o', 'l', 'l']);
});

it("reverseString('javascript', 'a') should return ['t', 'p', 'i', 'r', 'c', 's']", () => {
  expect(reverseString('javascript', 'a')).to.be.eql(['t', 'p', 'i', 'r', 'c', 's']);
});

it("reverseString('javascript', 's') should return ['t', 'p', 'i', 'r', 'c']", () => {
  expect(reverseString('javascript', 's')).to.be.eql(['t', 'p', 'i', 'r', 'c']);
});

it("reverseString('apples', 'p') should return ['s', 'e', 'l']", () => {
  expect(reverseString('apples', 'p')).to.be.eql(['s', 'e', 'l']);
});

it("reverseString('', 'p') should return []", () => {
  expect(reverseString('', 'p')).to.be.eql([]);
});

it("reverseString('loop', '') should return ['p', 'o', 'o', 'l']", () => {
  expect(reverseString('loop', '')).to.be.eql(['p', 'o', 'o', 'l']);
});

it("reverseString('watermelon', 'S') should return ['n', 'o', 'l', 'e', 'm', 'r', 'e', 't', 'a', 'w']", () => {
  expect(reverseString('watermelon', 'S')).to.be.eql(['n', 'o', 'l', 'e', 'm', 'r', 'e', 't', 'a', 'w']);
});

it("reverseString('', '') should return []", () => {
  expect(reverseString('', '')).to.be.eql([]);
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
