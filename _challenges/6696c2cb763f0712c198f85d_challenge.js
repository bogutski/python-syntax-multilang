// NAMEEN:
// NAMERU:Найти индекс первого отрицательного числа

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `findFirstNegativeIndex`, которая принимает массив чисел.

Функция должна вернуть индекс первого отрицательного числа в массиве.

Если такого числа нет, функция должна вернуть `-1`.


Примеры запуска функции:
```javascript
findFirstNegativeIndex([1, 2, -3, 4, 5]); // 2
findFirstNegativeIndex([1, 2, 3, 4, 5]); // -1
findFirstNegativeIndex([-1, -2, -3, -4, -5]); // 0
findFirstNegativeIndex([10, 20, 30, -40, 50]); // 3
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
function findFirstNegativeIndex(){

}
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function findFirstNegativeIndex(arr) {
  return arr.findIndex(n => n < 0);
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function findFirstNegativeIndex', () => {
  expect(findFirstNegativeIndex).to.be.a('function');
});

it("Function findFirstNegativeIndex should include findIndex method", () => {
  const result = findFirstNegativeIndex.toString();
  expect(result).to.include('.findIndex(');
});

it('findFirstNegativeIndex([1, 2, -3, 4, 5]) should return 2', function() {
  expect(findFirstNegativeIndex([1, 2, -3, 4, 5])).to.equal(2);
});

it('findFirstNegativeIndex([1, 2, 3, 4, 5]) should return -1', function() {
  expect(findFirstNegativeIndex([1, 2, 3, 4, 5])).to.equal(-1);
});

it('findFirstNegativeIndex([-1, -2, -3, -4, -5]) should return 0', function() {
  expect(findFirstNegativeIndex([-1, -2, -3, -4, -5])).to.equal(0);
});

it('findFirstNegativeIndex([10, 20, 30, -40, 50]) should return 3', function() {
  expect(findFirstNegativeIndex([10, 20, 30, -40, 50])).to.equal(3);
});

it('findFirstNegativeIndex([-10, 20, -30, 40, -50]) should return 0', function() {
  expect(findFirstNegativeIndex([-10, 20, -30, 40, -50])).to.equal(0);
});

it('findFirstNegativeIndex([1, 2, 3, 4, -5, -6]) should return 4', function() {
  expect(findFirstNegativeIndex([1, 2, 3, 4, -5, -6])).to.equal(4);
});

it('findFirstNegativeIndex([100, 200, 300, 400, 500]) should return -1', function() {
  expect(findFirstNegativeIndex([100, 200, 300, 400, 500])).to.equal(-1);
});

it('findFirstNegativeIndex([-100, -200, -300, -400, -500]) should return 0', function() {
  expect(findFirstNegativeIndex([-100, -200, -300, -400, -500])).to.equal(0);
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
