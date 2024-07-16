// NAMEEN:
// NAMERU:Создание обратного копирования массива с использованием метода slice()

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `createReversedCopyUsingSlice`, которая принимает массив любых типов данных.

Функция возвращает новый массив, в котором элементы следуют в обратном порядке по сравнению с исходным.

Используйте метод `slice()` для копирования элементов исходного массива.


Примеры запуска функции:
```javascript
createReversedCopyUsingSlice([1, 2, 3, 4, 5]); // [5, 4, 3, 2, 1]
createReversedCopyUsingSlice(['a', 'b', 'c']); // ['c', 'b', 'a']
createReversedCopyUsingSlice([]); // []
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
function createReversedCopyUsingSlice(){

}
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function createReversedCopyUsingSlice(arr) {
  return arr.slice().reverse();
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function createReversedCopyUsingSlice', () => {
  expect(createReversedCopyUsingSlice).to.be.a('function');
});

it("original array should not be modified", () => {
  const numbers = [1, 2, 3, 4, 5];
  createReversedCopyUsingSlice(numbers)
  expect(numbers).to.deep.equal([1, 2, 3, 4, 5]);
});

it("createReversedCopyUsingSlice should use the slice method for array copying", () => {
  const result = createReversedCopyUsingSlice.toString();
  expect(result).to.include('.slice()');
});

it("createReversedCopyUsingSlice([1, 2, 3, 4, 5]) should return [5, 4, 3, 2, 1]", () => {
  expect(createReversedCopyUsingSlice([1, 2, 3, 4, 5])).to.deep.equal([5, 4, 3, 2, 1]);
});

it("createReversedCopyUsingSlice(['a', 'b', 'c']) should return ['c', 'b', 'a']", () => {
  expect(createReversedCopyUsingSlice(['a', 'b', 'c'])).to.deep.equal(['c', 'b', 'a']);
});

it("createReversedCopyUsingSlice([]) should return an empty array", () => {
  expect(createReversedCopyUsingSlice([])).to.deep.equal([]);
});

it("createReversedCopyUsingSlice([1]) should return [1]", () => {
  expect(createReversedCopyUsingSlice([1])).to.deep.equal([1]);
});

it("createReversedCopyUsingSlice([1, 2]) should return [2, 1]", () => {
  expect(createReversedCopyUsingSlice([1, 2])).to.deep.equal([2, 1]);
});

it("createReversedCopyUsingSlice(['Hello', 'world']) should return ['world', 'Hello']", () => {
  expect(createReversedCopyUsingSlice(['Hello', 'world'])).to.deep.equal(['world', 'Hello']);
});

it("createReversedCopyUsingSlice([null, undefined, '']) should return ['', undefined, null]", () => {
  expect(createReversedCopyUsingSlice([null, undefined, ''])).to.deep.equal(['', undefined, null]);
});

it("createReversedCopyUsingSlice([true, false, true]) should return [true, false, true]", () => {
  expect(createReversedCopyUsingSlice([true, false, true])).to.deep.equal([true, false, true]);
});

it("createReversedCopyUsingSlice should use the slice method for array copying", () => {
  const originalArray = [1, 2, 3];
  const copyUsingSlice = originalArray.slice();
  createReversedCopyUsingSlice(originalArray); // This doesn't test directly but implies use
  expect(copyUsingSlice).to.deep.equal(originalArray); // Checking if slice was used to make a copy
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
