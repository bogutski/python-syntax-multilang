// NAMEEN:Is it true that the first number is greater than the second number?
// NAMERU:Действительно ли, первое число больше второго?

/*
INSTRUCTIONENSTART
Create variables named `a` and `b` and assign to them the values of arbitrary numbers.
Create a variable named `isABiggerThanB` and assign to it the result of comparing variables `a` and `b`.
The variable `isABiggerThanB` must take the value `true` if `a > b`, and `false` if `a <= b`.

Приведем пример, который принципиально похож на то, что нужно сделать,
но адаптируйте его к требованиям задачи:
```
const x = 2;
const y = 6;
const comparison = x > y;
```
INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Создайте переменные с именами `a` и `b` и присвойте им значения произвольных чисел.
Создайте переменную с именем `isABiggerThanB` и присвойте ей результат сравнения переменных `a` и `b`.
Переменная `isABiggerThanB` должна принимать значение `true`, если `a > b`, и `false`, если `a <= b`.

Приведем пример, который принципиально похож на то, что нужно сделать,
но адаптируйте его к требованиям задачи:
```javascript
const x = 2;
const y = 6;
const comparison = x > y;
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
const b = 160;
const isABiggerThanB = a > b;
```
HINTRUEND
*/

/*
INITIALSOLUTIONSTART

INITIALSOLUTIONEND
*/

// SOLUTIONSTART
const a = 18;
const b = 160;
const isABiggerThanB = a > b;
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

it('Variable `isABiggerThanB` exists and has a value', () => {
  expect(isABiggerThanB).not.undefined;
});

it('Variable `isABiggerThanB` has type `boolean`', () => {
  expect(isABiggerThanB).a('boolean');
});

it('Variable `isABiggerThanB` has value a>b', () => {
  expect(isABiggerThanB).equal(a > b);
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
