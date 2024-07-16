// NAMEEN:Unix time
// NAMERU:Unix time

/*
INSTRUCTIONENSTART
Since January 1, 1970 there is a countdown of time in Unix systems.

Create a variable `unixTime` and assign a value to the number 1970.

Here is an example that is fundamentally similar to what you need to do,
but adapt it to the needs of the task:
```
const age = 38;
```
INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
![](https://course-qa-basics.s3.us-west-1.amazonaws.com/section-2-course-3-task-4.png)

С 1 января 1970 года идет отсчет времени в Unix системах.

Создайте переменную `unixTime` и присвойте значение числа 1970.

Приведем пример, который принципиально похож на то что нужно сделать,
но адаптируйте его к требованиям задачи:
```javascript
const age = 38;
```
INSTRUCTIONRUEND
*/

/*
HINTENSTART
```javascript
const unixTime = 1970;
```
HINTENEND
*/

/*
HINTRUSTART
```javascript
const unixTime = 1970;
```
HINTRUEND
*/

/*
INITIALSOLUTIONSTART

INITIALSOLUTIONEND
*/

// SOLUTIONSTART
const unixTime = 1970;
// SOLUTIONEND


// OPENTESTSSTART
it('the `unixTime` variable exists and has a value', () => {
  expect(unixTime).not.undefined;
});

it('the `unixTime` variable is of numeric type', () => {
  expect(unixTime).a('number');
});

it('the value of the `unixTime` variable is 1970', () => {
  expect(unixTime).equal(1970);
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
