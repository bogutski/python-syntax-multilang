// NAMEEN:Remainder of dividing one number by another
// NAMERU:Остаток от деления одного числа на другое

/*
INSTRUCTIONENSTART
The numbers a and b are given. Find the remainder of a divided by b.

Create variables `a` and `b` and assign them values of arbitrary positive numbers.

Create a variable `remainder` and assign it an expression to find the remainder of division of `a` by `b`.

Here is an example, which is fundamentally similar to what you need to do, but adapt it to the requirements of the problem:
```
const x = 5;
const y = 2;
const rest = x % y; // 5 % 2 = 1
```
INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Даны числа a и b. Найдите остаток от деления числа a на число b.

Создайте переменные `a` и `b` и присвойте им значения произвольных положительных чисел.

Создайте переменную `remainder` и присвойте ей выражение для нахождения остатка от деления `a` на `b`.

Приведем пример, который принципиально похож на то, что нужно сделать, но адаптируйте его к требованиям задачи:
```javascript
const x = 5;
const y = 2;
const rest = x % y; // 5 % 2 = 1
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
const a = 5;
const b = 2;
const remainder = a % b;
```
HINTRUEND
*/

/*
INITIALSOLUTIONSTART

INITIALSOLUTIONEND
*/

// SOLUTIONSTART
const a = 5;
const b = 2;
const remainder = a % b;
// SOLUTIONEND


// OPENTESTSSTART
it('Variable `a` exists and has a value', () => {
  expect(a).not.undefined;
});

it('Variable `a` has a numeric type', () => {
  expect(a).a('number');
});

it('Variable `a` is not NaN', () => {
  expect(isNaN(a)).false;
});

it('Variable `a` is a non-negative number', () => {
  expect(a >= 0).to.be.true;
});

it('Variable `b` exists and has a value', () => {
  expect(b).not.undefined;
});

it('Variable `b` has a numeric type', () => {
  expect(b).a('number');
});

it('Variable `b` is not NaN', () => {
  expect(isNaN(b)).false;
});

it('Variable `b` is a non-negative number', () => {
  expect(b >= 0).to.be.true;
});

it('Variable `remainder` is a value', () => {
  expect(remainder).not.undefined;
});

it('Variable `remainder` has a numeric type', () => {
  expect(remainder).a('number');
});

it('Variable `remainder` is not NaN', () => {
  expect(isNaN(remainder)).false;
});

it('Variable `remainder` is calculated correctly', () => {
  expect(remainder).equal(a % b);
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
