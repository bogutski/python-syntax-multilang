// NAMEEN:
// NAMERU:Сумма нечетных отрицательных чисел

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `sumOddNegative`, которая принимает один параметр - массив.

Массив произвольной длины и может содержать положительные и/или отрицательные целые числа.

Функция должна вернуть сумму всех нечетных отрицательных чисел в массиве.

Пример запуска функции:
```javascript
sumOddNegative([-1, 2, -3, 4, -5, 6, -7, 8, -9]) // (-1) + (-3) + (-5) + (-7) + (-9) = -25
sumOddNegative([-1, 2, 3, 4, -5, 6, 7, 8, -9]) // (-1) + (-5) + (-9) = -15
sumOddNegative([1, 2, 3, 4, 5, 6, 7, 8, 9]) // 0
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
fun
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function sumOddNegative(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 !== 0 && arr[i] < 0) {
      sum += arr[i]
    }
  }
  return sum
}

// SOLUTIONEND


// OPENTESTSSTART
it('Created function sumOddNegative', () => {
  expect(sumOddNegative).to.be.a('function');
});

it('sumOddNegative([1, 2, 3, 4, 5, 6, 7, 8, 9]) should return 0', () => {
  expect(sumOddNegative([1, 2, 3, 4, 5, 6, 7, 8, 9])).to.equal(0);
});

it('sumOddNegative([-1, 2, -3, 4, -5, 6, -7, 8, -9]) should return -25', () => {
  expect(sumOddNegative([-1, 2, -3, 4, -5, 6, -7, 8, -9])).to.equal(-25);
});

it('sumOddNegative([-1, 2, 3, 4, -5, 6, 7, 8, -9]) should return -15', () => {
  expect(sumOddNegative([-1, 2, 3, 4, -5, 6, 7, 8, -9])).to.equal(-15);
});

it('sumOddNegative([1, 3, 5, 7, 9]) should return 0', () => {
  expect(sumOddNegative([1, 3, 5, 7, 9])).to.equal(0);
});

it('sumOddNegative([-2, -4, -6, -8]) should return 0', () => {
  expect(sumOddNegative([-2, -4, -6, -8])).to.equal(0);
});

it('sumOddNegative([2, 4, 6, 8]) should return 0', () => {
  expect(sumOddNegative([2, 4, 6, 8])).to.equal(0);
});

it('sumOddNegative([]) should return 0', () => {
  expect(sumOddNegative([])).to.equal(0);
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
