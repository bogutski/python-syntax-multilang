// NAMEEN:
// NAMERU:Поменять свойства между объектами. SKU продукта

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `swapProductSku`.

Параметры функции:
* `product1` – объект, содержащий информацию о продукте
* `product2` – объект, содержащий информацию о продукте

Функция должна поменять местами значения свойств `sku` у объектов `product1` и `product2`.

Функция не должна ничего возвращать.

Пример запуска функции:
```javascript
const product1 = { name: 'Product 1', price: 100, sku: '123', code: 'abc' };
const product2 = { name: 'Product 2', price: 200, sku: '456', code: 'def' };
swapProductSku(product1, product2);
console.log(product1.sku); // '456'
console.log(product2.sku); // '123'
```

Похожий пример:
```javascript
function swapPrice(obj1, obj2) {
  const temp = obj1.price;
  obj1.price = obj2.price;
  obj2.price = temp;
}

const product1 = { name: 'Product 1', price: 100, sku: '123', code: 'abc' };
const product2 = { name: 'Product 2', price: 200, sku: '456', code: 'def' };

swapPrice(product1, product2);
console.log(product1.price); // 100
console.log(product2.price); // 200
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
fun
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function swapProductSku(product1, product2) {
  const temp = product1.sku;
  product1.sku = product2.sku;
  product2.sku = temp;
}
// SOLUTIONEND

// OPENTESTSSTART
it('Created function swapProductSku', () => {
  expect(swapProductSku).to.be.a('function');
});

it('Swapped sku for { name: "Product 1", sku: "123" } and { name: "Product 2", sku: "456" })', () => {
  const product1 = { name: 'Product 1', price: 100, sku: '123', code: 'abc' };
  const product2 = { name: 'Product 2', price: 200, sku: '456', code: 'def' };
  swapProductSku(product1, product2);
  expect(product1.sku).to.equal('456');
  expect(product2.sku).to.equal('123');
});

it('Swapped sku for { name: "Product 1", sku: "A1678" } and { name: "Product 2", sku: "B1678" })', () => {
  const product1 = { name: 'Product 1', price: 100, sku: 'A1678', code: 'abc' };
  const product2 = { name: 'Product 2', price: 200, sku: 'B1678', code: 'def' };
  swapProductSku(product1, product2);
  expect(product1.sku).to.equal('B1678');
  expect(product2.sku).to.equal('A1678');
});

it('function returns undefined', () => {
  const product1 = { name: 'Product 1', price: 100, sku: '123', code: 'abc' };
  const product2 = { name: 'Product 2', price: 200, sku: '456', code: 'def' };
  expect(swapProductSku(product1, product2)).to.equal(undefined);
});

// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
