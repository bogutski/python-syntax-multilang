// NAMEEN:Given the known perimeter P of an equilateral triangle, determine its side
// NAMERU:По известному периметру Р равностороннего треугольника определить его сторону

/*
INSTRUCTIONENSTART
The perimeter of an equilateral triangle is given. Find the length of its side.

Define a variable `perimeter` and give it a value of an arbitrary non-negative number (the perimeter of the triangle).

Define a variable `side` in which calculate the length of the side of triangle (the side of triangle is equal to 1/3 of the perimeter).

Here is an example that is fundamentally similar to what you need to do, but adapt it to the requirements of the problem:
```
const s = 1000;
const a = s / 4;

```
INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Дан периметр равностороннего треугольника. Найти длину его стороны.

Задайте переменную `perimeter` и присвойте ей значение произвольного неотрицательного числа (периметр треугльника).

Задайте переменную `side`, в которой вычислите длину стороны треугольника (сторона треугольника равна 1/3 периметра).

Приведем пример, который принципиально похож на то, что нужно сделать, но адаптируйте его к требованиям задачи:
```javascript
const s = 1000;
const a = s / 4;
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
const perimeter = 99;
const side = perimeter / 3;
```
HINTRUEND
*/

/*
INITIALSOLUTIONSTART

INITIALSOLUTIONEND
*/

// SOLUTIONSTART
const perimeter = 99;
const side = perimeter / 3;
// SOLUTIONEND


// OPENTESTSSTART
it('The `perimeter` variable contains a value', () => {
  expect(perimeter).not.undefined;
});

it('the variable type `perimeter` is a number', () => {
  expect(perimeter).a('number');
});

it('the variable type `perimeter` is not NaN', () => {
  expect(isNaN(perimeter)).false;
});

it('Variable `perimeter` has value >= 0', () => {
  expect(perimeter >= 0).true;
});

it('Variable `side` has a value', () => {
  expect(side).not.undefined;
});

it('Variable type `side` is a number', () => {
  expect(side).a('number');
});

it('the variable `side` has the correct value', () => {
  expect(side).equal(perimeter / 3);
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
