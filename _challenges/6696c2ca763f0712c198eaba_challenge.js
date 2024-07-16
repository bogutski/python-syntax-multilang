// NAMEEN:
// NAMERU:Сумма четных положительных и нечетных отрицательных чисел массива

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `sumEvenPositiveOddNegative`, которая принимает один параметр - массив.

Массив произвольной длины и состоит из положительных и отрицательных целых чисел.

Функция должна вернуть сумму четных положительных и нечетных отрицательных чисел массива.

Пример запуска функции:
```javascript
sumEvenPositiveOddNegative([-21, 24, -25, 28]) // (-21) + 24 + (-25) + 28 = 6
sumEvenPositiveOddNegative([-17, -18, -19, -20]) // (-17) + (-19) = -36
sumEvenPositiveOddNegative([-2, -4, 5, 7]) // 0
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
fun
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function sumEvenPositiveOddNegative(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0 && arr[i] > 0 || arr[i] % 2 !== 0 && arr[i] < 0) {
      sum += arr[i]
    }
  }
  return sum
}

// SOLUTIONEND


// OPENTESTSSTART
it('Created function sumEvenPositiveOddNegative', () => {
  expect(sumEvenPositiveOddNegative).to.be.a('function');
});

it('sumEvenPositiveOddNegative([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]) should return 30', () => {
  expect(sumEvenPositiveOddNegative([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])).to.be.equal(30);
});

it('sumEvenPositiveOddNegative([11, 12, 13, 14, 15, 16]) should return 42', () => {
  expect(sumEvenPositiveOddNegative([11, 12, 13, 14, 15, 16])).to.be.equal(42);
});

it('sumEvenPositiveOddNegative([-17, -18, -19, -20]) should return -36', () => {
  expect(sumEvenPositiveOddNegative([-17, -18, -19, -20])).to.be.equal(-36);
});

it('sumEvenPositiveOddNegative([-21, 24, -25, 28]) should return 6', () => {
  expect(sumEvenPositiveOddNegative([-21, 24, -25, 28])).to.be.equal(6);
});

it('sumEvenPositiveOddNegative([-2, -4, 5, 7]) should return 0', () => {
  expect(sumEvenPositiveOddNegative([-2, -4, 5, 7])).to.be.equal(0);
});

it('sumEvenPositiveOddNegative([10, 20, 30]) should return 60', () => {
  expect(sumEvenPositiveOddNegative([10, 20, 30])).to.be.equal(60);
});

it('sumEvenPositiveOddNegative([-41, -53, -75]) should return -169', () => {
  expect(sumEvenPositiveOddNegative([-41, -53, -75])).to.be.equal(-169);
});

it('sumEvenPositiveOddNegative([]) should return 0', () => {
  expect(sumEvenPositiveOddNegative([])).to.be.equal(0);
});

// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
