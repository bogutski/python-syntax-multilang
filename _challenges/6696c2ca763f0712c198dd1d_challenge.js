// NAMEEN:Compare undefined and null
// NAMERU:Сравните undefined и null

/*
INSTRUCTIONENSTART
Normally undefined is used to check if a variable has been assigned.
The special value null means "nothing", "empty" or "value intentionally missing".

Create a variable named `home` and assign it the value `undefined`.
Create a variable named `money` and give it the value `null`.
Create a variable named `isNullEqualsUndefined` and assign to it the result of strict equality of the variables `home` and `money`.

Here is an example that is fundamentally similar to what you need to do,
but adapt it to the requirements of the task:
```
let salary = undefined;
let job = null;
let comparison = salary === job;
```
INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Обычно `undefined` используется для проверок, была ли переменная назначена.
Специальное значение `null` означает «ничего», «пусто» или «значение намеренно отсутствует».

Создайте переменную с именем `home` и присвойте ей значение `undefined`.
Создайте переменную с именем `money` и присвойте ей значение `null`.
Создайте переменную с именем `isNullEqualsUndefined` и присвойте ей результат строгого равенства переменных `home` и `money`.

Приведем пример, который принципиально похож на то, что нужно сделать,
но адаптируйте его к требованиям задачи:
```javascript
let salary = undefined;
let job = null;
let comparison = salary === job;
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
let home = undefined;
let money = null;
const isNullEqualsUndefined = home === money;
```
HINTRUEND
*/

/*
INITIALSOLUTIONSTART

INITIALSOLUTIONEND
*/

// SOLUTIONSTART
let home = undefined;
let money = null;
const isNullEqualsUndefined = home === money;
// SOLUTIONEND


// OPENTESTSSTART
it('The `home` variable exists and is undefined', () => {
  expect(home).to.be.undefined;
});

it('The `home` variable is of type undefined', () => {
  expect(typeof home).eq('undefined');
});

it('The `money` variable exists and has a value', () => {
  expect(money).not.undefined;
});

it('Variable `money` has type of object', () => {
  expect(typeof money).equal('object');
});

it('Variable `money` has value null', () => {
  expect(money).equal(null);
});

it('The `isNullEqualsUndefined` variable exists and has a value', () => {
  expect(isNullEqualsUndefined).not.undefined;
});

it('The `isNullEqualsUndefined` variable has a value of false', () => {
  expect(isNullEqualsUndefined).false;
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
