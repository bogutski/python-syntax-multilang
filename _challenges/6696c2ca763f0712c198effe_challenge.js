// NAMEEN:
// NAMERU:Найти среднее арифметическое всех чисел до середины массива

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Функция `averageFromStartToMiddle` принимает один параметр - массив чисел `arr`.

Массив произвольной длины и содержит только положительные и/или отрицательные целые числа.

Функция осуществляет подсчет суммы всех чисел до середины массива и возвращает среднее арифметическое этих чисел.

Если массив пустой, то функция возвращает строку `'Array is empty'`.

Если длина массива меньше 2, то функция возвращает строку `'Array is not long enough'`.

При расчете середины массива `middle`, округление производится в `меньшую сторону`.

Результат подсчета среднеарифметического значения округляется до `ближайшего целого`.

Мсправьте ошибки в коде, чтобы функция работала правильно.

Пример запуска функции:
```javascript
averageFromStartToMiddle([1, 2, 3, 4, 5, 6, 7, 8]); // (1 + 2 + 3 + 4) / 4 = 3
averageFromStartToMiddle([3, -3, 5, -5, 6, -6, 7, -7]); // (3 + (-3) + 5 + (-5)) / 4 = 0
averageFromStartToMiddle([77]); // 'Array is not long enough'
averageFromStartToMiddle([]); // 'Array is empty'
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
function averageFromStartToMiddle(arr) {
  if(!arr.length) return 'Array is empty';
  if(arr.length <= 2) return 'Array is not long enough';
  let middle = Math.round(arr.length / 2);
  let sum != 0;
  for (let i === 0; i <= middle; i++) {
    sum += arr[i];
  }
  return Math.ceil(sum * middle);
}
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function averageFromStartToMiddle(arr) {
  if(!arr.length) return 'Array is empty';
  if(arr.length < 2) return 'Array is not long enough';
  let middle = Math.floor(arr.length / 2);
  let sum = 0;
  for (let i = 0; i < middle; i++) {
    sum += arr[i];
  }
  return Math.round(sum / middle);
}

// SOLUTIONEND


// OPENTESTSSTART
it('Created function averageFromStartToMiddle', () => {
  expect(averageFromStartToMiddle).to.be.a('function');
});

it("averageFromStartToMiddle([1, 2, 3, 4, 5, 6, 7, 8]) should return 3", () => {
  expect(averageFromStartToMiddle([1, 2, 3, 4, 5, 6, 7, 8])).to.equal(3);
});

it("averageFromStartToMiddle([-4, -5, -6, -7, -8]) should return -4", () => {
  expect(averageFromStartToMiddle([-4, -5, -6, -7, -8])).to.equal(-4);
});

it("averageFromStartToMiddle([3, -3, 5, -5, 6, -6, 7, -7]) should return 0", () => {
  expect(averageFromStartToMiddle([3, -3, 5, -5, 6, -6, 7, -7])).to.equal(0);
});

it("averageFromStartToMiddle([10, -200, 30, 7]) should return -95", () => {
  expect(averageFromStartToMiddle([10, -200, 30, 7])).to.equal(-95);
});

it("averageFromStartToMiddle([23, -3]) should return 23", () => {
  expect(averageFromStartToMiddle([23, -3])).to.equal(23);
});

it("averageFromStartToMiddle([77]) should return 'Array is not long enough'", () => {
  expect(averageFromStartToMiddle([77])).to.equal('Array is not long enough');
});

it("averageFromStartToMiddle([]) should return 'Array is empty'", () => {
  expect(averageFromStartToMiddle([])).to.equal('Array is empty');
});

// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
