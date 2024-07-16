// NAMEEN:
// NAMERU:Наценка на товар

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `retailPrice`, которая принимает цену товара и наценку в процентах и возвращает цену с учетом наценки.

Функция должна возвращать строку вида `Initial price: $20, markup: 2.47%, final price: $20.49`.

Примеры запуска функции:
```javascript
retailPrice(20, 2.47); // 'Initial price: $20, markup: 2.47%, final price: $20.49'
retailPrice(20, 0); // 'Initial price: $20, markup: 0%, final price: $20.00'
retailPrice(20, 100); // 'Initial price: $20, markup: 100%, final price: $40.00'
```

INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
fun
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function retailPrice(price, markup) {
  const finalPrice = price + (price * markup) / 100;
  return `Initial price: $${price}, markup: ${markup}%, final price: $${finalPrice.toFixed(
    2,
  )}`;
}
// SOLUTIONEND

// OPENTESTSSTART
it('Created function retailPrice', () => {
  expect(retailPrice).to.be.a('function');
});

it('retailPrice(20, 2.47) should return "Initial price: $20, markup: 2.47%, final price: $20.49"', () => {
  expect(retailPrice(20, 2.47)).to.be.equal(
    'Initial price: $20, markup: 2.47%, final price: $20.49',
  );
});

it('retailPrice(20, 5) should return "Initial price: $20, markup: 5%, final price: $21.00"', () => {
  expect(retailPrice(20, 0)).to.be.equal(
    'Initial price: $20, markup: 0%, final price: $20.00',
  );
});

it('retailPrice(20, 100) should return "Initial price: $20, markup: 100%, final price: $40.00"', () => {
  expect(retailPrice(20, 100)).to.be.equal(
    'Initial price: $20, markup: 100%, final price: $40.00',
  );
});

it('retailPrice(35, 4.74) should return "Initial price: $35, markup: 4.74%, final price: $36.66"', () => {
  expect(retailPrice(35, 4.74)).to.be.equal(
    'Initial price: $35, markup: 4.74%, final price: $36.66',
  );
});

// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
