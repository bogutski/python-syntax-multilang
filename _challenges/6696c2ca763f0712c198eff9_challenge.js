// NAMEEN:
// NAMERU:Найти среднее арифметическое всех нечетных чисел в массиве

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `averageOdd`, которая принимает один параметр - массив чисел.

Массив произвольной длины и может содержать как положительные, так и отрицательные целые числа.

Функция производит подсчет суммы и количества всех нечетных чисел в массиве, возвращая среднее арифметическое этих чисел.

Если массив пустой, то функция должна вернуть строку `'Array is empty'`.

Результат подсчета среднеарифметического значения должен быть округлен в `большую сторону`.

Если в массиве нет нечетных чисел, то функция должна вернуть `0`.

Пример запуска функции:
```javascript
averageOdd([11, 13, 17]); // (11 + 13 + 17) / 3 = 14
averageOdd([12, 4, 138]); // 0
averageOdd([1, 27, -353]); // (1 + 27 + (-353)) / 3 = -108
averageOdd([]); // 'Array is empty'
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
fun
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function averageOdd(arr) {
  if (!arr.length) return 'Array is empty';
  let sum = 0;
  let avr = 0;
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 !== 0) {
      sum += arr[i];
      count++;
    }
  }
  if (count) avr = sum / count;
  return Math.ceil(avr);
}

// SOLUTIONEND


// OPENTESTSSTART
it('Created function averageOdd', () => {
  expect(averageOdd).to.be.a('function');
});

it("averageOdd([11, 13, 17]) should return 14", () => {
  expect(averageOdd([11, 13, 17])).to.equal(14);
});

it("averageOdd([12, 4, 138]) should return 0", () => {
  expect(averageOdd([12, 4, 138])).to.equal(0);
});

it("averageOdd([-11, 30, 17, 11, -17]) should return 0", () => {
  expect(averageOdd([-11, 30, 17, 11, -17])).to.equal(0);
});

it("averageOdd([1, 27, -353]) should return -108", () => {
  expect(averageOdd([1, 27, -353])).to.equal(-108);
});

it("averageOdd([11, 3, -11]) should return 1", () => {
  expect(averageOdd([11, 3, -11])).to.equal(1);
});

it("averageOdd([11]) should return 11", () => {
  expect(averageOdd([11])).to.equal(11);
});

it("averageOdd([]) should return 'Array is empty'", () => {
  expect(averageOdd([])).to.equal('Array is empty');
});

// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
