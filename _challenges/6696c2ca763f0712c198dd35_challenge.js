// NAMEEN:Compare null to zero
// NAMERU:Сравните null с нулем

/*
INSTRUCTIONENSTART
Create a variable named `empty` and set it to `null`.
Create a variable named `strictEqualToZero` and give it the result of a strict comparison (===) between `empty` and 0.
Create a variable named `equalToZero` and assign to it the result of a non-strict comparison (==) of the `empty` variable and 0.
(Check the result in the console).

Here is an example that is fundamentally similar to what needs to be done,
but adapt it to the requirements of the task:
```
const money = null;
const comparison = money === 0;
```
INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Создайте переменную с именем `empty` и присвойте ей значение `null`.
Создайте переменную с именем `strictEqualToZero` и присвойте ей результат строгого сравнения (===) переменной `empty` и 0.
Создайте переменную с именем `equalToZero` и присвойте ей результат нестрогого сравнения (==) переменной `empty` и 0.
(Проверьте результат в консоли).

Приведем пример, который принципиально похож на то, что нужно сделать,
но адаптируйте его к требованиям задачи:
```javascript
const money = null;
const comparison = money === 0;
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
const strictEqualToZero = empty === 0;
const equalToZero = empty == 0;
```
HINTRUEND
*/

/*
INITIALSOLUTIONSTART

INITIALSOLUTIONEND
*/

// SOLUTIONSTART
const empty = null;
const strictEqualToZero = empty === 0;
const equalToZero = empty == 0;
// SOLUTIONEND


// OPENTESTSSTART
it('Variable `empty` exists and has a value', () => {
  expect(empty).not.undefined;
});

it('The `empty` variable is of type object', () => {
  expect(typeof empty).equal('object');
});

it('Variable `empty` has value null', () => {
  expect(empty).to.be.null;
});

it('The variable `strictEqualToZero` exists and has a value', () => {
  expect(strictEqualToZero).not.undefined;
});

it('The `strictEqualToZero` variable is of type boolean', () => {
  expect(strictEqualToZero).a('boolean');
});

it('The `strictEqualToZero` variable is false ', () => {
  expect(strictEqualToZero).false;
});

it('The `equalToZero` variable exists and has a value ', () => {
  expect(equalToZero).not.undefined;
});

it('Variable `equalToZero` is of type boolean', () => {
  expect(equalToZero).a('boolean');
});

it('Variable `equalToZero` is false ', () => {
  expect(equalToZero).false;
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
