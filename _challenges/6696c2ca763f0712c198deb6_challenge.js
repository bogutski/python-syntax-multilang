// NAMEEN:Cube volume
// NAMERU:Объем куба

/*
INSTRUCTIONENSTART
Find the volume of a cube if the length of its edge is known.

Define a variable `edge` and give it a value of an arbitrary non-negative number (an edge of the cube).
Define a variable `volume` in which calculate the volume of the cube.

Here is an example, which is fundamentally similar to what you need to do, but adapt it to the requirements of the problem:
```
const x = 6;
const v = x ** 3;
```
INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Найти объем куба, если известна длина его ребра.

Задайте переменную `edge` и присвойте ей значение произвольного неотрицательного числа (ребро куба).
Задайте переменную `volume`, в которой вычислите объем куба.

Приведем пример, который принципиально похож на то, что нужно сделать, но адаптируйте его к требованиям задачи:
```javascript
const x = 6;
const v = x ** 3;
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
const edge = 9;
const volume = edge ** 3;
```
HINTRUEND
*/

/*
INITIALSOLUTIONSTART

INITIALSOLUTIONEND
*/

// SOLUTIONSTART
const edge = 9;
const volume = edge ** 3;
// SOLUTIONEND


// OPENTESTSSTART
it('Variable `edge` contains a value', () => {
  expect(edge).not.undefined;
});

it('The variable `edge` type is a number', () => {
  expect(edge).a('number');
});

it('the variable type `edge` is not NaN', () => {
  expect(isNaN(edge)).false;
});

it('Variable `edge` has value >= 0', () => {
  expect(edge >= 0).true;
});

it('The `volume` variable has a value', () => {
  expect(volume).not.undefined;
});

it('the variable `volume` type is a number', () => {
  expect(volume).a('number');
});

it('the variable `volume` has the correct value', () => {
  expect(volume).equal(edge ** 3);
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
