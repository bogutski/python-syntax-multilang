// NAMEEN:Residue from dividing an even number by 2
// NAMERU:Остаток от деления четного числа на 2

/*
INSTRUCTIONENSTART
An even number 'a' is given. Find the residue from dividing 'a' by 2.

Create a variable `a` and assign to it the value of an arbitrary even positive number.
Create a variable `remainder` and assign to it an expression to find the remainder of division of `a` by 2.

Here is an example, which is fundamentally similar to what you need to do, but adapt it to the requirements of the problem:
```
const x = 6;
const rest = x % 2;
```
INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Дано четное число 'a'. Найдите остаток от деления числа 'a' на 2.

Создайте переменную `a` и присвойте ей значение произвольного четного положительного числа.
Создайте переменную `remainder` и присвойте ей выражение для нахождения остатка от деления `a` на 2.

Приведем пример, который принципиально похож на то, что нужно сделать, но адаптируйте его к требованиям задачи:
```javascript
const x = 6;
const rest = x % 2;
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
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
