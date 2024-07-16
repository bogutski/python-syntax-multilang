// NAMEEN:Subtracting numbers written as strings
// NAMERU:Вычитание чисел, записанных в виде строк

/*
INSTRUCTIONENSTART
Define variables `a` and `b` and assign to them the values of strings containing arbitrary numbers.

Define a variable `difference` and assign to it the result of subtraction of numbers (subtract b from a) by converting the strings to numbers beforehand.
I.e. the result of `'5'-'3'` should be 2.

Here is an example that is fundamentally similar to what you need to do, but adapt it to the requirements of the problem:
```
const num1 = '13';
const num2 = '15';
const result = +num1 - +num2;
```
INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Задайте переменные `a` и `b` и присвойте им значения строк, содержащих произвольные числа.

Задайте переменную `difference` и присвойте ей результат вычитания чисел (от a отнимите  b), предварительно преобразовав строки в числа.
Т.е. например, результат `'5' - '3'` должен быть равен 2.

Приведем пример, который принципиально похож на то, что нужно сделать, но адаптируйте его к требованиям задачи:
```javascript
const num1 = '13';
const num2 = '15';
const result = +num1 - +num2;
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
const difference = +a - +b;
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
const difference = +a - +b;
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

it('variable `difference` contains a value', () => {
  expect(difference).not.undefined;
});

it('The variable `difference` type is a number', () => {
  expect(difference).a('number');
});

it('the variable `difference` is not NaN', () => {
  expect(isNaN(difference)).false;
});

it('the variable `difference` has the correct value', () => {
  expect(difference).equal(+a - +b);
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
