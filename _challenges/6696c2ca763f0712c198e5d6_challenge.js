// NAMEEN:
// NAMERU:Подсчет стоимости товаров с учетом налога

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `calculateTotalPrice`, которая принимает три аргумента:
* `product1` - объект,
* `product2` - объект,
* `n` - налог на товары, число, выраженное в процентах.

Объекты `product1` и `product2` имеют два свойства:
* `price` - цена товара за единицу, число,
* `quantity` - количество товаров, число.

Функция должна посчитать итоговую сумму с учетом налогов.
Округлить итоговую сумму до ближайшего целого числа, используя метод Math.round().
Вернуть строку вида: `Total price is 123 dollars`,где 123 – это итоговая сумма покупок с учетом налога.

Пример запуска функции:
```javascript
calculateTotalPrice(
  { price: 99.99, quantity: 2 }, // Subtotal $199.98
  { price: 2.78, quantity: 12 }, // Subtotal $33.36
  6.25 // Massachusetts state tax rate
); // Total price is 248 dollars
```
Похожий пример:
```javascript
function calculateArea(room1, room2, k) {
  let area = room1.height * room1.width + room2.height * room2.width;
  let redundancy = area * k / 100; // k is a redundancy coefficient in percent
  let totalArea = Math.round(area + redundancy);
  return "Total total area is " + totalArea + " square meters"; // return total area rounded
}
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
fun
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function calculateTotalPrice(product1, product2, n) {
  //n = 0.0625; n is a Massachusetts state tax rate
  let subtotal = product1.price * product1.quantity + product2.price * product2.quantity;
  let tax = (subtotal * n) / 100;
  let total = Math.round(subtotal + tax);
  return 'Total price is ' + total + ' dollars'; // return total price rounded to the n
}
// SOLUTIONEND

// OPENTESTSSTART
it('Created function calculateTotalPrice', () => {
  expect(calculateTotalPrice).to.be.a('function');
});

it('calculateTotalPrice should return string', () => {
  expect(
    calculateTotalPrice(
      { price: 99.99, quantity: 2 },
      { price: 2.78, quantity: 12 },
      6.25,
    ),
  ).to.be.a('string');
});

it('calculateTotalPrice({ price: 99.99, quantity: 2 }, { price: 2.78, quantity: 12 }, 6.25) return Total price is 248 dollars', () => {
  expect(
    calculateTotalPrice(
      { price: 99.99, quantity: 2 },
      { price: 2.78, quantity: 12 },
      6.25,
    ),
  ).to.equal('Total price is 248 dollars');
});

it('calculateTotalPrice({ price: 19.88, quantity: 6 }, { price: 1.99, quantity: 34 }, 4.75) return Total price is 196 dollars', () => {
  expect(
    calculateTotalPrice(
      { price: 19.88, quantity: 6 },
      { price: 1.99, quantity: 34 },
      4.75,
    ),
  ).to.equal('Total price is 196 dollars');
});

it('calculateTotalPrice({ price: 2.33, quantity: 16 }, { price: 19.12, quantity: 4 }, 7.5) return Total price is 122 dollars', () => {
  expect(
    calculateTotalPrice(
      { price: 2.33, quantity: 16 },
      { price: 19.12, quantity: 4 },
      7.5,
    ),
  ).to.equal('Total price is 122 dollars');
});

// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
