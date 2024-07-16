// NAMEEN:Welcome to our class
// NAMERU:Welcome to our class

/*
INSTRUCTIONENSTART
Create a variable `stringStart` and assign it the value `'Welcome to our class'`.

Create a variable `stringEnd` and set it to `'John Smith'`.

Create a variable `newString` that is the result of merging the variable `stringStart` and the variable `stringEnd` with a space between them.

Here is an example that is fundamentally similar to what you need to do,
but adapt it to the requirements of the task:
```
let name = 'Paul';
let surname = 'Smith';
let fullName = name + ' ' + surname;
```
INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Создайте переменную `stringStart` и присвойте ей значение `'Welcome to our class'`.

Создайте переменную `stringEnd` и присвойте ей значение `'John Smith'`.

Создайте переменную `newString` которая будет результатом слияния переменной `stringStart` и переменной `stringEnd` с пробелом между ними.

Приведем пример, который принципиально похож на то что нужно сделать,
но адаптируйте его к требованиям задачи:
```javascript
let name = 'Paul';
let surname = 'Smith';
let fullName = name + ' ' + surname;
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
let stringStart = 'Welcome to our class';
let stringEnd = 'John Smith';
let newString = stringStart + ' ' + stringEnd;
```
HINTRUEND
*/

/*
INITIALSOLUTIONSTART

INITIALSOLUTIONEND
*/

// SOLUTIONSTART
let stringStart = 'Welcome to our class';
let stringEnd = 'John Smith';
let newString = stringStart + ' ' + stringEnd;
// SOLUTIONEND


// OPENTESTSSTART
it('The `stringStart` variable contains the value ', () => {
  expect(stringStart).not.undefined;
});

it('The `stringEnd` variable contains the value', () => {
  expect(stringEnd).not.undefined;
});

it('The `newString` variable contains the value ', () => {
  expect(newString).not.undefined;
});

it('The `stringStart` variable contains a string', () => {
  expect(stringStart).a('string');
});

it('The `stringEnd` variable contains a string', () => {
  expect(stringEnd).a('string');
});

it('Variable `newString` contains a string', () => {
  expect(newString).a('string');
});

it('The `stringStart` variable contains the value ', () => {
  expect(stringStart).equal('Welcome to our class');
});

it('The `stringEnd` variable contains the value ', () => {
  expect(stringEnd).equal('John Smith');
});

it('Variable `newString` contains the correct value ', () => {
  expect(newString).equal('Welcome to our class John Smith');
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
