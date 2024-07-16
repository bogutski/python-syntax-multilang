// NAMEEN:What is the remainder of dividing an odd number by 2?
// NAMERU:Чему равен остаток от деления нечетного числа на 2?

/*
INSTRUCTIONENSTART
An odd number b is given. Is it true that the residue from dividing an odd number by 2 is one?

Create a variable `b` and assign to it the value of an arbitrary odd positive number.

Create a variable `remainder` and assign to it an expression to find the remainder of division `b` by 2.

Create a variable `isOne` and assign to it the result of comparison of variable `remainder` with number 1 (strict equality ===).

Here is an example that is fundamentally similar to what you need to do, but adapt it to the requirements of the problem:
```
const x = 9;
const rest = x % 2;
const isEqualOne = rest === 1;
```
INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Дано нечетное число b. Верно ли, что остаток от деления нечетного числа на 2 равен единице?

Создайте переменную `b` и присвойте ей значение произвольного нечетного положительного числа.

Создайте переменную `remainder` и присвойте ей выражение для нахождения остатка от деления `b` на 2.

Создайте переменную `isOne` и присвойте ей результат сравнения переменной `remainder` с числом 1 (строгое равенство ===).

Приведем пример, который принципиально похож на то, что нужно сделать, но адаптируйте его к требованиям задачи:
```javascript
const x = 9;
const rest = x % 2;
const isEqualOne = rest === 1;
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
const b = 11;
const remainder = b % 2;
const isOne = remainder === 1;
```
HINTRUEND
*/

/*
INITIALSOLUTIONSTART

INITIALSOLUTIONEND
*/

// SOLUTIONSTART
const b = 11;
const remainder = b % 2;
const isOne = remainder === 1;
// SOLUTIONEND


// OPENTESTSSTART
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

it('Variable `b` is an odd number', () => {
  expect(b % 2 === 1).to.be.true;
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
  expect(remainder).equal(b % 2);
});

it('Variable `isOne` has a value', () => {
  expect(isOne).not.undefined;
});

it('Variable `isOne` has a boolean type', () => {
  expect(isOne).a('boolean');
});

it('Variable `isOne` is computed true', () => {
  expect(isOne).true;
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
