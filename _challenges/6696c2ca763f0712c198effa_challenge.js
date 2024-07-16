// NAMEEN:
// NAMERU:Найти среднее арифметическое всех десятичных дробей в массиве

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `averageDes`, которая принимает один параметр - массив чисел.

Массив произвольной длины и может содержать как целые числа, так и десятичные дроби.

Функция производит подсчет суммы и количества всех десятичных дробей в массиве, возвращая их среднее арифметическое значение.

Если массив пустой, то функция должна вернуть строку `'Array is empty'`.

Результат должен быть округлен до 2-х знаков после запятой и переведен в тип данных `number`.

Если в массиве нет десятичных дробей, то функция должна вернуть `0`.

Пример запуска функции:
```javascript
averageDes([1, 2, 3]); // 0
averageDes([0.8, 12.1, -0.8]); // (0.8 + 12.1 + (-0.8)) / 3 = 4.03
averageDes([3.7, -8.3]); // (3.7 + (-8.3)) / 2 = -2.3
averageDes([3.5, 2, 7.3, -2.1, -4]); // (3.5 + 7.3 + (-2.1)) / 3 = 2.9
averageDes([]); // 'Array is empty'
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
fun
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function averageDes(arr) {
  if (!arr.length) return 'Array is empty';
  let sum = 0;
  let avr = 0;
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] - Math.floor(arr[i]) !== 0) {
      sum += arr[i];
      count++;
    }
  }
  if (count) avr = sum / count;
  return +avr.toFixed(2);
}

// SOLUTIONEND


// OPENTESTSSTART
it('Created function averageDes', () => {
  expect(averageDes).to.be.a('function');
});

it("averageDes([1.1, 1.2, 1.3, 1.4]) should return 1.25", () => {
  expect(averageDes([1.1, 1.2, 1.3, 1.4])).to.equal(1.25);
});

it("averageDes([1, 2, 3]) should return 0", () => {
  expect(averageDes([1, 2, 3])).to.equal(0);
});

it("averageDes([3.5, 7.1, -3.5, -7.1]) should return 0", () => {
  expect(averageDes([3.5, 7.1, -3.5, -7.1])).to.equal(0);
});

it("averageDes([0.8, 12.1, -0.8]) should return 4.03", () => {
  expect(averageDes([0.8, 12.1, -0.8])).to.equal(4.03);
});

it("averageDes([12.5, 7.5]) should return 10", () => {
  expect(averageDes([12.5, 7.5])).to.equal(10);
});

it("averageDes([3.7, -8.3]) should return -2.3", () => {
  expect(averageDes([3.7, -8.3])).to.equal(-2.3);
});

it("averageDes([]) should return 'Array is empty'", () => {
  expect(averageDes([])).to.equal('Array is empty');
});

it("averageDes([3.5, 2, 7.3, -2.1, -4]) should return 2.9", () => {
  expect(averageDes([3.5, 2, 7.3, -2.1, -4])).to.equal(2.9);
});

// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
