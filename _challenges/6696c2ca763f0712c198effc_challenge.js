// NAMEEN:
// NAMERU:Найти среднее арифметическое всех отрицательных чисел в массиве

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `averageNegative`, которая принимает один параметр - массив чисел.

Массив произвольной длины и может содержать как положительные, так и отрицательные целые числа.

Функция производит подсчет суммы и количества всех отрицательных чисел в массиве, возвращая среднее арифметическое этих чисел.

Если массив пустой, то функция должна вернуть строку `'Array is empty'`.

Результат подсчета среднеарифметического значения должен быть округлен `до ближайшего целого`.

Перед выводом результата в `return`, сделайте проверку на ноль количества отрицательных чисел в массиве.

Пример запуска функции:
```javascript
averageNegative([-10, -3, -120]); // (-10 + (-3) + (-120)) / 3 = -44
averageNegative([5, 31, 12]); // 0
averageNegative([]); // 'Array is empty'
```

INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
fun
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function averageNegative(arr) {
  if (!arr.length) return 'Array is empty';
  let sum = 0;
  let avr = 0;
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
      sum += arr[i];
      count++;
    }
  }
  if (count) avr = sum / count;
  return Math.round(avr);
}

// SOLUTIONEND


// OPENTESTSSTART
it('Created function averageNegative', () => {
  expect(averageNegative).to.be.a('function');
});

it("averageNegative([-10, -3, -120]) should return -44", () => {
  expect(averageNegative([-10, -3, -120])).to.equal(-44);
});

it("averageNegative([-10, -3, 120]) should return -6", () => {
  expect(averageNegative([-10, -3, 120])).to.equal(-6);
});

it("averageNegative([5, 31, 12]) should return 0", () => {
  expect(averageNegative([5, 31, 12])).to.equal(0);
});

it("averageNegative([-7, 0, 5, -2]) should return -4", () => {
  expect(averageNegative([-7, 0, 5, -2])).to.equal(-4);
});

it("averageNegative([-51, -2]) should return -26", () => {
  expect(averageNegative([-51, -2])).to.equal(-26);
});

it("averageNegative([-9]) should return -9", () => {
  expect(averageNegative([-9])).to.equal(-9);
});

it("averageNegative([]) should return 'Array is empty'", () => {
  expect(averageNegative([])).to.equal('Array is empty');
});

// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
