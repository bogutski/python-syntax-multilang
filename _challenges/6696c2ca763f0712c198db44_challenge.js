// NAMEEN:Thirteenth row on the plane
// NAMERU:Тринадцатый ряд в самолете

/*
INSTRUCTIONENSTART
The number 13 is considered unlucky in many countries, and the fear of the number 13 is called triskaidekaphobia.
For example, many passenger planes do not have a thirteenth row.

Create a variable named `isRow12` and set it to `true`.

Create a variable named `isRow13` and set it to `false`.

Here is an example that is fundamentally similar to what you need to do,
but adapt it to the needs of the task:
```
const isGold = true;
```
INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
![](https://course-qa-basics.s3.us-west-1.amazonaws.com/section-2-course-1-task-3.png)

Число 13 во многих странах считается несчастливым, а боязнь числа 13 называется трискаидекафобией.
Например, во многих пассажирских самолётах отсутствует тринадцатый ряд.

Создайте переменную с именем `isRow12` и присвойте ей значение `true`.

Создайте переменную с именем `isRow13` и присвойте ей значение `false`.

Приведем пример, который принципиально похож на то, что нужно сделать,
но адаптируйте его к требованиям задачи:
```
const isGold = true;
```
INSTRUCTIONRUEND
*/

/*
HINTENSTART
```javascript
const isRow12 = true;
const isRow13 = false;
```
HINTENEND
*/

/*
HINTRUSTART
```javascript
const isRow12 = true;
const isRow13 = false;
```
HINTRUEND
*/

/*
INITIALSOLUTIONSTART

INITIALSOLUTIONEND
*/

// SOLUTIONSTART
const isRow12 = true;
const isRow13 = false;
// SOLUTIONEND


// OPENTESTSSTART
it('the variable `isRow12` exists and has a value', () => {
  expect(isRow12).not.undefined;
});

it('the variable `isRow12` has a boolean type', () => {
  expect(isRow12).a('boolean');
});

it('the value of variable `isRow12` is true', () => {
  expect(isRow12).true;
});

it('variable `isRow13` exists and has a value', () => {
  expect(isRow13).not.undefined;
});

it('variable `isRow13` is of boolean type', () => {
  expect(isRow13).a('boolean');
});

it('the value of variable `isRow13` is false', () => {
  expect(isRow13).false;
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
