// NAMEEN:Date in US format
// NAMERU:Дата в американском формате

/*
INSTRUCTIONENSTART
Create a variable `month` and assign it any number from 1 to 12.

Create a second variable `day` and assign to it any number from 1 to 31.

Create a third variable `year` and assign to it any four-digit number.

Create a fourth variable `date` that combines the first three variables into one string
(make sure that all variables are separated from each other by a "/"). 

An example of a date in US format: `mm/dd/yyyyy` (month/day/yyyy).

Create a fifth variable `dateLength` that shows the length of the variable `date`.

Here is an example that is fundamentally similar to what needs to be done,
but adapt it to the requirements of the task:
```
const hours = 1;
const minutes = 24;
const seconds = 2020;
const combinedString = hours + ':' + minutes + ':' + seconds;
const lengthOfCombinedString = combinedString.length;
```
INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Создайте переменную `month` и присвойте ей любое число от 1 до 12.

Создайте вторую переменную `day` и присвойте ей любое число от 1 до 31.

Создайте третью переменную `year` и присвойте ей любое четырехзначное число.

Создайте четвертую переменную `date`, который объединит первые три переменные в одну строку
(убедитесь, что все переменные отделены друг от друга символом «/»).

Пример даты в американском формате: `mm/dd/yyyy` (месяц/день/год).

Создайте пятую переменную `dateLength`, которая покажет длину переменной `date`.

Приведем пример, который принципиально похож на то что нужно сделать,
но адаптируйте его к требованиям задачи:
```javascript
const hours = 5;
const minutes = 30;
const seconds = 50;
const combinedString = hours + ':' + minutes + ':' + seconds;
const lengthOfCombinedString = combinedString.length;
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
const month = 1;
const day = 24;
const year = 2020;
const date = month + '/' + day + '/' + year;
const dateLength = date.length;
```
HINTRUEND
*/

/*
INITIALSOLUTIONSTART

INITIALSOLUTIONEND
*/

// SOLUTIONSTART
const month = 1;
const day = 24;
const year = 2020;
const date = month + '/' + day + '/' + year;
const dateLength = date.length;
// SOLUTIONEND


// OPENTESTSSTART
it('Variable `month` contains a value', () => {
  expect(month).not.undefined;
});
it('The `month` variable contains a number', () => {
  expect(month).a('number');
});
it('The `month` variable is less than or equal to 12', () => {
  expect(month).lte(12);
});
it('Variable `month` is greater than 0', () => {
  expect(month).gte(1);
});
it('Variable `day` contains a value', () => {
  expect(day).not.undefined;
});
it('Variable `day` contains a number', () => {
  expect(day).a('number');
});
it('Variable `day` is less than or equal to 31', () => {
  expect(day).lte(31);
});
it('Variable `day` is greater than 0', () => {
  expect(day).gte(1);
});
it('Variable `year` contains a value', () => {
  expect(year).not.undefined;
});
it('The `year` variable contains a number', () => {
  expect(year).a('number');
});
it('Variable `year` is less than 10000', () => {
  expect(year).lte(9999);
});
it('Variable `year` is greater than 0', () => {
  expect(year).gte(1);
});
it('The `date` variable contains a value', () => {
  expect(date).not.undefined;
});
it('The `date` variable contains a string', () => {
  expect(date).a('string');
});

it('The `date` variable contains a \'/\'', () => {
  expect(date).to.satisfy(function forwardSlash(date) {
    let result = 0;
    for (let i = 0; i < date.length; i++) {
      if (date[i] === '/') {
        result++;
      }
    }
    return result === 2;
  });
});

it('Переменная `dateLength` содержит значение', () => {
  expect(dateLength).not.undefined;
});
it('The length of the variable `dateLength` is less than or equal to 10', () => {
  expect(dateLength).lte(10);
});
it('Variable `dateLength` is greater than 8', () => {
  expect(dateLength).gte(8);
});
it('The `dateLength` variable contains a number', () => {
  expect(dateLength).a('number');
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
