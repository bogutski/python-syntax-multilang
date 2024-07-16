// NAMEEN:Let's compare null and undefined
// NAMERU:Сравним null и undefined

/*
INSTRUCTIONENSTART
Create a variable named `a` and give it the value `null`.
Create a variable named `b` and give it the value `undefined`.

Create a variable named `isStrictEqual` and assign to it the result of strict equality of variables `a` and `b`.
Create a variable named `isEqual` and assign to it the result of a non-strict equality of the variables `a` and `b`.

Create a variable `strictResult` and assign to it the string value `'true'` or `'false'` that matches the result of a strict comparison of `null` and `undefined`.

Create a variable `notStrictResult` and assign it the string value `'true'` or `'false'` that matches the result of a non-strict comparison of `null` and `undefined`.

Here is an example that is fundamentally similar to what needs to be done,
but adapt it to the requirements of the problem:
```
const x = 1;
const y = 3;
const comparison = x === y; // since x is not equal to y, the comparison result is false
const comparisonResult = 'false'; // the variable is assigned the string value 'false'
```
INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Создайте переменную с именем `a` и присвойте ей значение `null`.
Создайте переменную `b` и присвойте ей значение `undefined`.

Создайте переменную с именем `isStrictEqual` и присвойте ей результат строгого равенства переменных `a` и `b`.
Создайте переменную с именем `isEqual` и присвойте ей результат нестрогого равенства переменных `a` и `b`.

Создайте переменную `strictResult` и присвойте ей значение строки `'true'` или `'false'`, совпадающее с результатом строгого сравнения `null` и `undefined`.

Создайте переменную `notStrictResult` и присвойте ей значение строки `'true'` или `'false'`, совпадающее с результатом нестрогого сравнения `null` и `undefined`.

Приведем пример, который принципиально похож на то, что нужно сделать, но адаптируйте его к требованиям задачи:
```javascript
const x = 1;
const y = 3;
const comparison = x === y;        // так как x не равно y, результат сравнения будет false
const comparisonResult = 'false';  // переменной присвоено значение строки 'false'
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
const a = null;
const b = undefined;
const isStrictEqual = a === b;
const isEqual = a == b;
const strictResult = 'false';
const notStrictResult = 'true';
```
HINTRUEND
*/

/*
INITIALSOLUTIONSTART

INITIALSOLUTIONEND
*/

// SOLUTIONSTART
const a = null;
const b = undefined;
const isStrictEqual = a === b;
const isEqual = a == b;
const strictResult = 'false';
const notStrictResult = 'true';
// SOLUTIONEND


// OPENTESTSSTART
it('Variable `a ` exists and has a value', () => {
  expect(a).not.undefined;
});

it('Variable `a` has typeof object', () => {
  expect(typeof a).equal('object');
});

it('Variable `a` has value null ', () => {
  expect(a).equal(null);
});

it('Variable `b` exists and is undefined ', () => {
  expect(b).undefined;
});

it('Variable `b` has type `undefined', () => {
  expect(b).a('undefined');
});

it('The `isStrictEqual` variable exists and has a value', () => {
  expect(isStrictEqual).not.undefined;
});

it('The `isStrictEqual` variable is of type `boolean`', () => {
  expect(isStrictEqual).a('boolean');
});

it('The `isStrictEqual` variable has value a===b', () => {
  expect(isStrictEqual).equal(a === b);
});

it('The `isEqual` variable exists and has a value', () => {
  expect(isEqual).not.undefined;
});

it('The `isEqual` variable is of type `boolean`', () => {
  expect(isEqual).a('boolean');
});

it('Variable `isEqual` has value a==b', () => {
  expect(isEqual).equal(a == b);
});

it('The `strictResult` variable exists and has a value', () => {
  expect(strictResult).not.undefined;
});

it('Variable `strictResult` has type string', () => {
  expect(strictResult).a('string');
});

it('Variable `strictResult` has value false ', () => {
  expect(strictResult).equal('false');
});

it('The `notStrictResult` variable exists and has a value', () => {
  expect(notStrictResult).not.undefined;
});

it('The `notStrictResult` variable is of type string', () => {
  expect(notStrictResult).a('string');
});

it('The `notStrictResult` variable is true', () => {
  expect(notStrictResult).equal('true');
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
