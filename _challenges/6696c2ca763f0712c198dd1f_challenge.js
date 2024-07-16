// NAMEEN:Create a variable with undefined value
// NAMERU:Создайте переменную со значением undefined

/*
INSTRUCTIONENSTART
A variable with a `undefined` value can be created without assigning any value to it.
Create a variable named `age` without assigning any value to it.
Create a variable named `typeOfAge` and assign to it a value of the variable `age` type.

Here is an example, which is fundamentally similar to what you need to do,
but adapt it to the requirements of the task:
```
let salary;
const typeOfSalary = typeof salary;
```
INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Переменную со значением `undefined` можно создать, не присваивая ей никакого значения.
Создайте переменную с именем `age` без присваивания ей какого-либо значения.
Создайте переменную с именем `typeOfAge` и присвойте ей значение типа переменной `age`.

Приведем пример, который принципиально похож на то, что нужно сделать,
но адаптируйте его к требованиям задачи:
```javascript
let salary;
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
let age;
const typeOfAge = typeof age;
```
HINTRUEND
*/

/*
INITIALSOLUTIONSTART

INITIALSOLUTIONEND
*/

// SOLUTIONSTART
let age;
const typeOfAge = typeof age;
// SOLUTIONEND


// OPENTESTSSTART
it('Variable `age` exists and is undefined', () => {
  expect(age).to.be.undefined;
});

it('The `age` variable is of type undefined', () => {
  expect(typeof age).eq('undefined');
});

it('Variable `typeOfAge` exists and has a value', () => {
  expect(typeOfAge).not.undefined;
});

it('Variable `typeOfAge` has type string', () => {
  expect(typeOfAge).a('string');
});

it('Variable `typeOfAge` has value `undefined`', () => {
  expect(typeOfAge).equal('undefined');
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
