// NAMEEN:What do you get if you add a number to null?
// NAMERU:Что получится, если к null прибавить число?

/*
INSTRUCTIONENSTART
"Null is an emptiness. And if you add something to the emptiness, you get what you added..." (from "The Tale of Numbers")

Create a variable named `empty` and assign it the value `null`.
Create a variable named `number` and assign to it the value of an arbitrary number.
Create a variable named `sum` and assign to it the sum of the variables `empty` and `number`.
Create a variable named `typeOfSum` and assign to it the value of variable`sum` type.

Here is an example, which is fundamentally similar to what you need to do,
but adapt it to the requirements of the task:
```
const money = null;
const extra = 1000;
const result = money + extra;
const type = typeof result;
```
INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
"Null - это пустота. А если что-то прибавить к пустоте, получишь то, что прибавлял..." (из "Сказки о цифрах")

Создайте переменную с именем `empty` и присвойте ей значение `null`.
Создайте переменную с именем `number` и присвойте ей значение произвольного числа.
Создайте переменную с именем `sum` и присвойте ей сумму переменных `empty` и `number`.
Создайте переменную с именем `typeOfSum` и присвойте ей значение типа переменной `sum`.

Приведем пример, который принципиально похож на то, что нужно сделать,
но адаптируйте его к требованиям задачи:
```javascript
const money = null;
const extra = 1000;
const result = money + extra;
const type = typeof result;
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
const empty = null;
const number = 1;
const sum = empty + number;
const typeOfSum = typeof sum;
```
HINTRUEND
*/

/*
INITIALSOLUTIONSTART

INITIALSOLUTIONEND
*/

// SOLUTIONSTART
const empty = null;
const number = 1;
const sum = empty + number;
const typeOfSum = typeof sum;
// SOLUTIONEND


// OPENTESTSSTART
it('Variable `empty` exists and has a value', () => {
  expect(empty).not.undefined;
});

it('The `empty` variable is of type object', () => {
  expect(typeof empty).equal('object');
});

it('Variable `empty` has value null', () => {
  expect(empty).equal(null);
});

it('Variable `number` exists and has a value', () => {
  expect(number).not.undefined;
});

it('Variable `number` has type number', () => {
  expect(number).a('number');
});

it('Variable `number` is not NaN', () => {
  expect(isNaN(number)).false;
});

it('Variable`sum` exists and has a value', () => {
  expect(sum).not.undefined;
});

it('Variable`sum` has type number', () => {
  expect(sum).a('number');
});

it('Variable`sum` is not equal to NaN', () => {
  expect(isNaN(sum)).false;
});

it('Variable`sum` is equal to sum', () => {
  expect(sum).equal(number);
});

it('Variable `typeOfSum` exists and has a value', () => {
  expect(typeOfSum).not.undefined;
});

it('Variable `typeOfSum` has type string', () => {
  expect(typeOfSum).a('string');
});

it('Variable `typeOfSum` has value `number` ', () => {
  expect(typeOfSum).equal('number');
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
