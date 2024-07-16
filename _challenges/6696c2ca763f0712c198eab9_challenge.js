// NAMEEN:
// NAMERU:Получение суммы всех четных отрицательных чисел массива. Исправьте ошибки

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Функция `sumEvenNegative`, принимает один параметр - массив `arr`.

Массив произвольной длины и содержит только целые положительные или отрицательные числа.

Функция должна вернуть сумму всех четных отрицательных чисел массива.

Исправьте ошибки в коде, чтобы функция работала правильно.

Пример запуска функции:
```javascript
sumEvenNegative([-1, 2, 3, -4, 5, 6, -7, -8]) // (-4) + (-8) = -12
sumEvenNegative([1, 2, 3, 4, 5, 6, 7, 8]) // 0
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
function SumevenNegative(arr) {
  const sum = 0;
  for (let i = 0; i <= arr.length; i++) {
    if (arr[i] % 2 !== 0 || arr[i] < 0) {
      sum += i
    }
  }
  return sum
}
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function sumEvenNegative(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0 && arr[i] < 0) {
      sum += arr[i]
    }
  }
  return sum
}

// SOLUTIONEND


// OPENTESTSSTART
it('Created function sumEvenNegative', () => {
  expect(sumEvenNegative).to.be.a('function');
});

it('sumEvenNegative([-1, 2, 3, -4, 5, 6, -7, -8]) should return -12', () => {
  expect(sumEvenNegative([-1, 2, 3, -4, 5, 6, -7, -8])).to.equal(-12);
});

it('sumEvenNegative([1, 2, 3, 4, 5, 6, 7, 8]) should return 0', () => {
  expect(sumEvenNegative([1, 2, 3, 4, 5, 6, 7, 8])).to.equal(0);
});

it('sumEvenNegative([1, -2, 3, 4, 5, -6, 7, 8, 9]) should return -8', () => {
  expect(sumEvenNegative([1, -2, 3, 4, 5, -6, 7, 8, 9])).to.equal(-8);
});

it('sumEvenNegative([1, 3, 5, 7, 9]) should return 0', () => {
  expect(sumEvenNegative([1, 3, 5, 7, 9])).to.equal(0);
});

it('sumEvenNegative([-2, -4, -8]) should return -14', () => {
  expect(sumEvenNegative([-2, -4, -8])).to.equal(-14);
});

it('sumEvenNegative([33, 105, -10, 11]) should return -10', () => {
  expect(sumEvenNegative([33, 105, -10, 11])).to.equal(-10);
});

it('sumEvenNegative([]) should return 0', () => {
  expect(sumEvenNegative([])).to.equal(0);
});

// OPENTESTSEND
// HIDDENTESTSSTART

// HIDDENTESTSEND
