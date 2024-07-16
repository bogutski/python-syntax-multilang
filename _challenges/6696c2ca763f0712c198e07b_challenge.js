// NAMEEN:
// NAMERU:Вычислить цену со скидкой

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напиши функцию `receiptMessage`, которая принимает параметры:
- `price` - цена товара
- `quantity` - количество товара
- `discount` - скидка в процентах

Функция должна возвращать строку `Price per item: $<price>. Quantity of items: <quantity>. Discount: <discount>%. Total price: $<totalPrice>.`, где `<price>`, `<quantity>`, `<discount>` и `<totalPrice>` - значения параметров.

Пример вызова функции:
```javascript
receiptMessage(10, 4, 10); // Price per item: $10. Quantity of items: 4. Discount: 10%. Total price: $36.
receiptMessage(20, 3, 25); // Price per item: $20. Quantity of items: 3. Discount: 25%. Total price: $45.
```

Создайте внутри функции переменную `totalPrice` c помощью оператора `const` и присвойте ей значение вычисления цены со скидкой.

Пример для помощи:
```javascript
const price = 10;
const quantity = 4;
const discount = 10;
console.log('Price: $' + price + '. Quantity: ' + quantity + '. Discount: ' + discount + '%. Total price: $' + price * quantity * (1 - discount / 100) + '.');
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
function sum
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function receiptMessage(price, quantity, discount) {
  const totalPrice = price * quantity * (1 - discount / 100);
  return 'Price per item: $' + price + '. Quantity of items: ' + quantity + '. Discount: ' + discount + '%. Total price: $' + totalPrice + '.';
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function receiptMessage', () => {
  expect(receiptMessage).to.be.a('function');
});

it('Function returns correct result for arguments `10, 4, 10`', () => {
  expect(receiptMessage(10, 4, 10)).eq('Price per item: $10. Quantity of items: 4. Discount: 10%. Total price: $36.');
});

it('Function returns correct result for arguments `20, 3, 25`', () => {
  expect(receiptMessage(20, 3, 25)).eq('Price per item: $20. Quantity of items: 3. Discount: 25%. Total price: $45.');
});

it('Function returns correct result for arguments `100, 1, 0`', () => {
  expect(receiptMessage(100, 1, 0)).eq('Price per item: $100. Quantity of items: 1. Discount: 0%. Total price: $100.');
});

it('Function contains `const totalPrice =`', () => {
  expect(receiptMessage.toString()).contains('const totalPrice =');
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
