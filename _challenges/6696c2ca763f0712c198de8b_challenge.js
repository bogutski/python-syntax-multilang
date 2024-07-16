// NAMEEN:Salary for the first working month
// NAMERU:Зарплата за первый рабочий месяц

/*
INSTRUCTIONENSTART
When you apply for your next job, you are offered $75 an hour. How much will you earn in your first month on the job?

Create a variable `salary` and give it a value of 75.

Create a variable `hours` and give it a value of 8.

Create a variable `days` and give it a value of 21 (number of working days).

Create a variable `monthSalary` in which you calculate the result of the money you earned during the month.

Here is an example that is fundamentally similar to what you need to do, but adapt it to the requirements of the task.

  ```
const lessons = 12;
const months = 3;
const total = lessons * months;
 ```
INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
При устройстве на следующую работу вам предложили 75 долларов в час. Какую сумму вы заработаете за свой первый рабочий месяц?

Создайте переменную `salary` и присвойте ей значение 75.

Создайте переменную `hours` и присвойте ей значение 8.

Создайте переменную `days` и присвойте ей значение 21 (количество рабочих дней).

Создайте переменную `monthSalary`, в которой вычислите результат заработанных вами денег за месяц.

Приведем пример, который принципиально похож на то, что нужно сделать, но адаптируйте его к требованиям задачи.

```javascript
const lessons = 12;
const months = 3;
const total = lessons * months;
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
const salary = 75;
const hours = 8;
const days = 21;
const monthSalary = salary * hours * days;
```
HINTRUEND
*/

/*
INITIALSOLUTIONSTART

INITIALSOLUTIONEND
*/

// SOLUTIONSTART
const salary = 75;
const hours = 8;
const days = 21;
const monthSalary = salary * hours * days;
// SOLUTIONEND


// OPENTESTSSTART
it('Variable `salary` exists and contains a value', () => {
  expect(salary).not.undefined;
});

it('Variable `hours` exists and contains a value', () => {
  expect(hours).not.undefined;
});

it('The `days` variable exists and contains a value', () => {
  expect(days).not.undefined;
});

it('The value of variable `alary` is a number', () => {
  expect(salary).a('number');
});

it('Value of variable `hours` is a number', () => {
  expect(hours).a('number');
});

it('Value of variable `days` is a number', () => {
  expect(days).a('number');
});

it('The result of variable `monthSalary` is a number 12600', () => {
  expect(monthSalary).eq(12600);
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
