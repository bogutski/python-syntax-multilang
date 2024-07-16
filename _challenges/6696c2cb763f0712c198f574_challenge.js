// NAMEEN:
// NAMERU:Выпрямление вложенного массива

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `flattenArray`, которая принимает один аргумент — вложенный массив `nestedArray`.

Функция должна возвращать новый массив без вложенности, "выпрямив" все элементы до одного уровня.

Используйте метод `Array.prototype.flat()` с "глубиной" выравнивания по умолчанию.


Примеры запуска функции:
```javascript
flattenArray([1, [2, 3], [4, [5, 6]]]);   // [ 1, 2, 3, 4, [ 5, 6 ] ]
flattenArray([[1], 2, [[3, 4], [5]], 6]); // [ 1, 2, [ 3, 4 ], [ 5 ], 6 ]
flattenArray([['a'], ['b', 'c'], ['d', ['e']]]); // [ 'a', 'b', 'c', 'd', [ 'e' ] ]
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
function flattenArray(){

}
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function flattenArray(arr) {
  return arr.flat();
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function flattenArray', () => {
  expect(flattenArray).to.be.a('function');
});

it('Function flattenArray should include method flat()', () => {
  const res = flattenArray.toString()
  expect(res).to.include('.flat(')
});

it("flattenArray([1, [2, 3], [4, [5, 6]]]) should return [1, 2, 3, 4, [5, 6]]", function() {
  expect(flattenArray([1, [2, 3], [4, [5, 6]]])).to.deep.equal([1, 2, 3, 4, [5, 6]]);
});

it("flattenArray([[1], 2, [[3, 4], [5]], 6]) should return [1, 2, [3, 4], [5], 6]", function() {
  expect(flattenArray([[1], 2, [[3, 4], [5]], 6])).to.deep.equal([1, 2, [3, 4], [5], 6]);
});

it("flattenArray([['a'], ['b', 'c'], ['d', ['e']]]) should return ['a', 'b', 'c', 'd', ['e']]", function() {
  expect(flattenArray([['a'], ['b', 'c'], ['d', ['e']]])).to.deep.equal(['a', 'b', 'c', 'd', ['e']]);
});

it("flattenArray([]) should return an empty array", function() {
  expect(flattenArray([])).to.deep.equal([]);
});

it("flattenArray([[], []]) should return an empty array", function() {
  expect(flattenArray([[], []])).to.deep.equal([]);
});

it("flattenArray([0, [1], [2, [3]]]) should not deeply flatten the array", function() {
  expect(flattenArray([0, [1], [2, [3]]])).to.deep.equal([0, 1, 2, [3]]);
});

it("flattenArray(['flat', ['is', ['awesome']]]) should return ['flat', 'is', ['awesome']]", function() {
  expect(flattenArray(['flat', ['is', ['awesome']]])).to.deep.equal(['flat', 'is', ['awesome']]);
});

it("flattenArray([[[[1]]]]) should return [[[1]]]", function() {
  expect(flattenArray([[[[1]]]])).to.deep.equal([[[1]]]);
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
