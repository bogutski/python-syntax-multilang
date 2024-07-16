// NAMEEN:
// NAMERU:Какая пицца выгоднее?

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
В этой задаче будем сравнивать какая пицца выгоднее.

Создайте переменную `PI` и присвойте ей значение `3.14`.

Напишите функцию `circleArea`, которая принимает параметр `diameter` и возвращает площадь круга.

Создайте переменную `pizza1Diameter` и присвойте ей значение `10`.
Создайте переменную `pizza1Price` и присвойте ей значение `18`.

Создайте переменную `pizza2Diameter` и присвойте ей значение `20`.
Создайте переменную `pizza2Price` и присвойте ей значение `24`.

Создайте переменную `pizza1Area` и присвойте ей результат вызова функции `circleArea`. В качестве аргумента передайте значение переменной `pizza1Diameter`.
Создайте переменную `pizza2Area` и присвойте ей результат вызова функции `circleArea`. В качестве аргумента передайте значение переменной `pizza2Diameter`.

Создайте переменную `pizza1PricePerSquare` и присвойте ей результат деления `pizza1Price` на `pizza1Area`.
Создайте переменную `pizza2PricePerSquare` и присвойте ей результат деления `pizza2Price` на `pizza2Area`.

Создайте функцию `comparePizzaPrices`, которая принимает два параметра `p1sqPrice` и `p2sqPrice`.
Пусть функция возвращает строку `Pizza 1 price per square is p1sqPrice and pizza 2 price per square is p2sqPrice`.
Где `p1sqPrice` и `p2sqPrice` - это значения аргументов.
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
function sum(num1, num2){

}
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
const PI = 3.14;

function circleArea(diameter) {
  return PI * (diameter / 2) ** 2;
}

const pizza1Diameter = 10;
const pizza1Price = 18;

const pizza2Diameter = 20;
const pizza2Price = 24;

const pizza1Area = circleArea(pizza1Diameter);
const pizza2Area = circleArea(pizza2Diameter);

const pizza1PricePerSquare = pizza1Price / pizza1Area;
const pizza2PricePerSquare = pizza2Price / pizza2Area;

function comparePizzaPrices(p1sqPrice, p2sqPrice) {
  return `Pizza 1 price per square is ${p1sqPrice} and pizza 2 price per square is ${p2sqPrice}`;
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created variable PI = 3.14', () => {
  expect(PI).to.equal(3.14);
});

it('Created function circleArea', () => {
  expect(typeof circleArea).to.equal('function');
});

it('Created variable pizza1Diameter = 10', () => {
  expect(pizza1Diameter).to.equal(10);
});

it('Created variable pizza1Price = 18', () => {
  expect(pizza1Price).to.equal(18);
});

it('Created variable pizza2Diameter = 20', () => {
  expect(pizza2Diameter).to.equal(20);
});

it('Created variable pizza2Price = 24', () => {
  expect(pizza2Price).to.equal(24);
});

it('Created variable pizza1Area', () => {
  expect(pizza1Area).to.equal(78.5);
});

it('Created variable pizza2Area', () => {
  expect(pizza2Area).to.equal(314);
});

it('Created variable pizza1PricePerSquare', () => {
  expect(pizza1PricePerSquare).to.equal(0.22929936305732485);
});

it('Created variable pizza2PricePerSquare', () => {
  expect(pizza2PricePerSquare).to.equal(0.07643312101910828);
});

it('Created function comparePizzaPrices', () => {
  expect(typeof comparePizzaPrices).to.equal('function');
});

it('comparePizzaPrices(pizza1PricePerSquare, pizza2PricePerSquare) returns "Pizza 1 price per square is 0.23076923076923078 and pizza 2 price per square is 0.07643312101910828"', () => {
  expect(comparePizzaPrices(pizza1PricePerSquare, pizza2PricePerSquare)).to.equal('Pizza 1 price per square is 0.22929936305732485 and pizza 2 price per square is 0.07643312101910828');
});

it('comparePizzaPrices(100, 200) returns "Pizza 1 price per square is 100 and pizza 2 price per square is 200"', () => {
  expect(comparePizzaPrices(100, 200)).to.equal('Pizza 1 price per square is 100 and pizza 2 price per square is 200');
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
