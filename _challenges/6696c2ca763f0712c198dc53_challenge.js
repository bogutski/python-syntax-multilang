// NAMEEN:Salary doubled
// NAMERU:Зарплата удвоена

/*
INSTRUCTIONENSTART
Maria received a salary of $27/hour. But when she moved to a new job, she was paid twice as much. Find Maria's new salary.

Write commands that double the value of the variable.

Create a variable `num` and assign it any number from 0 to 100.

Create a second variable `numMultTo2` that uses
the value of the variable `num` multiplied by 2.


Here is an example that is fundamentally similar to what you need to do,
but adapt it to the requirements of the problem:
```
const before = 4;
const after = before * 5;
```
INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Мария получала зарплату $27/час. Но когда она перешла на новую работу, она стала получать в два раза больше. Найдите новую зарплату Марии.

Напишите команды, увеличивающие значение переменной в два раза.

Создайте переменную `num` и присвойте ей любое число от 0 до 100.

Создайте вторую переменную `numMultTo2`, которая будет использовать
значение переменной `num`, умноженное на 2.


Приведем пример, который принципиально похож на то, что нужно сделать,
но адаптируйте его к требованиям задачи:
```javascript
const before = 4;
const after = before * 5;
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
const num = 27;
const numMultTo2 = num * 2;
```
HINTRUEND
*/

/*
INITIALSOLUTIONSTART

INITIALSOLUTIONEND
*/

// SOLUTIONSTART
const num = 27;
const numMultTo2 = num * 2;
// SOLUTIONEND


// OPENTESTSSTART
it('should variable `num` be a number', () => {
  expect(num).a('number');
});

it('should variable `num` have a value', () => {
  expect(num).not.undefined;
});

it('should variable `num` be in range from 0 to 100', () => {
  expect(num >= 0 && num <= 100).to.be.true;
});

it('should variable `numMultTo2` to be a number', () => {
  expect(numMultTo2).a('number');
});

it('should variable `numMultTo2` has a value', () => {
  expect(numMultTo2).not.undefined;
});

it('should variable `numMultTo2` is greater than `num` in 2 times', () => {
  expect(num * 2).equal(numMultTo2);
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
