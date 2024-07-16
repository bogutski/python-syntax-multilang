// NAMEEN:Subtraction to the power of zero
// NAMERU:Возведение в нулевую степень

/*
INSTRUCTIONENSTART
Any number raised to power of 0 is equal to 1. Find the result of raising 101 to the power of zero.

Create a variable `number` and assign value 101 to it.

Create a variable `power` and give it a value 0.

Create a variable `result` and give it a value of `number` to the extent of `power`.

Here is an example that is fundamentally similar to what needs to be done, but adapt it to the requirements of the task:

```
const number = 5;
const power = 1;
const result = number ** power;
 ```
INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Любое число, возведенное в степень 0, равно 1. Найдите результат возведения в нулевую степень числа 101.

Создайте переменную `number` и присвойте ей значение 101.

Создайте переменную `power` и присвойте ей значение 0.

Создайте переменную `result` и присвойте ей значение `number` в степени `power`.

Приведем пример, который принципиально похож на то, что нужно сделать, но адаптируйте его к требованиям задачи:

```javascript
const number = 5;
const power = 1;
const result = number ** power;
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
const number = 101;
const power = 0;
const result = number ** power;
```
HINTRUEND
*/

/*
INITIALSOLUTIONSTART

INITIALSOLUTIONEND
*/

// SOLUTIONSTART
const number = 101;
const power = 0;
const result = number ** power;
// SOLUTIONEND


// OPENTESTSSTART
it('Variable `number` contains a value', () => {
  expect(number).not.undefined;
});

it('Variable `number` contains a number', () => {
  expect(number).a('number');
});

it('Variable `number` is equal to 101', () => {
  expect(number).eq(101);
});

it('Variable `power` contains a value', () => {
  expect(power).not.undefined;
});

it('Variable `power` contains a number', () => {
  expect(power).a('number');
});

it('Variable `power` is 0', () => {
  expect(power).eq(0);
});

it('Variable `result` contains a value', () => {
  expect(result).not.undefined;
});

it('Variable `result` contains a number', () => {
  expect(result).a('number');
});

it('Variable `result` is 1', () => {
  expect(result).eq(1);
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
