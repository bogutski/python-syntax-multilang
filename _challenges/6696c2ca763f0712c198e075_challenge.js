// NAMEEN:
// NAMERU:Рассчитать стоимость поездки на машине по США

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напиши функцию `tripCost`, которая принимает три параметра `mpg`, `pricePerGallon` и `distanceMiles`.

`mpg` - количество миль, которое может проехать автомобиль на одном галлоне бензина.
`pricePerGallon` - цена одного галлона бензина.
`distanceMiles` - расстояние в милях, которое нужно проехать.

Функция должна возвращать стоимость поездки на машине.

Примеры:
```javascript
tripCost(20, 3, 100) // 15
tripCost(10, 2, 100) // 20
```

Для решения задачи разделите расстояние на количество миль, которое может проехать автомобиль на одном галлоне бензина, умножьте на цену одного галлона бензина.
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
fun
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
// calculate trip cost
function tripCost(mpg, pricePerGallon, distanceMiles) {
  return distanceMiles / mpg * pricePerGallon;
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function tripCost', () => {
  expect(tripCost).to.be.a('function');
});

it('tripCost(20, 3, 100) should return 15', () => {
  expect(tripCost(20, 3, 100)).to.equal(15);
} );

it('tripCost(12, 2, 100) should return 16.666666666666668', () => {
  expect(tripCost(12, 2, 100)).to.equal(16.666666666666668);
});

it('tripCost(10, 2, 100) should return 20', () => {
  expect(tripCost(10, 2, 100)).to.equal(20);
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
