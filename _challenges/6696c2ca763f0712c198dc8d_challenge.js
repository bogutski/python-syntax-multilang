// NAMEEN:First letter
// NAMERU:Первая буква

/*
INSTRUCTIONENSTART
Create a variable named `str` and assign to it the value of an arbitrary non-empty string.
Create a variable named `firstSymbol` and assign to it the value of the first character of the string (i.e. the character with index 0).

Here's an example, which is fundamentally similar to what you need to do,
But adapt it to the requirements of the task:
```
const name = 'Jonh';
const begin = name[0];
```
INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Создайте переменную с именем `str` и присвойте ей значение произвольной непустой строки.
Создайте переменную `firstSymbol` и присвойте ей значение первого символа строки (т.е. символа с индексом 0).

Приведем пример, который принципиально похож на то, что нужно сделать,
но адаптируйте его к требованиям задачи:
```javascript
const name = 'Jonh';
const begin = name[0];
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
const firstSymbol = str[0];
```
HINTRUEND
*/

/*
INITIALSOLUTIONSTART

INITIALSOLUTIONEND
*/

// SOLUTIONSTART
const str = 'hello';
const firstSymbol = str[0];
// SOLUTIONEND


// OPENTESTSSTART
it('Variable `str` exists and has a value', () => {
  expect(str).not.undefined;
});

it('Variable `str` has type `string`', () => {
  expect(str).a('string');
});

it('The variable `firstSymbol` exists and has a value', () => {
  expect(firstSymbol).not.undefined;
});

it('The `firstSymbol` variable has type `string`', () => {
  expect(firstSymbol).a('string');
});

it('Variable `firstSymbol` is computed correctly', () => {
  expect(firstSymbol).equal(str[0]);
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
