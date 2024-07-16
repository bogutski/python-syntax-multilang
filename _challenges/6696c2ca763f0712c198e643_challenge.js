// NAMEEN:
// NAMERU:Отмена скидки. Удаление свойств объекта

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Необходимо написать функцию `orderSummary`.

Функция принимает один параметр – объект, который описывает заказ.
В этом объекте содержится информация о цене товара `price`, количестве `quantity` и скидке `discount`.
Необходимо удалить свойство `discount` из объекта и вернуть итоговую сумму заказа.

Пример запуска функции:
```javascript
orderSummary({price: 100, quantity: 2, discount: 0.1}); // 200
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
fun

}
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function orderSummary(order1) {
  delete order1.discount;
  return (order1.subtotal = order1.price * order1.quantity);
}
// SOLUTIONEND

// OPENTESTSSTART
it(`Created function orderSummary`, () => {
  expect(orderSummary).to.be.a('function');
});

it(`orderSummary({price: 100, quantity: 2, discount: 0.1}) return 200`, () => {
  expect(orderSummary({ price: 100, quantity: 2, discount: 0.1 })).to.equal(200);
});

it(`orderSummary({price: 135, quantity: 211, discount: 0.1}) return 28485`, () => {
  expect(orderSummary({ price: 135, quantity: 211, discount: 0.1 })).to.equal(28485);
});

it(`orderSummary({price: 10, quantity: 75, discount: 0.14}) return 750`, () => {
  expect(orderSummary({ price: 10, quantity: 75, discount: 0.14 })).to.equal(750);
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
