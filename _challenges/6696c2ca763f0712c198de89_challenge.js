// NAMEEN:Pies for Grandma.
// NAMERU:Пирожки для бабушки

/*
INSTRUCTIONENSTART
The Grey Wolf took away the cakes that Red Riding Hood carried for her grandmother.
He ate 5 cakes a day for 3 days.
How many pies were there originally?

Create a variable `cakesPerDay` and give it the value 5.

Create a variable `days` and give it a value of 3.

Create a variable `originalCakes` and count how many cakes there were originally.

Here is an example that is fundamentally similar to what you need to do.
Adapt it to the requirements of the task.

```
const dumplingsPerDay = 7;
const days = 4;
const originalDumplings = dumplingsPerDay * days;
```
INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Серый Волк отобрал у Красной Шапочки пирожки, которые она несла для бабушки.
Он ел по 5 пирожков в день на протяжении 3-х дней.
Сколько было пирожков изначально?

Создайте переменную `cakesPerDay` и присвойте ей значение 5.

Создайте переменную `days` и присвойте ей значение 3.

Создайте переменную `originalCakes` и посчитайте сколько было пирожков изначально.

Приведем пример, который принципиально похож на то, что нужно сделать.
Адаптируйте его к требованиям задачи.

```javascript
const dumplingsPerDay = 7;
const days = 4;
const originalDumplings = dumplingsPerDay * days;
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
const cakesPerDay = 5;
const days = 3;
const originalCakes = cakesPerDay * days;
```
HINTRUEND
*/

/*
INITIALSOLUTIONSTART

INITIALSOLUTIONEND
*/

// SOLUTIONSTART
const cakesPerDay = 5;
const days = 3;
const originalCakes = cakesPerDay * days;
// SOLUTIONEND


// OPENTESTSSTART
it('Variable `cakesPerDay` exists and contains a value', () => {
  expect(cakesPerDay).not.undefined;
});

it('Variable `cakesPerDay` contains data type number', () => {
  expect(cakesPerDay).a('number');
});

it('The `cakesPerDay` variable takes the value `false`', () => {
  expect(cakesPerDay).eq(5);
});

it('The `days` variable exists and contains a value ', () => {
  expect(days).not.undefined;
});

it('Variable `days` contains data type number', () => {
  expect(days).a('number');
});

it('Variable `days` takes value 3 ', () => {
  expect(days).eq(3);
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
