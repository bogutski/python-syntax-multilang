// NAMEEN:
// NAMERU:Текстовый калькулятор суммы

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напиши функцию `textCalculatorSum`, которая принимает два параметра `num1` и `num2` и возвращает строку `The sum of 2 and 3 is 5.`

На месте `2` и `3` должны быть значения параметров, а на месте `5` – сумма параметров.

Похожий пример:
```javascript
const n1 = 2;
const n2 = 3;
const result = n1 * n2;
const multiplication = 'Multiplication of ' + n1 + ' and ' + n2 + ' is ' + result + '!';
console.log(multiplication); // Multiplication of 2 and 3 is 6!
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
func
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function textCalculatorSum(num1, num2) {
  return 'The sum of ' + num1 + ' and ' + num2 + ' is ' + (num1 + num2) + '.';
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function textCalculatorSum', () => {
  expect(textCalculatorSum).to.be.a('function');
});

it('Function returns correct result for arguments `2, 3`', () => {
  expect(textCalculatorSum(2, 3)).eq('The sum of 2 and 3 is 5.');
});

it('Function returns correct result for arguments `5, 8`', () => {
  expect(textCalculatorSum(5, 8)).eq('The sum of 5 and 8 is 13.');
});

it('Function returns correct result for arguments `-2, -35`', () => {
  expect(textCalculatorSum(-2, -35)).eq('The sum of -2 and -35 is -37.');
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
