// NAMEEN:Elvis Presley
// NAMERU:Elvis Presley

/*
INSTRUCTIONENSTART
Create a variable `firstName` and assign it the value `'Elvis'`.

Create a variable `lastName` and set it to `'Presley'`.

Create a variable `name` and give it the result of concatenation of variables `firstName` and `lastName` with a space between them.

Here's an example, which is fundamentally similar to what you need to do.
Adapt it to the requirements of the task.

```
const firstName = 'Barack';
const lastName = 'Obama';
const name = firstName + ' + lastName;
```
INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Создайте переменную `firstName` и присвойте ей значение `'Elvis'`.

Создайте переменную `lastName` и присвойте ей значение `'Presley'`.

Создайте переменную `name` и присвойте ей результат конкатенации переменных `firstName` и `lastName` с пробелом между ними.

Приведем пример, который принципиально похож на то, что нужно сделать.
Адаптируйте его к требованиям задачи.

```javascript
const firstName = 'Barack';
const lastName = 'Obama';
const name = firstName + ' ' + lastName;
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
const firstName = 'Elvis';
const lastName = 'Presley';
const name = firstName + ' ' + lastName;
```
HINTRUEND
*/

/*
INITIALSOLUTIONSTART

INITIALSOLUTIONEND
*/

// SOLUTIONSTART
const firstName = 'Elvis';
const lastName = 'Presley';
const name = firstName + ' ' + lastName;
// SOLUTIONEND


// OPENTESTSSTART
it('The `firstName` variable exists and contains a value', () => {
  expect(firstName).not.undefined;
});

it('Variable `firstName` contains data type string', () => {
  expect(firstName).a('string');
});

it('The `firstName` variable takes the value `Elvis`', () => {
  expect(firstName).eq('Elvis');
});

it('The variable `lastName` exists and contains the value', () => {
  expect(lastName).not.undefined;
});

it('Variable `lastName` contains data type string', () => {
  expect(lastName).a('string');
});

it('The `lastName` variable takes the value `Presley`', () => {
  expect(lastName).eq('Presley');
});

it('The `name` variable exists and contains the value', () => {
  expect(name).not.undefined;
});

it('Variable `name` contains data type string', () => {
  expect(name).a('string');
});

it('The `name` variable takes the value `Elvis Presley`', () => {
  expect(name).eq('Elvis Presley');
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
