// NAMEEN:Degree conversion.  How many seconds are in an hour?
// NAMERU:Возведение в степень.  Сколько секунд в часе?

/*
INSTRUCTIONENSTART
There are 60 seconds in one minute. There are 60 minutes in one hour. Find the number of seconds in 1 hour using the power operator.

Create a variable `seconds` and assign a value of 60 to it.

Create a variable `power` and give it a value of 2.

Create a variable `result` and give it a value of `seconds` to the extent of `power`.

Here is an example that is fundamentally similar to what needs to be done, but adapt it to the requirements of the task:

 ```
const number = 5;
const cube = 3;
const result = n ** cube;
 ```
INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
В одной минуте 60 секунд. В одном часе 60 минут. Найдите количество секунд в 1 часе с использованием оператора возведения в степень.

Создайте переменную `seconds` и присвойте ей значение 60.

Создайте переменную `power` и присвойте ей значение 2.

Создайте переменную `result` и присвойте ей значение `seconds` в степени `power`.

Приведем пример, который принципиально похож на то, что нужно сделать, но адаптируйте его к требованиям задачи:

```javascript
const number = 5;
const cube = 3;
const result = n ** cube;
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
const seconds = 60;
const power = 2;
const result = seconds ** power;
```
HINTRUEND
*/

/*
INITIALSOLUTIONSTART

INITIALSOLUTIONEND
*/

// SOLUTIONSTART
const seconds = 60;
const power = 2;
const result = seconds ** power;
// SOLUTIONEND


// OPENTESTSSTART
it('Variable`seconds` contains a value', () => {
  expect(seconds).not.undefined;
});

it('Variable`seconds` contains a number', () => {
  expect(seconds).a('number');
});

it('Variable`seconds` is 60', () => {
  expect(seconds).eq(60);
});

it('The `power` variable contains a value', () => {
  expect(power).not.undefined;
});

it('Variable `power` contains a number', () => {
  expect(power).a('number');
});

it('Variable `power` is 2', () => {
  expect(power).eq(2);
});

it('Variable `result` contains a value', () => {
  expect(result).not.undefined;
});

it('Variable `result` contains a number', () => {
  expect(result).a('number');
});

it('Variable `result` is 3600', () => {
  expect(result).eq(3600);
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
