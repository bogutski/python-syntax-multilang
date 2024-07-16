// NAMEEN:Find the hypotenuse of a right triangle
// NAMERU:Найти гипотенузу прямоугольного треугольника

/*
INSTRUCTIONENSTART
In a right-angled triangle, the two cathetuses `a` and `b` are given. Find the hypotenuse of `c`.

Define variable `a` and assign to it the value of an arbitrary non-negative number (the first cathetus).

Define variable `b` and assign to it the value of an arbitrary non-negative number (the second cathetus).

Define a variable `c` in which the hypotenuse (the square root of the sum of the squares of the cathetuses) is calculated.

Here is an example that is fundamentally similar to what you need to do,
but adapt it to the requirements of the problem:
```
const x = 3;
const y = 5;
const z = (x ** 2 + y ** 2) ** 0.5 ;
```
INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
В прямоугольном треугольнике заданы два катета `а` и `b`. Найти гипотенузу `с`.

Задайте переменную `a` и присвойте ей значение произвольного неотрицательного числа (первый катет).

Задайте переменную `b` и присвойте ей значение произвольного неотрицательного числа (второй катет).

Задайте переменную `c`, в которой вычислите гипотенузу (корень квадратный из суммы квадратов катетов).

Приведем пример, который принципиально похож на то, что нужно сделать,
но адаптируйте его к требованиям задачи:
```javascript
const x = 3;
const y = 5;
const z = (x ** 2 + y ** 2) ** 0.5 ;
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
const c = (a ** 2 + b ** 2) ** 0.5;
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
const c = (a ** 2 + b ** 2) ** 0.5;
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

it('Variable `c` has a value', () => {
  expect(c).not.undefined;
});

it('Variable type `c` is a number', () => {
  expect(c).a('number');
});

it('the variable `c` has the correct value', () => {
  expect(c).equal((a ** 2 + b ** 2) ** 0.5);
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
