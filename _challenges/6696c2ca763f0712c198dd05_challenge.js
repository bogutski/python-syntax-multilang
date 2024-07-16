// NAMEEN:Is it true that the first number is smaller than the second number?
// NAMERU:Действительно ли, первое число меньше второго?

/*
INSTRUCTIONENSTART
Create variables named `a` and `b` and assign to them the values of arbitrary numbers.
Create a variable named `isALessThanB` and assign to it the result of comparing variables `a` and `b`.
The variable `isALessThanB` must take value `true` if `a < b`, и `false`, если `a > = b`.

Here is an example which is fundamentally similar to what we need to do,
but adapt it to the requirements of the problem:
```
const x = 2;
const y = 6;
const comparison = x < y;
```
INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Создайте переменные с именами `a` и `b` и присвойте им значения произвольных чисел.
Создайте переменную с именем `isALessThanB` и присвойте ей результат сравнения переменных `a` и `b`.
Переменная `isALessThanB` должна принимать значение `true`, если `a < b`, и `false`, если `a >= b`.

Приведем пример, который принципиально похож на то, что нужно сделать,
но адаптируйте его к требованиям задачи:
```javascript
const x = 2;
const y = 6;
const comparison = x < y;
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
const a = 18;
const b = 16;
const isALessThanB = a < b;
```
HINTRUEND
*/

/*
INITIALSOLUTIONSTART

INITIALSOLUTIONEND
*/

// SOLUTIONSTART
const a = 18;
const b = 16;
const isALessThanB = a < b;
// SOLUTIONEND


// OPENTESTSSTART
it('Variable `a ` exists and has a value', () => {
  expect(a).not.undefined;
});

it('Variable `a` has type `number`', () => {
  expect(a).a('number');
});

it('Variable `a` is not NaN', () => {
  expect(isNaN(a)).false;
});
it('Variable `b` exists and has a value', () => {
  expect(b).not.undefined;
});

it('Variable `b` has type `number`', () => {
  expect(b).a('number');
});

it('Variable `b` is not NaN', () => {
  expect(isNaN(b)).false;
});

it('Variable `isALessThanB` exists and has a value', () => {
  expect(isALessThanB).not.undefined;
});

it('Variable `isALessThanB` has type `boolean`', () => {
  expect(isALessThanB).a('boolean');
});

it('Variable `isALessThanB` has value a <b', () => {
  expect(isALessThanB).equal(a < b);
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
