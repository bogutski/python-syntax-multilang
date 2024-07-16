// NAMEEN:Forks and spoons
// NAMERU:Вилки и ложки

/*
INSTRUCTIONENSTART
The number of spoons is given. How many forks and spoons are there on the table, if there are twice as many forks as spoons?

Set variable `spoon` and assign to it the value of an arbitrary non-negative number (the number of spoons).

Define the variable `fork` and assign to it the value of the expression for calculating the number of forks.

Define a variable `tableware`, in which calculate the total number of forks and spoons.

Here is an example, which is fundamentally similar to what you need to do, but adapt it to the requirements of the task:
```
const apple = 10;
const orange = apple * 4;
const fruits = apple + orange;

```
INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Дано количество ложек. Сколько всего вилок и ложек лежит на столе, если вилок в два раза больше, чем ложек?

Задайте переменную `spoon` и присвойте ей значение произвольного неотрицательного числа (количество ложек).

Задайте переменную `fork` и присвойте ей значение выражения для вычисления количества вилок.

Задайте переменную `tableware`, в которой вычислите общее количество вилок и ложек.

Приведем пример, который принципиально похож на то, что нужно сделать, но адаптируйте его к требованиям задачи:
```javascript
const apple = 10;
const orange = apple * 4;
const fruits = apple + orange;

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
const spoon = 99;
const fork = spoon * 2;
const tableware = spoon + fork;
```
HINTRUEND
*/

/*
INITIALSOLUTIONSTART

INITIALSOLUTIONEND
*/

// SOLUTIONSTART
const spoon = 99;
const fork = spoon * 2;
const tableware = spoon + fork;
// SOLUTIONEND


// OPENTESTSSTART
it('The `spoon` variable contains a value', () => {
  expect(spoon).not.undefined;
});

it('the variable type `spoon` is a number', () => {
  expect(spoon).a('number');
});

it('the variable type `spoon` is not NaN', () => {
  expect(isNaN(spoon)).false;
});

it('Variable `spoon` has value >= 0', () => {
  expect(spoon >= 0).true;
});

it('The `fork` variable has a value', () => {
  expect(fork).not.undefined;
});

it('the variable type `fork` is a number', () => {
  expect(fork).a('number');
});

it('the variable `fork` has the correct value', () => {
  expect(fork).equal(spoon * 2);
});

it('The variable `tableware` has a value', () => {
  expect(tableware).not.undefined;
});

it('the variable type `tableware` is a number', () => {
  expect(tableware).a('number');
});

it('the variable `tableware` has the correct value', () => {
  expect(tableware).equal(spoon + fork);
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
