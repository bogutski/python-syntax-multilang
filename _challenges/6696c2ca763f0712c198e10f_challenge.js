// NAMEEN:
// NAMERU:Формула для расчета временной стоимости денег

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Деньги со временем теряют свою стоимость.

Например, если вы получите 1000 долларов сегодня, то через год эти деньги будут стоить меньше, чем сегодня.

Это связано с инфляцией. То есть, с тем, что цены на товары и услуги растут со временем.

Есть формула для расчета временной стоимости денег.

Формула выглядит так: `FV = PV * (1 + i / 100) ^ n`, где
* FV – будущая стоимость денег,
* PV – текущая стоимость денег, `currentValue`
* i – процентная ставка, `interestRate`
* n – количество лет, `years`

`^ n` в формуле означает возведение в степень.

Напишите функцию `calculateFutureValue`, которая принимает 3 параметра: `currentValue`, `interestRate` и `years` и возвращает будущую стоимость денег.

Примеры:
```javascript
сalculateFutureValue(1000, 10, 1) // 1100
сalculateFutureValue(1000, 10, 2) // 1210.0000000000002
сalculateFutureValue(1000, 4, 3) // 1061.6
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
function calculateFutureValue()
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function calculateFutureValue(currentValue, interestRate, years) {
  return currentValue * (1 + interestRate / 100) ** years;
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function calculateFutureValue', () => {
  expect(calculateFutureValue).to.be.a('function');
});

it('calculateFutureValue(1000, 10, 1) should return 1100', () => {
  expect(calculateFutureValue(1000, 10, 1)).to.equal(1100);
});

it('calculateFutureValue(1000, 10, 2) should return 1210', () => {
  expect(calculateFutureValue(1000, 10, 2)).to.equal(1210.0000000000002);
});

it('calculateFutureValue(1000, 4, 3) should return 1061.6', () => {
  expect(calculateFutureValue(1000, 4, 3)).to.equal(1124.864);
});

it('calculateFutureValue(1000, 10, 1) should return 1100', () => {
  expect(calculateFutureValue(1000, 10, 1)).to.equal(1100);
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
