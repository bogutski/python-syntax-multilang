// NAMEEN:What is the remainder of dividing an even number by 2?
// NAMERU:Чему равен остаток от деления четного числа на 2?

/*
INSTRUCTIONENSTART
An even number 'a' is given. Is it true that the residue from dividing an even number by 2 is zero?

Create a variable `a` and assign to it the value of an arbitrary even positive number.
Create a variable `remainder` and assign it an expression to find the remainder of division `a` by 2.
Create a variable `isZero` and assign to it the result of a comparison of the variable `remainder` with zero (strict equality ===).

Here is an example that is fundamentally similar to what you need to do, but adapt it to the requirements of the problem:
```
const x = 6;
const rest = x % 2;
const isNull = rest === 0;
```
INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Дано четное число 'a'. Верно ли, что остаток от деления четного числа на 2 равен нулю?

Создайте переменную `a` и присвойте ей значение произвольного четного положительного числа.
Создайте переменную `remainder` и присвойте ей выражение для нахождения остатка от деления `a` на 2.
Создайте переменную `isZero` и присвойте ей результат сравнения переменной `remainder` с нулем (строгое равенство ===).

Приведем пример, который принципиально похож на то, что нужно сделать, но адаптируйте его к требованиям задачи:
```javascript
const x = 6;
const rest = x % 2;
const isNull = rest === 0;
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
const a = 8;
const remainder = a % 2;
const isZero = remainder === 0;
```
HINTRUEND
*/

/*
INITIALSOLUTIONSTART

INITIALSOLUTIONEND
*/

// SOLUTIONSTART
const a = 8;
const remainder = a % 2;
const isZero = remainder === 0;
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

it('Variable `a` is an even number', () => {
  expect(a % 2 === 0).to.be.true;
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
  expect(remainder).equal(a % 2);
});

it('Variable `isZero` has a value', () => {
  expect(isZero).not.undefined;
});

it('Variable `isZero` has a boolean type', () => {
  expect(isZero).a('boolean');
});

it('Variable `isZero` is computed true', () => {
  expect(isZero).true;
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
