// NAMEEN:
// NAMERU:Выравнивание и обращение массива подмассивов

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `flattenAndReverse`, которая принимает массив подмассивов любых типов данных.

Функция должна преобразовать все вложенные подмассивы в один плоский массив, а затем обратить порядок его элементов и вернуть новый массив.


Примеры запуска функции:
```javascript
flattenAndReverse([[1, 2, 3], [4, 5], [6]]); // [6, 5, 4, 3, 2, 1]
flattenAndReverse([['a', 'b'], ['c', 'd', 'e']]); // ['e', 'd', 'c', 'b', 'a']
flattenAndReverse([[1], [], [2, 3]]); // [3, 2, 1]
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
function flattenAndReverse(){

}
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function flattenAndReverse(array) {
  return array.flat(Infinity).reverse();
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function flattenAndReverse', () => {
  expect(flattenAndReverse).to.be.a('function');
});

it("Original array should not be modified", () => {
  const array  = [[1, 2, 3], [4, 5], [6, 7]];
  flattenAndReverse(array)
  expect(array).to.deep.equal([[1, 2, 3], [4, 5], [6, 7]]);
});

it("flattenAndReverse([[1, 2, 3], [4, 5], [6]]) should return [6, 5, 4, 3, 2, 1]", () => {
  expect(flattenAndReverse([[1, 2, 3], [4, 5], [6]])).to.deep.equal([6, 5, 4, 3, 2, 1]);
});

it("flattenAndReverse([['a', 'b'], ['c', 'd', 'e']]) should return ['e', 'd', 'c', 'b', 'a']", () => {
  expect(flattenAndReverse([['a', 'b'], ['c', 'd', 'e']])).to.deep.equal(['e', 'd', 'c', 'b', 'a']);
});

it("flattenAndReverse([[1], [], [2, 3]]) should return [3, 2, 1]", () => {
  expect(flattenAndReverse([[1], [], [2, 3]])).to.deep.equal([3, 2, 1]);
});

it("flattenAndReverse([]) should return an empty array", () => {
  expect(flattenAndReverse([])).to.deep.equal([]);
});

it("flattenAndReverse([[], [], []]) should return an empty array", () => {
  expect(flattenAndReverse([[], [], []])).to.deep.equal([]);
});

it("flattenAndReverse([[1, 2], [3]]) should return [3, 2, 1]", () => {
  expect(flattenAndReverse([[1, 2], [3]])).to.deep.equal([3, 2, 1]);
});

it("flattenAndReverse([[true, false], [false, true]]) should return [true, false, false, true]", () => {
  expect(flattenAndReverse([[true, false], [false, true]])).to.deep.equal([true, false, false, true]);
});

it("flattenAndReverse([['one', 'two'], ['three']]) should return ['three', 'two', 'one']", () => {
  expect(flattenAndReverse([['one', 'two'], ['three']])).to.deep.equal(['three', 'two', 'one']);
});

it("flattenAndReverse([[10, 20], [30, 40, 50]]) should return [50, 40, 30, 20, 10]", () => {
  expect(flattenAndReverse([[10, 20], [30, 40, 50]])).to.deep.equal([50, 40, 30, 20, 10]);
});


// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
