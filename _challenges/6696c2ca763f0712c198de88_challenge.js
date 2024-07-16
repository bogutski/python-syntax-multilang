// NAMEEN:Cuboid volume
// NAMERU:Объем кубоида

/*
INSTRUCTIONENSTART
Bob needs a quick way to calculate the volume of a cuboid with three values: length, width and height of the cuboid.

Write a program to help Bob with this calculation.

Create variables with the names: `length`, `width` and `height`. Assign values to them: 5, 7 and 12, respectively.

Create a variable named `volumeOfCuboid`, assign it a value that calculates the volume of the cuboid.

Here is an example that is fundamentally similar to what you need to do,
but adapt it to the requirements of the task:
```
const first = 15;
const second = 20;
const third = 10;
const volume = first * second * third;

```
INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Бобу нужен быстрый способ вычислить объем кубоида с тремя значениями: длина, ширина и высота кубоида.

Напишите программу, чтобы помочь Бобу в этом расчете.

Создайте переменные с названиями: `length`, `width` и `height`. Присвойте им значения: 5, 7 и 12 соответственно.

Создайте переменную с названием `volumeOfCuboid`, присвойте ей значение, которое вычисляет объем кубоида.

Приведем пример, который принципиально похож на то что нужно сделать,
но адаптируйте его к требованиям задачи:
```javascript
const first = 15;
const second = 20;
const third = 10;
const volume = first * second * third;
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
const length = 5;
const width = 7;
const height = 12;
const volumeOfCuboid = length * width * height;
```
HINTRUEND
*/

/*
INITIALSOLUTIONSTART

INITIALSOLUTIONEND
*/

// SOLUTIONSTART
const length = 5;
const width = 7;
const height = 12;
const volumeOfCuboid = length * width * height;
// SOLUTIONEND


// OPENTESTSSTART
it('Variable `length` contains a value', () => {
  expect(length).not.undefined;
});

it('Variable `length` contains data type number', () => {
  expect(length).a('number');
});

it('Variable `length` contains value 5 ', () => {
  expect(length).equal(5);
});

it('The variable `width` contains a value ', () => {
  expect(width).not.undefined;
});

it('Variable `width` contains data type number', () => {
  expect(width).a('number');
});

it('Variable `width` contains value 7 ', () => {
  expect(width).equal(7);
});

it('Variable `height` contains a value ', () => {
  expect(height).not.undefined;
});

it('Variable `height` contains data type number', () => {
  expect(height).a('number');
});

it('The `height` variable contains a value of 12 ', () => {
  expect(height).equal(12);
});

it('The variable `volumeOfCuboid` contains a value ', () => {
  expect(volumeOfCuboid).not.undefined;
});

it('Variable `volumeOfCuboid` contains data type number', () => {
  expect(volumeOfCuboid).a('number');
});

it('Variable `volumeOfCuboid` contains value 420', () => {
  expect(volumeOfCuboid).equal(420);
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
