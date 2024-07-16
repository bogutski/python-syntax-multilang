// NAMEEN:Assign undefined value to the variable
// NAMERU:Присвойте переменной значение undefined

/*
INSTRUCTIONENSTART
A variable with a value of `undefined` can be created by assigning a value of `undefined` to it.
Create a variable named `name` and assign a value of `undefined` to it.
Create a variable with the name `typeOfName` and assign to it the value of the variable `name`.

Here is an example, which is fundamentally similar to what you need to do,
but adapt it to the requirements of the task:
```
let salary = undefined;
const typeOfSalary = typeof salary;
```
INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Переменную со значением `undefined` можно создать, присвоив ей значение `undefined`.
Создайте переменную с именем `name` и присвойте ей значение `undefined`.
Создайте переменную с именем `typeOfName` и присвойте ей значение типа переменной `name`.

Приведем пример, который принципиально похож на то, что нужно сделать, но адаптируйте его к требованиям задачи:
```javascript
let salary = undefined;
const typeOfSalary = typeof salary;
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
let name = undefined;
const typeOfName = typeof name;
```
HINTRUEND
*/

/*
INITIALSOLUTIONSTART

INITIALSOLUTIONEND
*/

// SOLUTIONSTART
let name = undefined;
const typeOfName = typeof name;
// SOLUTIONEND


// OPENTESTSSTART
it('Variable `name` exists and is undefined', () => {
  expect(name).to.be.undefined;
});

it('Variable `name` is of type undefined', () => {
  expect(typeof name).eq('undefined');
});

it('The `typeOfName` variable exists and has a value', () => {
  expect(typeOfName).not.undefined;
});

it('Variable `typeOfName` has type string', () => {
  expect(typeOfName).a('string');
});

it('Variable `typeOfName` has value `undefined`', () => {
  expect(typeOfName).equal('undefined');
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
