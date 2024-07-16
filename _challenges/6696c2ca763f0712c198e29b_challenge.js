// NAMEEN:
// NAMERU:Оплата покупки банкнотами по $5

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
У покупателя в магазине есть только банкноты по $5.
Напишем функцию, которая принимает сумму покупки и возвращает минимальное количество банкнот для оплаты.

Название функции: `numberOfBanknotes`. Название параметра определите сами.


Примеры вызова функции:
```javascript
numberOfBanknotes(5) // 1
numberOfBanknotes(5.10) // 2
numberOfBanknotes(5.80) // 2
numberOfBanknotes(10) // 2
numberOfBanknotes(10.10) // 3
numberOfBanknotes(12.75) // 3
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
fun
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function numberOfBanknotes(cost) {
  return Math.ceil(cost / 5);
}
// SOLUTIONEND

// OPENTESTSSTART
it('Created function numberOfBanknotes', () => {
  expect(numberOfBanknotes).to.be.a('function');
});

it('numberOfBanknotes(3) should return 1', () => {
  expect(numberOfBanknotes(3)).to.equal(1);
});

it('numberOfBanknotes(4.60) should return 1', () => {
  expect(numberOfBanknotes(4.6)).to.equal(1);
});

it('numberOfBanknotes(5) should return 1', () => {
  expect(numberOfBanknotes(5)).to.equal(1);
});

it('numberOfBanknotes(5.10) should return 2', () => {
  expect(numberOfBanknotes(5.1)).to.equal(2);
});

it('numberOfBanknotes(5.80) should return 2', () => {
  expect(numberOfBanknotes(5.8)).to.equal(2);
});

it('numberOfBanknotes(10) should return 2', () => {
  expect(numberOfBanknotes(10)).to.equal(2);
});

it('numberOfBanknotes(10.10) should return 3', () => {
  expect(numberOfBanknotes(10.1)).to.equal(3);
});

it('numberOfBanknotes(12.75) should return 3', () => {
  expect(numberOfBanknotes(12.75)).to.equal(3);
});

it('numberOfBanknotes(15) should return 3', () => {
  expect(numberOfBanknotes(15)).to.equal(3);
});

// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
