// NAMEEN:Wall surface area
// NAMERU:Площадь поверхности стен

/*
INSTRUCTIONENSTART
A student Vasiliy decided to wallpaper his room. But before you buy wallpaper, you first need to know the total area of the walls (excluding the area of windows and doors).
Vasil has measured the dimensions of the room: a - length, b - width, h - height.
Write a sequence of commands to find the surface area of the walls.

Set variables `a`, `b`, `h` and assign them to arbitrary non-negative numbers.

Set the variable `area` and assign to it the value of the expression for calculating the area of the walls.
(The room has two walls of area `a*h` and two walls of area `b*h`.)

Here is an example that is fundamentally similar to what you need to do, but adapt it to the requirements of the problem:
```
const size1 = 10;
const size2 = 5;
const height = 3;
const s = (size1 * height + size2 * height) * 2;

```
INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Студент Василий решил сделать ремонт в комнате и оклеить ее обоями. Но перед покупкой обоев сначала надо узнать общую площадь стен (без учета площади окон и дверей).
Василий измерил размеры комнаты: а – длина, b – ширина, h – высота.
Напишите последователность команд для нахождения площади поверхности стен.

Задайте переменные `a`, `b`, `h` и присвойте им значение произвольных неотрицательных чисел.

Задайте переменную `area` и присвойте ей значение выражения для вычисления площади стен.
(В комнате 2 стены площадью `a*h` и две стены площадью `b*h`).

Приведем пример, который принципиально похож на то, что нужно сделать, но адаптируйте его к требованиям задачи:
```javascript
const size1 = 10;
const size2 = 5;
const height = 3;
const s = (size1 * height + size2 * height) * 2;

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
const a = 5;
const b = 10;
const h = 3;
const area = 2 * a * h + 2 * b * h;
```
HINTRUEND
*/

/*
INITIALSOLUTIONSTART

INITIALSOLUTIONEND
*/

// SOLUTIONSTART
const a = 5;
const b = 10;
const h = 3;
const area = 2 * a * h + 2 * b * h;
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

it('Variable `h` has a value', () => {
  expect(h).not.undefined;
});

it('Variable type `h` is a number', () => {
  expect(h).a('number');
});

it('the variable type `h` is not NaN', () => {
  expect(isNaN(h)).false;
});

it('Variable `h` has value >= 0', () => {
  expect(h >= 0).true;
});


it('Variable `area` has a value', () => {
  expect(area).not.undefined;
});

it('the variable `area` type is a number', () => {
  expect(area).a('number');
});

it('the variable type `area` is not NaN', () => {
  expect(isNaN(area)).false;
});

it('the variable `area` has the correct value', () => {
  expect(area).equal(2 * a * h + 2 * b * h);
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
