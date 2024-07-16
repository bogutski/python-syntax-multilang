// NAMEEN:Circle length
// NAMERU:Длина окружности

/*
INSTRUCTIONENSTART
A radius is given. Find the length of the circle.

Define a variable `radius` and give it a value of an arbitrary non-negative number (the radius of the circle).

Set the variable `pi` and give it a value 3.14 (the approximate value of pi).

Define a variable `length` in which calculate the length of the circle (the length of the circle is equal to 2 * Pi * radius).

Here is an example that is fundamentally similar to what you need to do, but adapt it to the requirements of the problem:
```
const r = 10;
const pi = 3.14;
const l = 2 * pi * r;

```
INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Дан радиус. Найти длину окружности.

Задайте переменную `radius` и присвойте ей значение произвольного неотрицательного числа (радиус круга).

Задайте переменную `pi` и присвойте ей значение 3.14 (приблизительное значение числа Пи).

Задайте переменную `length`, в которой вычислите длину окружности (длина окружности равна 2 * Пи * радиус).

Приведем пример, который принципиально похож на то, что нужно сделать, но адаптируйте его к требованиям задачи:
```javascript
const r = 10;
const pi = 3.14;
const l = 2 * pi * r;
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
const radius = 10;
const pi = 3.14;
const length = 2 * pi * radius;
```
HINTRUEND
*/

/*
INITIALSOLUTIONSTART

INITIALSOLUTIONEND
*/

// SOLUTIONSTART
const radius = 10;
const pi = 3.14;
const length = 2 * pi * radius;
// SOLUTIONEND


// OPENTESTSSTART
it('Variable `radius` contains a value', () => {
  expect(radius).not.undefined;
});

it('The variable type `radius` is a number', () => {
  expect(radius).a('number');
});

it('the variable type `radius` is not NaN', () => {
  expect(isNaN(radius)).false;
});

it('The variable `radius` has a value >= 0', () => {
  expect(radius >= 0).true;
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

it('Variable `length` contains a value', () => {
  expect(length).not.undefined;
});

it('the variable type `length` is a number', () => {
  expect(length).a('number');
});

it('the variable `length` has the correct value', () => {
  expect(length).equal(2 * pi * radius);
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
