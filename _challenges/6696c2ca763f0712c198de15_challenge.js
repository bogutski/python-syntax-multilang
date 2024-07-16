// NAMEEN:Side and diagonal of the square
// NAMERU:Сторона и диагональ квадрата

/*
INSTRUCTIONENSTART
The area `square` of a square is given. Calculate the length of the side `side` and the length of the diagonal `diagonal`.

Define variable `quare` and give it a value of an arbitrary non-negative number.

Define a variable `side` in which you calculate the side of the square (the side of the square is equal to the square root of the area,
or area to the power 0.5).

Define a variable `diagonal`, in which calculate the length of the diagonal (the diagonal is calculated by the formula:
its square is equal to twice the square of the side, and the diagonal itself is the square root of twice the square of the side).

Here is an example that is fundamentally similar to what we need to do,
but adapt it to the requirements of the problem:
```
const s = 1000;
const a = s ** 0.5; // the square root of s
const d = (2 * a ** 2) ** 0.5; // the root of 2 * a**2
```
INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Дана площадь `square` квадрата. Вычислить длину стороны `side` и длину диагонали `diagonal`.

Задайте переменную `square` и присвойте ей значение произвольного неотрицательного числа.

Задайте переменную `side`, в которой вычислите сторону квадрата (сторона квадрата равна корню квадратному из площади,
или площади в степени 0.5).

Задайте переменную `diagonal`, в которой вычислите длину диагонали (диагональ вычисляется по формуле:
ее квадрат равен удвоенному квадрату стороны, а сама диагональ - корню квадратному из удвоенного квадрата стороны).

Приведем пример, который принципиально похож на то, что нужно сделать,
но адаптируйте его к требованиям задачи:
```javascript
const s = 1000;
const a = s ** 0.5; // корень квадратный из s
const d = (2 * a ** 2) ** 0.5; //корень из 2 * a**2
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
const square = 100;
const side = square ** 0.5;
const diagonal = (2 * side ** 2) ** 0.5;
```
HINTRUEND
*/

/*
INITIALSOLUTIONSTART

INITIALSOLUTIONEND
*/

// SOLUTIONSTART
const square = 100;
const side = square ** 0.5;
const diagonal = (2 * side ** 2) ** 0.5;
// SOLUTIONEND


// OPENTESTSSTART
it('Variable`square` contains a value', () => {
  expect(square).not.undefined;
});

it('variable`square` type is a number', () => {
  expect(square).a('number');
});

it('the `square` variable type is not NaN', () => {
  expect(isNaN(square)).false;
});

it('variable`square` has value >= 0', () => {
  expect(square >= 0).true;
});

it('The `side` variable has a value', () => {
  expect(side).not.undefined;
});

it('Variable type `side` is a number', () => {
  expect(side).a('number');
});

it('the variable `side` has the correct value', () => {
  expect(side).equal(square ** 0.5);
});

it('The `diagonal` variable has a value', () => {
  expect(diagonal).not.undefined;
});

it('Variable type `diagonal` is a number', () => {
  expect(diagonal).a('number');
});

it('the `diagonal` variable has the correct value', () => {
  expect(diagonal).equal((2 * side ** 2) ** 0.5);
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
