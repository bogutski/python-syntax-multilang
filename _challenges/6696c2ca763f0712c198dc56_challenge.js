// NAMEEN:Creating a variable with the value NaN
// NAMERU:Создание переменной со значением NaN

/*
INSTRUCTIONENSTART
`NaN` means a calculation error that occurs when performing
arithmetic (such as multiplication) with a variable that has a nonnumeric value.
Create a variable `nan` and assign to it an expression with the value `NaN`.

Here is an example that is fundamentally similar to what needs to be done,
but adapt it to the needs of the problem:
```
const before = 'Hello';
const after = before / 2;
```
INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
`NaN` означает вычислительную ошибку, которая возникает при выполнении
арифметического действия (например, умножения) с переменной, имеющей нечисловое значение.
Создайте переменную `nan` и присвойте ей выражение со значением `NaN`.

Приведем пример, который принципиально похож на то, что нужно сделать,
но адаптируйте его к требованиям задачи:
```javascript
const notANumber = 'JS' / 2;
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
const nan = 'Hello' * 2;
```
HINTRUEND
*/

/*
INITIALSOLUTIONSTART

INITIALSOLUTIONEND
*/

// SOLUTIONSTART
const nan = 'Hello' * 2;
// SOLUTIONEND


// OPENTESTSSTART
it('the variable type `nan` is a number', () => {
  expect(typeof (nan) === 'number').true;
});

it('the variable type `nan` is not a number', () => {
  expect(isNaN(nan)).true;
});

it('the variable `nan` is not equal to nan', () => {
  expect(nan).not.equal(nan);
});

it('Variable `nan` is equal to NaN', () => {
  expect(nan).NaN;
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
