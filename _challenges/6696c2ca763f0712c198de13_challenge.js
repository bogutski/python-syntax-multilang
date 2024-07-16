// NAMEEN:Find the area of a right triangle
// NAMERU:Найти площадь прямоугольного треугольника

/*
INSTRUCTIONENSTART
A right-angled triangle is given two cathetuses `a` and `b`. Find its area.

Define variable `a` and assign to it the value of an arbitrary non-negative number (the first cathetus).

Define variable `b` and assign to it the value of an arbitrary nonnegative number (the second cathetus).

Define a variable `area` in which calculate the area of the triangle (half of the product of the cathetuses).

Here is an example that is fundamentally similar to what you need to do,
but adapt it to the requirements of the problem:
```
const x = 3;
const y = 5;
const z = x * y / 2 ;
```
INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
В прямоугольном треугольнике заданы два катета `а` и `b`. Найти его площадь.

Задайте переменную `a` и присвойте ей значение произвольного неотрицательного числа (первый катет).

Задайте переменную `b` и присвойте ей значение произвольного неотрицательного числа (второй катет).

Задайте переменную `area`, в которой вычислите площадь треугольника (половина произведения катетов).

Приведем пример, который принципиально похож на то, что нужно сделать,
но адаптируйте его к требованиям задачи:
```javascript
const x = 3;
const y = 5;
const z = x * y / 2 ;
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
const a = 3;
const b = 5;
const area = a * b / 2;
```
HINTRUEND
*/

/*
INITIALSOLUTIONSTART

INITIALSOLUTIONEND
*/

// SOLUTIONSTART
const a = 3;
const b = 5;
const area = a * b / 2;
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

it('Variable `b` has a value', () => {
  expect(b).not.undefined;
});

it('the variable type `b` is a number', () => {
  expect(b).a('number');
});

it('the variable type `b` is not NaN', () => {
  expect(isNaN(b)).false;
});

it('Variable `b` has value >= 0', () => {
  expect(b >= 0).true;
});

it('Variable `area` has a value', () => {
  expect(area).not.undefined;
});

it('the variable `area` type is a number', () => {
  expect(area).a('number');
});

it('the variable `area` has the correct value', () => {
  expect(area).equal(a * b / 2);
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
