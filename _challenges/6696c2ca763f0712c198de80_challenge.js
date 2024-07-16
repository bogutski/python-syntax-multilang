// NAMEEN:The price of apples
// NAMERU:Цена яблок

/*
INSTRUCTIONENSTART
It is known that 'a' kg of apples costs b dollars. Find how much 1 kg of apples costs.

Define the variable `weight` and assign to it the value of an arbitrary non-negative number (the weight of apples).
Set the variable `cost` and assign to it the value of an arbitrary non-negative number (the cost of apples).
Define a variable `price`, in which calculate the price of 1 kg of apples.

Here is an example, which is fundamentally similar to what you need to do,
but adapt it to the requirements of the problem:
```
const amount = 10;
const money = 1000;
const price = money / amount;

```
INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Известно, что 'a' кг яблок стоит b долларов. Найти, сколько стоит 1 кг яблок.

Задайте переменную `weight` и присвойте ей значение произвольного неотрицательного числа (вес яблок).
Задайте переменную `cost` и присвойте ей значение произвольного неотрицательного числа (стоимость яблок).
Задайте переменную `price`, в которой вычислите цену 1 кг яблок.

Приведем пример, который принципиально похож на то, что нужно сделать,
но адаптируйте его к требованиям задачи:
```javascript
const amount = 10;
const money = 1000;
const price = money / amount;
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
const weight = 5;
const cost = 10;
const price = cost / weight;
```
HINTRUEND
*/

/*
INITIALSOLUTIONSTART

INITIALSOLUTIONEND
*/

// SOLUTIONSTART
const weight = 5;
const cost = 10;
const price = cost / weight;
// SOLUTIONEND


// OPENTESTSSTART
it('The `weight` variable contains a value', () => {
  expect(weight).not.undefined;
});

it('the variable `weight` type is a number', () => {
  expect(weight).a('number');
});

it('the variable type `weight` is not NaN', () => {
  expect(isNaN(weight)).false;
});

it('The variable `weight` has a value >= 0', () => {
  expect(weight >= 0).true;
});

it('The `cost` variable has a value', () => {
  expect(cost).not.undefined;
});

it('the variable type `cost` is a number', () => {
  expect(cost).a('number');
});

it('the variable type `cost` is not NaN', () => {
  expect(isNaN(cost)).false;
});

it('Variable `cost` has value >= 0', () => {
  expect(cost >= 0).true;
});

it('The `price` variable has a value', () => {
  expect(price).not.undefined;
});

it('the variable type `price` is a number', () => {
  expect(price).a('number');
});

it('the variable type `price` is not NaN', () => {
  expect(isNaN(price)).false;
});

it('the variable `price` has the correct value', () => {
  expect(price).equal(cost / weight);
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
