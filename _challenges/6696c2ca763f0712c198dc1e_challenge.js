// NAMEEN:Changing the type of a variable
// NAMERU:Изменение типа переменной

/*
INSTRUCTIONENSTART
Create a variable named `chameleon` using the `let` keyword and assign it the number value `123`.

Create a variable named `chameleonCopy` and assign the value of the variable `chameleon`.

Create a variable named `typeOfChameleon` and assign the type of the variable `chameleon`.

Set the variable `chameleon` to a new value of the string `"i am chameleon"`.

Create a variable `typeOfChameleonAfterChange` and assign it the type value of the variable `chameleon`.

Here is an example, which is fundamentally similar to what you need to do,
but adapt it to the requirements of the task:
```
let zero = 0;
const typeOfZero = typeof(zero);                      // "number"
zero = "zero";
const typeOfZeroAfterChange = typeof(zero);          // "string"
```
INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Создайте переменную `chameleon` с использованием ключевого слова `let` и присвойте ей числовое значение `123`.

Создайте переменную с именем `chameleonCopy` и присвойте ей значение переменной `chameleon`.

Создайте переменную с именем `typeOfChameleon` и присвойте ей значение типа переменной `chameleon`.

Запишите в переменную `chameleon` новое значение строку `"i am chameleon"`.

Создайте переменную `typeOfChameleonAfterChange` и присвойте ей значение типа переменной `chameleon`.

Приведем пример, который принципиально похож на то, что нужно сделать,
но адаптируйте его к требованиям задачи:
```javascript
let zero = 0;
const typeOfZero = typeof(zero);                      // "number"
zero = "zero";
const typeOfZeroAfterChange = typeof(zero);           // "string"
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
let chameleon = 123;
const chameleonCopy = chameleon;
const typeOfChameleon = typeof (chameleon);
chameleon = "i am chameleon";
const typeOfChameleonAfterChange = typeof (chameleon);
```
HINTRUEND
*/

/*
INITIALSOLUTIONSTART

INITIALSOLUTIONEND
*/

// SOLUTIONSTART
let chameleon = 123;
const chameleonCopy = chameleon;
const typeOfChameleon = typeof (chameleon);
chameleon = "i am chameleon";
const typeOfChameleonAfterChange = typeof (chameleon);
// SOLUTIONEND


// OPENTESTSSTART
it('the `chameleonCopy` variable exists and has a value', () => {
  expect(chameleonCopy).not.undefined;
});

it('the variable `chameleonCopy` is of type number', () => {
  expect(chameleonCopy).a('number');
});

it('the variable `chameleonCopy` is equal to 123', () => {
  expect(chameleonCopy).equal(123);
});

it('the variable `typeOfChameleon` exists and has a value', () => {
  expect(typeOfChameleon).not.undefined;
});

it('the variable `typeOfChameleon` is of type string', () => {
  expect(typeOfChameleon).a('string');
});

it('the `typeOfChameleon` variable is equal to "number"', () => {
  expect(typeOfChameleon).equal('number');
});

it('the `chameleon` variable exists and has a value', () => {
  expect(chameleon).not.undefined;
});

it('the variable `chameleon` is of type string', () => {
  expect(chameleon).a('string');
});

it('the variable `chameleon` is equal to "i am chameleon"', () => {
  expect(chameleon).equal("i am chameleon");
});

it('the variable `typeOfChameleonAfterChange` exists and has a value', () => {
  expect(typeOfChameleonAfterChange).not.undefined;
});

it('the variable `typeOfChameleonAfterChange` is of type string', () => {
  expect(typeOfChameleonAfterChange).a('string');
});

it('the `typeOfChameleonAfterChange` variable is equal to "string"', () => {
  expect(typeOfChameleonAfterChange).equal('string');
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
