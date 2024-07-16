// NAMEEN:Increment, or increasing a number by 1
// NAMERU:Инкремент, или увеличение числа на 1

/*
INSTRUCTIONENSTART
The price of the item is $20, but along with the cost of shipping, the price increases by $1.

Set the variable `price` and give it a value of 20.
Then write a command that increments the value of the `price` variable by 1.

Here's an example, which is fundamentally similar to what you need to do,
But adapt it to the requirements of the problem:
```
let number = 8;
number++;
```
INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Цена товара составляет $20, но вместе со стоимостью доставки цена увеличивается на $1.

Задайте переменную `price` и присвойте ей значение числа 20.
Затем запишите команду, увеличивающую значение переменной `price` на 1.

Приведем пример, который принципиально похож на то, что нужно сделать,
но адаптируйте его к требованиям задачи:
```javascript
let number = 8;
number++;
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
let price = 20;
price++;
```
HINTRUEND
*/

/*
INITIALSOLUTIONSTART

INITIALSOLUTIONEND
*/

// SOLUTIONSTART
let price = 20;
price++;
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

it('the variable `price` is incremented by 1', () => {
  expect(price).equal(21);
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
