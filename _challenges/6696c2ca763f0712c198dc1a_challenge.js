// NAMEEN:Variable with a numeric value
// NAMERU:Переменная с числовым значением

/*
INSTRUCTIONENSTART
Create a variable `age` and assign to it the value of an arbitrary number from 0 to 120.

Create a variable `typeOfAge` and assign to it the value of variable `age` type.

Here is an example, which is fundamentally similar to what you need to do,
but adapt it to the requirements of the task:
```
const phoneNumber = 911;
const typeOfPhoneNumber = typeof(phoneNumber);
```
INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Создайте переменную `age` и присвойте ей значение произвольного числа от 0 до 120.

Создайте переменную `typeOfAge` и присвойте ей значение типа переменной `age`.

Приведем пример, который принципиально похож на то, что нужно сделать,
но адаптируйте его к требованиям задачи:
```javascript
const phoneNumber = 911;
const typeOfPhoneNumber = typeof (phoneNumber);
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
const age = 35;
const typeOfAge = typeof (age);
```
HINTRUEND
*/

/*
INITIALSOLUTIONSTART

INITIALSOLUTIONEND
*/

// SOLUTIONSTART
const age = 35;
const typeOfAge = typeof (age);
// SOLUTIONEND


// OPENTESTSSTART
it('the variable `age` exists and has a value', () => {
  expect(age).not.undefined;
});

it('the variable `age` is of type number', () => {
  expect(age).a('number');
});

it('the variable `age` is between 0 and 120', () => {
  expect(age >= 0 && age <= 120).true;
});

it('переменная `typeOfAge` существует и имеет значение', () => {
  expect(typeOfAge).not.undefined;
});

it('the variable `typeOfAge` is of type string', () => {
  expect(typeOfAge).a('string');
});

it('the variable `typeOfAge` is equal to `number`', () => {
  expect(typeOfAge).equal('number');
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
