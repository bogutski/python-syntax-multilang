// NAMEEN:How many hours, minutes and seconds until Christmas?
// NAMERU:Сколько часов, минут и секунд осталось до Рождества?

/*
INSTRUCTIONENSTART
It is known that there are a certain number of days  before Christmas.

But children are so eager to get their presents that they count the hours, minutes, and sometimes even seconds until the holiday.

Write a sequence of commands to calculate the number of hours, minutes and seconds in a given number of days.

Create a variable `days` and assign to it the value of an arbitrary number from 1 to 364.
Create a variable `hours` and assign it the value of an expression to find the number of hours.
Create a variable `minutes` and assign it the value of an expression to find the number of minutes.
Create a variable `seconds` and give it the value of an expression to find the number of seconds.

Here is an example that is fundamentally similar to what you need to do,
but adapt it to the needs of the task:
```
const weeks = 3;
const days = weeks * 7;
```
INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Известно, что до Рождества осталось некоторое количество дней (суток).

Но детям так не терпится поскорее получить подарки, что они считают часы, минуты, а порой даже секунды до праздника.

Напишите последовательность команд, вычисляющих количество часов, минут и секунд в данном количестве суток.

Создайте переменную `days` и присвойте ей значение произвольного числа от 1 до 364.
Создайте переменную `hours` и присвойте ей значение выражения для нахождения количества часов.
Создайте переменную `minutes` и присвойте ей значение выражения для нахождения количества минут.
Создайте переменную `seconds` и присвойте ей значение выражения для нахождения количества секунд.

Приведем пример, который принципиально похож на то, что нужно сделать,
но адаптируйте его к требованиям задачи:
```javascript
const weeks = 3;
const days = weeks * 7;
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
const days = 30;
const hours = days * 24;
const minutes = hours * 60;
const seconds = minutes * 60;
```
HINTRUEND
*/

/*
INITIALSOLUTIONSTART

INITIALSOLUTIONEND
*/

// SOLUTIONSTART
const days = 30;
const hours = days * 24;
const minutes = hours * 60;
const seconds = minutes * 60;
// SOLUTIONEND


// OPENTESTSSTART
it('The `days` variable exists and has a value', () => {
  expect(days).not.undefined;
});

it('Variable `days` is a number', () => {
  expect(days).a('number');
});

it('Variable `days` is not a NaN', () => {
  expect(isNaN(days)).false;
});

it('Variable `days` belongs to interval 1 to 364', () => {
  expect(days >= 1 && days <= 364).true;
});

it('Переменная `hours` существует и имеет значение', () => {
  expect(hours).not.undefined;
});

it('Variable `hours` is a number', () => {
  expect(hours).a('number');
});

it('Variable `hours` is not a NaN', () => {
  expect(isNaN(hours)).false;
});

it('Variable `hours` is calculated correctly', () => {
  expect(hours).eq(days * 24);
});

it('Variable `minutes` exists and has a value', () => {
  expect(minutes).not.undefined;
});

it('Variable `minutes` is a number', () => {
  expect(minutes).a('number');
});

it('Variable `minutes` is not a NaN', () => {
  expect(isNaN(minutes)).false;
});

it('Variable `minutes` is calculated correctly', () => {
  expect(minutes).eq(hours * 60);
});

it('Variable`seconds` exists and has a value', () => {
  expect(seconds).not.undefined;
});

it('Variable`seconds` is a number', () => {
  expect(seconds).a('number');
});

it('Variable`seconds` is not a NaN', () => {
  expect(isNaN(seconds)).false;
});

it('Variable`seconds` is calculated correctly', () => {
  expect(seconds).eq(minutes * 60);
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
