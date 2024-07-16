// NAMEEN:Cost of balls
// NAMERU:Стоимость мячей

/*
INSTRUCTIONENSTART
Suppose you bought 6 balls at $7/pc in a shop.
You need to get a string of the following form: `The cost of 6 balls is equal to 42 dollars'.
But the number 6 and the expression for the result (42) must be "embedded" in the string using `${...}`.

Create a variable `price`, assign to it the value of an arbitrary number (the cost of one ball).
Create a variable `count` and assign to it the value of an arbitrary number (number of balls).
Create a variable named `message` and assign to it the value of a string using back quotes,
containing the text `The cost of XX balls is equal to YY dollars',
where XX, YY are expressions using ${...}.

Here is an example that is fundamentally similar to what you need to do,
but adapt it to the requirements of the problem:
```
const weight = 5;
const amount = 8;
let result = ``Total weight of ${amount} watermelons is equal to ${weight*amount} pounds``;
// the console will print the following line: "Total weight of 8 watermelons is equal to 40 pounds"
```
INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Предположим, вы купили в магазине 6 мячей по цене $7/шт.
Надо получить строку следующего вида: `The cost of 6 balls is equal to 42 dollars`.
Но число 6 и выражение для получения результата (42) надо "встроить" в строку при помощи `${…}`.

Создайте переменную `price`, присвойте ей значение произвольного числа (стоимость одного мяча).
Создайте переменную `count` и присвойте ей значение произвольного числа (количество мячей).
Создайте переменную с именем `message` и присвойте ей значение строки c использованием обратных кавычек,
содержащую текст `The cost of XX balls is equal to YY dollars`,
где XX, YY - выражения полученные при помощи ${…}.

Приведем пример, который принципиально похож на то, что нужно сделать,
но адаптируйте его к требованиям задачи:
```javascript
const weight = 5;
const amount = 8;
let result = `Total weight of ${amount} watermelons is equal to ${weight*amount} pounds`;
// в консоль будет выведена строка: "Total weight of 8 watermelons is equal to 40 pounds"
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
const price = 7;
const count = 6;
const message = `The cost of ${count} balls is equal to ${price * count} dollars`;
```
HINTRUEND
*/

/*
INITIALSOLUTIONSTART

INITIALSOLUTIONEND
*/

// SOLUTIONSTART
const price = 7;
const count = 6;
const message = `The cost of ${count} balls is equal to ${price * count} dollars`;
// SOLUTIONEND


// OPENTESTSSTART
it('The `price` variable exists and has a value', () => {
  expect(price).not.undefined;
});

it('The `price` variable is a number', () => {
  expect(price).a('number');
});

it('Variable `price` is not a NaN', () => {
  expect(isNaN(price)).false;
});

it('Variable `count` exists and has a value', () => {
  expect(count).not.undefined;
});

it('Variable `count` is a number', () => {
  expect(count).a('number');
});

it('Variable `count` is not a NaN', () => {
  expect(isNaN(count)).false;
});

it('The variable `message` exists and has a value', () => {
  expect(message).not.undefined;
});

it('The `message` variable is a string', () => {
  expect(message).a('string');
});

it('The `message` variable has a valid value', () => {
  expect(message).equal(
    `The cost of ${count} balls is equal to ${price * count} dollars`,
  );
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
