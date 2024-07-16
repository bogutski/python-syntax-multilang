// NAMEEN:Circle area
// NAMERU:Площадь круга

/*
INSTRUCTIONENSTART
The radius of a circle is given. Find the area of the circle.

Define the variable `radius` and give it a value of an arbitrary non-negative number (the radius of the circle).

Set the variable `pi` and give it a value 3.14 (the approximate value of pi).

Set variable `area`, in which calculate the area of the circle (the area of the circle is equal to the number Pi multiplied by the square of the radius).

Here is an example that is fundamentally similar to what you need to do, but adapt it to the requirements of the problem:
```
const a = 10;
const pi = 3.14;
const s = pi * a ** 2;

```
INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Дан радиус круга. Найти его площадь.

Задайте переменную `radius` и присвойте ей значение произвольного неотрицательного числа (радиус круга).

Задайте переменную `pi` и присвойте ей значение 3.14 (приблизительное значение числа Пи).

Задайте переменную `area`, в которой вычислите площадь круга (площадь круга равна числу Пи, умноженному на квадрат радиуса).

Приведем пример, который принципиально похож на то, что нужно сделать, но адаптируйте его к требованиям задачи:
```javascript
const a = 10;
const pi = 3.14;
const s = pi * a ** 2;
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
const area = pi * radius ** 2;
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
const area = pi * radius ** 2;
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

it('Variable `area` contains a value', () => {
  expect(area).not.undefined;
});

it('the variable `area` type is a number', () => {
  expect(area).a('number');
});

it('the variable `area` has the correct value', () => {
  expect(area).equal(pi * radius ** 2);
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
