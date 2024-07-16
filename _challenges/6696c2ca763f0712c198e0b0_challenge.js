// NAMEEN:
// NAMERU:Пункт обмена валюты. Маржинальность обмена

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Пункт обмена валюты принимает два параметра:
* `buyRate` – курс покупки
* `sellRate` – курс продажи

Название функции: `exchangeRateMargin`

При обмене валюты, пункт обмена должен платить налог 2% с каждой сделки.

То есть итоговая маржинальность обмена на 2% меньше.

Функция должна возвращать итоговую маржинальность обмена валюты в процентах с вычетом налога.

Примеры:
```javascript
exchangeRateMargin(100, 110); // 8.90909090909091
exchangeRateMargin(100, 120); // 16.333333333333332
exchangeRateMargin(100, 130); // 22.615384615384617
exchangeRateMargin(50, 70);   // 28
```

Для расчета используйте формулу:
`(sellRate - buyRate) / sellRate * (100 - 2)`
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
fun
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function exchangeRateMargin(buyRate, sellRate) {
  return (sellRate - buyRate) / sellRate * (100 - 2);
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function exchangeRateMargin', () => {
  expect(exchangeRateMargin).to.be.a('function');
});

it('exchangeRateMargin(100, 110) should return 8.90909090909091', () => {
  expect(exchangeRateMargin(100, 110)).to.be.equal(8.90909090909091);
});

it('exchangeRateMargin(100, 120) should return 16.333333333333332', () => {
  expect(exchangeRateMargin(100, 120)).to.be.equal(16.333333333333332);
});

it('exchangeRateMargin(100, 130) should return 22.615384615384617', () => {
  expect(exchangeRateMargin(100, 130)).to.be.equal(22.615384615384617);
});

it('exchangeRateMargin(50, 70) should return 28', () => {
  expect(exchangeRateMargin(50, 70)).to.be.equal(28);
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
