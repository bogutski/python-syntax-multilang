// NAMEEN:
// NAMERU:Подсчёт суммы чисел в массиве прерывается при встрече с трёхзначным числом

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `stopAt3DigitNum`, которая принимает один параметр - массив чисел.

Функция возвращает сумму всех чисел в массиве.

Если в массиве встречается положительное трёхзначное число, то суммирование прекращается и возвращается текущая сумма.

Пример запуска функции:
```javascript
stopAt3DigitNum([1, 12, 35, 57, 123, 36, 3, 4, 2345]) // 1 + 12 + 35 + 57 = 105
stopAt3DigitNum([1, 35, -123, 36, 3, 4]) // 1 + 35 + (-123) + 36 + 3 + 4 = -44
stopAt3DigitNum([1, 35, 3, 4]) // 1 + 35 + 3 + 4 = 43
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
fun
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function stopAt3DigitNum(arr) {
  let sum = 0
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 99 && arr[i] < 1000) break;
    sum += arr[i]
  }
  return sum
}

// SOLUTIONEND


// OPENTESTSSTART
it('Created function stopAt3DigitNum', () => {
  expect(stopAt3DigitNum).to.be.a('function');
});

it('stopAt3DigitNum([1, 12, 35, 57, 123, 36, 3, 4, 2345]) should return 105', () => {
  expect(stopAt3DigitNum([1, 12, 35, 57, 123, 36, 3, 4, 2345])).to.be.equal(105);
});

it('stopAt3DigitNum([1, 35, -123, 36, 3, 4]) should return -44', () => {
  expect(stopAt3DigitNum([1, 35, -123, 36, 3, 4])).to.be.equal(-44);
});

it('stopAt3DigitNum([1, 35, 3, 4]) should return 43', () => {
  expect(stopAt3DigitNum([1, 35, 3, 4])).to.be.equal(43);
});

it('stopAt3DigitNum([123, 36, 3]) should return 0', () => {
  expect(stopAt3DigitNum([123, 36, 3])).to.be.equal(0);
});

it('stopAt3DigitNum([]) should return 0', () => {
  expect(stopAt3DigitNum([])).to.be.equal(0);
});

it('stopAt3DigitNum([1, 2, 3, 4, 303]) should return 10', () => {
  expect(stopAt3DigitNum([1, 2, 3, 4, 303])).to.be.equal(10);
});

// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
