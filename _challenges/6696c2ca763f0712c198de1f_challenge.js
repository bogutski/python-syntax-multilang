// NAMEEN:Unary plus - converting a logical value (boolean) into a number
// NAMERU:Унарный плюс - преобразование логического значение (boolean) в число

/*
INSTRUCTIONENSTART
In front of you is a pile of coins. Some of them are American cents, others, similar in appearance, are Russian kopecks.
You need to count the number of cents coins.
When you pick up a coin, you see if it is a cent (true), and if it is, you add 1 to your mind.

Set the variable `coin` and assign it the value `true`.
Define a variable `value` and assign it the value of the variable `coin`, converted to a number using the unary plus operation.

Here is an example that is fundamentally similar to what needs to be done, but adapt it to the requirements of the problem:
```
const s = true;
const x = +s; // 1
```
INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Перед вами горка монет. Одни из них - американские центы, другие, похожие на них внешне, - российские копейки.
Вам надо посчитать количество центовых монет.
Когда вы берете монету, вы смотрите, является ли она центом (true), и если да, прибавляете в уме 1.

Задайте переменную `coin` и присвойте ей значение `true`.
Задайте переменную `value` и присвойте ей значение переменной `coin`, преобразованное в число с помощью операции унарный плюс.

Приведем пример, который принципиально похож на то, что нужно сделать, но адаптируйте его к требованиям задачи:
```javascript
const s = true;
const x = +s; // 1
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
const coin = true;
const value = +coin;
```
HINTRUEND
*/

/*
INITIALSOLUTIONSTART

INITIALSOLUTIONEND
*/

// SOLUTIONSTART
const coin = true;
const value = +coin;
// SOLUTIONEND


// OPENTESTSSTART
it('The `coin` variable contains a value', () => {
  expect(coin).not.undefined;
});

it('the variable type `coin` - has a boolean value', () => {
  expect(coin).a('boolean');
});

it('Variable `coin` has value true', () => {
  expect(coin).equal(true);
});

it('Variable `value` has a value', () => {
  expect(value).not.undefined;
});

it('the variable type `value` is a number', () => {
  expect(value).a('number');
});

it('the variable `value` has the correct value', () => {
  expect(value).equal(1);
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
