// NAMEEN:
// NAMERU:Добавление элементов в начало массива

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `simplePrepend`, которая принимает массив и один элемент для добавления.

Функция должна добавить переданный элемент в начало исходного массива с использованием метода `splice()`.

Функция должна возвращать измененный массив.


Пример запуска функции:
```javascript
simplePrepend([2, 3, 4], 1); // [ 1, 2, 3, 4 ]
simplePrepend(['b', 'c', 'd'], 'a'); // [ 'a', 'b', 'c', 'd' ]
simplePrepend([], 'start'); // [ 'start' ]
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
function simplePrepend(){

}
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function simplePrepend(arr, el) {
  arr.splice(0, 0, el)
  return arr;
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function simplePrepend', () => {
  expect(simplePrepend).to.be.a('function');
});

it('Function simplePrepend should include methods splice()', () => {
  const res = simplePrepend.toString()
  expect(res).to.include('.splice(')
});

it("simplePrepend([2, 3, 4], 1) should return [1, 2, 3, 4]", () => {
  expect(simplePrepend([2, 3, 4], 1)).to.deep.equal([1, 2, 3, 4]);
});

it("simplePrepend(['b', 'c', 'd'], 'a') should return ['a', 'b', 'c', 'd']", () => {
  expect(simplePrepend(['b', 'c', 'd'], 'a')).to.deep.equal(['a', 'b', 'c', 'd']);
});

it("simplePrepend([], 'start') should return ['start']", () => {
  expect(simplePrepend([], 'start')).to.deep.equal(['start']);
});

it("simplePrepend(['item'], 'newItem') should add 'newItem' at the beginning", () => {
  let testArray = ['item'];
  expect(simplePrepend(testArray, 'newItem')).to.deep.equal(['newItem', 'item']);
});

it("should verify the returned array is the same instance as the input array", () => {
  let inputArray = [3, 4];
  let resultArray = simplePrepend(inputArray, 2);
  expect(resultArray).to.equal(inputArray);
});

it("simplePrepend(['end'], 'start') should return ['start', 'end']", () => {
  expect(simplePrepend(['end'], 'start')).to.deep.equal(['start', 'end']);
});

it("simplePrepend([4, 5, 6], 3) after calling simplePrepend([1, 2], 0) should return [3, 4, 5, 6]", () => {
  simplePrepend([1, 2], 0); // Предыдущий вызов, не влияющий на следующий тест
  expect(simplePrepend([4, 5, 6], 3)).to.deep.equal([3, 4, 5, 6]);
});

it("simplePrepend(['second'], 'first') should maintain the original order after multiple operations", () => {
  let resultArray = simplePrepend(['third'], 'second');
  resultArray = simplePrepend(resultArray, 'first');
  expect(resultArray).to.deep.equal(['first', 'second', 'third']);
});

it("simplePrepend([true], false) should correctly handle boolean values", () => {
  expect(simplePrepend([true], false)).to.deep.equal([false, true]);
});

it("simplePrepend([2, 3], 1) should not affect the length of unrelated arrays", () => {
  let unrelatedArray = [4, 5, 6];
  simplePrepend([2, 3], 1);
  expect(unrelatedArray.length).to.equal(3);
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
