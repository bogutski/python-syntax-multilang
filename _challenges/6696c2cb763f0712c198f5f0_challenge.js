// NAMEEN:
// NAMERU:Сортировка массива чисел по возрастанию

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `sortNumbersAscending`, которая принимает массив целых чисел и возвращает новый массив, содержащий те же числа, отсортированные по возрастанию.


Примеры запуска функции:
```javascript
sortNumbersAscending([3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5]); // [1, 1, 2, 3, 3, 4, 5, 5, 5, 6, 9]
sortNumbersAscending([-2, 3, -1, 5, 4, -3]); // [-3, -2, -1, 3, 4, 5]
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
function sortNumbersAscending(){

}
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function sortNumbersAscending(arr) {
  return arr.slice().sort((a, b) => a - b);
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function sortNumbersAscending', () => {
  expect(sortNumbersAscending).to.be.a('function');
});

it('Function sortNumbersAscending should include method sort()', () => {
  const res = sortNumbersAscending.toString()
  expect(res).to.include('.sort(')
});

it('sortNumbersAscending([3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5]) should return [1, 1, 2, 3, 3, 4, 5, 5, 5, 6, 9]', () => {
  expect(sortNumbersAscending([3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5])).to.deep.equal([1, 1, 2, 3, 3, 4, 5, 5, 5, 6, 9]);
});

it('sortNumbersAscending([-2, 3, -1, 5, 4, -3]) should return [-3, -2, -1, 3, 4, 5]', () => {
  expect(sortNumbersAscending([-2, 3, -1, 5, 4, -3])).to.deep.equal([-3, -2, -1, 3, 4, 5]);
});

it('sortNumbersAscending([]) should return []', () => {
  expect(sortNumbersAscending([])).to.deep.equal([]);
});

it('sortNumbersAscending([5]) should return [5]', () => {
  expect(sortNumbersAscending([5])).to.deep.equal([5]);
});

it('sortNumbersAscending([10, 1]) should return [1, 10]', () => {
  expect(sortNumbersAscending([10, 1])).to.deep.equal([1, 10]);
});

it('sortNumbersAscending([1, 2, 3]) should return the same array [1, 2, 3]', () => {
  expect(sortNumbersAscending([1, 2, 3])).to.deep.equal([1, 2, 3]);
});

it('sortNumbersAscending([2, 3, 1]) should sort to [1, 2, 3]', () => {
  expect(sortNumbersAscending([2, 3, 1])).to.deep.equal([1, 2, 3]);
});

it('sortNumbersAscending([9, 8, 7, 6, 5, 4, 3, 2, 1]) should return [1, 2, 3, 4, 5, 6, 7, 8, 9]', () => {
  expect(sortNumbersAscending([9, 8, 7, 6, 5, 4, 3, 2, 1])).to.deep.equal([1, 2, 3, 4, 5, 6, 7, 8, 9]);
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
