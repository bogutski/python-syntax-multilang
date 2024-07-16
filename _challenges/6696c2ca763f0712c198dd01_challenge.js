// NAMEEN:Strict equality of two numbers (===)
// NAMERU:Строгое равенство двух чисел (===)

/*
INSTRUCTIONENSTART
The strict equality operator `===` checks for equality without type conversion.
If `a` and `b` have the same values and types, the result of comparison `a === b` returns `true`.

Create variables named `a` and `b` and assign arbitrary number values to them.
Create a variable named `isAEqualsB` and assign to it the result of strict equality of variables `a` and `b`.
The variable `isAEqualsB` must take value `true` if `a === b`, and `false` otherwise.

Here is an example that is fundamentally similar to what needs to be done,
but adapt it to the requirements of the problem:
```
const x = 2;
const y = 6;
const comparison = x === y;
```
INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Оператор строгого равенства `===` проверяет равенство без приведения типов.
Если `a` и `b` имеют одинаковые значения и типы, то результат сравнения `a === b` возвращает `true`.

Создайте переменные с именами `a` и `b` и присвойте им значения произвольных чисел.
Создайте переменную с именем `isAEqualsB` и присвойте ей результат строгого равенства переменных `a` и `b`.
Переменная `isAEqualsB` должна принимать значение `true`, если `a === b`, и `false` в противном случае.

Приведем пример, который принципиально похож на то, что нужно сделать,
но адаптируйте его к требованиям задачи:
```javascript
const x = 2;
const y = 6;
const comparison = x === y;
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
const isAEqualsB = a === b;
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
const isAEqualsB = a === b;
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

it('Variable `isAEqualsB` exists and has a value', () => {
  expect(isAEqualsB).not.undefined;
});

it('Variable `isAEqualsB` has type `boolean`', () => {
  expect(isAEqualsB).a('boolean');
});

it('Variable `isAEqualsB` has value a===b', () => {
  expect(isAEqualsB).equal(a === b);
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
