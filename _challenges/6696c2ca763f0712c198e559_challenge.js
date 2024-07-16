// NAMEEN:
// NAMERU:Итоговая сумма покупок. Товары, цены и скидки

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `totalProductPrice`, которая принимает четыре параметра:
* `product1`
* `product2`
* `product3`
* `product4`

Каждый параметр – это объект, который описывает товар.

Каждый объект имеет четыре свойства:
* `name` – название товара, строка
* `price` – цена товара, число
* `quantity` – количество товара, число
* `discount` – скидка на товар в процентах, число

Функция должна вернуть строку вида: `Total price is: $123`, где 123 – это итоговая сумма покупок.

Пример запуска функции:
```javascript
totalProductPrice(
  { name: 'product1', price: 100, quantity: 2, discount: 12 }, // Subtotal $176
  { name: 'product2', price: 200, quantity: 1, discount: 0 }, // Subtotal $200
  { name: 'product3', price: 300, quantity: 4, discount: 15 }, // Subtotal $1020
  { name: 'product4', price: 400, quantity: 5, discount: 25 }, // Subtotal $1500
); // Total price is: $2896
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
fun
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function totalProductPrice(product1, product2, product3, product4) {
  // product { name: 'name', price: 100, quantity: 2, discount: 12 }
  const subtotal1 = product1.price * product1.quantity * (1 - product1.discount / 100);
  const subtotal2 = product2.price * product2.quantity * (1 - product2.discount / 100);
  const subtotal3 = product3.price * product3.quantity * (1 - product3.discount / 100);
  const subtotal4 = product4.price * product4.quantity * (1 - product4.discount / 100);
  return  'Total price is: $' + (subtotal1 + subtotal2 + subtotal3 + subtotal4);
}
// SOLUTIONEND

// OPENTESTSSTART
it('Created function totalProductPrice', () => {
  expect(totalProductPrice).to.be.a('function');
});

it('totalProductPrice({ name: "product1", price: 100, quantity: 2, discount: 12 }, { name: "product2", price: 200, quantity: 1, discount: 0 }, { name: "product3", price: 300, quantity: 4, discount: 15 }, { name: "product4", price: 400, quantity: 5, discount: 25 }) return Total price is: $2896', () => {
  expect(
    totalProductPrice(
      { name: 'product1', price: 100, quantity: 2, discount: 12 },
      { name: 'product2', price: 200, quantity: 1, discount: 0 },
      { name: 'product3', price: 300, quantity: 4, discount: 15 },
      { name: 'product4', price: 400, quantity: 5, discount: 25 },
    ),
  ).eql('Total price is: $2896');
});

it('totalProductPrice({ name: "product1", price: 100, quantity: 20, discount: 95 }, { name: "product2", price: 200, quantity: 5, discount: 4 }, { name: "product3", price: 300, quantity: 4, discount: 45 }, { name: "product4", price: 400, quantity: 1, discount: 35 }) return Total price is: $1980', () => {
  expect(
    totalProductPrice(
      { name: 'product1', price: 100, quantity: 20, discount: 95 },
      { name: 'product2', price: 200, quantity: 5, discount: 4 },
      { name: 'product3', price: 300, quantity: 4, discount: 45 },
      { name: 'product4', price: 400, quantity: 1, discount: 35 },
    ),
  ).eql('Total price is: $1980');
});

it('totalProductPrice({ name: "product1", price: 95, quantity: 2, discount: 42 }, { name: "product2", price: 372, quantity: 1, discount: 65 }, { name: "product3", price: 921, quantity: 4, discount: 16 }, { name: "product4", price: 70, quantity: 5, discount: 35 }) return Total price is: $3562.46', () => {
  expect(
    totalProductPrice(
      { name: 'product1', price: 95, quantity: 2, discount: 42 },
      { name: 'product2', price: 372, quantity: 1, discount: 65 },
      { name: 'product3', price: 921, quantity: 4, discount: 16 },
      { name: 'product4', price: 70, quantity: 5, discount: 35 },
    ),
  ).eql('Total price is: $3562.46');
});

// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
