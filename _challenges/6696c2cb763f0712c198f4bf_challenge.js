// NAMEEN:
// NAMERU:Суммирование определенных значений

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `sumSpecificValues`, которая принимает массив чисел и две функции-предиката.

Первый предикат определяет, какие числа суммировать, второй — какие вычитать.

Используйте метод `forEach` для итерации по массиву.

Функция должна возвращать итоговую сумму после применения обоих предикатов.


Пример запуска функции:
```javascript
const sumEven = n => n % 2 === 0;
const subtractOdd = n => n % 2 !== 0;
sumSpecificValues([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], sumEven, subtractOdd);
// 2 + 4 + 6 + 8 + 10 - 1 - 3 - 5 - 7 - 9 = Вывод: 5


const positive = n => n > 0;
const negative = n => n < 0;
sumSpecificValues([10, 20, 30, -10, -20], positive, negative);
// 10 + 20 + 30 - (-10) - (-20) = Вывод: 90
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
function sumSpecificValues(){

}
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function sumSpecificValues(arr, toSum, toSubtract) {
  let res = 0;

  arr.forEach(el => {
    if(toSum(el)) res += el
    else if(toSubtract(el)) res -= el
  })

  return res;
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function sumSpecificValues', () => {
  expect(sumSpecificValues).to.be.a('function');
});

it('Function sumSpecificValues should include method forEach()', () => {
  const res = sumSpecificValues.toString()
  expect(res).to.include('.forEach(')
});

it("sumSpecificValues([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], sumEven, subtractOdd) should return 5", () => {
  const sumEven = n => n % 2 === 0;
  const subtractOdd = n => n % 2 !== 0;
  expect(sumSpecificValues([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], sumEven, subtractOdd)).to.equal(5);
});

it("sumSpecificValues([10, 20, 30, -10, -20], n => n > 0, n => n < 0) should return 90", () => {
  const positive = n => n > 0;
  const negative = n => n < 0;
  expect(sumSpecificValues([10, 20, 30, -10, -20], positive, negative)).to.equal(90);
});

it("sumSpecificValues([], n => n > 5, n => n < 5) should return 0", () => {
  const greaterThanFive = n => n > 5;
  const lessThanFive = n => n < 5;
  expect(sumSpecificValues([], greaterThanFive, lessThanFive)).to.equal(0);
});

it("sumSpecificValues([5, 7, 2, 9], n => n === 9, n => n === 2) should return 7", () => {
  const isNine = n => n === 9;
  const isTwo = n => n === 2;
  expect(sumSpecificValues([5, 7, 2, 9], isNine, isTwo)).to.equal(7);
});

it("sumSpecificValues([1, 3, 5], n => false, n => true) should return -9", () => {
  expect(sumSpecificValues([1, 3, 5], n => false, n => true)).to.equal(-9);
});

it("sumSpecificValues([0, 0, 0, 0], n => n === 0, n => false) should return 0", () => {
  expect(sumSpecificValues([0, 0, 0, 0], n => n === 0, n => false)).to.equal(0);
});

it("sumSpecificValues([-5, -4, -3, -2, -1], n => n < -3, n => n > -3) should return -6", () => {
  expect(sumSpecificValues([-5, -4, -3, -2, -1], n => n < -3, n => n > -3)).to.equal(-6);
});

it("sumSpecificValues([100, 200, 300], n => n <= 200, n => n > 200) should return 0", () => {
  expect(sumSpecificValues([100, 200, 300], n => n <= 200, n => n > 200)).to.equal(0);
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
