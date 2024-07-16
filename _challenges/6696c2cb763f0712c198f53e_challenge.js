// NAMEEN:
// NAMERU:Заполнение двумерного массива

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `fillTwoDimArray`, которая инициализирует двумерный массив заданными размерами и заполняет его указанным значением.

Функция должна принимать три параметра: `n` — количество строк в массиве, `m` — количество столбцов в каждой строке, и `value` — значение для заполнения каждого элемента массива.

Ваша задача — создать и вернуть двумерный массив размером `n x m`, где каждый элемент этого массива равен `value`, используя метод `fill()` для задания значений.


Примеры Запуска Функции:
```javascript
console.log(fillTwoDimArray(2, 3, 1));
// [
//   [1, 1, 1],
//   [1, 1, 1]
// ]

console.log(fillTwoDimArray(3, 2, 'x'));
// [
//   ['x', 'x'],
//   ['x', 'x'],
//   ['x', 'x']
// ]
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
function fillTwoDimArray(){

}
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function fillTwoDimArray(n, m, value) {
  return new Array(n).fill(new Array(m).fill(value));
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function fillTwoDimArray', () => {
  expect(fillTwoDimArray).to.be.a('function');
});

it('Function fillTwoDimArray should include method fill()', () => {
  const res = fillTwoDimArray.toString()
  expect(res).to.include('.fill(')
});

it("fillTwoDimArray(2, 3, 1) should return a 2x3 array filled with 1s", function() {
  expect(fillTwoDimArray(2, 3, 1)).to.deep.equal([[1, 1, 1], [1, 1, 1]]);
});

it("fillTwoDimArray(3, 2, 'x') should return a 3x2 array filled with 'x'", function() {
  expect(fillTwoDimArray(3, 2, 'x')).to.deep.equal([['x', 'x'], ['x', 'x'], ['x', 'x']]);
});

it("fillTwoDimArray(1, 1, 0) should return [[0]]", function() {
  expect(fillTwoDimArray(1, 1, 0)).to.deep.equal([[0]]);
});

it("fillTwoDimArray(0, 0, 'empty') should return an empty array", function() {
  expect(fillTwoDimArray(0, 0, 'empty')).to.deep.equal([]);
});

it("fillTwoDimArray(4, 4, false) should return a 4x4 array filled with false", function() {
  expect(fillTwoDimArray(4, 4, false)).to.deep.equal([[false, false, false, false], [false, false, false, false], [false, false, false, false], [false, false, false, false]]);
});

it("fillTwoDimArray(2, 5, null) should return a 2x5 array filled with null", function() {
  expect(fillTwoDimArray(2, 5, null)).to.deep.equal([[null, null, null, null, null], [null, null, null, null, null]]);
});

it("fillTwoDimArray(3, 1, 'a') should return a 3x1 array filled with 'a'", function() {
  expect(fillTwoDimArray(3, 1, 'a')).to.deep.equal([['a'], ['a'], ['a']]);
});

it("fillTwoDimArray(2, 2, undefined) should return a 2x2 array filled with undefined", function() {
  expect(fillTwoDimArray(2, 2, undefined)).to.deep.equal([[undefined, undefined], [undefined, undefined]]);
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
