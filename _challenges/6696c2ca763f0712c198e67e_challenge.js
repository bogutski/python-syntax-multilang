// NAMEEN:
// NAMERU:Создайте копию объекта продукта

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Создайте функцию `copyProduct`.

Параметры функции:
* `product` – объект, содержащий информацию о продукте

Функция должна вернуть копию объекта `product`.

Объект `product` имеет следующую структуру:
* `name` – название продукта, строка
* `price` – цена продукта, число
* `sku` – уникальный идентификатор, строка
* `code` – код продукта, строка

Пример запуска функции:
```javascript
const product = { name: 'Product 1', price: 100, sku: '123', code: 'abc' };
copyProduct(product); // { name: 'Product 1', price: 100, sku: '123', code: 'abc' }
```

Если вы напишите такое решение:
```javascript
function copyProduct(product) {
  return product;
}
```
то это решение будет неверным, так как вы не создаёте копию объекта, а возвращаете ссылку на объект.

Внутри функции `copyProduct` создайте новый объект, скопируйте в него все свойства объекта `product` и верните его.

Копирование объекта должно происходить только по свойствам.

INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
fun
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function copyProduct(product) {
  return {
    name: product.name,
    price: product.price,
    sku: product.sku,
    code: product.code,
  };
}
// SOLUTIONEND

// OPENTESTSSTART
it('Created function copyProduct', () => {
  expect(copyProduct).to.be.a('function');
});

it('Function copyProduct returns new object', () => {
  const product = { name: 'Product 1', price: 100, sku: '123', code: 'abc' };
  const productCopy = copyProduct(product);
  expect(productCopy).to.be.an('object');
  expect(productCopy).to.not.equal(product);
});

it('Function copyProduct returns object with same properties', () => {
  const product = { name: 'Product 1', price: 100, sku: '123', code: 'abc' };
  const productCopy = copyProduct(product);
  expect(productCopy).to.have.all.keys('name', 'price', 'sku', 'code');
});

it('Function copyProduct returns object with same values', () => {
  const product = { name: 'Product 1', price: 100, sku: '123', code: 'abc' };
  const productCopy = copyProduct(product);
  expect(productCopy).to.deep.equal(product);
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
