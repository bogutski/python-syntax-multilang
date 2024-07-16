// NAMEEN:
// NAMERU:Цена снижается в зависимости от срока годности

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `productPrice`, которая принимает два параметра: `initialPrice`, `daysRemaining`.

Функция должна возвращать цену товара, с учетом срока годности.

`initialPrice` - базовая цена товара
`daysRemaining` - количество дней до окончания срока годности.

Примеры запуска функции:
```javascript
productPrice(100, 30); // 100
productPrice(100, 20); // 80
productPrice(100, 10); // 50
productPrice(100, 3); // 30
productPrice(100, 0); // 'Product is expired'
```

* Если `daysRemaining` больше или равно 30, то функция должна возвращать оригинальную цену `initialPrice`.
* Если `daysRemaining` от 20 до 29 включительно, то функция должна возвращать цену, уменьшенную на 20%.
* Если `daysRemaining` от 10 до 19 включительно, то функция должна возвращать цену, уменьшенную на 50%.
* Если `daysRemaining` от 1 до 9 включительно, то функция должна возвращать цену, уменьшенную на 70%.
* Если `daysRemaining` 0, то функция должна возвращать 'Product is expired'.
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
fun
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function productPrice(initialPrice, daysRemaining) {
  if (daysRemaining >= 30) return initialPrice;
  else if (daysRemaining >= 20) return initialPrice * 0.8;
  else if (daysRemaining >= 10) return initialPrice * 0.5;
  else if (daysRemaining > 0) return initialPrice * 0.3;
  else return 'Product is expired';
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function productPrice', () => {
  expect(productPrice).to.be.a('function');
});

it('productPrice(200, 30) should return 200', () => {
  expect(productPrice(200, 30)).to.be.equal(200);
});

it('productPrice(200, 20) should return 160', () => {
  expect(productPrice(200, 20)).to.be.equal(160);
});

it('productPrice(200, 21) should return 160', () => {
  expect(productPrice(200, 21)).to.be.equal(160);
});

it('productPrice(200, 10) should return 100', () => {
  expect(productPrice(200, 10)).to.be.equal(100);
});

it('productPrice(200, 9) should return 60', () => {
  expect(productPrice(200, 9)).to.be.equal(60);
});

it('productPrice(200, 3) should return 60', () => {
  expect(productPrice(200, 3)).to.be.equal(60);
});

it('productPrice(200, 2) should return 60', () => {
  expect(productPrice(200, 2)).to.be.equal(60);
});

it('productPrice(200, 0) should return "Product is expired"', () => {
  expect(productPrice(200, 0)).to.be.equal('Product is expired');
});

it('productPrice(200, -1) should return "Product is expired"', () => {
  expect(productPrice(200, -1)).to.be.equal('Product is expired');
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
