// NAMEEN:Split the chocolate bar
// NAMERU:Разделите шоколадку

/*
INSTRUCTIONENSTART
There is a bar of chocolate with size `n * m`. Calculate the minimum number of breaks to divide the bar into 1 * 1 pieces.

Define variables `m` and `n` and assign them values of arbitrary positive numbers.
Define variable `pieces` and assign to it the value of the expression for calculating the number of breaks `m * n - 1`.

Here is an example that is fundamentally similar to what you need to do, but adapt it to the requirements of the problem:
```
const a = 20;
const b = 5;
const sum = a * b - 1;
```
INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Есть плитка шоколада размером `n * m`. Вычислите, какое минимальное количество разломов надо сделать, чтобы разделить плитку на кусочки 1 * 1.

Задайте переменные `m` и `n` и присвойте им значения произвольных положительных чисел.
Задайте переменную `pieces` и присвойте ей значение выражения для вычисления количества разломов `m * n - 1`.

Приведем пример, который принципиально похож на то, что нужно сделать, но адаптируйте его к требованиям задачи:
```javascript
const a = 20;
const b = 5;
const sum = a * b - 1;
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
const m = 35;
const n = 5;
const pieces = m * n - 1;
```
HINTRUEND
*/

/*
INITIALSOLUTIONSTART

INITIALSOLUTIONEND
*/

// SOLUTIONSTART
const m = 35;
const n = 5;
const pieces = m * n - 1;
// SOLUTIONEND


// OPENTESTSSTART
it('Variable `m` contains a value', () => {
  expect(m).not.undefined;
});

it('The variable `m` type is a number', () => {
  expect(m).a('number');
});

it('the variable type `m` is not NaN', () => {
  expect(isNaN(m)).false;
});

it('the variable `m` is a positive number', () => {
  expect(m > 0).true;
});

it('Variable `n` contains a value', () => {
  expect(n).not.undefined;
});

it('Variable type `n` is a number', () => {
  expect(n).a('number');
});

it('the variable type `n` is not NaN', () => {
  expect(isNaN(n)).false;
});

it('the variable `n` is a positive number', () => {
  expect(n > 0).true;
});

it('Variable `pieces` contains a value', () => {
  expect(pieces).not.undefined;
});

it('The `pieces` variable type is a number', () => {
  expect(pieces).a('number');
});

it('the variable type `pieces` is not NaN', () => {
  expect(isNaN(pieces)).false;
});

it('the `pieces` variable is calculated correctly', () => {
  expect(pieces).equal(m * n - 1);
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
