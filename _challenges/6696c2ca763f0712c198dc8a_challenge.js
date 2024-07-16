// NAMEEN:Blank line
// NAMERU:Пустая строка

/*
INSTRUCTIONENSTART
Create a variable named `empty` and assign to it the value of the empty string `''`.
Create a variable named `emptyLength` and assign to it the value of the string length `empty`.

Here is an example that is fundamentally similar to what you need to do,
but adapt it to the requirements of the task:
```
const address = '';
const addressLength = address.length;
```
INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Создайте переменную с именем `empty` и присвойте ей значение пустой строки `''`.
Создайте переменную с именем `emptyLength` и присвойте ей значение длины строки `empty`.

Приведем пример, который принципиально похож на то, что нужно сделать,
но адаптируйте его к требованиям задачи:
```javascript
const address = '';
const addressLength = address.length;
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
const empty = '';
const emptyLength = empty.length;
```
HINTRUEND
*/

/*
INITIALSOLUTIONSTART

INITIALSOLUTIONEND
*/

// SOLUTIONSTART
const empty = '';
const emptyLength = empty.length;
// SOLUTIONEND


// OPENTESTSSTART
it('Variable `empty` exists and has a value', () => {
  expect(empty).not.undefined;
});

it('Variable `empty` has type `string`', () => {
  expect(empty).a('string');
});

it('Variable `empty` has the correct value', () => {
  expect(empty).equal('');
});

it('The `emptyLength` variable exists and has a value', () => {
  expect(emptyLength).not.undefined;
});

it('Variable `emptyLength` has type `number`', () => {
  expect(emptyLength).a('number');
});

it('Variable `emptyLength` has the correct value', () => {
  expect(emptyLength).equal(0);
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
