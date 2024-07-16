// NAMEEN:What is the sum of undefined and the number?
// NAMERU:Чему равна сумма undefined и числа?

/*
INSTRUCTIONENSTART
Create a variable named `unknown` and assign to it the value `undefined`.
Create a variable named `sum` and assign to it the value of the sum of the variable `unknown` and an arbitrary number.
Create a variable named `typeOfSum` and assign to it the value of type of variable `um`.
Check in jsbin.com what the result of adding a number and undefined is equal to.
Create a variable named `result` and assign it a string that contains the result of adding a number and undefined.

Here is an example that is fundamentally similar to what needs to be done,
but adapt it to the requirements of the problem:
```
let salary;
let newSalary = salary + 100;
let type = typeof newSalary;
const result = 'NaN';
```
INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Создайте переменную с именем `unknown` и присвойте ей значение `undefined`.
Создайте переменную с именем `sum` и присвойте ей значение суммы переменной `unknown` и произвольного числа.
Создайте переменную с именем `typeOfSum` и присвойте ей значение типа переменной `sum`.
Проверьте в jsbin.com, чему равен результат сложения числа и undefined.
Создайте переменную с именем `result` и присвойте ей строку, содержащую результат сложения числа и undefined.

Приведем пример, который принципиально похож на то, что нужно сделать,
но адаптируйте его к требованиям задачи:
```javascript
let salary;
let newSalary = salary + 100;
let type = typeof newSalary;
const result = 'NaN';
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
let unknown;
let sum = unknown + 1;
const typeOfSum = typeof sum;
const result = 'NaN';
```
HINTRUEND
*/

/*
INITIALSOLUTIONSTART

INITIALSOLUTIONEND
*/

// SOLUTIONSTART
let unknown;
let sum = unknown + 1;
const typeOfSum = typeof sum;
const result = 'NaN';
// SOLUTIONEND


// OPENTESTSSTART
it('The `unknown` variable exists and is undefined', () => {
  !expect(unknown).to.be.undefined;
});

it('The `unknown` variable is of type undefined', () => {
  expect(typeof unknown).eq('undefined');
});

it('Variable`sum` exists and has a value', () => {
  expect(sum).not.undefined;
});

it('Variable`sum` equals NaN', () => {
  expect(sum).to.be.NaN;
});

it('Variable `typeOfSum` exists and has a value', () => {
  expect(typeOfSum).not.undefined;
});

it('Variable `typeOfSum` has type `string`', () => {
  expect(typeOfSum).a('string');
});

it('Variable `typeOfSum` is equal to `number`', () => {
  expect(typeOfSum).equal('number');
});

it('Variable `result` exists and has a value', () => {
  expect(result).not.undefined;
});

it('Variable `result` has type `string`', () => {
  expect(result).a('string');
});

it('Variable `result` is equal to `NaN', () => {
  expect(result).equal('NaN');
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
