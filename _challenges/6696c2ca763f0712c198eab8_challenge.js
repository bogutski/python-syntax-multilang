// NAMEEN:
// NAMERU:Сумма всех чётных чисел в массиве

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `sumEven`, которая принимает один параметр - массив.

Массив произвольной длины и состоит только из целых положительных или отрицательных чисел.

Функция должна вернуть сумму всех чётных чисел, находящихся в массиве.

Пример запуска функции:
```javascript
sumEven([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]) // 2 + 4 + 6 + 8 + 10 = 30
sumEven([1, -2, 3, 4, 5, -6, 7, 8, 9]) // (-2) + 4 + (-6) + 8 = 4
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
fun
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function sumEven(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      sum += arr[i]
    }
  }
  return sum
}

// SOLUTIONEND


// OPENTESTSSTART
it('Created function sumEven', () => {
  expect(sumEven).to.be.a('function');
});

it('sumEven([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]) should return 30', () => {
  expect(sumEven([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])).to.be.equal(30);
});

it('sumEven([1, -2, 3, 4, 5, -6, 7, 8, 9]) should return 4', () => {
  expect(sumEven([1, -2, 3, 4, 5, -6, 7, 8, 9])).to.be.equal(4);
});

it('sumEven([1, 3, 5, 7, 9]) should return 0', () => {
  expect(sumEven([1, 3, 5, 7, 9])).to.be.equal(0);
});

it('sumEven([-2, -4, -6, -8]) should return -20', () => {
  expect(sumEven([-2, -4, -6, -8])).to.be.equal(-20);
});

it('sumEven([]) should return 0', () => {
  expect(sumEven([])).to.be.equal(0);
});

it('sumEven([33, 105, 50, 11]) should return 50', () => {
  expect(sumEven([33, 105, 50, 11])).to.be.equal(50);
});

// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
