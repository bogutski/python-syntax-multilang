// NAMEEN:Which friend picked the most mushrooms?
// NAMERU:Кто из подруг собрал больше грибов?

/*
INSTRUCTIONENSTART
Two girlfriends went into the woods to pick mushrooms, and after they collected them they decided to count who collected more.

The first friend counted 20 mushrooms in her basket, and the second counted 23.

Create two variables `firstCart` and `secondCart` and give them corresponding values 20 and 23.

Create a third variable `trueOrFalse` and check: is it true that the second friend collected more mushrooms?

Here is an example, which is fundamentally similar to what you need to do,
but adapt it to the requirements of the problem:
```
const deckOfCardsForPoker = 52;
const deckOfCardsForJass = 36;
const trueOrFalse = deckOfCardsForPoker < deckOfCardsForJass; //false
```
INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Две подружки пошли в лес по грибы, а после их сбора решили посчитать, кто собрал больше.

Первая подруга насчитала в своем лукошке 20 грибов, а вторая 23.

Создайте две переменные `firstCart` и `secondCart` присвойте им соответствующие значения 20 и 23.

Создайте третью переменную `trueOrFalse` и проверьте: правда ли, что вторая подруга собрала больше грибов?

Приведем пример, который принципиально похож на то что нужно сделать,
но адаптируйте его к требованиям задачи:
```javascript
const deckOfCardsForPoker = 52;
const deckOfCardsForJass = 36;
const trueOrFalse = deckOfCardsForPoker < deckOfCardsForJass; //false
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
const firstCart = 20;
const secondCart = 23;
const trueOrFalse = firstCart < secondCart;
```
HINTRUEND
*/

/*
INITIALSOLUTIONSTART

INITIALSOLUTIONEND
*/

// SOLUTIONSTART
const firstCart = 20;
const secondCart = 23;
const trueOrFalse = firstCart < secondCart;
// SOLUTIONEND


// OPENTESTSSTART
it('The `firstCart` variable exists and contains a value', () => {
  expect(firstCart).not.undefined;
});

it('The ``secondCart` variable exists and contains a value', () => {
  expect(secondCart).not.undefined;
});

it('The `trueOrFalse` variable exists and contains a value', () => {
  expect(trueOrFalse).not.undefined;
});

it('Variable `firstCart` contains data type `number`', () => {
  expect(firstCart).a('number');
});

it('Variable ``secondCart` contains data type `number`', () => {
  expect(secondCart).a('number');
});

it('Variable `trueOrFalse` contains data type `boolean`', () => {
  expect(trueOrFalse).a('boolean');
});

it('Variable `firstCart` contains value 20', () => {
  expect(firstCart).eq(20);
});

it('Variable ``secondCart` contains value 23', () => {
  expect(secondCart).eq(23);
});

it('The `trueOrFalse` variable contains the value `true`', () => {
  expect(trueOrFalse).eq(true);
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
