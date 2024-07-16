// NAMEEN:Find 2 to the power of n
// NAMERU:Найдите 2 в степени n

/*
INSTRUCTIONENSTART
A number n is given. Find 2 to the power of n.

Define a variable `n` and assign to it the value of an arbitrary number from -50 to 50.
Define a variable `power` in which calculate 2 to the power of `n`.

Here is an example that is fundamentally similar to what you need to do, but adapt it to the requirements of the problem:
```
const x = 6;
const v = 2 ** x;
```
INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Дано число n. Найдите 2 в степени n.

Задайте переменную `n` и присвойте ей значение произвольного числа от -50 до 50.
Задайте переменную `power`, в которой вычислите 2 в степени `n`.

Приведем пример, который принципиально похож на то, что нужно сделать, но адаптируйте его к требованиям задачи:
```javascript
const x = 6;
const v = 2 ** x;
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
const n = 40;
const power = 2 ** n;
```
HINTRUEND
*/

/*
INITIALSOLUTIONSTART

INITIALSOLUTIONEND
*/

// SOLUTIONSTART
const n = 40;
const power = 2 ** n;
// SOLUTIONEND


// OPENTESTSSTART
it('Variable `n` contains a value', () => {
  expect(n).not.undefined;
});

it('Variable type `n` is a number', () => {
  expect(n).a('number');
});

it('the variable type `n` is not NaN', () => {
  expect(isNaN(n)).false;
});

it('Variable `n` is in the range -50 to 50', () => {
  expect(n >= -50 && n <= 50).true;
});

it('Переменная `power` содержит значение', () => {
  expect(power).not.undefined;
});

it('the variable type `power` is a number', () => {
  expect(power).a('number');
});

it('the variable `power` has the correct value', () => {
  expect(power).equal(2 ** n);
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
