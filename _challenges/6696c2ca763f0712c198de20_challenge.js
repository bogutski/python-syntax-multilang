// NAMEEN:Find the second side of the rectangle
// NAMERU:Найти вторую сторону прямоугольника

/*
INSTRUCTIONENSTART
Define a variable `p` and assign to it the perimeter of the rectangle (an arbitrary non-negative number).

Define a variable `a` and assign to it the value of the first side of the rectangle (an arbitrary non-negative number,
 which is smaller than `p`).

Define a variable `b` in which calculate the second side of the rectangle by the formula `b = p / 2 - a`.

Here is an example that is fundamentally similar to what you need to do, but adapt it to the requirements of the problem:
```
const z = 10;
const x = 1;
const y = z / 2 - x ;
```
INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Задайте переменную `p` и присвойте ей значение периметра прямоугольника (произвольное неотрицательное число).

Задайте переменную `a` и присвойте ей значение первой стороны прямоугольника (произвольное неотрицательное число,
 которое меньше `p`).

Задайте переменную `b`, в которой вычислите вторую сторону прямоугольника по формуле `b = p / 2 - a`.

Приведем пример, который принципиально похож на то, что нужно сделать, но адаптируйте его к требованиям задачи:
```javascript
const z = 10;
const x = 1;
const y = z / 2 - x ;
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
const p = 40;
const a = 5;
const b = p / 2 - a;
```
HINTRUEND
*/

/*
INITIALSOLUTIONSTART

INITIALSOLUTIONEND
*/

// SOLUTIONSTART
const p = 40;
const a = 5;
const b = p / 2 - a;
// SOLUTIONEND


// OPENTESTSSTART
it('Variable `p` contains a value', () => {
  expect(a).not.undefined;
});

it('the variable type `p` is a number', () => {
  expect(p).a('number');
});

it('the variable type `p` is not NaN', () => {
  expect(isNaN(p)).false;
});

it('Variable `p` has value >= 0', () => {
  expect(p >= 0).true;
});

it('Variable `a` has a value', () => {
  expect(a).not.undefined;
});

it('Variable type `a` is a number', () => {
  expect(a).a('number');
});

it('the variable type `b` is not NaN', () => {
  expect(isNaN(b)).false;
});

it('Variable `a` is non-negative and less than p', () => {
  expect(a >= 0 && a < p).true;
});

it('Переменная `b` содержит значение', () => {
  expect(b).not.undefined;
});

it('the variable type `b` is a number', () => {
  expect(b).a('number');
});

it('the variable `b` has the correct value', () => {
  expect(b).equal((p - 2 * a) / 2);
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
