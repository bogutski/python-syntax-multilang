// NAMEEN:
// NAMERU:Найти среднее арифметическое всех отрицательных четных чисел в массиве

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `averageNegativeEven`, которая принимает один параметр - массив чисел.

Массив произвольной длины и может содержать как положительные, так и отрицательные целые числа.

Функция производит подсчет суммы и количества всех отрицательных четных чисел в массиве,
возвращая среднее арифметическое этих чисел.

Если массив пустой, то функция должна вернуть строку `'Array is empty'`.

Результат подсчета среднеарифметического значения должен быть округлен в `меньшую сторону`.

Перед выводом результата в `return`, сделайте проверку на ноль количества отрицательных четных чисел в массиве.

Пример запуска функции:
```javascript
averageNegativeEven([-2, -34, -548, -4]); // (-2 + (-34) + (-548) + (-4)) / 4 = -147
averageNegativeEven([-1, -13, -783]); // 0
averageNegativeEven([-28]); // -28
averageNegativeEven([]); // 'Array is empty'
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
fun
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function averageNegativeEven(arr) {
  if (!arr.length) return 'Array is empty';
  let sum = 0;
  let avr = 0;
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 0 && arr[i] % 2 === 0) {
      sum += arr[i];
      count++;
    }
  }
  if (count) avr = sum / count;
  return Math.floor(avr);
}

// SOLUTIONEND


// OPENTESTSSTART
it('Created function averageNegativeEven', () => {
  expect(averageNegativeEven).to.be.a('function');
});

it("averageNegativeEven([-2, -34, -548, -4]) should return -147", () => {
  expect(averageNegativeEven([-2, -34, -548, -4])).to.equal(-147);
});

it("averageNegativeEven([-1, -13, -783]) should return 0", () => {
  expect(averageNegativeEven([-1, -13, -783])).to.equal(0);
});

it("averageNegativeEven([-4, 6, -16, 18]) should return -10", () => {
  expect(averageNegativeEven([-4, 6, -16, 18])).to.equal(-10);
});

it("averageNegativeEven([-3, -20, -301, -4000]) should return -2010", () => {
  expect(averageNegativeEven([-3, -20, -301, -4000])).to.equal(-2010);
});

it("averageNegativeEven([-12, 20, 30, 18]) should return -12", () => {
  expect(averageNegativeEven([-12, 20, 30, 18])).to.equal(-12);
});

it("averageNegativeEven([-44, -2, 0]) should return -23", () => {
  expect(averageNegativeEven([-44, -2, 0])).to.equal(-23);
});

it("averageNegativeEven([-28]) should return -28", () => {
  expect(averageNegativeEven([-28])).to.equal(-28);
});

it("averageNegativeEven([]) should return 'Array is empty'", () => {
  expect(averageNegativeEven([])).to.equal('Array is empty');
});

// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
