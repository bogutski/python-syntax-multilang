// NAMEEN:
// NAMERU:Продать пиццу кусками. Версия 1

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напиши функцию `pizzaSlice`, которая принимает параметры:

* `pizzaPrice` - цена пиццы
* `numSlices` - количество кусков, на которые делится пицца
* `slicePrice` - цена одного куска пиццы

Обычно выгоднее продавать кусками, так как наценка выше.

Нужно рассчитать на сколько выгоднее продать кусками, чем продать ее целиком.

Примеры:
```javascript
pizzaSlice(20, 8, 4) // 12
pizzaSlice(20, 8, 5) // 20
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
func
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function pizzaSlice(pizzaPrice, numSlices, slicePrice) {
  return numSlices * slicePrice - pizzaPrice;
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function pizzaSlice', () => {
  expect(pizzaSlice).to.be.a('function');
});

it('pizzaSlice(20, 8, 4) should return 12', () => {
  expect(pizzaSlice(20, 8, 4)).to.equal(12);
});

it('pizzaSlice(20, 8, 5) should return 20', () => {
  expect(pizzaSlice(20, 8, 5)).to.equal(20);
});

it('pizzaSlice(20, 8, 6) should return 28', () => {
  expect(pizzaSlice(20, 8, 6)).to.equal(28);
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
