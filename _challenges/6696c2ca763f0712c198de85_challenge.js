// NAMEEN:Area of an equilateral triangle
// NAMERU:Площадь равностороннего треугольника

/*
INSTRUCTIONENSTART
A side of an equilateral triangle is given. Find the area of the triangle.

Set variable `side` and assign to it a value of an arbitrary non-negative number (the side of an equilateral triangle).

Define a variable `area` in which calculate the area of the triangle (the area of the triangle is equal to the square of the side multiplied by the square root of 3 and divided by 4).

Directions.
The square root of a number is a number to the power of 0.5. That is, the square root of 3 can be written as 3 ** 0.5.

Here is an example that is fundamentally similar to what you need to do,
but adapt it to the requirements of the problem:

```
const a = 10;
const s = (a ** 2 * 3 ** 0.5) / 4;

```
INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Дана сторона равностороннего треугольника. Найти его площадь.

Задайте переменную `side` и присвойте ей значение произвольного неотрицательного числа (сторона равностороннего треугольника).

Задайте переменную `area`, в которой вычислите площадь треугольника (площадь треугольника равна квадрату стороны, умноженной на квадратный корень из 3 и поделенной на 4).

Указание.
Квадратный корень из числа - это число в степени 0.5. Т.е. квадратный корень из 3 можно записать как 3 ** 0.5.

Приведем пример, который принципиально похож на то, что нужно сделать,
но адаптируйте его к требованиям задачи:

```javascript
const a = 10;
const s = (a ** 2 * 3 ** 0.5) / 4;
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
const side = 10;
const area = (side ** 2 * 3 ** 0.5) / 4;
```
HINTRUEND
*/

/*
INITIALSOLUTIONSTART

INITIALSOLUTIONEND
*/

// SOLUTIONSTART
const side = 10;
const area = (side ** 2 * 3 ** 0.5) / 4;
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

it('Variable `area` has a value', () => {
  expect(area).not.undefined;
});

it('the variable `area` type is a number', () => {
  expect(area).a('number');
});

it('the variable `area` has the correct value', () => {
  expect(area).equal((side ** 2 * 3 ** 0.5) / 4);
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
