// NAMEEN:
// NAMERU:Форматирование скидки в чеке

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `formatDiscount`, которая принимает параметры:
* `price` - число, цена товара
* `discount` - число, скидка в процентах

Функция должна возвращать строку вида `Price: $100.00, Discount: 10.00%. Total: $90.00`.

Для форматирования чисел используйте метод `toFixed`.


Примеры запуска функции:
```javascript
formatDiscount(100, 10) // 'Price: $100.00, Discount: 10.00%. Total: $90.00'
formatDiscount(100, 0) // 'Price: $100.00, Discount: 0.00%. Total: $100.00'
formatDiscount(99, 32.5) // 'Price: $99.00, Discount: 32.50%. Total: $66.75'
formatDiscount(8, 17) // 'Price: $8.00, Discount: 17.00%. Total: $6.64'
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
fun
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function formatDiscount(price, discount) {
  const total = price - price * discount / 100;
  return `Price: $${price.toFixed(2)}, Discount: ${discount.toFixed(2)}%. Total: $${total.toFixed(2)}`;
}
// SOLUTIONEND

// OPENTESTSSTART
it('Created function formatDiscount', () => {
  expect(formatDiscount).to.be.a('function');
});

it('formatDiscount(100, 10) should return "Price: $100.00, Discount: 10.00%. Total: $90.00"', () => {
  expect(formatDiscount(100, 10)).to.equal('Price: $100.00, Discount: 10.00%. Total: $90.00');
});

it('formatDiscount(100, 0) should return "Price: $100.00, Discount: 0.00%. Total: $100.00"', () => {
  expect(formatDiscount(100, 0)).to.equal('Price: $100.00, Discount: 0.00%. Total: $100.00');
});

it('formatDiscount(99, 32.5) should return "Price: $99.00, Discount: 32.50%. Total: $66.83"', () => {
  expect(formatDiscount(99, 32.5)).to.equal('Price: $99.00, Discount: 32.50%. Total: $66.83');
});

it('formatDiscount(8, 17) should return "Price: $8.00, Discount: 17.00%. Total: $6.64"', () => {
  expect(formatDiscount(8, 17)).to.equal('Price: $8.00, Discount: 17.00%. Total: $6.64');
});

it('formatDiscount(40, 13) should return "Price: $40.00, Discount: 13.00%. Total: $34.80"', () => {
  expect(formatDiscount(40, 13)).to.equal('Price: $40.00, Discount: 13.00%. Total: $34.80');
});

it('formatDiscount(40, 13.5) should return "Price: $40.00, Discount: 13.50%. Total: $34.60"', () => {
  expect(formatDiscount(40, 13.5)).to.equal('Price: $40.00, Discount: 13.50%. Total: $34.60');
});

it('formatDiscount(40, 13.55) should return "Price: $40.00, Discount: 13.55%. Total: $34.58"', () => {
  expect(formatDiscount(40, 13.55)).to.equal('Price: $40.00, Discount: 13.55%. Total: $34.58');
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
