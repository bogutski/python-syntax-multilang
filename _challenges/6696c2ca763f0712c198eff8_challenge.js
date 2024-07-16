// NAMEEN:
// NAMERU:Найти среднее арифметическое всех четных чисел в массиве

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `averageEven`, которая принимает один параметр - массив чисел.

Массив произвольной длины и может содержать как положительные, так и отрицательные целые числа.

Функция производит подсчет суммы и количества всех четных чисел в массиве, возвращая среднее арифметическое этих чисел.

Если массив пустой, то функция должна вернуть строку `'Array is empty'`.

Результат подсчета среднеарифметического значения должен быть округлен в `меньшую сторону`.

Если в массиве нет четных чисел, то функция должна вернуть `0`.

Пример запуска функции:
```javascript
averageEven([1, 2, 3, 4, -2, -4]); // (2 + 4 + (-4) + (-2)) / 4 = 0
averageEven([1, 5, 3]); // 0
averageEven([1, 2, 3, 4, -6, -4, -8]); // (2 + 4 + (-6) + (-4) + (-8)) / 5 = -3
averageEven([]); // 'Array is empty'
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
fun
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function averageEven(arr) {
  if (!arr.length) return 'Array is empty';
  let sum = 0;
  let avr = 0;
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      sum += arr[i];
      count++;
    }
  }
  if (count) avr = sum / count;
  return Math.floor(avr);
}

// SOLUTIONEND


// OPENTESTSSTART
it('Created function averageEven', () => {
  expect(averageEven).to.be.a('function');
});

it("averageEven([1, 2, 3, 4]) should return 3", () => {
  expect(averageEven([1, 2, 3, 4])).to.equal(3);
});

it("averageEven([1, 2, 3, 4, -2, -4]) should return 0", () => {
  expect(averageEven([1, 2, 3, 4, -2, -4])).to.equal(0);
});

it("averageEven([1, 5, 3]) should return 0", () => {
  expect(averageEven([1, 5, 3])).to.equal(0);
});

it("averageEven([2, 4, 6]) should return 4", () => {
  expect(averageEven([2, 4, 6])).to.equal(4);
});

it("averageEven([1, 2, 3, 4, -6, -4, -8]) should return -3", () => {
  expect(averageEven([1, 2, 3, 4, -6, -4, -8])).to.equal(-3);
});

it("averageEven([1, 2, 3, 4, -4]) should return 0", () => {
  expect(averageEven([1, 2, 3, 4, -4])).to.equal(0);
});

it("averageEven([]) should return 'Array is empty'", () => {
  expect(averageEven([])).to.equal('Array is empty');
});

// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
