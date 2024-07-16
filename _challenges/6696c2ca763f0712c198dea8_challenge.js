// NAMEEN:Is the number odd?
// NAMERU:Является ли число нечетным?

/*
INSTRUCTIONENSTART
The number num is given. Is it true that the number is odd?

Create a variable `num` and assign to it the value of an arbitrary positive number.

Create a variable `isOdd` and assign it the result of comparing the remainder of division of `num` by 2 with 1.
That is, if the number `num` is odd, then the value of the variable `isOdd` will be true.

If the number `num` is even, then the value of the variable `isOdd` will be false.

Here is an example which is fundamentally similar to what you need to do, but adapt it to the requirements of the problem:
```
const number = 9;
const isNumberOdd = number % 2 === 1; // true
```
INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Дано число num. Верно ли, что число нечетное?

Создайте переменную `num` и присвойте ей значение произвольного положительного числа.

Создайте переменную `isOdd` и присвойте ей результат сравнения остатка от деления числа `num` на 2 с единицей.
Т.е. если число `num` - нечетное, то значение переменной `isOdd` будет равно true.

Если число `num` - четное, то значение переменной `isOdd` будет равно false.

Приведем пример, который принципиально похож на то, что нужно сделать, но адаптируйте его к требованиям задачи:
```javascript
const number = 9;
const isNumberOdd = number % 2 === 1; // true
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
const num = 18;
const isOdd = num % 2 === 1;
```
HINTRUEND
*/

/*
INITIALSOLUTIONSTART

INITIALSOLUTIONEND
*/

// SOLUTIONSTART
const num = 18;
const isOdd = num % 2 === 1;
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

it('Variable `isOdd` is a value', () => {
  expect(isOdd).not.undefined;
});

it('Variable `isOdd` has a boolean type', () => {
  expect(isOdd).a('boolean');
});

it('Variable `isOdd` is computed correctly', () => {
  expect(isOdd).equal(num % 2 === 1);
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
