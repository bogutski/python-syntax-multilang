// NAMEEN:What type does infinity have?
// NAMERU:Какой тип имеет бесконечность?

/*
INSTRUCTIONENSTART
Create a variable `infinity` and assign to it the value of the result of dividing an arbitrary positive number by 0.
Create a variable `typeOfInfinity` and assign to it the value of variable `infinity` type.

Here is an example, which is fundamentally similar to what we need to do,
but adapt it to the needs of the task:
```
const inf = 2 / 0;
const typeOfInf = typeof(inf);
```
INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Создайте переменную `infinity` и присвойте ей значение результата деления произвольного положительного числа на 0.
Создайте переменную `typeOfInfinity` и присвойте ей значение типа переменной `infinity`.

Приведем пример, который принципиально похож на то, что нужно сделать,
но адаптируйте его к требованиям задачи:
```javascript
const inf = 2 / 0;
const typeOfInf = typeof (inf);
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
const infinity = 1 / 0;
const typeOfInfinity = typeof (infinity);
```
HINTRUEND
*/

/*
INITIALSOLUTIONSTART

INITIALSOLUTIONEND
*/

// SOLUTIONSTART
const infinity = 1 / 0;
const typeOfInfinity = typeof (infinity);
// SOLUTIONEND


// OPENTESTSSTART
it('the `infinity` variable exists and has a value', () => {
  expect(infinity).not.undefined;
});

it('the variable `infinity` is of type number', () => {
  expect(infinity).a('number');
});

it('the variable `infinity` is equal to Infinity', () => {
  expect(infinity).eq(infinity);
});

it('the variable `typeOfInfinity` exists and has a value', () => {
  expect(typeOfInfinity).not.undefined;
});

it('the variable `typeOfInfinity` has type string', () => {
  expect(typeOfInfinity).a('string');
});

it('the variable `typeOfInfinity` is `number`', () => {
  expect(typeOfInfinity).equal('number');
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
