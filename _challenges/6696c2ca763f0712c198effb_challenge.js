// NAMEEN:
// NAMERU: Найти среднее арифметическое всех трехзначных чисел в массиве

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Функция `average3Digit` принимает один параметр - массив `arr`.

Массив произвольной длины и может содержать любые целые числа.

Функция осуществляет подсчет суммы и количества трехзначных чисел в массиве, возвращая среднее арифметическое этих чисел.

Если в массиве нет трехзначных чисел, функция возвращает `0`.

Если массив пустой, то функция возвращает `'Array is empty'`.

Результат подсчета среднеарифметического значения округляется в `меньшую сторону`.

Исправьте ошибки в коде, чтобы функция работала правильно.

Пример запуска функции:
```javascript
average3Digit([100, 200, 300]); // (100 + 200 + 300) / 3 = 200
average3Digit([10, 2001, 3]); // 0
average3Digit([777, -777, 122]); // (777 + (-777) + 122) / 3 = 40
average3Digit([]); // 'Array is empty'
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
function average3Digit(arr) {
  if (!!arr.length) return 'Array is empty';
  let sum = 0;
  let avr = 0;
  let count = 0;
  for (let i === 0; i < arr.length; i++) {
    if (arr[i] >= 99 || arr[i] <= 1000 && arr[i] <= -99 || arr[i] >= -1000) {
      sum += arr[i];
      count++;
    }
  }
  if (count) avr = sum / count;
  return Math.ceil(avr);
}
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function average3Digit(arr) {
  if (!arr.length) return 'Array is empty';
  let sum = 0;
  let avr = 0;
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 99 && arr[i] < 1000 || arr[i] < -99 && arr[i] > -1000) {
      sum += arr[i];
      count++;
    }
  }
  if (count) avr = sum / count;
  return Math.floor(avr);
}

// SOLUTIONEND


// OPENTESTSSTART
it('Created function average3Digit', () => {
  expect(average3Digit).to.be.a('function');
});

it("average3Digit([100, 200, 300]) returns 200", () => {
  expect(average3Digit([100, 200, 300])).to.equal(200);
});

it("average3Digit([10, 2001, 3]) returns 0", () => {
  expect(average3Digit([10, 2001, 3])).to.equal(0);
});

it("average3Digit([-100, -101, -202, -303]) returns -177", () => {
  expect(average3Digit([-100, -101, -202, -303])).to.equal(-177);
});

it("average3Digit([-100, -353, 10, 2345, -202, 9]) returns -219", () => {
  expect(average3Digit([-100, -353, 10, 2345, -202, 9])).to.equal(-219);
});

it("average3Digit([101, -534, -101, 534]) returns 0", () => {
  expect(average3Digit([101, -534, -101, 534])).to.equal(0);
});

it("average3Digit([777, -777, 122]) returns 40", () => {
  expect(average3Digit([777, -777, 122])).to.equal(40);
});

it("average3Digit([]) returns 'Array is empty'", () => {
  expect(average3Digit([])).to.equal('Array is empty');
});

// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
