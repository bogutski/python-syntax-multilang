// NAMEEN:Temperature in the other hemisphere
// NAMERU:Температура в другом полушарии

/*
INSTRUCTIONENSTART
If it is winter in the Northern Hemisphere, it is summer in the Southern Hemisphere.
If, say, in Russia, it is -30 degrees below zero, in Australia it can be hot and 30 degrees above zero.

To solve the problem:

Define a variable `temp` and assign a value of an arbitrary number to it.
Define variable `opposite` and assign to it the value of variable `temp` with reversed sign.

Here is an example that is fundamentally similar to what you need to do,
but adapt it to the requirements of the task:
```
const number = 5;
const minus = -number;
```
INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Если в Северном полушарии зима, то в южном - лето.
Если, скажем, в России, мороз -30 градусов, то в Австралии может быть жарко, и температура 30 градусов выше нуля.

Для решения задачи:

Задайте переменную `temp` и присвойте ей значение произвольного числа.
Задайте переменную `opposite` и присвойте ей значение переменной `temp` с обратным знаком.

Приведем пример, который принципиально похож на то, что нужно сделать,
но адаптируйте его к требованиям задачи:
```javascript
const number = 5;
const minus = -number;
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
const temp = 30;
const opposite = -temp;
```
HINTRUEND
*/

/*
INITIALSOLUTIONSTART

INITIALSOLUTIONEND
*/

// SOLUTIONSTART
const temp = 30;
const opposite = -temp;
// SOLUTIONEND


// OPENTESTSSTART
it('Variable temp` exists and has a value', () => {
  expect(temp).not.undefined;
});

it('Variable `temp` is a number', () => {
  expect(temp).a('number');
});

it('Variable `temp` is not NaN', () => {
  expect(isNaN(temp)).false;
});

it('The variable `opposite` exists and has a value', () => {
  expect(opposite).not.undefined;
});

it('Variable `opposite` is a number', () => {
  expect(opposite).a('number');
});

it('Variable `opposite` is not NaN', () => {
  expect(isNaN(opposite)).false;
});

it('Variable `opposite` is calculated correctly', () => {
  expect(opposite).equal(-temp);
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
