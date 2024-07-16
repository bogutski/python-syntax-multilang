// NAMEEN:More than the previous one by a factor of 7
// NAMERU:Больше чем предыдущая в 7 раз

/*
INSTRUCTIONENSTART
Create a variable `level1` and assign it any number from 1 to 10.

Create a second variable `levelUp` that will be 7 times larger than `level1`.

Here is an example that is fundamentally similar to what you need to do, but adapt it to the requirements of the task:

```
const before = 2;
const after = before * 4;
```
INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Создайте переменную `level1` и присвойте ей любое число от 1 до 10.

Создайте вторую переменную `levelUp`, которая будет в 7 раз больше, чем `level1`.

Приведем пример, который принципиально похож на то, что нужно сделать, но адаптируйте его к требованиям задачи:

```javascript
const before = 2;
const after = before * 4;
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
const level1 = 8;
const levelUp = level1 * 7;
```
HINTRUEND
*/

/*
INITIALSOLUTIONSTART

INITIALSOLUTIONEND
*/

// SOLUTIONSTART
const level1 = 8;
const levelUp = level1 * 7;
// SOLUTIONEND


// OPENTESTSSTART
it('Variable `level1` contains a value', () => {
  expect(level1).not.undefined;
});

it('Variable `level1` contains a number', () => {
  expect(level1).a('number');
});

it('Variable `level1` is greater than 0', () => {
  expect(level1).gte(0);
});

it('Variable `level1` is less than 11', () => {
  expect(level1).lte(11);
});

it('Variable `levelUp` contains a value', () => {
  expect(levelUp).not.undefined;
});

it('The `levelUp` variable contains a number', () => {
  expect(levelUp).a('number');
});

it('Variable `levelUp` is greater than `level1` by a factor of 7', () => {
  expect(level1 * 7).eq(levelUp);
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
