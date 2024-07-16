// NAMEEN:
// NAMERU:Исправьте ошибки, чтобы функция работала правильно

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Функция `stopAt2DigitNum` принимает один параметр - массив чисел произвольной длины.

`stopAt2DigitNum` возвращает сумму всех чисел в массиве.

Если встречается двузначное положительное или отрицательное число,

то суммирование прекращается и возвращается текущая сумма до встречи с двузначным числом.

Исправьте ошибки в коде, чтобы функция работала правильно.

Пример запуска функции:
```javascript
stopAt2DigitNum([1, 3, 5, 17, 7, 84, 9]) // 1 + 3 + 5 = 9
stopAt2DigitNum([3, 4, -11, 3, 5, 33]) // 3 + 4 = 7
stopAt2DigitNum([15, 7, -2]) // 0
stopAt2DigitNum([1, 3, 4]) // 1 + 3 + 4 = 8
stopAt2DigitNum([2, 400, 5, 99]) // 2 + 400 + 5 = 407
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
function StopAt2DigitNum(arr) {
  let sum = 0
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] >= 9 || arr[i] <= 100 && arr[i] <= -9 || arr[i] >= -100) break;
    sum -= arr[i]
  }
  return arr
}
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function stopAt2DigitNum(arr) {
  let sum = 0
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 9 && arr[i] < 100 || arr[i] < -9 && arr[i] > -100) break;
    sum += arr[i]
  }
  return sum
}

// SOLUTIONEND


// OPENTESTSSTART
it('Created function stopAt2DigitNum', () => {
  expect(stopAt2DigitNum).to.be.a('function');
});

it('stopAt2DigitNum([1, 3, 5, 17]) should return 9', () => {
  expect(stopAt2DigitNum([1, 3, 5, 17])).to.equal(9);
});

it('stopAt2DigitNum([3, 4, -11]) should return 7', () => {
  expect(stopAt2DigitNum([3, 4, -11])).to.equal(7);
});

it('stopAt2DigitNum([15, 7, -2]) should return 0', () => {
  expect(stopAt2DigitNum([15, 7, -2])).to.equal(0);
});

it('stopAt2DigitNum([1, 3, 4]) should return 8', () => {
  expect(stopAt2DigitNum([1, 3, 4])).to.equal(8);
});

it('stopAt2DigitNum([-2, -4, -5, 99]) should return -11', () => {
  expect(stopAt2DigitNum([-2, -4, -5, 99])).to.equal(-11);
});

it('stopAt2DigitNum([]) should return 0', () => {
  expect(stopAt2DigitNum([])).to.equal(0);
});

it('stopAt2DigitNum([2, 400, 5, 99]) should return 407', () => {
  expect(stopAt2DigitNum([2, 400, 5, 99])).to.equal(407);
});

it('stopAt2DigitNum([2000, 400, 5, 11, 100]) should return 2405', () => {
  expect(stopAt2DigitNum([2000, 400, 5, 11, 100])).to.equal(2405);
});

// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
