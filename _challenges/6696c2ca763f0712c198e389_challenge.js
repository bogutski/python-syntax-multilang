// NAMEEN:
// NAMERU:Калькулятор суммы и умножения

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `simpleCalculator`, которая принимает три параметра:
`n1` – первое число,
`n2` – второе число,
`operator` – оператор, который нужно применить к числам.

Функция должна возвращать строку вида `n1 operator n2 = result`, где `result` – результат применения оператора к числам.

Если оператор не является `+`, `*`, то функция должна возвращать строку `Incorrect operator`.

Примеры запуска функции:
```javascript
simpleCalculator(1, 2, '+'); // '1 + 2 = 3'
simpleCalculator(10, 20, '+'); // '10 + 20 = 30'
simpleCalculator(-10, 10, '+'); // '-10 + 10 = 0'

simpleCalculator(1, 2, '*'); // '1 * 2 = 2'
simpleCalculator(10, 20, '*'); // '10 * 20 = 200'
simpleCalculator(-10, 10, '*'); // '-10 * 10 = -100'

simpleCalculator(-10, 10, '/'); // 'Incorrect operator'
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
fun
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function simpleCalculator(a, b, operator) {
  if (operator === '+') {
    return `${a} + ${b} = ${a + b}`;
  }

  if (operator === '*') {
    return `${a} * ${b} = ${a * b}`;
  }

  return 'Incorrect operator';
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function simpleCalculator', () => {
  expect(simpleCalculator).to.exist;
});

it('simpleCalculator(1, 2, "+") should return "1 + 2 = 3"', () => {
  expect(simpleCalculator(1, 2, '+')).to.equal('1 + 2 = 3');
});

it('simpleCalculator(10, 20, "+") should return "10 + 20 = 30"', () => {
  expect(simpleCalculator(10, 20, '+')).to.equal('10 + 20 = 30');
});

it('simpleCalculator(-10, 10, "+") should return "-10 + 10 = 0"', () => {
  expect(simpleCalculator(-10, 10, '+')).to.equal('-10 + 10 = 0');
});

it('simpleCalculator(1, 2, "*") should return "1 * 2 = 2"', () => {
  expect(simpleCalculator(1, 2, '*')).to.equal('1 * 2 = 2');
});

it('simpleCalculator(10, 20, "*") should return "10 * 20 = 200"', () => {
  expect(simpleCalculator(10, 20, '*')).to.equal('10 * 20 = 200');
});

it('simpleCalculator(-10, 10, "*") should return "-10 * 10 = -100"', () => {
  expect(simpleCalculator(-10, 10, '*')).to.equal('-10 * 10 = -100');
});

it('simpleCalculator(-10, 10, "/") should return "Incorrect operator"', () => {
  expect(simpleCalculator(-10, 10, '/')).to.equal('Incorrect operator');
});

it('simpleCalculator(1, 2, "a") should return "Incorrect operator"', () => {
  expect(simpleCalculator(1, 2, 'a')).to.equal('Incorrect operator');
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
