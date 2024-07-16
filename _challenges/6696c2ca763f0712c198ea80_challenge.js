// NAMEEN:
// NAMERU:Сумма однозначных и двузначных чисел

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `oneAndTwoDigits`, которая принимает два числа `n1` и `n2`.

Функция должна посчитать сумму всех чисел в диапазоне от `n1` до `n2`, не включая `n1` и `n2`.

Создайте две переменные `sumOfOne` и `sumOfTwo`, в которых будут храниться суммы однозначных и двузначных чисел соответственно.

Верните строку в формате `Sum of one digit: sumOfOne, sum of two digits: sumOfTwo`.

В функцию будут передаваться негативные и положительные числа, однозначные и двузначные.


Примеры запуска функции:
```javascript
oneAndTwoDigits(1, 15); // "Sum of one digit: 44, sum of two digits: 60"
oneAndTwoDigits(-10, 10); // "Sum of one digit: 0, sum of two digits: 0"
oneAndTwoDigits(-25, 30); // "Sum of one digit: 0, sum of two digits: 135"
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
fun
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function oneAndTwoDigits(n1, n2) {
  let sumOfOne = 0;
  let sumOfTwo = 0;
  for (let i = n1 + 1; i < n2; i++) {
    if (i > -10 && i < 10) sumOfOne += i;
    else sumOfTwo += i;
  }
  return `Sum of one digit: ${sumOfOne}, sum of two digits: ${sumOfTwo}`;
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function oneAndTwoDigits', () => {
  expect(oneAndTwoDigits).to.be.a('function');
});

it("oneAndTwoDigits(1, 15) should return 'Sum of one digit: 44, sum of two digits: 60'", () => {
  expect(oneAndTwoDigits(1, 15)).to.be.equal('Sum of one digit: 44, sum of two digits: 60');
});

it("oneAndTwoDigits(-10, 10) should return 'Sum of one digit: 0, sum of two digits: 0'", () => {
  expect(oneAndTwoDigits(-10, 10)).to.be.equal('Sum of one digit: 0, sum of two digits: 0');
});

it("oneAndTwoDigits(-10, 0) should return 'Sum of one digit: -45, sum of two digits: 0'", () => {
  expect(oneAndTwoDigits(-10, 0)).to.be.equal('Sum of one digit: -45, sum of two digits: 0');
});

it("oneAndTwoDigits(-5, 9) should return 'Sum of one digit: 26, sum of two digits: 0'", () => {
  expect(oneAndTwoDigits(-5, 9)).to.be.equal('Sum of one digit: 26, sum of two digits: 0');
});

it("oneAndTwoDigits(20, 35) should return 'Sum of one digit: 0, sum of two digits: 385'", () => {
  expect(oneAndTwoDigits(20, 35)).to.be.equal('Sum of one digit: 0, sum of two digits: 385');
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
