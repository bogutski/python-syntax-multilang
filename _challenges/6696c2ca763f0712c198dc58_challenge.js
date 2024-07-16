// NAMEEN:Help a farmer to find the area of the plot
// NAMERU:Помогите фермеру найти площадь участка

/*
INSTRUCTIONENSTART
A farmer has a square plot of land. He has built a fence around the plot and measured its length.
The farmer wants to buy seeds for planting,
but to calculate the amount of seed he needs to know the area of the plot.
Help the farmer find the area of the square plot if the length of the fence around the plot is known.

Create a variable `length` and assign it an arbitrary number from 1 to 1000 (the length of the fence).

Create a variable `side` and assign to it an expression to calculate the side of the square.

Create a variable `square` and assign to it an expression to calculate the area of the square with side `side`.

Here is an example, which is fundamentally similar to what we need to do,
but adapt it to the requirements of the problem:
```
const x = 2;
const y = x ** 2;
```
INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Фермер имеет квадратный участок земли. Он построил ограду вокруг участка и измерил ее длину.
Фермер хочет купить семян для посадки, но, чтобы рассчитать необходимое количество семян, ему надо знать площадь участка.
Помогите фермеру найти площадь квадратного участка, если известна длина ограды вокруг этого участка.

Создайте переменную `length` и присвойте ей произвольное число от 1 до 1000 (длина ограды).

Создайте переменную `side` и присвойте ей выражение для вычисления стороны квадрата.

Создайте переменную `square` и присвойте ей выражение для вычисления площади квадрата со стороной `side`.

Приведем пример, который принципиально похож на то, что нужно сделать,
но адаптируйте его к требованиям задачи:
```javascript
const x = 2;
const y = x ** 2;
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
const length = 600;
const side = length / 4;
const square = side ** 2;
```
HINTRUEND
*/

/*
INITIALSOLUTIONSTART

INITIALSOLUTIONEND
*/

// SOLUTIONSTART
const length = 600;
const side = length / 4;
const square = side ** 2;
// SOLUTIONEND


// OPENTESTSSTART
it('should variable `length` has a value', () => {
  expect(length).not.undefined;
});

it('should variable `length` be a number', () => {
  expect(length).a('number');
});

it('should variable `length` be in range from 1 to 1000', () => {
  expect(length >= 1 && length <= 1000).to.be.true;
});

it('should variable `side` has a value', () => {
  expect(side).not.undefined;
});

it('should variable `side` be a number', () => {
  expect(side).a('number');
});

it('should variable `side` has correct value', () => {
  expect(side).equal(length / 4);
});

it('should variable ``square` has a value', () => {
  expect(square).not.undefined;
});

it('should variable `square` to be a number', () => {
  expect(square).a('number');
});

it('should variable `square` equal `side * side` ', () => {
  expect(side ** 2).equal(square);
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
