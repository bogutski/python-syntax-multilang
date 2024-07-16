// NAMEEN:Unary plus - converting null to number
// NAMERU:Унарный плюс - преобразование null в число

/*
INSTRUCTIONENSTART
It turns out that if you put `+` sign before null, you get number 0 from "nothing"!

Define a variable `zero` and set it to `null`.

Define a variable `value` and assign to it the value of the variable `zero`, converted to a number using unary plus operation.

Here is an example that is fundamentally similar to what needs to be done, but adapt it to the requirements of the problem:
```
const s = null;
const x = +s; // 0
```
INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Оказывается, если перед null поставить знак `+`, то из "ничего" получится число 0!

Задайте переменную `zero` и присвойте ей значение `null`.

Задайте переменную `value` и присвойте ей значение переменной `zero`, преобразованное в число с помощью операции унарный плюс.

Приведем пример, который принципиально похож на то, что нужно сделать, но адаптируйте его к требованиям задачи:
```javascript
const s = null;
const x = +s; // 0
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
const zero = null;
const value = +zero;
```
HINTRUEND
*/

/*
INITIALSOLUTIONSTART

INITIALSOLUTIONEND
*/

// SOLUTIONSTART
const zero = null;
const value = +zero;
// SOLUTIONEND


// OPENTESTSSTART
it('Variable `zero` exists and has a value', () => {
  expect(zero).not.undefined;
});

it('Variable `zero` has typeof object', () => {
  expect(typeof zero).equal('object');
});

it('Variable `zero` has value null', () => {
  expect(zero).equal(null);
});

it('Variable `value` has a value', () => {
  expect(value).not.undefined;
});

it('the variable type `value` is a number', () => {
  expect(value).a('number');
});

it('the variable `value` has the correct value', () => {
  expect(value).equal(0);
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
