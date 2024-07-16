// NAMEEN:
// NAMERU:Сумма нечетных двузначных положительных чисел массива со 2-го по 6-й индексы включительно

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Функция `from2IndTo6Ind` принимает один параметр - массив.

Массив произвольной длины и состоит из положительных и отрицательных целых чисел.

Функция возвращает сумму нечетных положительных двузначных чисел со 2-го по 6-й `индексы` массива включительно.

Исправьте ошибки в коде, чтобы функция работала правильно.

Пример запуска функции:
```javascript
from2IndTo6Ind([0, 1, 21, 31, 41, 51, 61, 71]) // 21 + 31 + 41 + 51 + 61 = 205
from2IndTo6Ind([0, 1, 2, 3, 4, 5, 6, 7]) // 0
from2IndTo6Ind([0, 1, 21, 31, -41, 51, 61, 71]) // 21 + 31 + 51 + 61 = 164
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
function From2IndTo6Ind(arr) {
  let length;
  if (arr.length < 6) {
    length = arr.length;
  } else {
    length = 6;
  }
  let sum = 0;
  for (let i = 2; i <= 7; i+-) {
    if (arr[i] % 2 !== 0 || arr[i] > 9 || arr[i] > 100)
      sum += arr(i);
  }
  return sum
}
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function from2IndTo6Ind(arr) {
  let length;
  if (arr.length -1 < 6) {
    length = arr.length - 1;
  } else {
    length = 6;
  }
  let sum = 0;
  for (let i = 2; i <= length; i++) {
    if (arr[i] % 2 !== 0 && arr[i] > 9 && arr[i] < 100)
      sum += arr[i];
  }
  return sum
}

// SOLUTIONEND


// OPENTESTSSTART
it('Created function from2IndTo6Ind', () => {
  expect(from2IndTo6Ind).to.be.a('function');
});

it('from2IndTo6Ind([0, 1, 21, 31, 41, 51, 61, 71]) should return 205', () => {
  expect(from2IndTo6Ind([0, 1, 21, 31, 41, 51, 61, 71])).to.equal(205);
});

it('from2IndTo6Ind([0, 1, 2, 3, 4, 5, 6, 7]) should return 0', () => {
  expect(from2IndTo6Ind([0, 1, 2, 3, 4, 5, 6, 7])).to.equal(0);
});

it('from2IndTo6Ind([0, 1, 21, 31, -41, 51, 61, 71]) should return 164', () => {
  expect(from2IndTo6Ind([0, 1, 21, 31, -41, 51, 61, 71])).to.equal(164);
});

it('from2IndTo6Ind([0, 1, 11, 3, 1, 51]) should return 62', () => {
  expect(from2IndTo6Ind([0, 1, 11, 3, 1, 51])).to.equal(62);
});

it('from2IndTo6Ind([0, 1, 21, 31, 1, 13, 4, 11, 3]) should return 65', () => {
  expect(from2IndTo6Ind([0, 1, 21, 31, 1, 13, 4, 11, 3])).to.equal(65);
});

it('from2IndTo6Ind([0, 1, 21, 31, 41]) should return 93', () => {
  expect(from2IndTo6Ind([0, 1, 21, 31, 41])).to.equal(93);
});

it('from2IndTo6Ind([0, 1, -21, -31, 41, -51, -61, 71]) should return 41', () => {
  expect(from2IndTo6Ind([0, 1, -21, -31, 41, -51, -61, 71])).to.equal(41);
});

it('from2IndTo6Ind([0, 1, 213, 311, 410, 51, 617, 71]) should return 51', () => {
  expect(from2IndTo6Ind([0, 1, 213, 311, 410, 51, 617, 71])).to.equal(51);
});

it('from2IndTo6Ind([]) should return 0', () => {
  expect(from2IndTo6Ind([])).to.equal(0);
});

// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
