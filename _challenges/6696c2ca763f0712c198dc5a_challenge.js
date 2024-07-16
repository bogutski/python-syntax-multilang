// NAMEEN:Perimeter and area of a rectangle
// NAMERU:Периметр и площадь прямоугольника

/*
INSTRUCTIONENSTART
Given sides of rectangle `a` and `b`.
Make a program that calculates its perimeter `p` and area `s`.

Create variables named `a` and `b` and assign them values of arbitrary positive numbers.
Create a variable `p` and assign to it the value of an expression to compute the perimeter of the rectangle.
Create a variable `s` and assign to it the value of an expression to calculate the area of the rectangle.

Here is an example that is fundamentally similar to what you need to do,
but adapt it to the needs of the problem:
```
const side1 = 4;
const side2 = 9;
const square = side1 * side2;
```
INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Даны стороны прямоугольника `а` и `b`.
Составьте программу, которая вычисляет его периметр `p` и площадь `s`.

Создайте переменные с именем `a` и `b` и присвойте им значения произвольных положительных чисел.
Создайте переменную `p` и присвойте ей значение выражения для вычисления периметра прямоугольника.
Создайте переменную `s` и присвойте ей значение выражения для вычисления площади прямоугольника.

Приведем пример, который принципиально похож на то, что нужно сделать,
но адаптируйте его к требованиям задачи:
```javascript
const side1 = 4;
const side2 = 9;
const square = side1 * side2;
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
const b = 7;
const p = (a + b) * 2;
const s = a * b;
```
HINTRUEND
*/

/*
INITIALSOLUTIONSTART

INITIALSOLUTIONEND
*/

// SOLUTIONSTART
const a = 7;
const b = 7;
const p = (a + b) * 2;
const s = a * b;
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
  expect(p).equal(2 * (a + b));
});

it('Variable `s exists and has a value', () => {
  expect(s).not.undefined;
});

it('Variable`s has type `number`', () => {
  expect(s).a('number');
});

it('Variable ``s is not NaN', () => {
  expect(isNaN(s)).false;
});

it('The value of variable`s` is correct', () => {
  expect(s).equal(a * b);
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
