// NAMEEN:Doesn't the sum change by changing the places of the terms?
// NAMERU:От перемены мест слагаемых сумма не меняется?

/*
INSTRUCTIONENSTART
Define variable `a` and assign to it the value of string `'2'`.
Set the variable `b` and assign to it the value of the string `'3'`.

Set variable `aPlusB` and assign to it the result of merging variables `a` and `b`.
Set variable `bPlusA` and assign to it the result of merging variables `b` and `a`.

Set variable `isEqual` and assign to it the result of comparison of variables `aPlusB` and `bPlusA`.

Here is an example that is fundamentally similar to what you need to do, but adapt it to the requirements of the task:
```
const x = '1';
const y = '2';
const sum1 = x + y;
const sum2 = y + x;
const comparison = sum1 === sum2;
```
INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Задайте переменную `a` и присвойте ей значение строки `'2'`.
Задайте переменную `b` и присвойте ей значение строки `'3'`.

Задайте переменную `aPlusB` и присвойте ей результат слияния переменных `a` и `b`.
Задайте переменную `bPlusA` и присвойте ей результат слияния переменных `b` и `a`.

Задайте переменную `isEqual` и присвойте ей результат сравнения переменных `aPlusB` и `bPlusA`.

Приведем пример, который принципиально похож на то, что нужно сделать, но адаптируйте его к требованиям задачи:
```javascript
const x = '1';
const y = '2';
const sum1 = x + y;
const sum2 = y + x;
const comparison = sum1 === sum2;
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
const a = '2';
const b = '3';
const aPlusB = a + b;
const bPlusA = b + a;
const isEqual = aPlusB === bPlusA;
```
HINTRUEND
*/

/*
INITIALSOLUTIONSTART

INITIALSOLUTIONEND
*/

// SOLUTIONSTART
const a = '2';
const b = '3';
const aPlusB = a + b;
const bPlusA = b + a;
const isEqual = aPlusB === bPlusA;
// SOLUTIONEND


// OPENTESTSSTART
it('Variable `a` contains a value', () => {
  expect(a).not.undefined;
});

it('the variable type `a` is string', () => {
  expect(a).a('string');
});

it('the variable `a` has the correct value', () => {
  expect(a).equal('2');
});

it('Variable `b` has a value', () => {
  expect(b).not.undefined;
});

it('the variable type `b` is a string', () => {
  expect(b).a('string');
});

it('the variable `b` has the correct value', () => {
  expect(b).equal('3');
});

it('Variable `aPlusB` has a value', () => {
  expect(aPlusB).not.undefined;
});

it('the variable type `aPlusB` is string', () => {
  expect(aPlusB).a('string');
});

it('the variable `aPlusB` has the correct value', () => {
  expect(aPlusB).equal('23');
});

it('Variable `bPlusA` has a value', () => {
  expect(bPlusA).not.undefined;
});

it('the variable type `bPlusA` is a string', () => {
  expect(bPlusA).a('string');
});

it('the variable `bPlusA` has the correct value', () => {
  expect(bPlusA).equal('32');
});

it('The `isEqual` variable has a value', () => {
  expect(isEqual).not.undefined;
});

it('the variable type `isEqual` - boolean', () => {
  expect(isEqual).a('boolean');
});

it('the variable `isEqual` has the correct value', () => {
  expect(isEqual).equal(false);
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
