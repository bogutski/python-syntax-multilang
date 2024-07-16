// NAMEEN:Residue from dividing an odd number by 2
// NAMERU:Остаток от деления нечетного числа на 2

/*
INSTRUCTIONENSTART
An odd number 'b' is given. Find the residue from dividing 'b' by 2.

Create a variable `b' and assign to it the value of an arbitrary odd positive number.
Create a variable `remainder` and assign to it an expression to find the remainder of division of `b` by 2.

Here is an example, which is fundamentally similar to what you need to do, but adapt it to the requirements of the problem:
```
const x = 5;
const rest = x % 2;
```
INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Дано нечетное число 'b'. Найдите остаток от деления числа 'b' на 2.

Создайте переменную `b` и присвойте ей значение произвольного нечетного положительного числа.
Создайте переменную `remainder` и присвойте ей выражение для нахождения остатка от деления `b` на 2.

Приведем пример, который принципиально похож на то, что нужно сделать, но адаптируйте его к требованиям задачи:
```javascript
const x = 5;
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
const b = 7;
const remainder = b % 2;
```
HINTRUEND
*/

/*
INITIALSOLUTIONSTART

INITIALSOLUTIONEND
*/

// SOLUTIONSTART
const b = 7;
const remainder = b % 2;
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
  expect(b % 2 !== 0).to.be.true;
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
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
