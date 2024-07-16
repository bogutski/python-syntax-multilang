// NAMEEN:Calculate a to the power of b
// NAMERU:Вычислите a в степени b

/*
INSTRUCTIONENSTART
The numbers a and b are given. Calculate a to the power of b

Define variables `a` and `b` and assign to them the value of arbitrary numbers.
Define a variable `power` in which calculate `a` to the power of `b`.

Here is an example that is fundamentally similar to what you need to do, but adapt it to the requirements of the problem:
```
const x = 2;
const y = 3;
const power = x ** y;
```
INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Даны числа a и b. Вычислите a в степени b

Задайте переменные `a` и `b` и присвойте им значение произвольных чисел.
Задайте переменную `power`, в которой вычислите `a` в степени `b`.

Приведем пример, который принципиально похож на то, что нужно сделать, но адаптируйте его к требованиям задачи:
```javascript
const x = 2;
const y = 3;
const power = x ** y;
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
const a = 60;
const b = 40;
const power = a ** b;
```
HINTRUEND
*/

/*
INITIALSOLUTIONSTART

INITIALSOLUTIONEND
*/

// SOLUTIONSTART
const a = 60;
const b = 40;
const power = a ** b;
// SOLUTIONEND


// OPENTESTSSTART
it('Variable `a` contains a value', () => {
  expect(a).not.undefined;
});

it('The variable `a` type is a number', () => {
  expect(a).a('number');
});

it('the variable type `a` is not NaN', () => {
  expect(isNaN(a)).false;
});

it('Variable `b` contains a value', () => {
  expect(b).not.undefined;
});

it('Variable `b` type is a number', () => {
  expect(b).a('number');
});

it('the variable type `b` is not NaN', () => {
  expect(isNaN(b)).false;
});

it('The variable `power` contains a value', () => {
  expect(power).not.undefined;
});

it('the variable `power` type is a number', () => {
  expect(power).a('number');
});

it('the variable `power` has the correct value', () => {
  expect(power).equal(a ** b);
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
