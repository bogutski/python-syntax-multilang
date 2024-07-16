// NAMEEN:Number of squats
// NAMERU:Количество приседаний

/*
INSTRUCTIONENSTART
Every day Bob does exactly 50 squats in the morning, and he never changes this number.
How many squats will Bob do in `days`?

Create a constant named `squats` (number of squats per day) and give it a value of 50.

Create a variable named `days` (number of days) and give it an arbitrary number from 1 to 365.

Create a variable named `numberOfSquats` (total number of squats) and give it a value equal to the product of `squats` and `days` variables.

Here is an example, which is fundamentally similar to what you need to do,
but adapt it to the requirements of the problem:
```
const pencil = 10;
let boxes = 140;
let amount = pencil * boxes;
```
INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
![](https://course-qa-basics.s3.us-west-1.amazonaws.com/section-2-course-2-task-1.png)

Каждый день Боб утром делает ровно 50 приседаний, и это количество он никогда не изменяет.
Сколько приседаний сделает Боб за `days` дней?

Создайте константу c именем `squats` (количество приседаний в день) и присвойте ей значение 50.

Создайте переменную с именем `days` (количество дней) и присвойте ей произвольное число от 1 до 365.

Создайте переменную `numberOfSquats` (общее количество приседаний) и присвойте ей в качестве значения произведение переменных `squats` и  `days`.

Приведем пример, который принципиально похож на то, что нужно сделать, но адаптируйте его к требованиям задачи:
```javascript
const pencil = 10;
let boxes = 140;
let amount = pencil * boxes;
```
INSTRUCTIONRUEND
*/

/*
HINTENSTART
```javascript
const squats = 50;
let days = 15;
let numberOfSquats = squats * days;
```
HINTENEND
*/

/*
HINTRUSTART
```javascript
const squats = 50;
let days = 15;
let numberOfSquats = squats * days;
```
HINTRUEND
*/

/*
INITIALSOLUTIONSTART

INITIALSOLUTIONEND
*/

// SOLUTIONSTART
const squats = 50;
let days = 15;
let numberOfSquats = squats * days;
// SOLUTIONEND


// OPENTESTSSTART
it('the `squats` variable exists and has a value', () => {
  expect(squats).not.undefined;
});

it('the variable`squats` is a number', () => {
  expect(squats).a('number');
});

it('the value of variable`squats` is 50', () => {
  expect(squats).equal(50);
});

it('the variable `days` exists and has a value', () => {
  expect(days).not.undefined;
});

it('the variable `days` is a number', () => {
  expect(days).a('number');
});

it('the value of variable `days` is in the range of 1 to 365', () => {
  expect(days >= 1 && days <= 365).true;
});

it('переменная `numberOfSquats` существует и имеет значение', () => {
  expect(numberOfSquats).not.undefined;
});

it('the variable `numberOfSquats` is a number', () => {
  expect(numberOfSquats).a('number');
});

it('the value of the variable `numberOfSquats` is a number', () => {
  expect(numberOfSquats).equal(squats * days);
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
