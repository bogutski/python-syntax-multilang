// NAMEEN:Cube edge
// NAMERU:Ребро куба

/*
INSTRUCTIONENSTART
Find the edge of a cube if its volume is known.

Set variable `volume` and give it a value of an arbitrary non-negative number (volume of the cube).
Define a variable `edge` in which calculate the edge of the cube (the cube root of the volume, or volume to the power of 1/3).

Here is an example that is fundamentally similar to what you need to do, but adapt it to the requirements of the problem:
```
const v = 27;
const a = v ** (1/3);
```
INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Найти ребро куба, если известен его объем.

Задайте переменную `volume` и присвойте ей значение произвольного неотрицательного числа (объем куба).
Задайте переменную `edge`, в которой вычислите ребро куба (корень кубический из объема, или объем в степени 1/3).

Приведем пример, который принципиально похож на то, что нужно сделать, но адаптируйте его к требованиям задачи:
```javascript
const v = 27;
const a = v ** (1/3);
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
const volume = 81;
const edge = volume ** (1 / 3);
```
HINTRUEND
*/

/*
INITIALSOLUTIONSTART

INITIALSOLUTIONEND
*/

// SOLUTIONSTART
const volume = 81;
const edge = volume ** (1 / 3);
// SOLUTIONEND


// OPENTESTSSTART
it('Variable `volume contains value', () => {
  expect(volume).not.undefined;
});

it('the variable type `volume` is a number', () => {
  expect(volume).a('number');
});

it('the variable type `volume` is not NaN', () => {
  expect(isNaN(volume)).false;
});

it('The variable `volume` has a value >= 0', () => {
  expect(volume >= 0).true;
});

it('Variable `edge` has a value', () => {
  expect(edge).not.undefined;
});

it('The variable `edge` type is a number', () => {
  expect(edge).a('number');
});

it('the variable `edge` has the correct value', () => {
  expect(edge).equal(volume ** (1 / 3));
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
