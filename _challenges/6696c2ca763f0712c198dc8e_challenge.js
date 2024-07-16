// NAMEEN:Line length
// NAMERU:Длина строки

/*
INSTRUCTIONENSTART
Create a variable named `question` and assign to it the value of `How do you do?`
Create a variable named `length` and assign it the value of the string length `question`.

Here is an example, which is fundamentally similar to what you need to do,
but adapt it to the needs of the task:
```
const name = 'Jonh';
const lengthName = name.length;
```
INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Создайте переменную с именем `question` и присвойте ей значение `How do you do?`.
Создайте переменную `length` и присвойте ей значение длины строки `question`.

Приведем пример, который принципиально похож на то, что нужно сделать,
но адаптируйте его к требованиям задачи:
```javascript
const name = 'Jonh';
const lengthName = name.length;
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
const question = 'How do you do?';
const length = question.length;
```
HINTRUEND
*/

/*
INITIALSOLUTIONSTART

INITIALSOLUTIONEND
*/

// SOLUTIONSTART
const question = 'How do you do?';
const length = question.length;
// SOLUTIONEND


// OPENTESTSSTART
it('The `question` variable exists and has a value', () => {
  expect(question).not.undefined;
});

it('Variable `question` has type `string`', () => {
  expect(question).a('string');
});

it('Variable `question` has the correct value', () => {
  expect(question).equal('How do you do?');
});

it('Variable `length` exists and has a value', () => {
  expect(length).not.undefined;
});

it('Variable `length` has type `number`', () => {
  expect(length).a('number');
});

it('Variable `length` is computed correctly', () => {
  expect(length).equal(question.length);
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
