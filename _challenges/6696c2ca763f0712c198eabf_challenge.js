// NAMEEN:
// NAMERU:Сумма нечетных чисел от середины массива до конца

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `sumOddFromMiddleToEnd`, которая принимает один параметр - массив.

Массив произвольной длины и состоит из положительных и отрицательных целых чисел.

Функция должна вернуть сумму нечетных чисел от середины массива до конца.

Перед созданием цикла `for`, создайте переменную, которой присвойте значение половины длины массива, округленное в меньшую сторону.

Для округления в меньшую сторону используйте метод `Math.floor()`.

Пример запуска функции:
```javascript
sumOddFromMiddleToEnd([1, 3, 5, 7, 9, 11, 13])); // 7 + 9 + 11 + 13 = 40
sumOddFromMiddleToEnd([1, 2, 3, 4, 5, 6, 7, 1])); // 5 + 7 + 1 = 13
sumOddFromMiddleToEnd([-1, -3, -5, -7, -9, -11])); // (-7) + (-9) + (-11) = -27
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
fun
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function sumOddFromMiddleToEnd(arr) {
  let length = Math.floor(arr.length / 2);
  let sum = 0;
  for (let i = length; i < arr.length; i++) {
    if (arr[i] % 2 !== 0)
      sum += arr[i]
  }
  return sum
}

// SOLUTIONEND


// OPENTESTSSTART
it('Created function sumOddFromMiddleToEnd', () => {
  expect(sumOddFromMiddleToEnd).to.be.a('function');
});

it('sumOddFromMiddleToEnd([1, 3, 5, 7, 9, 11, 13]) should return 40', () => {
  expect(sumOddFromMiddleToEnd([1, 3, 5, 7, 9, 11, 13])).to.equal(40);
});

it('sumOddFromMiddleToEnd([1, 2, 3, 4, 5, 6, 7, 1]) should return 13', () => {
  expect(sumOddFromMiddleToEnd([1, 2, 3, 4, 5, 6, 7, 1])).to.equal(13);
});

it('sumOddFromMiddleToEnd([-1, -3, -5, -7, -9, -11]) should return -27', () => {
  expect(sumOddFromMiddleToEnd([-1, -3, -5, -7, -9, -11])).to.equal(-27);
});

it('sumOddFromMiddleToEnd([1, 3, -5, 7, -9, 11, 13]) should return 22', () => {
  expect(sumOddFromMiddleToEnd([1, 3, -5, 7, -9, 11, 13])).to.equal(22);
});

it('sumOddFromMiddleToEnd([2, 4, 6, 8, 10, 12, 14, 16, 18]) should return 0', () => {
  expect(sumOddFromMiddleToEnd([2, 4, 6, 8, 10, 12, 14, 16, 18])).to.equal(0);
});

it('sumOddFromMiddleToEnd([11, 31, 33]) should return 64', () => {
  expect(sumOddFromMiddleToEnd([11, 31, 33])).to.equal(64);
});

it('sumOddFromMiddleToEnd([1, 3]) should return 3', () => {
  expect(sumOddFromMiddleToEnd([1, 3])).to.equal(3);
});

it('sumOddFromMiddleToEnd([5]) should return 5', () => {
  expect(sumOddFromMiddleToEnd([5])).to.equal(5);
});

it('sumOddFromMiddleToEnd([]) should return 0', () => {
  expect(sumOddFromMiddleToEnd([])).to.equal(0);
});

// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
