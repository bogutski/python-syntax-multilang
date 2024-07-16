// NAMEEN:
// NAMERU:Проверка на положительные числа

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `areAllPositive`, которая принимает массив чисел и возвращает `true`, если все числа в массиве положительные, и `false` в противном случае.

Ноль - не является позитивным или негативным числом.


Примеры запуска функции:
```javascript
areAllPositive([1, 2, 3, 4, 5]); // true
areAllPositive([0, 1, 2, 3, 4]); // false
areAllPositive([1, -2, 3, 4, 5]); // false
areAllPositive([-1, -2, -3, -4, -5]); // false
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
function areAllPositive(){

}
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function areAllPositive(arr) {
  return arr.every(num => num > 0);
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function areAllPositive', () => {
  expect(areAllPositive).to.be.a('function');
});

it("Function areAllPositive should include every method", () => {
  const result = areAllPositive.toString();
  expect(result).to.include('.every(');
});

it('areAllPositive([1, 2, 3, 4, 5]) should return true', function() {
  expect(areAllPositive([1, 2, 3, 4, 5])).to.equal(true);
});

it('areAllPositive([1, -2, 3, 4, 5]) should return false', function() {
  expect(areAllPositive([1, -2, 3, 4, 5])).to.equal(false);
});

it('areAllPositive([-1, -2, -3, -4, -5]) should return false', function() {
  expect(areAllPositive([-1, -2, -3, -4, -5])).to.equal(false);
});

it('areAllPositive([0, 1, 2, 3, 4]) should return false', function() {
  expect(areAllPositive([0, 1, 2, 3, 4])).to.equal(false);
});

it('areAllPositive([10, 20, 30, 40, 50]) should return true', function() {
  expect(areAllPositive([10, 20, 30, 40, 50])).to.equal(true);
});

it('areAllPositive([-10, 20, -30, 40, -50]) should return false', function() {
  expect(areAllPositive([-10, 20, -30, 40, -50])).to.equal(false);
});

it('areAllPositive([1]) should return true', function() {
  expect(areAllPositive([1])).to.equal(true);
});

it('areAllPositive([-1]) should return false', function() {
  expect(areAllPositive([-1])).to.equal(false);
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
