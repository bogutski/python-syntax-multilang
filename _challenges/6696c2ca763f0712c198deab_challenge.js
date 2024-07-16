// NAMEEN:Does the number end in 0?
// NAMERU:Заканчивается ли число на 0?

/*
INSTRUCTIONENSTART
A number num is given. Is it true that the number ends with 0?

Create a variable `num` and assign to it the value of an arbitrary positive number.

Create a variable `lastDigit` and assign it an expression to find the last digit of `num` using the operation
Find the remainder of division by 10.

Create a variable `isLastDigitIsZero` and give it the result of comparing the last digit to zero.

Here is an example, which is fundamentally similar to what you need to do, but adapt it to the requirements of the task:
```
const x = 90;
const rest = x % 10;
const isEqualZero = rest === 0;
```
INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Дано число num. Верно ли, что число заканчивается на 0?

Создайте переменную `num` и присвойте ей значение произвольного положительного числа.

Создайте переменную `lastDigit` и присвойте ей выражение для нахождения последней цифры числа `num` с использованием операции
нахождения остатка от деления на 10.

Создайте переменную `isLastDigitIsZero` и присвойте ей результат сравнения последней цифры с нулём.

Приведем пример, который принципиально похож на то, что нужно сделать, но адаптируйте его к требованиям задачи:
```javascript
const x = 90;
const rest = x % 10;
const isEqualZero = rest === 0;
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
const num = 19;
const lastDigit = num % 10;
const isLastDigitIsZero = lastDigit === 0;
```
HINTRUEND
*/

/*
INITIALSOLUTIONSTART

INITIALSOLUTIONEND
*/

// SOLUTIONSTART
const num = 19;
const lastDigit = num % 10;
const isLastDigitIsZero = lastDigit === 0;
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

it('The `isLastDigitIsZero` variable has a value', () => {
  expect(isLastDigitIsZero).not.undefined;
});

it('Variable `isLastDigitIsZero` has a logical type', () => {
  expect(isLastDigitIsZero).a('boolean');
});

it('Variable `isLastDigitIsZero` is computed correctly', () => {
  expect(isLastDigitIsZero).equal(lastDigit === 0);
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
