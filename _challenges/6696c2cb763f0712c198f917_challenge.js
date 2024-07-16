// NAMEEN:
// NAMERU:Проверка на наличие отрицательных чисел

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `hasNegativeNumbers`, которая принимает массив чисел и возвращает `true`, если в массиве есть хотя бы одно отрицательное число, и `false` в противном случае.


Примеры запуска функции:
```javascript
hasNegativeNumbers([1, 2, 3, 4, 5]); // false
hasNegativeNumbers([0, 1, 2, 3, 4]); // false
hasNegativeNumbers([1, 2, 3, -4, 5]); // true
hasNegativeNumbers([-1, -2, -3, -4, -5]); // true
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
function hasNegativeNumbers(){

}
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function hasNegativeNumbers(arr) {
  return arr.some(n => n < 0);
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function hasNegativeNumbers', () => {
  expect(hasNegativeNumbers).to.be.a('function');
});

it("Function hasNegativeNumbers should include some method", () => {
  const result = hasNegativeNumbers.toString();
  expect(result).to.include('.some(');
});

it('hasNegativeNumbers([1, 2, 3, -4, 5]) should return true', function() {
  expect(hasNegativeNumbers([1, 2, 3, -4, 5])).to.equal(true);
});

it('hasNegativeNumbers([1, 2, 3, 4, 5]) should return false', function() {
  expect(hasNegativeNumbers([1, 2, 3, 4, 5])).to.equal(false);
});

it('hasNegativeNumbers([-1, -2, -3, -4, -5]) should return true', function() {
  expect(hasNegativeNumbers([-1, -2, -3, -4, -5])).to.equal(true);
});

it('hasNegativeNumbers([0, 1, 2, 3, 4]) should return false', function() {
  expect(hasNegativeNumbers([0, 1, 2, 3, 4])).to.equal(false);
});

it('hasNegativeNumbers([10, 20, 30, 40, 50]) should return false', function() {
  expect(hasNegativeNumbers([10, 20, 30, 40, 50])).to.equal(false);
});

it('hasNegativeNumbers([-10, 20, -30, 40, -50]) should return true', function() {
  expect(hasNegativeNumbers([-10, 20, -30, 40, -50])).to.equal(true);
});

it('hasNegativeNumbers([0]) should return false', function() {
  expect(hasNegativeNumbers([0])).to.equal(false);
});

it('hasNegativeNumbers([-1]) should return true', function() {
  expect(hasNegativeNumbers([-1])).to.equal(true);
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
