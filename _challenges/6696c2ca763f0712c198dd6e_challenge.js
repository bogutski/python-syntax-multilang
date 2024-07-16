// NAMEEN:Compare undefined and empty string
// NAMERU:Сравните undefined и пустую строку

/*
INSTRUCTIONENSTART
The special value `undefined` means that "no value has been assigned".

Create a variable named `name` without assigning any value to it.
Create a variable named `login` and assign an empty string value to it.

Create a variable named `areTheSame` and assign to it the result of a comparison of variables `name` and `login`.

Here's an example that is fundamentally similar to what you need to do,
But adapt it to the requirements of the task:
```
let salary;
let job = '';
const isEqual = salary === job;
```
INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Специальное значение `undefined` означает, что «значение не было присвоено».

Создайте переменную с именем `name` без присваивания ей какого-либо значения.
Создайте переменную с именем `login` и присвойте ей значение пустой строки.

Создайте переменную с именем `areTheSame` и присвойте ей результат сравнения переменных `name` и `login`.

Приведем пример, который принципиально похож на то, что нужно сделать,
но адаптируйте его к требованиям задачи:
```javascript
let salary;
let job = '';
const isEqual = salary === job;
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
let name;
let login = '';
const areTheSame = name === login;
```
HINTRUEND
*/

/*
INITIALSOLUTIONSTART

INITIALSOLUTIONEND
*/

// SOLUTIONSTART
let name;
let login = '';
const areTheSame = name === login;
// SOLUTIONEND


// OPENTESTSSTART
it('Variable `name` exists and is undefined', () => {
  expect(name).to.be.undefined;
});

it('Variable `name` has type undefined', () => {
  expect(typeof name).eq('undefined');
});

it('The `login` variable exists and has a value', () => {
  expect(login).not.undefined;
});

it('The `login` variable is of type string', () => {
  expect(login).a('string');
});

it('Variable `login` has value ``', () => {
  expect(login).equal('');
});

it('The variable `areTheSame` exists and has a value', () => {
  expect(areTheSame).not.undefined;
});

it('The value of variable `areTheSame` is boolean', () => {
  expect(areTheSame).a('boolean');
});

it('The value of the variable `areTheSame` is true', () => {
  expect(areTheSame).false;
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
