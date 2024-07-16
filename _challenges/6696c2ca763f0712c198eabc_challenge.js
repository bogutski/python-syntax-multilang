// NAMEEN:
// NAMERU:Сумма четных чисел массива с 5-го по 10-й элемент включительно

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `from5ElTo10El`, которая принимает один парамерт - массив.

Массив произвольной длины и состоит из положительных и отрицательных целых чисел.

Функция должна вернуть сумму четных чисел с 5-го по 10-й элемент массива включительно.

Перед выполнением цикла for, проверьте длину массива.

Если длина массива меньше 9, то в условии цикла используйте длину массива.

Если длина массива больше 9, то в условии цикла используйте 9.

Примечание: помните, что нумерация элементов массива начинается с 0.

Если надо получить 4-й элемент массива, то его индекс будет равен 3.

Пример запуска функции:
```javascript
from5ElTo10El([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]) // 6 + 8 + 10 = 24
from5ElTo10El([2, 3, 4, 5, 6, 7, 8, 9]) // 6 + 8 = 14
from5ElTo10El([2, 40, 6, 80]) // 0
from5ElTo10El([2, 4, 6, 8, -10, 12, 14, -16, 18, 20, 22, 24]) // (-10) + 12 + 14 + (-16) + 18 + 20 = 38
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
fun
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function from5ElTo10El(arr) {
  let length = arr.length -1 < 9 ? arr.length - 1 : 9;
  let sum = 0;
  for (let i = 4; i <= length; i++) {
    if (arr[i] % 2 === 0)
      sum += arr[i];
  }
  return sum
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function from5ElTo10El', () => {
  expect(from5ElTo10El).to.be.a('function');
});

it('from5ElTo10El([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]) should return 24', () => {
  expect(from5ElTo10El([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13])).to.equal(24);
});

it('from5ElTo10El([2, 3, 4, 5, 6, 7, 8, 9]) should return 14', () => {
  expect(from5ElTo10El([2, 3, 4, 5, 6, 7, 8, 9])).to.equal(14);
});

it('from5ElTo10El([2, 40, 6, 80]) should return 0', () => {
  expect(from5ElTo10El([2, 40, 6, 80])).to.equal(0);
});

it('from5ElTo10El([2, 4, 6, 8, -10, 12, 14, -16, 18, 20, 22, 24]) should return 38', () => {
  expect(from5ElTo10El([2, 4, 6, 8, -10, 12, 14, -16, 18, 20, 22, 24])).to.equal(38);
});

it('from5ElTo10El([0, 1, 2, 3, 4, 5, 6, 7, 8, 21, 11]) should return 18', () => {
  expect(from5ElTo10El([0, 1, 2, 3, 4, 5, 6, 7, 8, 21, 11])).to.equal(18);
});

it('from5ElTo10El([4, 1, 20, 3, 24, 5, 28, 7, 22, 26, 11]) should return 100', () => {
  expect(from5ElTo10El([4, 1, 20, 3, 24, 5, 28, 7, 22, 26, 11])).to.equal(100);
});

it('from5ElTo10El([1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21]) should return 0', () => {
  expect(from5ElTo10El([1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21])).to.equal(0);
});

it('from5ElTo10El([2, 3, 4, 5, 3, 7, 11, 9, 13, 17, 18]) should return 0', () => {
  expect(from5ElTo10El([2, 3, 4, 5, 3, 7, 11, 9, 13, 17, 18])).to.equal(0);
});

it('from5ElTo10El([]) should return 0', () => {
  expect(from5ElTo10El([])).to.equal(0);
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
