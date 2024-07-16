// NAMEEN:
// NAMERU:Посчитай оплату за товары с учетом скидки

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `calculateTotalPriceWithDiscount`, которая принимает три параметра:
* объект `product1` с информацией о первом товаре
* объект `product2` с информацией о втором товаре
* число `discount` - скидка в долларах, положительное число.

В объекте `product1` хранится информация о товаре:
* `price` - цена товара, число.
* `quantity` - количество товара, целое число.

В объекте `product2` хранится информация о товаре:
* `price` - цена товара, число.
* `quantity` - количество товара, целое число.

Если скидка больше или равна сумме стоимости товаров, то функция должна вернуть строку `Total price with discount is 0 dollars`.

Функция должна вернуть строку `Total price with discount is <totalPrice> dollars`, где `<totalPrice>` - сумма стоимости товаров с учетом скидки.

Пример запуска функции:
```javascript
calculateTotalPriceWithDiscount({ price: 100, quantity: 2 }, { price: 200, quantity: 5 }, 10)
// 'Total price with discount is 1190 dollars
```
Похожий пример:
```javascript
calculatePriceWithDiscount({ price: 45, quantity: 2 }, 12)
// 'Total price with discount is 78 dollars'
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
fun
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function calculateTotalPriceWithDiscount(product1, product2, discount) {
  const totalPrice =
    product1.price * product1.quantity + product2.price * product2.quantity;
  if (discount >= totalPrice) {
    return 'Total price with discount is 0 dollars';
  }
  const discountedPrice = totalPrice - discount;
  return 'Total price with discount is ' + discountedPrice + ' dollars';
}
// SOLUTIONEND

// OPENTESTSSTART
it('Created function calculateTotalPriceWithDiscount', () => {
  expect(calculateTotalPriceWithDiscount).to.be.a('function');
});

it('calculateTotalPriceWithDiscount({ price: 3, quantity: 12 },{ price: 8, quantity: 5 }, 8) should return Total price with discount is 68 dollars', () => {
  expect(
    calculateTotalPriceWithDiscount(
      { price: 3, quantity: 12 },
      { price: 8, quantity: 5 },
      8,
    ),
  ).to.equal('Total price with discount is 68 dollars');
});

it('calculateTotalPriceWithDiscount({ price: 99, quantity: 3 },{ price: 12, quantity: 9 }, 15) should return Total price with discount is 390 dollars', () => {
  expect(
    calculateTotalPriceWithDiscount(
      { price: 99, quantity: 3 },
      { price: 12, quantity: 9 },
      15,
    ),
  ).to.equal('Total price with discount is 390 dollars');
});

it('calculateTotalPriceWithDiscount({ price: 23, quantity: 7 },{ price: 5, quantity: 6 }, 200) should return Total price with discount is 0 dollars', () => {
  expect(
    calculateTotalPriceWithDiscount(
      { price: 23, quantity: 7 },
      { price: 5, quantity: 6 },
      200,
    ),
  ).to.equal('Total price with discount is 0 dollars');
});

it('calculateTotalPriceWithDiscount({ price: 10, quantity: 2 },{ price: 3, quantity: 5 }, 35) should return Total price with discount is 0 dollars', () => {
  expect(
    calculateTotalPriceWithDiscount(
      { price: 10, quantity: 2 },
      { price: 3, quantity: 5 },
      35,
    ),
  ).to.equal('Total price with discount is 0 dollars');
});

// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
