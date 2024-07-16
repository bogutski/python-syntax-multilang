// NAMEEN:Area of the square
// NAMERU:Площадь квадрата

/*
INSTRUCTIONENSTART
Given a side of the square a. Find its area s.

Define the variable `a` and assign to it the value of an arbitrary non-negative number (the side of the square).

Define a variable `quare`, in which calculate the area of the square.

Here is an example, which is fundamentally similar to what you need to do, but adapt it to the requirements of the problem:
```
const x = 6;
const sq = x ** 2;
```
INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Дана сторона квадрата а. Найти его площадь s.

Задайте переменную `a` и присвойте ей значение произвольного неотрицательного числа (сторона квадрата).

Задайте переменную `square`, в которой вычислите площадь квадрата.

Приведем пример, который принципиально похож на то, что нужно сделать, но адаптируйте его к требованиям задачи:
```javascript
const x = 6;
const sq = x ** 2;
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
const a = 9;
const square = a ** 2;
```
HINTRUEND
*/

/*
INITIALSOLUTIONSTART

INITIALSOLUTIONEND
*/

// SOLUTIONSTART
const a = 9;
const square = a ** 2;
// SOLUTIONEND


// OPENTESTSSTART
it('Variable `a` contains a value', () => {
  expect(a).not.undefined;
});

it('Variable type `a` is a number', () => {
  expect(a).a('number');
});

it('the variable type `a` is not NaN', () => {
  expect(isNaN(a)).false;
});

it('Variable `a` has value >= 0', () => {
  expect(a >= 0).true;
});

it('The `quare` variable has a value', () => {
  expect(square).not.undefined;
});

it('variable`square` type is a number', () => {
  expect(square).a('number');
});

it('the `square` variable has the right value', () => {
  expect(square).equal(a * a);
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
