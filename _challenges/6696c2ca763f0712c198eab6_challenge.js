// NAMEEN:
// NAMERU:Сумма нечетных чисел в массиве

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `sumOdd`, которая принимает один параметр - массив.

Массив произвольной длины, содержит положительные и/или отрицательные целые числа.

Функция должна вернуть сумму всех нечетных чисел в массиве.

Пример запуска функции:
```javascript
sumOdd([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]) // 1 + 3 + 5 + 7 + 9 = 25
sumOdd([-1, 2, 3, 4, -5, 6, 7, 8, 11]) // (-1) + 3 + (-5) + 7 + 11 = 15
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
fun
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function sumOdd(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 !== 0) {
      sum += arr[i]
    }
  }
  return sum
}

// SOLUTIONEND


// OPENTESTSSTART
it('Created function sumOdd', () => {
  expect(sumOdd).to.be.a('function');
});

it('sumOdd([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]) should return 25', () => {
  expect(sumOdd([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])).to.be.equal(25);
});

it('sumOdd([-1, 2, 3, 4, -5, 6, 7, 8, 11]) should return 15', () => {
  expect(sumOdd([-1, 2, 3, 4, -5, 6, 7, 8, 11])).to.be.equal(15);
});

it('sumOdd([10, 2, 50, 3, 11]) should return 14', () => {
  expect(sumOdd([10, 2, 50, 3, 11])).to.be.equal(14);
});

it('sumOdd([100, 201, 32, 54, 73, -5]) should return 269', () => {
  expect(sumOdd([100, 201, 32, 54, 73, -5])).to.be.equal(269);
});

it('sumOdd([1, 3, 5, 7, 9, 11, 13, 15]) should return 64', () => {
  expect(sumOdd([1, 3, 5, 7, 9, 11, 13, 15])).to.be.equal(64);
});

it('sumOdd([2, 4, 6, 8, 10, 12, 14]) should return 0', () => {
  expect(sumOdd([2, 4, 6, 8, 10, 12, 14])).to.be.equal(0);
});

it('sumOdd([2, 4, 6, 7, 10, 12, 14]) should return 7', () => {
  expect(sumOdd([2, 4, 6, 7, 10, 12, 14])).to.be.equal(7);
});

it('sumOdd([]) should return 0', () => {
  expect(sumOdd([])).to.be.equal(0);
});

// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
