// NAMEEN:
// NAMERU:Хватит ли денег при расчете на кассе?

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `isEnoughMoney`, которая принимает в качестве параметров:
* `money` – количество денег в кошельке,
* `price` – цена товара,
* `quantity` – количество товара,
* `tax` – налог в процентах,
* `coupon` – купон на скидку в процентах, по умолчанию 0.

Пусть функция возвращает `true`, если хватит денег на покупку, и `false` в противном случае.

Пример:
```javascript
isEnoughMoney(108, 50, 2, 10, 3)
subtotal = 100
taxAmount = 10
couponAmount = 3
108 >= 100 + 10 - 3 // true
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
fun
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function isEnoughMoney(money, price, quantity, tax, coupon = 0) {
  const subtotal = price * quantity;
  const priceWithCoupon = subtotal - subtotal * coupon / 100;
  const total = priceWithCoupon - priceWithCoupon * tax / 100;
  return money >= total;
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function isEnoughMoney', () => {
  expect(isEnoughMoney).to.be.a('function');
});

it('isEnoughMoney(80, 50, 2, 10) // false', () => {
  expect(isEnoughMoney(80, 50, 2, 10)).to.be.false;
});

it('isEnoughMoney(100, 50, 2, 10, 10) // true', () => {
  expect(isEnoughMoney(100, 50, 2, 10, 10)).to.be.true;
});

it('isEnoughMoney(120, 50, 2, 10, 5) // true', () => {
  expect(isEnoughMoney(120, 50, 3, 10, 5)).to.be.false;
});

it('isEnoughMoney(100, 50, 1, 10, 15) // true', () => {
  expect(isEnoughMoney(100, 50, 1, 10, 15)).to.be.true;
});

it('isEnoughMoney(100, 50, 1, 10) // true', () => {
  expect(isEnoughMoney(100, 50, 1, 10, 20)).to.be.true;
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
