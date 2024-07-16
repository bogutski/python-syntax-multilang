// NAMEEN:
// NAMERU:Найти среднее арифметическое чисел в массиве

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `average`, которая принимает один параметр - массив чисел.

Массив может состоять из любого количества чисел как отрицательных, так и положительных.

Числа в массиве могут быть как целыми, так и дробными.

Функция должна вернуть среднее арифметическое чисел в массиве, округленное до ближайшего целого.

Если массив пустой, то функция должна вернуть строку вида `Empty array`.

Пример запуска функции:
```javascript
average([1, 2, 3, 4, 5]); // 3
average([]); // 'Empty array'
average([2, 3, 4, 5, 1, 1]); // 3
average([200, 30, -40, 5]); // 49
average([21, 13, 4]); // 13
average([7]); // 7
average([7.5, 4.3, 5.1, 9.07, 1.1]); // 5
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
fun
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function average(arr) {
  if (!arr.length) return 'Empty array';
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return Math.round(sum / arr.length);
}

// SOLUTIONEND


// OPENTESTSSTART
it('Created function average', () => {
  expect(average).to.be.a('function');
});

it("average([1, 2, 3, 4, 5]) should return 3", () => {
  expect(average([1, 2, 3, 4, 5])).to.equal(3);
});

it("average([]) should return 'Empty array'", () => {
  expect(average([])).to.equal('Empty array');
});

it("average([2, 3, 4, 5, 1, 1]) should return 3", () => {
  expect(average([2, 3, 4, 5, 1, 1])).to.equal(3);
});

it("average([200, 30, -40, 5]) should return 49", () => {
  expect(average([200, 30, -40, 5])).to.equal(49);
});

it("average([21, 13, 4]) should return 13", () => {
  expect(average([21, 13, 4])).to.equal(13);
});

it("average([7]) should return 7", () => {
  expect(average([7])).to.equal(7);
});

it("average([7.5, 4.3, 5.1, 9.07, 1.1]) should return 5", () => {
  expect(average([7.5, 4.3, 5.1, 9.07, 1.1])).to.equal(5);
});

// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
