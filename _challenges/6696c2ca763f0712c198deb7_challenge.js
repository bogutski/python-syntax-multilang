// NAMEEN:Square side
// NAMERU:Сторона квадрата

/*
INSTRUCTIONENSTART
The area of the square is given. Find its side.

Define variable `square` and give it a value of an arbitrary non-negative number (the area of the square).

Define a variable `a` in which calculate the side of the square (the side of the square is equal to the square root of its area).

Here is an example that is fundamentally similar to what you need to do, but adapt it to the requirements of the problem:
```
const s = 9;
const a = s ** 0.5;
```
INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Дана площадь квадрата. Найти его сторону.

Задайте переменную `square` и присвойте ей значение произвольного неотрицательного числа (площадь квадрата).

Задайте переменную `a`, в которой вычислите сторону квадрата (сторона квадрата равна корню квадратному из его площади).

Приведем пример, который принципиально похож на то, что нужно сделать, но адаптируйте его к требованиям задачи:
```javascript
const s = 9;
const a = s ** 0.5;
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
const square = 16;
const a = square ** 0.5;
```
HINTRUEND
*/

/*
INITIALSOLUTIONSTART

INITIALSOLUTIONEND
*/

// SOLUTIONSTART
const square = 16;
const a = square ** 0.5;
// SOLUTIONEND


// OPENTESTSSTART
it('Variable`square` contains a value', () => {
  expect(square).not.undefined;
});

it('variable`square` type is a number', () => {
  expect(square).a('number');
});

it('the `square` variable type is not NaN', () => {
  expect(isNaN(square)).false;
});

it('the `square` variable is a non-negative number', () => {
  expect(square >= 0).true;
});

it('Variable `a` contains a value', () => {
  expect(a).not.undefined;
});

it('Variable type `a` is a number', () => {
  expect(a).a('number');
});

it('the variable type `a` is not NaN', () => {
  expect(isNaN(a)).false;
});

it('Variable `a` has the correct value', () => {
  expect(a).equal(square ** 0.5);
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
