// NAMEEN:Is null equal to himself?
// NAMERU:Равен ли null самому себе?

/*
INSTRUCTIONENSTART
Create a variable named `strictEqual` and give it the result of a strict comparison (===) between null and null.
Create a variable named `equal` and give it the result of a non-strict comparison (==) between null and null.
(Check the result in the console).

Here is an example that is fundamentally similar to what you need to do,
but adapt it to the requirements of the task:
```
const comparison = null === null ;
```
INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Создайте переменную с именем `strictEqual` и присвойте ей результат строгого сравнения (===) значения `null` и `null`.
Создайте переменную с именем `equal` и присвойте ей результат нестрогого сравнения (==) переменной `null` и `null`.
(Проверьте результат в консоли).

Приведем пример, который принципиально похож на то, что нужно сделать,
но адаптируйте его к требованиям задачи:
```javascript
const comparison = null === null ;
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
const strictEqual = null === null;
const equal = null == null;
```
HINTRUEND
*/

/*
INITIALSOLUTIONSTART

INITIALSOLUTIONEND
*/

// SOLUTIONSTART
const strictEqual = null === null;
const equal = null == null;
// SOLUTIONEND


// OPENTESTSSTART
it('The `strictEqual` variable exists and has a value', () => {
  expect(strictEqual).not.undefined;
});

it('The `strictEqual` variable is of type boolean', () => {
  expect(strictEqual).a('boolean');
});

it('The `strictEqual` variable is true ', () => {
  expect(strictEqual).true;
});

it('The `equal` variable exists and has a value ', () => {
  expect(equal).not.undefined;
});

it('The `equal` variable is of type boolean', () => {
  expect(equal).a('boolean');
});

it('The `equal` variable is true ', () => {
  expect(equal).true;
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
