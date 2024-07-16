// NAMEEN:
// NAMERU:Найти индекс последнего элемента, чей квадрат больше заданного числа

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `findLastIndexBySquare`, которая принимает массив чисел и число.

Функция должна вернуть индекс последнего элемента в массиве, квадрат которого больше заданного числа.

Если такого элемента нет, функция должна вернуть `-1`.


Примеры запуска функции:
```javascript
findLastIndexBySquare([1, 2, 3, 4, 5], 16); // 4
findLastIndexBySquare([10, 20, 30, 40], 900); // 3
findLastIndexBySquare([1, 2, 3, 4], 16); // -1
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
function findLastIndexBySquare(){

}
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function findLastIndexBySquare(arr, num) {
  return arr.findLastIndex(el => el ** 2 > num);
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function findLastIndexBySquare', () => {
  expect(findLastIndexBySquare).to.be.a('function');
});

it('findLastIndexBySquare([1, 2, 3, 4, 5], 16) should return 4', function() {
  expect(findLastIndexBySquare([1, 2, 3, 4, 5], 16)).to.equal(4);
});

it('findLastIndexBySquare([10, 20, 30, 40], 900) should return 3', function() {
  expect(findLastIndexBySquare([10, 20, 30, 40], 900)).to.equal(3);
});

it('findLastIndexBySquare([1, 3, 5, 7], 40) should return 3', function() {
  expect(findLastIndexBySquare([1, 3, 5, 7], 40)).to.equal(3);
});

it('findLastIndexBySquare([1, 2, 3, 4], 16) should return -1', function() {
  expect(findLastIndexBySquare([1, 2, 3, 4], 16)).to.equal(-1);
});

it('findLastIndexBySquare([2, 4, 6, 8], 36) should return 3', function() {
  expect(findLastIndexBySquare([2, 4, 6, 8], 36)).to.equal(3);
});

it('findLastIndexBySquare([5, 10, 15, 20], 200) should return 3', function() {
  expect(findLastIndexBySquare([5, 10, 15, 20], 200)).to.equal(3);
});

it('findLastIndexBySquare([3, 6, 9, 12], 50) should return 3', function() {
  expect(findLastIndexBySquare([3, 6, 9, 12], 50)).to.equal(3);
});

it('findLastIndexBySquare([1, 4, 9, 16], 25) should return 3', function() {
  expect(findLastIndexBySquare([1, 4, 9, 16], 25)).to.equal(3);
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
