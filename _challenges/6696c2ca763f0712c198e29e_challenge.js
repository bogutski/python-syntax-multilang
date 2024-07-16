// NAMEEN:
// NAMERU:Дополнительный заработок магазина при округлении в большую сторону

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
На каждом чеке магазин округляет итоговую сумму в большую сторону до ближайшего целого числа.

Напишите функцию `roundProfit`. Параметры функции:
* `totalAmount` – итоговая сумма чека;

Функция должна возвращать `true`, если магазин заработал на округлении больше 60 центов, и `false` в противном случае.

Примеры запуска функции:
```javascript
roundProfit(10.10) // true
roundProfit(10.50) // false
roundProfit(10.90) // false
roundProfit(11.35) // true
```

INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
fun
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function roundProfit(totalAmount) {
  return Math.ceil(totalAmount) - totalAmount > 0.6;
}
// SOLUTIONEND

// OPENTESTSSTART
it('Created function roundProfit', () => {
  expect(roundProfit).to.be.a('function');
});

it('roundProfit(10.10) should return true', () => {
  expect(roundProfit(10.1)).to.equal(true);
});

it('roundProfit(10.50) should return false', () => {
  expect(roundProfit(10.5)).to.equal(false);
});

it('roundProfit(10.90) should return false', () => {
  expect(roundProfit(10.9)).to.equal(false);
});

it('roundProfit(11.35) should return true', () => {
  expect(roundProfit(11.35)).to.equal(true);
});

it('roundProfit(11.60) should return false', () => {
  expect(roundProfit(11.6)).to.equal(false);
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
