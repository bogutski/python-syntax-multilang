// NAMEEN:The last digit of the number
// NAMERU:Последняя цифра числа

/*
INSTRUCTIONENSTART
A number is given. Get its last digit.

To solve the problem:
Create a variable `num` and assign to it the value of any non-negative number.

Create a variable `lastDigit` and assign to it an expression to get the last digit of `num` (use the operation of finding the remainder of division by 10).

Here is an example, which is fundamentally similar to what you need to do, but adapt it to the requirements of the problem:
```
const number = 456;
const a = number % 10; 
// the last digit of the number is a remainder of the division of number by 10
```
INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Дано число. Получите его последнюю цифру.

Для решения задачи:
Создайте переменную `num` и присвойте ей значение любого неотрицательного числа.

Создайте переменную `lastDigit` и присвойте ей выражение, позволяющее получить последнюю цифру числа `num` (используйте операцию нахождения остатка от деления числа на 10).

Приведем пример, который принципиально похож на то, что нужно сделать, но адаптируйте его к требованиям задачи:
```javascript
const number = 456;
const a = number % 10; 
// последняя цифра числа равна остатку от деления числа на 10
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
const lastDigit = num % 10;
```
HINTRUEND
*/

/*
INITIALSOLUTIONSTART

INITIALSOLUTIONEND
*/

// SOLUTIONSTART
const num = 34;
const lastDigit = num % 10;
// SOLUTIONEND


// OPENTESTSSTART
it('Variable `num` exists and has a value', () => {
  expect(num).not.undefined;
});

it('Variable `num` has a numeric type', () => {
  expect(num).a('number');
});

it('Variable `num` is not NaN', () => {
  expect(isNaN(num)).false;
});

it('Variable `num` is a non-negative number', () => {
  expect(num >= 0).to.be.true;
});

it('Variable `lastDigit` is a value', () => {
  expect(lastDigit).not.undefined;
});

it('Variable `lastDigit` has a numeric type', () => {
  expect(lastDigit).a('number');
});

it('The `lastDigit` variable is not NaN', () => {
  expect(isNaN(lastDigit)).false;
});

it('The `lastDigit` variable is calculated correctly', () => {
  expect(lastDigit).equal(num % 10);
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
