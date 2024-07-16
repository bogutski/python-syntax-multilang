// NAMEEN:
// NAMERU:Сглаживание массива массивов

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `flattenArrays`, которая принимает массив массивов и возвращает один массив, содержащий все элементы вложенных массивов.


Пример запуска функции:
```javascript
flattenArrays([[1, 2], [3, 4], [5, 6]]); // [1, 2, 3, 4, 5, 6]
flattenArrays([['a', 'b'], ['c', 'd'], ['e', 'f']]); // ['a', 'b', 'c', 'd', 'e', 'f']
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
function flattenArrays(){

}
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function flattenArrays(arr) {
  return arr.flatMap(array => array);
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function flattenArrays', () => {
  expect(flattenArrays).to.be.a('function');
});

it('Function flattenArrays should include method flatMap()', () => {
  const res = flattenArrays.toString()
  expect(res).to.include('.flatMap(')
});

it('should flatten an array of integer arrays', () => {
  expect(flattenArrays([[1, 2], [3, 4], [5, 6]])).to.deep.equal([1, 2, 3, 4, 5, 6]);
});

it('should flatten an array of string arrays', () => {
  expect(flattenArrays([['a', 'b'], ['c', 'd'], ['e', 'f']])).to.deep.equal(['a', 'b', 'c', 'd', 'e', 'f']);
});

it('should return an empty array if the input is an empty array', () => {
  expect(flattenArrays([])).to.deep.equal([]);
});

it('should handle arrays with different lengths', () => {
  expect(flattenArrays([[1, 2], [3], [4, 5, 6]])).to.deep.equal([1, 2, 3, 4, 5, 6]);
});

it('should return an empty array if all nested arrays are empty', () => {
  expect(flattenArrays([[], [], []])).to.deep.equal([]);
});

it('should handle arrays containing empty arrays', () => {
  expect(flattenArrays([[1, 2], [], [3, 4]])).to.deep.equal([1, 2, 3, 4]);
});

it('should handle nested empty arrays within non-empty arrays', () => {
  expect(flattenArrays([[], [1, 2], [], [3, 4], []])).to.deep.equal([1, 2, 3, 4]);
});

it('should handle single-element arrays', () => {
  expect(flattenArrays([[1], [2], [3], [4], [5]])).to.deep.equal([1, 2, 3, 4, 5]);
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
