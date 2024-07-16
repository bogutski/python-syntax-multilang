// NAMEEN:
// NAMERU:Рассчитать стоимость поездки американцев на машине по Европе

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напиши функцию `tripCost`, которая принимает параметры

`literPer100Km` - количество литров, чтобы автомобиль проехал 100 километров.
`pricePerLiter` - цена одного литра бензина.
`distanceKm` - расстояние в километрах, которое нужно проехать от пункта А до пункта Б.


Функция должна возвращать стоимость поездки на машине от пункта А до пункта Б и обратно.

Примеры:
```javascript
tripCost(10, 2, 100) // 40
tripCost(20, 3, 100) // 120
```

Формула расчета стоимости поездки в одну сторону:
`distanceKm / 100 * literPer100Km * pricePerLiter`
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
fun
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function tripCost(literPer100Km, pricePerLiter, distanceKm) {
  return distanceKm / 100 * literPer100Km * pricePerLiter * 2;
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function tripCost', () => {
  expect(tripCost).to.be.a('function');
});

it('tripCost(10, 2, 100) should return 40', () => {
  expect(tripCost(10, 2, 100)).to.equal(40);
});

it('tripCost(20, 3, 100) should return 120', () => {
  expect(tripCost(20, 3, 100)).to.equal(120);
});

it('tripCost(30, 4, 100) should return 240', () => {
  expect(tripCost(30, 4, 100)).to.equal(240);
});

it('tripCost(40, 5, 100) should return 400', () => {
  expect(tripCost(40, 5, 100)).to.equal(400);
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
