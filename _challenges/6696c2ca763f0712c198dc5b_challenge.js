// NAMEEN:Perimeter and area of the square
// NAMERU:Периметр и площадь квадрата

/*
INSTRUCTIONENSTART
Given a side of the square `a`.
Make a program that calculates its perimeter `p` and area `s`.

Create a variable named `a` and assign to it the value of an arbitrary positive number.
Create a variable named `p` and assign to it the value of an expression for calculating the perimeter.
Create a variable named `s` and assign to it the value of an expression to calculate the area.

Here is an example that is fundamentally similar to what needs to be done,
but adapt it to the needs of the problem:
```
const number = 4;
const square = number ** 2;
```
INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Дана сторона квадрата `а`.
Составьте программу, которая вычисляет его периметр `p` и площадь `s`.

Создайте переменную с именем `a` и присвойте ей значение произвольного положительного числа.
Создайте переменную `p` и присвойте ей значение выражения для вычисления периметра.
Создайте переменную `s` и присвойте ей значение выражения для вычисления площади.

Приведем пример, который принципиально похож на то, что нужно сделать,
но адаптируйте его к требованиям задачи:
```javascript
const number = 4;
const square = number ** 2;
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
const p = a * 4;
const s = a ** 2;
```
HINTRUEND
*/

/*
INITIALSOLUTIONSTART

INITIALSOLUTIONEND
*/

// SOLUTIONSTART
const a = 7;
const p = a * 4;
const s = a ** 2;
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
  expect(p).equal(4 * a);
});

it('Variable`s exists and has a value', () => {
  expect(s).not.undefined;
});

it('Variable`s has type `number`', () => {
  expect(s).a('number');
});

it('Variable ``s is not NaN', () => {
  expect(isNaN(s)).false;
});

it('The value of variable`s` is correct', () => {
  expect(s).equal(a * a);
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
