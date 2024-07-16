// NAMEEN:
// NAMERU:Конкатенация с вычислениями

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `sumCalculator`, которая принимает два параметра, числа и возвращает строку вида `a + b = c`, где `a` и `b` - это параметры функции, а `c` - их сумма.

Примеры запуска функции:
```javascript
sumCalculator(1, 2); // '1 + 2 = 3'
sumCalculator(10, 20); // '10 + 20 = 30'
sumCalculator(-10, 10); // '-10 + 10 = 0'
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
fun
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function sumCalculator(a, b) {
  return `${a} + ${b} = ${a + b}`;
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function sumCalculator', () => {
  expect(sumCalculator).to.be.a('function');
});

it('sumCalculator(1, 2) returns "1 + 2 = 3"', () => {
  expect(sumCalculator(1, 2)).to.equal('1 + 2 = 3');
});

it('sumCalculator(10, 20) returns "10 + 20 = 30"', () => {
  expect(sumCalculator(10, 20)).to.equal('10 + 20 = 30');
});

it('sumCalculator(-10, 10) returns "-10 + 10 = 0"', () => {
  expect(sumCalculator(-10, 10)).to.equal('-10 + 10 = 0');
});

it('sumCalculator(0, 0) returns "0 + 0 = 0"', () => {
  expect(sumCalculator(0, 0)).to.equal('0 + 0 = 0');
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
