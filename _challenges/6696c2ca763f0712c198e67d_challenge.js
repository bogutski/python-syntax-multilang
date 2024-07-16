// NAMEEN:
// NAMERU:Одинаковые ли продукты. Сравнение объектов

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
На склад привезли новую партию продуктов.

Нужно написать функцию `isSameProduct`, которая должна вернуть `true`, если среди продуктов есть одинаковые, и `false` в противном случае.

Функция принимает параметры:
* `product1` – объект, содержащий информацию о первом продукте
* `product2` – объект, содержащий информацию о втором продукте
* `product3` – объект, содержащий информацию о третьем продукте

В продуктах есть свойства:
* `sku` – уникальный идентификатор, строка
* `code` – код продукта, строка
* `name` – название продукта, строка
* `price` – цена продукта, число

Функция должна вернуть `true`, если есть продукты с одинаковыми свойствами `sku` и `code`. В противном случае функция должна вернуть `false`.

Сравнение продуктов должно происходить только по свойствам `sku` и `code`. Остальные свойства не должны учитываться.

Пример запуска функции:
```javascript
const product1 = { sku: '123', code: 'abc', name: 'Product 1', price: 100 };
const product2 = { sku: '123', code: 'abc', name: 'Product 2', price: 200 };
const product3 = { sku: '124', code: 'abc', name: 'Product 3', price: 300 };

isSameProduct(product1, product2, product3); // true. Продукты product1 и product2 одинаковые

const product10 = { sku: '121', code: 'abc', name: 'Product 1', price: 100 };
const product20 = { sku: '123', code: 'abcd', name: 'Product 2', price: 100 };
const product30 = { sku: '124', code: 'abc', name: 'Product 3', price: 100 };

isSameProduct(product10, product20, product30); // false. Все продукты разные
```

Сравните каждый продукт с каждым.

Если найдётся хотя бы одна пара продуктов, у которых совпадают свойства `sku` и `code`, то функция должна вернуть `true`, иначе – `false`.


INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
fun
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function isSameProduct(product1, product2, product3) {
  return (
    (product1.sku === product2.sku && product1.code === product2.code) ||
    (product1.sku === product3.sku && product1.code === product3.code) ||
    (product2.sku === product3.sku && product2.code === product3.code)
  );
}
// SOLUTIONEND

// OPENTESTSSTART
it('Created function isSameProduct', () => {
  expect(isSameProduct).to.be.a('function');
});

it('isSameProduct({ sku: "123", code: "abc", name: "Product 1", price: 100 }, { sku: "123", code: "abc", name: "Product 2", price: 200 }, { sku: "124", code: "abc", name: "Product 3", price: 300 }) should return true', () => {
  const product1 = { sku: '123', code: 'abc', name: 'Product 1', price: 100 };
  const product2 = { sku: '123', code: 'abc', name: 'Product 2', price: 200 };
  const product3 = { sku: '124', code: 'abc', name: 'Product 3', price: 300 };
  expect(isSameProduct(product1, product2, product3)).to.be.true;
});

it('isSameProduct({ sku: "121", code: "abc", name: "Product 1", price: 100 }, { sku: "123", code: "abcd", name: "Product 2", price: 100 }, { sku: "124", code: "abc", name: "Product 3", price: 100 }) should return false', () => {
  const product1 = { sku: '121', code: 'abc', name: 'Product 1', price: 100 };
  const product2 = { sku: '123', code: 'abcd', name: 'Product 2', price: 100 };
  const product3 = { sku: '124', code: 'abc', name: 'Product 3', price: 100 };
  expect(isSameProduct(product1, product2, product3)).to.be.false;
});

it('isSameProduct({ sku: "123", code: "abc", name: "Product 1", price: 100 }, { sku: "123", code: "abc", name: "Product 2", price: 200 }, { sku: "123", code: "abc", name: "Product 3", price: 300 }) should return true', () => {
  const product1 = { sku: '123', code: 'abc', name: 'Product 1', price: 100 };
  const product2 = { sku: '123', code: 'abc', name: 'Product 2', price: 200 };
  const product3 = { sku: '123', code: 'abc', name: 'Product 3', price: 300 };
  expect(isSameProduct(product1, product2, product3)).to.be.true;
});

// 1 and 2 are the same
it('isSameProduct({ sku: "123", code: "abc", name: "Product 1", price: 100 }, { sku: "123", code: "abc", name: "Product 2", price: 200 }, { sku: "124", code: "abc", name: "Product 3", price: 300 }) should return true', () => {
  const product1 = { sku: '123', code: 'abc', name: 'Product 1', price: 100 };
  const product2 = { sku: '123', code: 'abc', name: 'Product 2', price: 200 };
  const product3 = { sku: '124', code: 'abc', name: 'Product 3', price: 300 };
  expect(isSameProduct(product1, product2, product3)).to.be.true;
});

// 1 and 3 are the same
it('isSameProduct({ sku: "123", code: "abc", name: "Product 1", price: 100 }, { sku: "124", code: "abc", name: "Product 2", price: 200 }, { sku: "123", code: "abc", name: "Product 3", price: 300 }) should return true', () => {
  const product1 = { sku: '123', code: 'abc', name: 'Product 1', price: 100 };
  const product2 = { sku: '124', code: 'abc', name: 'Product 2', price: 200 };
  const product3 = { sku: '123', code: 'abc', name: 'Product 3', price: 300 };
  expect(isSameProduct(product1, product2, product3)).to.be.true;
});

// 2 and 3 are the same
it('isSameProduct({ sku: "124", code: "abc", name: "Product 1", price: 100 }, { sku: "123", code: "abc", name: "Product 2", price: 200 }, { sku: "123", code: "abc", name: "Product 3", price: 300 }) should return true', () => {
  const product1 = { sku: '124', code: 'abc', name: 'Product 1', price: 100 };
  const product2 = { sku: '123', code: 'abc', name: 'Product 2', price: 200 };
  const product3 = { sku: '123', code: 'abc', name: 'Product 3', price: 300 };
  expect(isSameProduct(product1, product2, product3)).to.be.true;
});

// 1 and 2 are the same, 2 and 3 are the same
it('isSameProduct({ sku: "123", code: "abc", name: "Product 1", price: 100 }, { sku: "123", code: "abc", name: "Product 2", price: 200 }, { sku: "123", code: "abc", name: "Product 3", price: 300 }) should return true', () => {
  const product1 = { sku: '123', code: 'abc', name: 'Product 1', price: 100 };
  const product2 = { sku: '123', code: 'abc', name: 'Product 2', price: 200 };
  const product3 = { sku: '123', code: 'abc', name: 'Product 3', price: 300 };
  expect(isSameProduct(product1, product2, product3)).to.be.true;
});

// all different
it('isSameProduct({ sku: "121", code: "abc1", name: "Product 1", price: 200 }, { sku: "122", code: "ab2", name: "Product 1", price: 200 }, { sku: "123", code: "abc3", name: "Product 1", price: 200 }) should return false', () => {
  const product1 = { sku: '121', code: 'abc1', name: 'Product 1', price: 200 };
  const product2 = { sku: '122', code: 'ab2', name: 'Product 1', price: 200 };
  const product3 = { sku: '123', code: 'abc3', name: 'Product 1', price: 200 };
  expect(isSameProduct(product1, product2, product3)).to.be.false;
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
