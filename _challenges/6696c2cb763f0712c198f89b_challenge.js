// NAMEEN:
// NAMERU:Найти индекс последнего положительного числа

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `findLastPositiveIndex`, которая принимает массив чисел.

Функция должна вернуть индекс последнего положительного числа в массиве.

Если такого числа нет, функция должна вернуть `-1`.


Примеры запуска функции:
```javascript
findLastPositiveIndex([1, 2, 3, 4, 5]); // 4
findLastPositiveIndex([1, 2, -3, 4, -5]); // 3
findLastPositiveIndex([-1, -2, -3, -4, -5]); // -1
findLastPositiveIndex([10, -20, 30, -40, 50]); // 4
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
function findLastPositiveIndex(){

}
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function findLastPositiveIndex(arr) {
  return arr.findLastIndex(n => n > 0);
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function findLastPositiveIndex', () => {
  expect(findLastPositiveIndex).to.be.a('function');
});

it("Function findLastPositiveIndex should include findLastIndex method", () => {
  const result = findLastPositiveIndex.toString();
  expect(result).to.include('.findLastIndex(');
});

it('findLastPositiveIndex([1, 2, -3, 4, -5]) should return 3', function() {
  expect(findLastPositiveIndex([1, 2, -3, 4, -5])).to.equal(3);
});

it('findLastPositiveIndex([1, 2, 3, 4, 5]) should return 4', function() {
  expect(findLastPositiveIndex([1, 2, 3, 4, 5])).to.equal(4);
});

it('findLastPositiveIndex([-1, -2, -3, -4, -5]) should return -1', function() {
  expect(findLastPositiveIndex([-1, -2, -3, -4, -5])).to.equal(-1);
});

it('findLastPositiveIndex([10, -20, 30, -40, 50]) should return 4', function() {
  expect(findLastPositiveIndex([10, -20, 30, -40, 50])).to.equal(4);
});

it('findLastPositiveIndex([-10, 20, -30, 40, -50]) should return 3', function() {
  expect(findLastPositiveIndex([-10, 20, -30, 40, -50])).to.equal(3);
});

it('findLastPositiveIndex([1, 2, 3, 4, -5, -6]) should return 3', function() {
  expect(findLastPositiveIndex([1, 2, 3, 4, -5, -6])).to.equal(3);
});

it('findLastPositiveIndex([100, 200, 300, 400, 500]) should return 4', function() {
  expect(findLastPositiveIndex([100, 200, 300, 400, 500])).to.equal(4);
});

it('findLastPositiveIndex([-100, -200, -300, -400, -500]) should return -1', function() {
  expect(findLastPositiveIndex([-100, -200, -300, -400, -500])).to.equal(-1);
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
