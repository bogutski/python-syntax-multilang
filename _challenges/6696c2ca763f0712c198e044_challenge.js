// NAMEEN:
// NAMERU:Продать пиццу кусками. Версия 2. Проценты

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напиши функцию `pizzaSlicePercent`, которая принимает параметры:

`pizzaPrice` - цена пиццы
`numSlices` - количество кусков, на которые делится пицца
`slicePrice` - цена одного куска пиццы

Обычно выгоднее продавать кусками, так как наценка выше.

Нужно рассчитать на сколько процентов выгоднее продать кусками, чем продать ее целиком.

Примеры:
```javascript
pizzaSlice(20, 8, 4) // 60
pizzaSlice(20, 8, 5) // 100
```

Пояснение первого примера.
При продаже целиком пицца стоит `20`, а при продаже кусками `32`. То есть наценка `12`.
`12` это `60%` от `20`.

Рассчитать проценты можно по формуле: `наценка * 100 / цену пиццы`.
Расчет `(8 * 4 - 20) * 100 / 20 = 60`

Пояснение второго примера.
При продаже целиком пицца стоит `20`, а при продаже кусками `40`. То есть наценка `20`.
`20` это `100%` от `20`.
Расчет `(8 * 5 - 20) * 100 / 20 = 100`
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
func
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function pizzaSlicePercent(pizzaPrice, numSlices, slicePrice) {
  return (numSlices * slicePrice - pizzaPrice) * 100 / pizzaPrice;
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function pizzaSlicePercent', () => {
  expect(pizzaSlicePercent).to.be.a('function');
});

it('pizzaSlicePercent(20, 8, 4) should return 60', () => {
  expect(pizzaSlicePercent(20, 8, 4)).to.equal(60);
});

it('pizzaSlicePercent(20, 8, 5) should return 100', () => {
  expect(pizzaSlicePercent(20, 8, 5)).to.equal(100);
});

it('pizzaSlicePercent(20, 10, 2) should return 0', () => {
  expect(pizzaSlicePercent(20, 10, 2)).to.equal(0);
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
