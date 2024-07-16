// NAMEEN:String concatenation
// NAMERU:Конкатенация строк

/*
INSTRUCTIONENSTART
Create a variable named `firstWord` and set it to `'Happy'`.
Create a variable named ``secondWord` and give it the value `'New'`.
Create a variable named `ThirdWord` and give it the value `'Year'`.
Create a variable named `greeting` and assign it the result of merging the three variables
with a space between them and an exclamation mark at the end.

Here is an example that is fundamentally similar to what you need to do,
but adapt it to the requirements of the problem:
```
const firstName = 'Anthony';
const lastName = 'Smith';
const fullName = firstName + ' ' + lastName;
```
INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Создайте переменную с именем `firstWord` и присвойте ей значение `'Happy'`.
Создайте переменную с именем `secondWord` и присвойте ей значение `'New'`.
Создайте переменную с именем `thirdWord` и присвойте ей значение `'Year'`.
Создайте переменную с именем `greeting` и присвойте ей результат слияния трех указанных переменных
с `пробелом` между ними и `восклицательным знаком` в конце.

Приведем пример, который принципиально похож на то, что нужно сделать,
но адаптируйте его к требованиям задачи:
```javascript
const firstName = 'Anthony';
const lastName = 'Smith';
const fullName = firstName + ' ' + lastName;
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
const firstWord = 'Happy';
const secondWord = 'New';
const thirdWord = 'Year';
const greeting = firstWord + ' ' + secondWord + ' ' + thirdWord + '!';
```
HINTRUEND
*/

/*
INITIALSOLUTIONSTART

INITIALSOLUTIONEND
*/

// SOLUTIONSTART
const firstWord = 'Happy';
const secondWord = 'New';
const thirdWord = 'Year';
const greeting = firstWord + ' ' + secondWord + ' ' + thirdWord + '!';
// SOLUTIONEND


// OPENTESTSSTART
it('Variable `firstWord` exists and has a value', () => {
  expect(firstWord).not.undefined;
});

it('Variable `firstWord` has type `string`', () => {
  expect(firstWord).a('string');
});

it('Variable `firstWord` has the correct value', () => {
  expect(firstWord).equal('Happy');
});

it('Variable ``secondWord` exists and has a value', () => {
  expect(secondWord).not.undefined;
});

it('Variable`secondWord` has type `string`', () => {
  expect(secondWord).a('string');
});

it('Variable`secondWord` has the correct value', () => {
  expect(secondWord).equal('New');
});

it('Variable `thirdWord` exists and has a value', () => {
  expect(thirdWord).not.undefined;
});

it('Variable `thirdWord` has type `string`', () => {
  expect(thirdWord).a('string');
});

it('Variable `thirdWord` has the correct value', () => {
  expect(thirdWord).equal('Year');
});

it('The `greeting` variable exists and has a value', () => {
  expect(greeting).not.undefined;
});

it('The `greeting` variable is of type `string`', () => {
  expect(greeting).a('string');
});

it('The `greeting` variable has the correct value', () => {
  expect(greeting).equal('Happy New Year!');
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
