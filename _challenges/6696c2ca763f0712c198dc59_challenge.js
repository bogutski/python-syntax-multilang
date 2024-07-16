// NAMEEN:Triangle perimeter
// NAMERU:Периметр треугольника

/*
INSTRUCTIONENSTART
Given sides of triangle `a`, `b`, `c`.
Make a program that calculates its perimeter `p`.

Create variables named `a`, `b`, `c` and assign them values of arbitrary positive numbers.
Create a variable `p` and assign to it the value of an expression to calculate the perimeter of the triangle.

Here is an example that is fundamentally similar to what you need to do,
but adapt it to the requirements of the problem:
```
const num1 = 4;
const num2 = 9;
const sum = num1 + num2;
```
INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Даны стороны треугольника `а`, `b`, `c`.
Составьте  программу, которая вычисляет его периметр `p`.

Создайте переменные с именем `a`, `b`, `c` и присвойте им значения произвольных положительных чисел.
Создайте переменную `p` и присвойте ей значение выражения для вычисления периметра треугольника.

Приведем пример, который принципиально похож на то, что нужно сделать,
но адаптируйте его к требованиям задачи:
```javascript
const num1 = 4;
const num2 = 9;
const num3 = 9;
const sum = num1 + num2 + num3;
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
const a = 7;
const b = 8;
const c = 9;
const p = a + b + c;
```
HINTRUEND
*/

/*
INITIALSOLUTIONSTART

INITIALSOLUTIONEND
*/

// SOLUTIONSTART
const a = 7;
const b = 8;
const c = 9;
const p = a + b + c;
// SOLUTIONEND


// OPENTESTSSTART
it('Variable `a` exists and has a value', () => {
  expect(a).not.undefined;
});

it('Variable `a` has type `number`', () => {
  expect(a).a('number');
});

it('Variable `a` is not NaN', () => {
  expect(isNaN(a)).false;
});

it('Variable `a` is a positive number', () => {
  expect(a > 0).true;
});

it('Variable `b` exists and has a value', () => {
  expect(a).not.undefined;
});

it('Variable `b` has type `number`', () => {
  expect(b).a('number');
});

it('Variable `b` is not NaN', () => {
  expect(isNaN(b)).false;
});

it('Variable `b` is a positive number', () => {
  expect(b > 0).true;
});

it('Variable `c` exists and has a value', () => {
  expect(c).not.undefined;
});

it('Variable `c` has type `number`', () => {
  expect(c).a('number');
});

it('Variable `c` is not NaN', () => {
  expect(isNaN(c)).false;
});

it('Variable `c` is a positive number', () => {
  expect(c > 0).true;
});

it('Variable `p` exists and has a value', () => {
  expect(p).not.undefined;
});

it('Variable `p` has type `number`', () => {
  expect(p).a('number');
});

it('Variable `p` is not NaN', () => {
  expect(isNaN(p)).false;
});

it('The value of variable `p` has been calculated correctly', () => {
  expect(p).equal(a + b + c);
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
