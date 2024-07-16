// NAMEEN:
// NAMERU:Найти последний вложенный массив, содержащий заданное число

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `findLastArrayContainingNumber`, которая принимает массив массивов чисел и одно целое число.

Функция должна возвращать последний вложенный массив, который содержит заданное число.

Если такого массива нет, функция должна вернуть строку `Not found`.

Если массив пустой, либо какой-то из параметров функции не передан, функция должна вернуть строку: `Missing information`.


Примеры запуска функции:
```javascript
findLastArrayContainingNumber([[1, 2, 3], [4, 5, 6], [7, 8, 9], [1, 11, 111]], 1) // [ 1, 11, 111 ]
findLastArrayContainingNumber([[10, 20], [30, 40], [50, 60]], 70) // "Not found"
findLastArrayContainingNumber([[3, 4], [5, 3], [3, 8]], 3) // [ 3, 8 ]
findLastArrayContainingNumber([[1, 2, 3]], undefined) // "Missing information"
findLastArrayContainingNumber(undefined, 5) // "Missing information"
findLastArrayContainingNumber([], 5) // "Missing information"
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
function findLastArrayContainingNumber(){

}
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function findLastArrayContainingNumber(arr = [], element) {
  if(arr.length === 0 || element === undefined) return 'Missing information'
  return arr.findLast(subArray => subArray.includes(element)) || 'Not found';
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function findLastArrayContainingNumber', () => {
  expect(findLastArrayContainingNumber).to.be.a('function');
});

it("Function findLastArrayContainingNumber should include findLast method", () => {
  const result = findLastArrayContainingNumber.toString();
  expect(result).to.include('.findLast(');
});

it('findLastArrayContainingNumber([[1, 2, 3], [4, 5, 6], [7, 8, 9], [1, 11, 111]], 1) should return [1, 11, 111]', function() {
  expect(findLastArrayContainingNumber([[1, 2, 3], [4, 5, 6], [7, 8, 9], [1, 11, 111]], 1)).to.deep.equal([1, 11, 111]);
});

it('findLastArrayContainingNumber([[10, 20], [30, 40], [50, 60]], 70) should return "Not found"', function() {
  expect(findLastArrayContainingNumber([[10, 20], [30, 40], [50, 60]], 70)).to.equal('Not found');
});

it('findLastArrayContainingNumber([[3, 4], [5, 3], [3, 8]], 3) should return [3, 8]', function() {
  expect(findLastArrayContainingNumber([[3, 4], [5, 3], [3, 8]], 3)).to.deep.equal([3, 8]);
});

it('findLastArrayContainingNumber([], 5) should return "Missing information"', function() {
  expect(findLastArrayContainingNumber([], 5)).to.equal('Missing information');
});

it('findLastArrayContainingNumber([[1, 2, 3]], undefined) should return "Missing information"', function() {
  expect(findLastArrayContainingNumber([[1, 2, 3]], undefined)).to.equal('Missing information');
});

it('findLastArrayContainingNumber([[20, 30], [40, 50], [60, 70, 20]], 20) should return [60, 70, 20]', function() {
  expect(findLastArrayContainingNumber([[20, 30], [40, 50], [60, 70, 20]], 20)).to.deep.equal([60, 70, 20]);
});

it('findLastArrayContainingNumber([[100, 200], [300, 400]], 500) should return "Not found"', function() {
  expect(findLastArrayContainingNumber([[100, 200], [300, 400]], 500)).to.equal('Not found');
});

it('findLastArrayContainingNumber(undefined, 10) should return "Missing information"', function() {
  expect(findLastArrayContainingNumber(undefined, 10)).to.equal('Missing information');
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
