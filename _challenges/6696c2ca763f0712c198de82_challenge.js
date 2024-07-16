// NAMEEN:Computing the radius of a circle
// NAMERU:Нахождение радиуса окружности

/*
INSTRUCTIONENSTART
The length of the circle is given. Find the radius of the circle.

Define a variable `length` and give it a value of an arbitrary non-negative number (the length of the circle).

Set the variable `pi` and assign to it the value 3.14 (the approximate value of pi).

Define a variable `radius` in which calculate the radius (to find the radius, divide the length of the circle by 2 * Pi).

Here is an example that is fundamentally similar to what you need to do, but adapt it to the requirements of the problem:
```
const l = 10;
const a = 3;
const r = l / (2 * a);

```
INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Дана длина окружности. Найти радиус этой окружности.

Задайте переменную `length` и присвойте ей значение произвольного неотрицательного числа (длина окружности).

Задайте переменную `pi` и присвойте ей значение 3.14 (приблизительное значение числа Пи).

Задайте переменную `radius`, в которой вычислите радиус (чтобы найти радиус, надо длину окружности разделить на 2 * Пи).

Приведем пример, который принципиально похож на то, что нужно сделать, но адаптируйте его к требованиям задачи:
```javascript
const l = 10;
const a = 3;
const r = l / (2 * a);

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
const length = 10;
const pi = 3.14;
const radius = length / (2 * pi);
```
HINTRUEND
*/

/*
INITIALSOLUTIONSTART

INITIALSOLUTIONEND
*/

// SOLUTIONSTART
const length = 10;
const pi = 3.14;
const radius = length / (2 * pi);
// SOLUTIONEND


// OPENTESTSSTART
it('Variable `length` contains a value', () => {
  expect(length).not.undefined;
});

it('the variable type `length` is a number', () => {
  expect(length).a('number');
});

it('the variable type `length` is not NaN', () => {
  expect(isNaN(length)).false;
});

it('Variable `length` has value >= 0', () => {
  expect(length >= 0).true;
});

it('Variable `pi` has a value', () => {
  expect(pi).not.undefined;
});

it('Variable type `pi` is a number', () => {
  expect(pi).a('number');
});

it('the variable type `pi` is not NaN', () => {
  expect(isNaN(pi)).false;
});

it('Variable `pi` is equal to 3.14', () => {
  expect(pi).equal(3.14);
});

it('Variable `radius` contains a value', () => {
  expect(radius).not.undefined;
});

it('The variable type `radius` is a number', () => {
  expect(radius).a('number');
});

it('the variable `radius` has the correct value', () => {
  expect(radius).equal(length / (2 * pi));
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
