// NAMEEN:
// NAMERU:Посчитать итоговую сумму покупок

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `calculateTotal`, которая принимает параметры:
* `product1` - объект с информацией о первом товаре
* `product2` - объект с информацией о втором товаре
* `product3` - объект с информацией о третьем товаре
* `discount` - скидка на все покупки в процентах

Каждый объект продукта имеет свойства:
* `name` – название товара, строка
* `price` – цена товара, число
* `quantity` – количество товара, число
* `discount` – скидка на товар в процентах, число

Функция должна посчитать сумму каждой покупки, сложить их и вычесть общую скидку.

Функция должна вернуть строку вида: `Total price is $123`, где 123 – это итоговая сумма покупок.

Пример запуска функции:
```javascript
calculateTotal(
  { name: 'product1', price: 100, quantity: 2, discount: 10 }, // Subtotal $180
  { name: 'product2', price: 200, quantity: 1, discount: 0 }, // Subtotal $200
  { name: 'product3', price: 300, quantity: 4, discount: 20 }, // Subtotal $960
  10 // Discount 10%
);
// 180 + 200 + 960 = 1340
// 1340 - 10% (134) = 1206
// Total price is: $1206
```

Если какой-то из дисконтов меньше 0, то он должен быть равен 0.

Если какой-то из дисконтов больше 100, то он должен быть равен 90.

```javascript
calculateTotal(
  { name: 'product1', price: 100, quantity: 2, discount: 110 }, // Subtotal $20
  { name: 'product2', price: 200, quantity: 1, discount: -10 }, // Subtotal $200
  { name: 'product3', price: 300, quantity: 4, discount: 10 }, // Subtotal $1080
  150 // Discount 90%
);
// 20 + 200 + 1080 = 1300
// 1300 - 90% = 130
// Total price is: $130

В зависимости от последовательности операций результат может отличаться.

Для расчета скидки не используйте формулу : `price * quantity * (1 - discount / 100)` так как при некоторых расчетах вы будете получать значение, с периодическими десятичными дробями.

Например, `price * quantity * (1 - discount / 100)` для `price = 100`, `quantity = 2`, `discount = 10` вернет `180.00000000000003`, а не `180`.

Используйте формулу: `price * quantity - price * quantity * discount / 100`

Для итоговой суммы покупок используйте формулу:

`subtotal1 + subtotal2 + subtotal3 - (subtotal1 + subtotal2 + subtotal3) * discountTotal / 100`

INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
fun
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function calculateTotal(product1, product2, product3, discount) {
  let discount1 = product1.discount;
  let discount2 = product2.discount;
  let discount3 = product3.discount;
  let discountTotal = discount;

  if (product1.discount < 0) discount1 = 0;
  else if (product1.discount >= 100) discount1 = 90;

  if (product2.discount < 0) discount2 = 0;
  else if (product2.discount >= 100) discount2 = 90;

  if (product3.discount < 0) discount3 = 0;
  else if (product3.discount >= 100) discount3 = 90;

  if (discount < 0) discountTotal = 0;
  else if (discount >= 100) discountTotal = 90;

  // product { name: 'name', price: 100, quantity: 2, discount: 12 }
  const subtotal1 = product1.price * product1.quantity - product1.price * product1.quantity * discount1 / 100;
  const subtotal2 = product2.price * product2.quantity - product2.price * product2.quantity * discount2 / 100;
  const subtotal3 = product3.price * product3.quantity - product3.price * product3.quantity * discount3 / 100;

  const total = subtotal1 + subtotal2 + subtotal3 - (subtotal1 + subtotal2 + subtotal3) * discountTotal / 100;

  return (
    'Total price is $' + total
  );
}

// SOLUTIONEND

// OPENTESTSSTART
it('Created function calculateTotal', () => {
  expect(calculateTotal).to.be.a('function');
});

it('calculateTotal({ name: "product1", price: 100, quantity: 2, discount: 110 }, { name: "product2", price: 200, quantity: 1, discount: -10 }, { name: "product3", price: 300, quantity: 4, discount: 10 }, 150) should return "Total price is $130"', () => {
  expect(
    calculateTotal(
      { name: 'product1', price: 100, quantity: 2, discount: 110 }, // Subtotal $20
      { name: 'product2', price: 200, quantity: 1, discount: -10 }, // Subtotal $200
      { name: 'product3', price: 300, quantity: 4, discount: 10 }, // Subtotal $1080
      150, // Discount 90%
    ),
  ).to.be.equal('Total price is $130');
});

it('calculateTotal({ name: "product1", price: 500, quantity: 2, discount: 110 }, { name: "product2", price: 10, quantity: 2, discount: -10 }, { name: "product3", price: 200, quantity: 2, discount: 10 }, 150) should return "Total price is $48"', () => {
  expect(
    calculateTotal(
      { name: 'product1', price: 500, quantity: 2, discount: 110 },
      { name: 'product2', price: 10, quantity: 2, discount: -10 },
      { name: 'product3', price: 200, quantity: 2, discount: 10 },
      150,
    ),
  ).to.be.equal('Total price is $48');
});

it('calculateTotal({ name: "product1", price: 150, quantity: 3, discount: 110 }, { name: "product2", price: 200, quantity: 5, discount: 5 }, { name: "product3", price: 300, quantity: 4, discount: -1 }, 150) should return "Total price is $219.5"', () => {
  expect(
    calculateTotal(
      { name: 'product1', price: 150, quantity: 3, discount: 110 },
      { name: 'product2', price: 200, quantity: 5, discount: 5 },
      { name: 'product3', price: 300, quantity: 4, discount: -1 },
      150,
    ),
  ).to.be.equal('Total price is $219.5');
});

// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
