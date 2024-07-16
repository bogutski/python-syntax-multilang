// NAMEEN:Sum of digits of a two-digit number
// NAMERU:Сумма цифр двузначного числа

/*
INSTRUCTIONENSTART
A two-digit number is given. Find the sum of its digits.

To solve the problem:
Create a variable `num` and assign to it the value of any positive two-digit number from 10 to 99.

Create variable `secondDigit`, assign to it an expression to get the second digit of `num` (use the operation of finding the remainder %).

Create variable `firstDigit`, assign to it an expression to get the first digit of `num`.
Create variable `sum`, assign to it the value of the sum of digits.

Here is an example, which is fundamentally similar to what you need to do, but adapt it to the requirements of the task:
```
// Find the last digit of a three-digit number
const number = 456; // three-digit number
const a = number % 10; // the last digit of the number is a remainder of the division of number by 10
```
INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Дано двузначное число. Найдите сумму его цифр.

Для решения задачи:
Создайте переменную `num` и присвойте ей значение любого положительного двузначного число от 10 до 99.

Создайте переменную `secondDigit`, присвойте ей выражение, позволяющее получить вторую цифру числа `num` (используйте операцию нахождения остатка %).

Создайте переменную `firstDigit`, присвойте ей выражение, позволяющее получить первую цифру числа `num`.
Создайте переменную `sum`, присвойте ей значение суммы цифр.

Приведем пример, который принципиально похож на то, что нужно сделать, но адаптируйте его к требованиям задачи:
```javascript
// Найти последнюю цифру трехзначного числа
const number = 456;    // трехзначное число
const a = number % 10; // последняя цифра числа равна остатку от деления числа на 10
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
const num = 34;
const secondDigit = num % 10;
const firstDigit = (num - secondDigit) / 10;
const sum = secondDigit + firstDigit;
```
HINTRUEND
*/

/*
INITIALSOLUTIONSTART

INITIALSOLUTIONEND
*/

// SOLUTIONSTART
const num = 34;
const secondDigit = num % 10;
const firstDigit = (num - secondDigit) / 10;
const sum = secondDigit + firstDigit;
// SOLUTIONEND


// OPENTESTSSTART
it('Variable `num` exists and has a value', () => {
  expect(num).not.undefined;
});

it('Variable `num` has a numeric type', () => {
  expect(num).a('number');
});

it('Variable `num` is a positive two-digit number', () => {
  expect(num >= 10 && num <= 99).to.be.true;
});

it('Переменная `num` больше или равна 10', () => {
  expect(num).gte(10);
});

it('Variable `num` is less than or equal to 99', () => {
  expect(num).lte(99);
});

it('Variable `firstDigit` has a value', () => {
  expect(firstDigit).not.undefined;
});

it('The ``secondDigit` variable has a value', () => {
  expect(secondDigit).not.undefined;
});

it('Variable `firstDigit` is calculated correctly', () => {
  let a = +((num + '')[0]);
  expect(a).equal(firstDigit);
});

it('Variable`secondDigit` is calculated correctly', () => {
  let a = +((num + '')[1]);
  expect(a).equal(secondDigit);
});

it('Variable`sum` has a value', () => {
  expect(sum).not.undefined;
});

it('Variable`sum` is equal to the sum of digits of a number', () => {
  expect(sum).equal(firstDigit + secondDigit);
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
