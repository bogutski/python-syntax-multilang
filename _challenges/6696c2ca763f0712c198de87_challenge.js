// NAMEEN:Perimeter of an equilateral triangle
// NAMERU:Периметр равностороннего треугольника

/*
INSTRUCTIONENSTART
A side of an equilateral triangle is given. Find its perimeter.

Define variable `side` and give it a value of an arbitrary non-negative number (the side of an equilateral triangle).
Define a variable `perimeter` in which calculate the perimeter of the triangle (the perimeter of the triangle is equal to the side multiplied by 3).

Here is an example that is fundamentally similar to what you need to do,
but adapt it to the requirements of the problem:
```
const a = 10;
const p = a * 3;
```
INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Дана сторона равностороннего треугольника. Найти его периметр.

Задайте переменную `side` и присвойте ей значение произвольного неотрицательного числа (сторона равностороннего треугольника).
Задайте переменную `perimeter`, в которой вычислите периметр треугольника (периметр треугольника равен стороне умноженной на 3).

Приведем пример, который принципиально похож на то, что нужно сделать,
но адаптируйте его к требованиям задачи:
```javascript
const a = 10;
const p = a * 3;
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
const side = 99;
const perimeter = side * 3;
```
HINTRUEND
*/

/*
INITIALSOLUTIONSTART

INITIALSOLUTIONEND
*/

// SOLUTIONSTART
const side = 99;
const perimeter = side * 3;
// SOLUTIONEND


// OPENTESTSSTART
it('The `side` variable contains a value', () => {
  expect(side).not.undefined;
});

it('Variable type `side` is a number', () => {
  expect(side).a('number');
});

it('the variable type `side` is not NaN', () => {
  expect(isNaN(side)).false;
});

it('Variable `side` has value >= 0', () => {
  expect(side >= 0).true;
});

it('Variable `perimeter` has a value', () => {
  expect(perimeter).not.undefined;
});

it('the variable type `perimeter` is a number', () => {
  expect(perimeter).a('number');
});

it('the variable `perimeter` has the correct value', () => {
  expect(perimeter).equal(side * 3);
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
