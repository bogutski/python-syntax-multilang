// NAMEEN:
// NAMERU:Найти последний индекс квадрата числа

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `findLastIndexOfSquare`, которая принимает массив чисел и число.

Функция должна вернуть индекс последнего элемента массива, квадрат которого равен заданному числу.

Если такой элемент не найден, функция должна вернуть строку `Not found`.


Примеры запуска функции:
```javascript
findLastIndexOfSquare([2, 4, 6, 8], 4); // 0
findLastIndexOfSquare([1, 3, 5, 7, 9], 25); // 2
findLastIndexOfSquare([10, 20, 30, 40, 50], 2500); // 4
findLastIndexOfSquare([15, 25, 35, 45], 20); // 'Not found'
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
function findLastIndexOfSquare(){

}
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function findLastIndexOfSquare(arr, n) {
  const modified = arr.map(num => num ** 2)
  const result = modified.lastIndexOf(n)
  return result !== -1 ? result : 'Not found'
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function findLastIndexOfSquare', () => {
  expect(findLastIndexOfSquare).to.be.a('function');
});

it("Function findLastIndexOfSquare should include lastIndexOf method", () => {
  const result = findLastIndexOfSquare.toString();
  expect(result).to.include('.lastIndexOf(');
});

it('findLastIndexOfSquare([1, 3, 5, 7, 9], 25) should return 2', function() {
  expect(findLastIndexOfSquare([1, 3, 5, 7, 9], 25)).to.equal(2);
});

it('findLastIndexOfSquare([10, 20, 30, 40, 50], 2500) should return 4', function() {
  expect(findLastIndexOfSquare([10, 20, 30, 40, 50], 2500)).to.equal(4);
});

it('findLastIndexOfSquare([2, 4, 6, 8], 4) should return 0', function() {
  expect(findLastIndexOfSquare([2, 4, 6, 8], 4)).to.equal(0);
});

it('findLastIndexOfSquare([15, 25, 35, 45], 20) should return "Not found"', function() {
  expect(findLastIndexOfSquare([15, 25, 35, 45], 20)).to.equal('Not found');
});

it('findLastIndexOfSquare([3, 6, 9, 12], 81) should return 2', function() {
  expect(findLastIndexOfSquare([3, 6, 9, 12], 81)).to.equal(2);
});

it('findLastIndexOfSquare([4, 8, 12, 16], 256) should return 3', function() {
  expect(findLastIndexOfSquare([4, 8, 12, 16], 256)).to.equal(3);
});

it('findLastIndexOfSquare([5, 10, 15, 20], 100) should return 1', function() {
  expect(findLastIndexOfSquare([5, 10, 15, 20], 100)).to.equal(1);
});

it('findLastIndexOfSquare([], 1) should return "Not found"', function() {
  expect(findLastIndexOfSquare([], 1)).to.equal('Not found');
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
