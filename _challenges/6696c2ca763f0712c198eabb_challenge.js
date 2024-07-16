// NAMEEN:
// NAMERU:Сумма всех положительных четных 3-хзначных чисел массива

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `sumEvenPositive3digitNum`, которая принимает один парамерт - массив.

Массив произвольной длины и состоит из положительных и отрицательных целых чисел.

Функция должна вернуть сумму всех положительных четных 3-хзначных чисел массива.

Пример запуска функции:
```javascript
sumEvenPositive3digitNum([100, 200, 300, 400]) // 100 + 200 + 300 + 400 = 1000
sumEvenPositive3digitNum([101, 203, 305, 407]) // 0
sumEvenPositive3digitNum([2, 20, 200, 300, -400, 40]) // 200 + 300 = 500
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
fun
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function sumEvenPositive3digitNum(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0 && arr[i] > 99 && arr[i] < 1000) {
      sum += arr[i]
    }
  }
  return sum
}

// SOLUTIONEND


// OPENTESTSSTART
it('Created function sumEvenPositive3digitNum', () => {
  expect(sumEvenPositive3digitNum).to.be.a('function');
});

it('sumEvenPositive3digitNum([100, 200, 300, 400]) // 1000', () => {
  expect(sumEvenPositive3digitNum([100, 200, 300, 400])).to.be.equal(1000);
} );

it('sumEvenPositive3digitNum([101, 203, 305, 407]) // 0', () => {
  expect(sumEvenPositive3digitNum([101, 203, 305, 407])).to.be.equal(0);
} );

it('sumEvenPositive3digitNum([2, 20, 200, 300, -400, 40]) // 500', () => {
  expect(sumEvenPositive3digitNum([2, 20, 200, 300, -400, 40])).to.be.equal(500);
} );

it('sumEvenPositive3digitNum([-200, -300, -400, 20]) // 0', () => {
  expect(sumEvenPositive3digitNum([-200, -300, -400, 20])).to.be.equal(0);
} );

it('sumEvenPositive3digitNum([2, 4, 10, 18, 30, 80]) // 0', () => {
  expect(sumEvenPositive3digitNum([2, 4, 10, 18, 30, 80])).to.be.equal(0);
} );

it('sumEvenPositive3digitNum([-400, -600, -800, -100, -200, 700, -500, -300]) // 700', () => {
  expect(sumEvenPositive3digitNum([-400, -600, -800, -100, -200, 700, -500, -300])).to.be.equal(700);
} );

it('sumEvenPositive3digitNum([]) // 0', () => {
  expect(sumEvenPositive3digitNum([])).to.be.equal(0);
} );

// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
