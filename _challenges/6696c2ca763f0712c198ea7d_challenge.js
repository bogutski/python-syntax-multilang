// NAMEEN:
// NAMERU:Результат в виде строки

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `stringResult`, которая принимает два числа `n1` и `n2`.

Функция должна посчитать сумму чисел от `n1` до `n2` включительно и вернуть строку вида:

 * `Sum of numbers from ${n1} to ${n2} is ${sum}`, где `sum` - сумма чисел от `n1` до `n2` включительно.

Примеры запуска функции:
```javascript
stringResult(1, 5) // "Sum of numbers from 1 to 5 is 15"
stringResult(5, 25) // "Sum of numbers from 5 to 25 is 315"
stringResult(-5, 10) // "Sum of numbers from -5 to 10 is 40"
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
fun
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function stringResult(n1, n2) {
  let sum = 0;
  for (let i = n1; i <= n2; i++) {
    sum += i;
  }
  return `Sum of numbers from ${n1} to ${n2} is ${sum}`;
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function stringResult', () => {
  expect(stringResult).to.be.a('function');
});

it("stringResult(1, 5) should return 'Sum of numbers from 1 to 5 is 15'", () => {
  expect(stringResult(1, 5)).to.equal('Sum of numbers from 1 to 5 is 15');
});

it("stringResult(5, 25) should return 'Sum of numbers from 5 to 25 is 315'", () => {
  expect(stringResult(5, 25)).to.equal('Sum of numbers from 5 to 25 is 315');
});

it("stringResult(125, 143) should return 'Sum of numbers from 125 to 143 is 2546'", () => {
  expect(stringResult(125, 143)).to.equal('Sum of numbers from 125 to 143 is 2546');
});

it("stringResult(-25, 5) should return 'Sum of numbers from -25 to 5 is -310'", () => {
  expect(stringResult(-25, 5)).to.equal('Sum of numbers from -25 to 5 is -310');
});

it("stringResult(0, 0) should return 'Sum of numbers from 0 to 0 is 0'", () => {
  expect(stringResult(0, 0)).to.equal('Sum of numbers from 0 to 0 is 0');
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
