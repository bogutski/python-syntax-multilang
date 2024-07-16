// NAMEEN:
// NAMERU:Склеить три объекта

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Создайте функцию `mergeObjects`.

Параметры функции:
* `productSpecs` – объект, содержащий спецификации продукта
* `productInfo` – объект, содержащий информацию о продукте
* `productPrice` – объект, содержащий цену продукта

Функция должна вернуть объект, содержащий все свойства объектов `productSpecs`, `productInfo` и `productPrice`.

`productSpecs` имеет следующую структуру:
* `name` – название продукта, строка
* `sku` – уникальный идентификатор, строка

`productInfo` имеет следующую структуру:
* `description` – описание продукта, строка
* `manufacturer` – производитель продукта, строка

`productPrice` имеет следующую структуру:
* `price` – цена продукта, число
* `currency` – валюта, строка


Пример запуска функции:
```javascript
const productSpecs = { name: 'Product 1', sku: '123' };
const productInfo = { description: 'Product 1 description', manufacturer: 'ABC' };
const productPrice = { price: 100, currency: 'USD' };

mergeObjects(productSpecs, productInfo, productPrice);

{
    name: 'Product 1',
    sku: '123',
    description: 'Product 1 description',
    manufacturer: 'ABC',
    price: 100,
    currency: 'USD'
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
function mergeObjects(productSpecs, productInfo, productPrice) {
  return {
    name: productSpecs.name,
    sku: productSpecs.sku,
    description: productInfo.description,
    manufacturer: productInfo.manufacturer,
    price: productPrice.price,
    currency: productPrice.currency,
  };
}
// SOLUTIONEND

// OPENTESTSSTART
it('Created function mergeObjects', () => {
  expect(mergeObjects).to.be.a('function');
});

it('mergeObjects({ name: "Product 1", sku: "123" }, { description: "Product 1 description", manufacturer: "ABC" }, { price: 100, currency: "USD" }) should return { name: "Product 1", sku: "123", description: "Product 1 description", manufacturer: "ABC", price: 100, currency: "USD" }', () => {
  expect(
    mergeObjects(
      { name: 'Product 1', sku: '123' },
      { description: 'Product 1 description', manufacturer: 'ABC' },
      { price: 100, currency: 'USD' },
    ),
  ).to.deep.equal({
    name: 'Product 1',
    sku: '123',
    description: 'Product 1 description',
    manufacturer: 'ABC',
    price: 100,
    currency: 'USD',
  });
});

it('mergeObjects({ name: "Product 2", sku: "456" }, { description: "Product 2 description", manufacturer: "DEF" }, { price: 200, currency: "EUR" }) should return { name: "Product 2", sku: "456", description: "Product 2 description", manufacturer: "DEF", price: 200, currency: "EUR" }', () => {
  expect(
    mergeObjects(
      { name: 'Product 2', sku: '456' },
      { description: 'Product 2 description', manufacturer: 'DEF' },
      { price: 200, currency: 'EUR' },
    ),
  ).to.deep.equal({
    name: 'Product 2',
    sku: '456',
    description: 'Product 2 description',
    manufacturer: 'DEF',
    price: 200,
    currency: 'EUR',
  });
});

it('mergeObjects({ name: "Product 3", sku: "789" }, { description: "Product 3 description", manufacturer: "GHI" }, { price: 300, currency: "GBP" }) should return { name: "Product 3", sku: "789", description: "Product 3 description", manufacturer: "GHI", price: 300, currency: "GBP" }', () => {
  expect(
    mergeObjects(
      { name: 'Product 3', sku: '789' },
      { description: 'Product 3 description', manufacturer: 'GHI' },
      { price: 300, currency: 'GBP' },
    ),
  ).to.deep.equal({
    name: 'Product 3',
    sku: '789',
    description: 'Product 3 description',
    manufacturer: 'GHI',
    price: 300,
    currency: 'GBP',
  });
});

it('mergeObjects({ name: "Product 4", sku: "101112" }, { description: "Product 4 description", manufacturer: "JKL" }, { price: 400, currency: "USD" }) should return { name: "Product 4", sku: "101112", description: "Product 4 description", manufacturer: "JKL", price: 400, currency: "USD" }', () => {
  expect(
    mergeObjects(
      { name: 'Product 4', sku: '101112' },
      { description: 'Product 4 description', manufacturer: 'JKL' },
      { price: 400, currency: 'USD' },
    ),
  ).to.deep.equal({
    name: 'Product 4',
    sku: '101112',
    description: 'Product 4 description',
    manufacturer: 'JKL',
    price: 400,
    currency: 'USD',
  });
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
