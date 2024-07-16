// NAMEEN:
// NAMERU:Округление при обмене валют

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `exchangeRound`, которая принимает сумму для обмена и курс обмена и возвращает сумму, округленную до двух знаков после запятой.

Функция должна возвращать строку вида `Amount: $20, exchange rate: 2.47, final amount: $49.40`.

Примеры запуска функции:
```javascript
exchangeRound(20, 2.47); // 'Amount: $20, exchange rate: 2.47, final amount: $49.40'
exchangeRound(14, 4.78); // 'Amount: $14, exchange rate: 4.78, final amount: $67.12'
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
fun
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function exchangeRound(amount, rate) {
  const finalAmount = (amount * rate).toFixed(2);
  return `Amount: $${amount}, exchange rate: ${rate}, final amount: $${finalAmount}`;
}
// SOLUTIONEND

// OPENTESTSSTART
it('Created function exchangeRound', () => {
  expect(exchangeRound).to.be.a('function');
});

it('exchangeRound(20, 2.47) should return "Amount: $20, exchange rate: 2.47, final amount: $49.40"', () => {
  expect(exchangeRound(20, 2.47)).to.be.equal(
    'Amount: $20, exchange rate: 2.47, final amount: $49.40',
  );
});

it('exchangeRound(14, 4.78) should return "Amount: $14, exchange rate: 4.78, final amount: $66.92"', () => {
  expect(exchangeRound(14, 4.78)).to.be.equal(
    'Amount: $14, exchange rate: 4.78, final amount: $66.92',
  );
});

it('exchangeRound(20, 0) should return "Amount: $20, exchange rate: 0, final amount: $0.00"', () => {
  expect(exchangeRound(20, 0)).to.be.equal(
    'Amount: $20, exchange rate: 0, final amount: $0.00',
  );
});

it('exchangeRound(20, 100) should return "Amount: $20, exchange rate: 100, final amount: $2000.00"', () => {
  expect(exchangeRound(20, 100)).to.be.equal(
    'Amount: $20, exchange rate: 100, final amount: $2000.00',
  );
});

it('exchangeRound(20, 100.123) should return "Amount: $20, exchange rate: 100.123, final amount: $2002.46"', () => {
  expect(exchangeRound(20, 100.123)).to.be.equal(
    'Amount: $20, exchange rate: 100.123, final amount: $2002.46',
  );
});

// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
