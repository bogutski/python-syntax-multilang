// NAMEEN:
// NAMERU:Создание обратного копирования массива

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `createReversedCopy`, которая принимает массив любых типов данных.

Функция возвращает новый массив, в котором элементы следуют в обратном порядке по сравнению с исходным.

Важно, чтобы исходный массив не изменялся. Функция должна использовать оператор развертывания для копирования элементов исходного массива.


Примеры запуска функции:
```javascript
createReversedCopy([1, 2, 3, 4, 5]); // [5, 4, 3, 2, 1]
createReversedCopy(['a', 'b', 'c']); // ['c', 'b', 'a']
createReversedCopy([]); // []
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
function createReversedCopy(){

}
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function createReversedCopy(arr) {
  return [...arr].reverse();
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function createReversedCopy', () => {
  expect(createReversedCopy).to.be.a('function');
});

it("createReversedCopy([1, 2, 3, 4, 5]) should return [5, 4, 3, 2, 1]", () => {
  expect(createReversedCopy([1, 2, 3, 4, 5])).to.deep.equal([5, 4, 3, 2, 1]);
});

it("createReversedCopy(['a', 'b', 'c']) should return ['c', 'b', 'a']", () => {
  expect(createReversedCopy(['a', 'b', 'c'])).to.deep.equal(['c', 'b', 'a']);
});

it("createReversedCopy([]) should return an empty array", () => {
  expect(createReversedCopy([])).to.deep.equal([]);
});

it("createReversedCopy([1]) should return [1]", () => {
  expect(createReversedCopy([1])).to.deep.equal([1]);
});

it("createReversedCopy([1, 2]) should return [2, 1]", () => {
  expect(createReversedCopy([1, 2])).to.deep.equal([2, 1]);
});

it("createReversedCopy(['Hello', 'world']) should return ['world', 'Hello']", () => {
  expect(createReversedCopy(['Hello', 'world'])).to.deep.equal(['world', 'Hello']);
});

it("createReversedCopy([null, undefined, '']) should return ['', undefined, null]", () => {
  expect(createReversedCopy([null, undefined, ''])).to.deep.equal(['', undefined, null]);
});

it("createReversedCopy([true, false, true]) should return [true, false, true]", () => {
  expect(createReversedCopy([true, false, true])).to.deep.equal([true, false, true]);
});

it("original array should not be modified", () => {
  const numbers = [1, 2, 3, 4, 5];
  createReversedCopy(numbers)
  expect(numbers).to.deep.equal([1, 2, 3, 4, 5]);
});

it("createReversedCopy should use the spread operator for array copying", () => {
  const result = createReversedCopy.toString();
  expect(result).to.include('...');
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
