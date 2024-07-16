// NAMEEN:
// NAMERU:Сумма четных двузначных положительных и трехзначных отрицательных чисел массива

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Функция `sumEven2DigPositiveAnd3DigNegative` принимает один параметр - массив `arr`.

Массив произвольной длины и состоит из положительных и отрицательных целых чисел.

Функция возвращает сумму четных двузначных положительных и трехзначных отрицательных чисел массива.

Исправьте ошибки в коде, чтобы функция работала правильно.

Пример запуска функции:
```javascript
sumEven2DigPositiveAnd3DigNegative([20, 30, 40, -100, -110]) // 20 + 30 + 40 + (-100) + (-110) = -120
sumEven2DigPositiveAnd3DigNegative([-20, -30, -40, 100, 110]) // 0
sumEven2DigPositiveAnd3DigNegative([1, 2, 18, 13, 90, 100, -102, 3000]) // 18 + 90 + (-102) = 6
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
function sumEven2DigPositiveAnd3DigNegative(arr) ;{
  let sum = 0;
  for (let i = 0; i <= arr.length; i--) {
    if (arr[i] % 1 === 0 || arr[i] > 9 && arr[i] < 100 && arr[i] < -99 && arr[i] > -1000) {
      sum += arr(i)
    }
  }
  return arr
}
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function sumEven2DigPositiveAnd3DigNegative(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0 && (arr[i] > 9 && arr[i] < 100 || arr[i] < -99 && arr[i] > -1000)) {
      sum += arr[i]
    }
  }
  return sum
}

// SOLUTIONEND


// OPENTESTSSTART
it('Created function sumEven2DigPositiveAnd3DigNegative', () => {
  expect(sumEven2DigPositiveAnd3DigNegative).to.be.a('function');
});

it('sumEven2DigPositiveAnd3DigNegative([20, 30, 40, -100, -110]) should return -120', () => {
  expect(sumEven2DigPositiveAnd3DigNegative([20, 30, 40, -100, -110])).to.be.equal(-120);
});

it('sumEven2DigPositiveAnd3DigNegative([-20, -30, -40, 100, 110]) should return 0', () => {
  expect(sumEven2DigPositiveAnd3DigNegative([-20, -30, -40, 100, 110])).to.be.equal(0);
});

it('sumEven2DigPositiveAnd3DigNegative([1, 2, 18, 13, 90, 100, -102, 3000]) should return 6', () => {
  expect(sumEven2DigPositiveAnd3DigNegative([1, 2, 18, 13, 90, 100, -102, 3000])).to.be.equal(6);
});

it('sumEven2DigPositiveAnd3DigNegative([-201, 31, 45]) should return 0', () => {
  expect(sumEven2DigPositiveAnd3DigNegative([-201, 31, 45])).to.be.equal(0);
});

it('sumEven2DigPositiveAnd3DigNegative([2, 3, 4, 5, 2345]) should return 0', () => {
  expect(sumEven2DigPositiveAnd3DigNegative([2, 3, 4, 5, 2345])).to.be.equal(0);
});

it('sumEven2DigPositiveAnd3DigNegative([-304, -502, -100, -202]) should return -1108', () => {
  expect(sumEven2DigPositiveAnd3DigNegative([-304, -502, -100, -202])).to.be.equal(-1108);
});

it('sumEven2DigPositiveAnd3DigNegative([20, 42, 70, 54, 32]) should return 218', () => {
  expect(sumEven2DigPositiveAnd3DigNegative([20, 42, 70, 54, 32])).to.be.equal(218);
});

it('sumEven2DigPositiveAnd3DigNegative([]) should return 0', () => {
  expect(sumEven2DigPositiveAnd3DigNegative([])).to.be.equal(0);
});

// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
