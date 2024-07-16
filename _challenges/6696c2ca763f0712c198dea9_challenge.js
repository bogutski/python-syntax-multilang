// NAMEEN:Is the number an even number?
// NAMERU:Является ли число четным?

/*
INSTRUCTIONENSTART
The number num is given. Is it true that the number is even?

Create a variable `num` and assign to it the value of an arbitrary positive number.
Create a variable `isEven` and assign it the result of comparing the remainder of division of `num` by 2 to zero.
That is, if the number `num` is even, then the value of the variable `isEven` will be true.
If the number `num` is odd, then the value of the variable `isEven` will be false.

Here is an example which is fundamentally similar to what you need to do, but adapt it to the requirements of the problem:
```
const number = 90;
const isNumberEven = number % 2 === 0; // true
```
INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Дано число num. Верно ли, что число четное?

Создайте переменную `num` и присвойте ей значения произвольного положительного числа.
Создайте переменную `isEven` и присвойте ей результат сравнения остатка от деления числа `num` на 2 с нулём.
Т.е. если число `num` - четное, то значение переменной `isEven` будет равно true.
Если число `num` - нечетное, то значение переменной `isEven` будет равно false.

Приведем пример, который принципиально похож на то, что нужно сделать, но адаптируйте его к требованиям задачи:
```javascript
const number = 90;
const isNumberEven = number % 2 === 0; // true
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
const isEven = num % 2 === 0;
```
HINTRUEND
*/

/*
INITIALSOLUTIONSTART

INITIALSOLUTIONEND
*/

// SOLUTIONSTART
const num = 19;
const isEven = num % 2 === 0;
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

it('Variable `isEven` is a value', () => {
  expect(isEven).not.undefined;
});

it('Variable `isEven` has a boolean type', () => {
  expect(isEven).a('boolean');
});

it('The `isEven` variable is computed correctly', () => {
  expect(isEven).equal(num % 2 === 0);
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
