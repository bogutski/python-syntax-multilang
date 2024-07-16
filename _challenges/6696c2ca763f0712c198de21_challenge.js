// NAMEEN:Unary plus - converting string to number
// NAMERU:Унарный плюс - преобразование строки в число

/*
INSTRUCTIONENSTART
You saw an advertisement for a product in a store: "Today the price is only $25!". The price of the product was written on the price tag as a line.
But when paying at the cash register for an item, you need to know its numerical value.

Set variable `str` and assign to it the value of string `'25'`.

Define the variable `price` and assign to it the value of the string `str` converted to a number using the unary plus operation.

Here is an example that is fundamentally similar to what needs to be done,
but adapt it to the needs of the task:
```
const s = '10';
const x = +s;
```
INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Вы увидели в магазине рекламу товара: "Сегодня цена всего 25 долларов!". Цена товара была написана на ценнике в виде строки.
Но, расплачиваясь в кассе за товар, надо знать ее численное значение.

Задайте переменную `str` и присвойте ей значение строки `'25'`.

Задайте переменную `price` и присвойте ей значение строки `str` преобразованное в число с помощью операции унарный плюс.

Приведем пример, который принципиально похож на то, что нужно сделать,
но адаптируйте его к требованиям задачи:
```javascript
const s = '10';
const x = +s;
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
const str = '25';
const price = +str;
```
HINTRUEND
*/

/*
INITIALSOLUTIONSTART

INITIALSOLUTIONEND
*/

// SOLUTIONSTART
const str = '25';
const price = +str;
// SOLUTIONEND


// OPENTESTSSTART
it('Variable `str` contains a value', () => {
  expect(str).not.undefined;
});

it('the variable type `str` is a string', () => {
  expect(str).a('string');
});

it('Variable `str` has a value of 25', () => {
  expect(str).equal('25');
});

it('The `price` variable has a value', () => {
  expect(price).not.undefined;
});

it('the variable type `price` is a number', () => {
  expect(price).a('number');
});

it('the variable `price` has the correct value', () => {
  expect(price).equal(25);
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
