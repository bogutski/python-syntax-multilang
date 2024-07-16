// NAMEEN:
// NAMERU:Проверка наличия числа с определенными свойствами после обработки массива

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `hasNumberWithProperties`, которая принимает массив чисел и объект с условиями.

Условия включают два свойства:
 * `positive` (число, на которое должно делиться положительное значение).
 * `negative` (число, на которое должно делиться отрицательное значение).

Функция должна вернуть `true`, если хотя бы одно число после округления удовлетворяет указанным условиям, и `false` в противном случае.


Примеры запуска функции:
```javascript
hasNumberWithProperties([1.4, 2.6, -3.7, -5.8], {positive: 2, negative: 3}); // true
hasNumberWithProperties([-7.2, 14.5, 21.7, -28.6], {positive: 7, negative: 5}); // false
hasNumberWithProperties([5.35, -10.5, 15.77, -20.1], {positive: 5, negative: 4}); // true
hasNumberWithProperties([7.35, -10.5, 15.77, -20.6], {positive: 3, negative: 4}); // false
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
function hasNumberWithProperties(){

}
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function hasNumberWithProperties(arr, target) {
  return arr.some(num => {
    num = Math.round(num)
    if(num < 0) return num % target.negative === 0
    else return num % target.positive === 0
  });
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function hasNumberWithProperties', () => {
  expect(hasNumberWithProperties).to.be.a('function');
});

it('hasNumberWithProperties([5.35, -10.5, 15.77, -20.1], {positive: 5, negative: 4}) should return true', function() {
  expect(hasNumberWithProperties([5.35, -10.5, 15.77, -20.1], {positive: 5, negative: 4})).to.equal(true);
});

it('hasNumberWithProperties([5.35, -10.5, 15.77, -20.1], {positive: 3, negative: 4}) should return true', function() {
  expect(hasNumberWithProperties([5.35, -10.5, 15.77, -20.1], {positive: 3, negative: 4})).to.equal(true);
});

it('hasNumberWithProperties([1.4, 2.6, -3.7, -4.8], {positive: 2, negative: 3}) should return false', function() {
  expect(hasNumberWithProperties([1.4, 2.6, -3.7, -4.8], {positive: 2, negative: 3})).to.equal(false);
});

it('hasNumberWithProperties([-7.2, 14.5, 21.3, -28.6], {positive: 7, negative: 5}) should return true', function() {
  expect(hasNumberWithProperties([-7.2, 14.5, 21.3, -28.6], {positive: 7, negative: 5})).to.equal(true);
});

it('hasNumberWithProperties([0.5, -0.5, 0.5, -0.5], {positive: 1, negative: 1}) should return true', function() {
  expect(hasNumberWithProperties([0.5, -0.5, 0.5, -0.5], {positive: 1, negative: 1})).to.equal(true);
});

it('hasNumberWithProperties([0.4, -0.4, 0.4, -0.4], {positive: 1, negative: 1}) should return true', function() {
  expect(hasNumberWithProperties([0.4, -0.4, 0.4, -0.4], {positive: 1, negative: 1})).to.equal(true);
});

it('hasNumberWithProperties([25.3, 50.6, -75.8], {positive: 25, negative: 50}) should return true', function() {
  expect(hasNumberWithProperties([25.3, 50.6, -75.8], {positive: 25, negative: 50})).to.equal(true);
});

it('hasNumberWithProperties([1.2, 2.3, 3.4, 4.5, 5.6], {positive: 5, negative: 5}) should return true', function() {
  expect(hasNumberWithProperties([1.2, 2.3, 3.4, 4.5, 5.6], {positive: 5, negative: 5})).to.equal(true);
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
