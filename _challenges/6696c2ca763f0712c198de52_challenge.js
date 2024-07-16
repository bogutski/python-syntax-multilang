// NAMEEN:The product of numbers written as strings
// NAMERU:Произведение чисел, записанных в виде строк

/*
INSTRUCTIONENSTART
Define variables `a` and `b` and assign to them the values of strings containing arbitrary numbers.

Define variable `product` and assign to it the result of multiplication of given numbers by converting strings into numbers beforehand.

I.e. the result of '5' * '3' should be 15.

Here is an example that is fundamentally similar to what you need to do, but adapt it to the requirements of the task:
```
const num1 = '4';
const num2 = '5';
const result = +num1 * +num2;
```
INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Задайте переменные `a` и `b` и присвойте им значения строк, содержащих произвольные числа.

Задайте переменную `product` и присвойте ей результат умножения данных чисел, предварительно преобразовав строки в числа.

Т.е. например, результат '5' * '3' должен быть равен 15.

Приведем пример, который принципиально похож на то, что нужно сделать, но адаптируйте его к требованиям задачи:
```javascript
const num1 = '4';
const num2 = '5';
const result = +num1 * +num2;
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
const product = +a * +b;
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
const product = +a * +b;
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

it('The `product` variable contains a value', () => {
  expect(product).not.undefined;
});

it('the variable type `product` is a number', () => {
  expect(product).a('number');
});

it('the variable `product` is not NaN', () => {
  expect(isNaN(product)).false;
});

it('the variable `product` has the correct value', () => {
  expect(product).equal(+a * +b);
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
