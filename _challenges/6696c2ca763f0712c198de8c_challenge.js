// NAMEEN:Hungry guests on the doorstep. Sharing pies fairly
// NAMERU:Голодные гости на пороге. Делим пирожки справедливо

/*
INSTRUCTIONENSTART
The hostess has baked cakes and guests have come. How many cakes will each guest get?

Create a variable `pies` and set its value to 28.

Create a variable `guests` and give it a value of 7 (the number of guests).

Create a variable `result` and calculate in it how many cakes each guest gets.

Here is an example, which is fundamentally similar to what you need to do,
but adapt it to the requirements of the task:

```
const months = 12;
const seasons = 4;
const oneSeason = months / seasons;
```
INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Хозяйка испекла пирожки, а тут гости пришли. Сколько пирожков достанется каждому гостю?

Создайте переменную `pies` и присвойте ей значение 28.

Создайте переменную `guests` и присвойте ей значение 7 (количество гостей).

Создайте переменную `result` и рассчитайте в ней, сколько пирожков достанется каждому гостю.

Приведем пример, который принципиально похож на то, что нужно сделать,
но адаптируйте его к требованиям задачи:

```javascript
const months = 12;
const seasons = 4;
const oneSeason = months / seasons;
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
const pies = 28;
const guests = 7;
const result = pies / guests;
```
HINTRUEND
*/

/*
INITIALSOLUTIONSTART

INITIALSOLUTIONEND
*/

// SOLUTIONSTART
const pies = 28;
const guests = 7;
const result = pies / guests;
// SOLUTIONEND


// OPENTESTSSTART
it('Variable `pies` exists and contains value ', () => {
  expect(pies).not.to.be.undefined;
});

it('The value of variable `pies` is a number', () => {
  expect(pies).a('number');
});

it('The value of the variable `pies` is 28', () => {
  expect(pies).eq(28);
});

it('The variable `guests` exists and contains a value', () => {
  expect(guests).not.to.be.undefined;
});

it('The value of the `guests` variable is a number', () => {
  expect(guests).a('number');
});

it('The result `result` is a number 4', () => {
  expect(result).eq(4);
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
