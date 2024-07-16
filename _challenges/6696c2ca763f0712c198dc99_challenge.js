// NAMEEN:"Eat. Sleep. Code."
// NAMERU:"Eat. Sleep. Code."

/*
INSTRUCTIONENSTART
Create a variable `myGoal` and write the following value into it: `'Eat. Sleep. Code.'`

Here is an example that is fundamentally similar to what you need to do:
```
const car = 'tractor';
```
INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Создайте переменную `myGoal` и запишите в нее следующее значение: `'Eat. Sleep. Code.'`

Приведем пример, который принципиально похож на то, что нужно сделать:
```javascript
const car = 'tractor';
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
const myGoal = 'Eat. Sleep. Code.';
```
HINTRUEND
*/

/*
INITIALSOLUTIONSTART

INITIALSOLUTIONEND
*/

// SOLUTIONSTART
const myGoal = 'Eat. Sleep. Code.';
// SOLUTIONEND


// OPENTESTSSTART
it('Variable `myGoal` exists and contains a value', () => {
  expect(myGoal).not.to.be.undefined;
});

it('The value of variable `myGoal` is a string', () => {
  expect(myGoal).a('string');
});

it('The variable `myGoal` contains the value of `Eat. Sleep. Code.`', () => {
  expect(myGoal).eq('Eat. Sleep. Code.');
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
