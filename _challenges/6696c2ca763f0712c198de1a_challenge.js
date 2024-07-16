// NAMEEN:Decrement, or reduction of a number by 1
// NAMERU:Декремент, или уменьшение числа на 1

/*
INSTRUCTIONENSTART
The price of the item was $10, but was reduced by $1. Find the new price of the item.

Set the variable `price` and give it a value of 10.
Then write a command that decreases the value of the `price` variable by 1.

Here is an example that is fundamentally similar to what you need to do,
But adapt it to the requirements of the problem:
```
let number = 8;
number--;
```
INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Цена товара составляла $10, но была снижена на $1. Найдите новую цену товара.

Задайте переменную `price` и присвойте ей значение числа 10.
Затем запишите команду, уменьшающую значение переменной `price` на 1.

Приведем пример, который принципиально похож на то, что нужно сделать,
но адаптируйте его к требованиям задачи:
```javascript
let number = 8;
number--;
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
let price = 10;
price--;
```
HINTRUEND
*/

/*
INITIALSOLUTIONSTART

INITIALSOLUTIONEND
*/

// SOLUTIONSTART
let price = 10;
price--;
// SOLUTIONEND


// OPENTESTSSTART
it('The `price` variable contains a value', () => {
  expect(price).not.undefined;
});

it('the variable type `price` is a number', () => {
  expect(price).a('number');
});

it('the variable `price` is not NaN', () => {
  expect(isNaN(price)).false;
});

it('the variable `price` is reduced by 1', () => {
  expect(price).equal(9);
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
