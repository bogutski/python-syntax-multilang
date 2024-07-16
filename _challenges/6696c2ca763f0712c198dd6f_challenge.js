// NAMEEN:Let's take null to the power of 2
// NAMERU:Возводим null в степень 2

/*
INSTRUCTIONENSTART
"Zero, raised to a degree,
"and remains a zero..." (poet Stanislaw Jerzy Letz)

Create a variable named `zero` and set its value to `null`.
Create a variable named `power` and assign to it the value of the variable `zero` to the power of 2.
Create a variable named `type` and assign it the type of the variable `power`.

Here is an example that is fundamentally similar to what needs to be done,
but adapt it to the requirements of the problem:
```
const money = null;
const extraMoney = money ** 2;
const type = typeof extraMoney;
```
INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
"Нуль, в степень возведенный,
Нулем и остается..." ( поэт Станислав Ежи Лец)

Создайте переменную с именем `zero` и присвойте ей значение `null`.
Создайте переменную с именем `power` и присвойте ей значение переменной `zero` в степени 2.
Создайте переменную с именем `type` и присвойте ей тип переменной `power`.

Приведем пример, который принципиально похож на то, что нужно сделать,
но адаптируйте его к требованиям задачи:
```javascript
const money = null;
const extraMoney = money ** 2;
const type = typeof extraMoney;
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
const zero = null;
const power = zero ** 2;
const type = typeof power;
```
HINTRUEND
*/

/*
INITIALSOLUTIONSTART

INITIALSOLUTIONEND
*/

// SOLUTIONSTART
const zero = null;
const power = zero ** 2;
const type = typeof power;
// SOLUTIONEND


// OPENTESTSSTART
it('Variable `zero` exists and has a value', () => {
  expect(zero).not.undefined;
});

it('Variable `zero` has typeof object', () => {
  expect(typeof zero).equal('object');
});

it('Variable `zero` has value null', () => {
  expect(zero).equal(null);
});

it('Variable `power` exists and has a value', () => {
  expect(power).not.undefined;
});

it('Variable `power` has type number', () => {
  expect(power).a('number');
});

it('Variable `power` has the correct value', () => {
  expect(power).equal(0);
});

it('Variable `type` exists and has a value', () => {
  expect(type).not.undefined;
});

it('Variable `type` has type string', () => {
  expect(type).a('string');
});

it('Variable `type` has value `number` ', () => {
  expect(type).equal('number');
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
