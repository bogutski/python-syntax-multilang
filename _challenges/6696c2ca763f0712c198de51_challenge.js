// NAMEEN:Quotient of numbers written as strings
// NAMERU:Частное чисел, записанных в виде строк

/*
INSTRUCTIONENSTART
Define variables `a` and `b` and assign to them the values of strings containing arbitrary numbers.

Define variable `quotient` and assign to it the result of dividing the given numbers by converting the strings into numbers beforehand.

I.e. the result of `'20'/'5'` should be 4.

Here is an example that is fundamentally similar to what you need to do, but adapt it to the requirements of the task:
```
const num1 = '40';
const num2 = '5';
const result = +num1 / +num2;
```
INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Задайте переменные `a` и `b` и присвойте им значения строк, содержащих произвольные числа.

Задайте переменную `quotient` и присвойте ей результат деления данных чисел, предварительно преобразовав строки в числа.

Т.е. например, результат `'20' / '5'` должен быть равен 4.

Приведем пример, который принципиально похож на то, что нужно сделать, но адаптируйте его к требованиям задачи:
```javascript
const num1 = '40';
const num2 = '5';
const result = +num1 / +num2;
```
INSTRUCTIONRUEND
*/

/*
HINTENSTART

HINTENEND
*/

/*
HINTRUSTART
```javascript
const a = '20';
const b = '22';
const quotient = +a / +b;
```
HINTRUEND
*/

/*
INITIALSOLUTIONSTART

INITIALSOLUTIONEND
*/

// SOLUTIONSTART
const a = '20';
const b = '22';
const quotient = +a / +b;
// SOLUTIONEND


// OPENTESTSSTART
it('Variable `a` contains a value', () => {
  expect(a).not.undefined;
});

it('the variable type `a` is string', () => {
  expect(a).a('string');
});

it('the variable `a` is not NaN', () => {
  expect(isNaN(a)).false;
});

it('Variable `b` contains a value', () => {
  expect(b).not.undefined;
});

it('the variable type `b` is a string', () => {
  expect(b).a('string');
});

it('the variable `b` is not NaN', () => {
  expect(isNaN(b)).false;
});

it('variable `quotient` contains a value', () => {
  expect(quotient).not.undefined;
});

it('the variable type `quotient` is a number', () => {
  expect(quotient).a('number');
});

it('the variable `quotient` is not NaN', () => {
  expect(isNaN(quotient)).false;
});

it('the variable `quotient` has the correct value', () => {
  expect(quotient).equal(+a / +b);
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
