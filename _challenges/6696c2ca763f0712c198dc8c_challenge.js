// NAMEEN:The last letter of the line
// NAMERU:Последняя буква строки

/*
INSTRUCTIONENSTART
Create a variable named `str` and assign to it the value of an arbitrary non-empty string.
Create a variable named `lastSymbol` and assign to it the value of the last character of the string.

Here is an example, which is fundamentally similar to what you need to do,
but adapt it to the needs of the task:
```
const name = 'Jonh';
const last = name[name.length - 1];
```
INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Создайте переменную с именем `str` и присвойте ей значение произвольной непустой строки.
Создайте переменную `lastSymbol` и присвойте ей значение последнего символа строки.

Приведем пример, который принципиально похож на то, что нужно сделать,
но адаптируйте его к требованиям задачи:
```javascript
const name = 'Jonh';
const last = name[name.length - 1];
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
const str = 'hello';
const lastSymbol = str[str.length - 1];
```
HINTRUEND
*/

/*
INITIALSOLUTIONSTART

INITIALSOLUTIONEND
*/

// SOLUTIONSTART
const str = 'hello';
const lastSymbol = str[str.length - 1];
// SOLUTIONEND


// OPENTESTSSTART
it('Variable `str` exists and has a value', () => {
  expect(str).not.undefined;
});

it('Variable `str` has type `string`', () => {
  expect(str).a('string');
});

it('The variable `lastSymbol` exists and has a value', () => {
  expect(lastSymbol).not.undefined;
});

it('The `lastSymbol` variable has type `string`', () => {
  expect(lastSymbol).a('string');
});

it('Variable `lastSymbol` is computed correctly', () => {
  expect(lastSymbol).equal(str[str.length - 1]);
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
