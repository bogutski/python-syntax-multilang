// NAMEEN:Adding numbers written as strings
// NAMERU:Сложение чисел, записанных в виде строк

/*
INSTRUCTIONENSTART
Define variables `a` and `b` and assign to them the values of strings containing arbitrary numbers.

Define variable `sum` and assign to it the result of addition of given numbers, previously converting strings into numbers.

I.e. the result of '4' + '7' should be equal to 11.

Here is an example that is fundamentally similar to what you need to do, but adapt it to the requirements of the task:
```
const num1 = '13';
const num2 = '15';
const result = +num1 + +num2;
```
INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Задайте переменные `a` и `b` и присвойте им значения строк, содержащих произвольные числа.

Задайте переменную `sum` и присвойте ей результат сложения данных чисел, предварительно преобразовав строки в числа.

Т.е. например, результат '4' + '7' должен быть равен 11.

Приведем пример, который принципиально похож на то, что нужно сделать, но адаптируйте его к требованиям задачи:
```javascript
const num1 = '13';
const num2 = '15';
const result = +num1 + +num2;
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
const sum = +a + +b;
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
const sum = +a + +b;
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

it('variable`sum` contains a value', () => {
  expect(sum).not.undefined;
});

it('variable`sum` type is a number', () => {
  expect(sum).a('number');
});

it('the variable `sum` is not NaN', () => {
  expect(isNaN(sum)).false;
});

it('the variable`sum` has the correct value', () => {
  expect(sum).equal(+a + +b);
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
