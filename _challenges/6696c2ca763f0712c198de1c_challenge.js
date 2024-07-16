// NAMEEN:Let's add the strings, previously converting them into numbers
// NAMERU:Сложим строки, предварительно преобразовав их в числа

/*
INSTRUCTIONENSTART
Is it possible to add two numbers represented as strings and get a correct result?

Define a variable `a' and assign to it the value of a string containing an arbitrary number, e.g. `'8'`.

Set the variable `b` and assign it the value of a string containing an arbitrary number, such as `'12'`.

Define a variable `sum` and assign to it the result of adding the given numbers.

Here is an example, which is fundamentally similar to what you need to do, but adapt it to the requirements of the problem:
```
const redBalls = '13';
const greenBalls = '15';
const balls = +redBalls +greenBalls;
```
INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Можно ли сложить два числа, представленных в виде строк, и получить верный результат?

Задайте переменную `a` и присвойте ей значение строки, содержащей произвольное число, например, `'8'`.

Задайте переменную `b` и присвойте ей значение строки, содержащей произвольное число, например, `'12'`.

Задайте переменную `sum` и присвойте ей результат сложения данных чисел.

Приведем пример, который принципиально похож на то, что нужно сделать, но адаптируйте его к требованиям задачи:
```javascript
const redBalls = '13';
const greenBalls = '15';
const balls = +redBalls + +greenBalls;
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
const a = '20';
const b = '22';
const sum = +a + +b;
```
HINTRUEND
*/

/*
INITIALSOLUTIONSTART

INITIALSOLUTIONEND
*/

// SOLUTIONSTART
const a = '20';
const b = '22';
const sum = +a + +b;
// SOLUTIONEND


// OPENTESTSSTART
it('Variable `a` contains a value', () => {
  expect(a).not.undefined;
});

it('the variable type `a` is string', () => {
  expect(a).a('string');
});

it('the variable `a` is not NaN', () => {
  expect(isNaN(a)).false;
});

it('Variable `b` contains a value', () => {
  expect(b).not.undefined;
});

it('the variable type `b` is a string', () => {
  expect(b).a('string');
});

it('the variable `b` is not NaN', () => {
  expect(isNaN(b)).false;
});

it('variable`sum` contains a value', () => {
  expect(sum).not.undefined;
});

it('variable`sum` type is a number', () => {
  expect(sum).a('number');
});

it('the variable `sum` is not NaN', () => {
  expect(isNaN(sum)).false;
});

it('the variable`sum` has the correct value', () => {
  expect(sum).equal(+a + +b);
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
