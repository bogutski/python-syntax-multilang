// NAMEEN:
// NAMERU:Добрый продавец не принимает монеты

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
На рынке продавец принимает только купюры, а монеты считает скидкой.

Продает только по 3 товара.

Напишите функцию `finalPrice`, которая принимает параметры:
* `price1` - цена первого товара
* `price2` - цена второго товара
* `price3` - цена третьего товара

Цены товаров могут быть целыми или дробными.

Функция должна возвращать сумму, которую нужно заплатить за все товары с учетом скидки.

Примеры запуска функции:
```javascript
finalPrice(10.5, 2.5, 3) // 16
finalPrice(10.5, 2.5, 3.5) // 16
finalPrice(10.5, 2.5, 3.5) // 16
finalPrice(10, 2, 3.1) // 15
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
fun
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function finalPrice(price1, price2, price3) {
  return Math.floor(price1 + price2 + price3);
}
// SOLUTIONEND

// OPENTESTSSTART
it('Created function finalPrice', () => {
  expect(finalPrice).to.be.a('function');
});

it('finalPrice(10.5, 2.5, 3) should return 16', () => {
  expect(finalPrice(10.5, 2.5, 3)).to.equal(16);
});

it('finalPrice(10.5, 2.5, 3.5) should return 16', () => {
  expect(finalPrice(10.5, 2.5, 3.5)).to.equal(16);
});

it('finalPrice(10, 2, 3.1) should return 15', () => {
  expect(finalPrice(10, 2, 3.1)).to.equal(15);
});

it('finalPrice(1, 2.9, 30) should return 33', () => {
  expect(finalPrice(1, 2.9, 30)).to.equal(33);
});

it('finalPrice(4.7, 2.1, 3.1) should return 9', () => {
  expect(finalPrice(4.7, 2.1, 3.1)).to.equal(9);
});

// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
