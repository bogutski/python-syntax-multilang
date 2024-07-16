// NAMEEN:Is it true that the number a is a multiple of the number b?
// NAMERU:Верно ли, что число a кратно числу b?

/*
INSTRUCTIONENSTART
The numbers a and b are given. Is it true that a is divisible by b without a remainder (i.e., a is a multiple of b)?
To solve the problem, find the remainder of division of a by b and compare it to zero.

Create variables `a` and `b` and assign to them the values of arbitrary numbers not equal to zero.

Create a variable `remainder` and assign to it an expression to find the remainder of division of `a` by `b`.

Create a variable `isMultiple` and assign to it the result of a comparison of the variable `remainder` with zero.

Here is an example, which is fundamentally similar to what you need to do, but adapt it to the requirements of the task:
```
const x = 6;
const y = 2;
const rest = x % y;
const isRepeat = rest === 0;
```
INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Даны числа a и b. Верно ли, что число a делится на число b без остатка (т.е. число a кратно числу b)?
Для решения задачи надо найти остаток от деления числа a на число b и сравнить его с нулем.

Создайте переменные `a` и `b` и присвойте им значения произвольных чисел, не равных нулю.

Создайте переменную `remainder` и присвойте ей выражение для нахождения остатка от деления `a` на `b`.

Создайте переменную `isMultiple` и присвойте ей результат сравнения переменной `remainder` с нулем.

Приведем пример, который принципиально похож на то, что нужно сделать, но адаптируйте его к требованиям задачи:
```javascript
const x = 6;
const y = 2;
const rest = x % y;
const isRepeat = rest === 0;
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
const b = 4;
const remainder = a % b;
const isMultiple = remainder === 0;
```
HINTRUEND
*/

/*
INITIALSOLUTIONSTART

INITIALSOLUTIONEND
*/

// SOLUTIONSTART
const a = 5;
const b = 4;
const remainder = a % b;
const isMultiple = remainder === 0;
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

it('Variable `a` is not 0', () => {
  expect(a !== 0).to.be.true;
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

it('Variable `b` is not 0', () => {
  expect(b !== 0).to.be.true;
});

it('Variable `remainder` has a value', () => {
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

it('Variable `isMultiple` has a value', () => {
  expect(isMultiple).not.undefined;
});

it('The `isMultiple` variable has a logical type', () => {
  expect(isMultiple).a('boolean');
});

it('The `isMultiple` variable is computed correctly', () => {
  expect(isMultiple).equal(remainder === 0);
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
