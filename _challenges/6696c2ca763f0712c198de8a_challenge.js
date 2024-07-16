// NAMEEN:Salary for the first working day
// NAMERU:Зарплата за первый рабочий день

/*
INSTRUCTIONENSTART
When you get a job, you are offered a wage of `N' dollars per hour.
How much will you earn on your first day of work if you work 8 hours?

Create a variable `hourRate' and assign it the value you would like to earn per hour.

Create a variable `dayHours` and assign it the value of hours
you would like to work per day, but no more than 8.

Create a variable `daySalary` and calculate in it the result of the money you earn per day.

Here is an example that is fundamentally similar to what you need to do,
but adapt it to the requirements of the task

```
const months = 12;
const years = 25;
const myAgeInMonths = months * years;
```
INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
При устройстве на работу вам предложили зарплату `N` долларов в час.
Какую сумму вы заработаете за свой первый рабочий день если проработаете 8 часов?

Создайте переменную `hourRate` и присвойте ей значение, которое хотели бы зарабатывать в час.

Создайте переменную `dayHours` и присвойте ей значение часов,
которое хотели бы работать в день, но не больше 8.

Создайте переменную `daySalary` и рассчитайте в ней результат заработанных вами денег за день.

Приведем пример, который принципиально похож на то что нужно сделать,
но адаптируйте его к требованиям задачи

```javascript
const months = 12;
const years = 25;
const myAgeInMonths = months * years;
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
const hourRate = 70;
const dayHours = 8;
const daySalary = hourRate * dayHours;
```
HINTRUEND
*/

/*
INITIALSOLUTIONSTART

INITIALSOLUTIONEND
*/

// SOLUTIONSTART
const hourRate = 70;
const dayHours = 8;
const daySalary = hourRate * dayHours;
// SOLUTIONEND


// OPENTESTSSTART
it('Variable `hourRate` exists and contains a value', () => {
  expect(hourRate).not.to.be.undefined;
});

it('The value of the `hourRate` variable is a number', () => {
  expect(hourRate).a('number');
});

it('The variable `dayHours` exists and contains a value', () => {
  expect(dayHours).not.to.be.undefined;
});

it('The value of the `dayHours` variable is a number', () => {
  expect(dayHours).a('number');
});

it('The value of variable `dayHours` is less than or equal to 8', () => {
  expect(dayHours).lte(8);
});

it('The result of the variable `daySalary` is equal to the product of hourRate and dayHours', () => {
  expect(daySalary).eq(hourRate * dayHours);
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
