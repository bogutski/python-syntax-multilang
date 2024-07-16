// NAMEEN:
// NAMERU:Цена игрушек

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `totalPrice`, которая принимает два объекта:
* `toysQuantity` - количество каждой игрушки,
* `toysPrice` - цена каждой игрушки.

Оба объекта имеют три свойства: `legos`, `cars` и `puzzles`.

Функция должна вернуть объект, в котором будет 5 свойств:
* `totalPriceLegos` - общая цена за лего,
* `totalPriceCars` - общая цена за машинки,
* `totalPricePuzzles` - общая цена за пазлы,
* `totalToysQuantity` - общее количество игрушек,
* `totalPrice` - общая цена за все игрушки.

Пример запуска функции:
```javascript
totalPrice({legos: 5, cars: 7, puzzles: 15}, {legos: 40, cars: 15, puzzles: 26});
// { totalPriceLegos: 200, totalPriceCars: 105, totalPricePuzzles: 390, totalToysQuantity: 27, totalPrice: 695 }

totalPrice({legos: 8, cars: 12, puzzles: 25}, {legos: 35, cars: 5, puzzles: 25});
// { totalPriceLegos: 280, totalPriceCars: 60, totalPricePuzzles: 625, totalToysQuantity: 45, totalPrice: 965 }
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
fun
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function totalPrice(toysQuantity, toysPrice) {
  return {
    totalPriceLegos: toysQuantity.legos * toysPrice.legos,
    totalPriceCars: toysQuantity.cars * toysPrice.cars,
    totalPricePuzzles: toysQuantity.puzzles * toysPrice.puzzles,
    totalToysQuantity: toysQuantity.legos + toysQuantity.cars + toysQuantity.puzzles,
    totalPrice: toysQuantity.legos * toysPrice.legos + toysQuantity.cars * toysPrice.cars + toysQuantity.puzzles * toysPrice.puzzles,
  }
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function totalPrice', () => {
  expect(totalPrice).to.be.a('function');
});

it('Function totalPrice returns object', () => {
  expect(totalPrice({ legos: 5, cars: 7, puzzles: 15 }, { legos: 40, cars: 15, puzzles: 26 })).to.be.a('object');
});

it('totalPrice({legos: 5, cars: 7, puzzles: 15}, {legos: 40, cars: 15, puzzles: 26}) return { totalPriceLegos: 200, totalPriceCars: 105, totalPricePuzzles: 390, totalToysQuantity: 27, totalPrice: 695 }', () => {
  expect(totalPrice({ legos: 5, cars: 7, puzzles: 15 }, { legos: 40, cars: 15, puzzles: 26 })).to.deep.equal({ totalPriceLegos: 200, totalPriceCars: 105, totalPricePuzzles: 390, totalToysQuantity: 27, totalPrice: 695 });
});

it('totalPrice({legos: 8, cars: 12, puzzles: 25}, {legos: 35, cars: 5, puzzles: 25}) return { totalPriceLegos: 280, totalPriceCars: 60, totalPricePuzzles: 625, totalToysQuantity: 45, totalPrice: 965 }', () => {
  expect(totalPrice({ legos: 8, cars: 12, puzzles: 25 }, { legos: 35, cars: 5, puzzles: 25 })).to.deep.equal({ totalPriceLegos: 280, totalPriceCars: 60, totalPricePuzzles: 625, totalToysQuantity: 45, totalPrice: 965 });
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
