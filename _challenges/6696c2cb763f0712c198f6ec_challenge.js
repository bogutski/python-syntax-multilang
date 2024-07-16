// NAMEEN:
// NAMERU:Фильтрация и поиск по критериям

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `filterByCriteria`, которая принимает массив объектов, представляющих товары, и объект `criteria`, содержащий различные критерии фильтрации.

Функция должна возвращать новый массив, содержащий товары, которые соответствуют всем предоставленным критериям.

Ключи могут быть разными в объектах.


Примеры запуска функции:
```javascript
const products = [
  { name: "Laptop", category: "Electronics", price: 1000 },
  { name: "Cheese", category: "Food", price: 5 },
  { name: "Camera", category: "Electronics", price: 500 },
  { name: "Apple", category: "Food", price: 2 }
];
const criteria = { category: "Electronics", price: 500 };
console.log(filterByCriteria(products, criteria));
// [{ name: "Camera", category: "Electronics", price: 500 }]


const products = [
  { name: "Laptop", category: "Electronics", price: 1000, inStock: true },
  { name: "Desktop", category: "Electronics", price: 1500, inStock: true },
  { name: "Phone", category: "Electronics", price: 500, inStock: false }
];
const criteria = { category: "Electronics", inStock: true };
console.log(filterByCriteria(products, criteria));
// [{name: 'Laptop',
//   category: 'Electronics',
//   price: 1000,
//   inStock: true},
//  {name: 'Desktop',
//   category: 'Electronics',
//   price: 1500,
//   inStock: true}]
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
function filterByCriteria(){

}
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function filterByCriteria(arr, criteria) {
  return arr.filter(obj => Object.keys(criteria).every(key => criteria[key] === obj[key]));
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function filterByCriteria', () => {
  expect(filterByCriteria).to.be.a('function');
});

it("Function filterByCriteria should include filter method", () => {
  const result = filterByCriteria.toString();
  expect(result).to.include('.filter(');
});

it("filterByCriteria([{name: 'Laptop', category: 'Electronics', price: 1000}, {name: 'Camera', category: 'Electronics', price: 500}], {category: 'Electronics', price: 500}) should return [{name: 'Camera', category: 'Electronics', price: 500}]", () => {
  const products = [
    { name: "Laptop", category: "Electronics", price: 1000 },
    { name: "Camera", category: "Electronics", price: 500 }
  ];
  const criteria = { category: "Electronics", price: 500 };
  expect(filterByCriteria(products, criteria)).to.deep.equal([
    { name: "Camera", category: "Electronics", price: 500 }
  ]);
});

it("filterByCriteria([{name: 'Laptop', category: 'Electronics', price: 1000}], {category: 'Food'}) should return []", () => {
  const products = [
    { name: "Laptop", category: "Electronics", price: 1000 }
  ];
  const criteria = { category: "Food" };
  expect(filterByCriteria(products, criteria)).to.deep.equal([]);
});

it("filterByCriteria([], {category: 'Electronics'}) should return []", () => {
  expect(filterByCriteria([], {category: 'Electronics'})).to.deep.equal([]);
});

it("filterByCriteria([{name: 'Laptop', category: 'Electronics'}], {}) should return [{name: 'Laptop', category: 'Electronics'}]", () => {
  const products = [
    { name: "Laptop", category: "Electronics" }
  ];
  expect(filterByCriteria(products, {})).to.deep.equal([
    { name: "Laptop", category: "Electronics" }
  ]);
});

it("filterByCriteria([{name: 'Cheese', category: 'Food', price: 5}, {name: 'Apple', category: 'Food', price: 2}], {category: 'Food', price: 5}) should return [{name: 'Cheese', category: 'Food', price: 5}]", () => {
  const products = [
    { name: "Cheese", category: "Food", price: 5 },
    { name: "Apple", category: "Food", price: 2 }
  ];
  const criteria = { category: "Food", price: 5 };
  expect(filterByCriteria(products, criteria)).to.deep.equal([{ name: "Cheese", category: "Food", price: 5 }]);
});

it("filterByCriteria([{name: 'Camera', category: 'Electronics', price: 500}], {price: 1000}) should return []", () => {
  const products = [
    { name: "Camera", category: "Electronics", price: 500 }
  ];
  const criteria = { price: 1000 };
  expect(filterByCriteria(products, criteria)).to.deep.equal([]);
});

it("filterByCriteria([{name: 'Camera', category: 'Electronics', inStock: true}, {name: 'TV', category: 'Electronics', inStock: false}], {inStock: true}) should return [{name: 'Camera', category: 'Electronics', inStock: true}]", () => {
  const products = [
    { name: "Camera", category: "Electronics", inStock: true },
    { name: "TV", category: "Electronics", inStock: false }
  ];
  const criteria = { inStock: true };
  expect(filterByCriteria(products, criteria)).to.deep.equal([
    { name: "Camera", category: "Electronics", inStock: true }
  ]);
});

it("filterByCriteria([{name: 'Laptop', category: 'Electronics', price: 1000, inStock: true}, {name: 'Desktop', category: 'Electronics', price: 1500, inStock: true}, {name: 'Phone', category: 'Electronics', price: 500, inStock: false}], {category: 'Electronics', inStock: true}) should return [{name: 'Laptop', category: 'Electronics', price: 1000, inStock: true}, {name: 'Desktop', category: 'Electronics', price: 1500, inStock: true}]", () => {
  const products = [
    { name: "Laptop", category: "Electronics", price: 1000, inStock: true },
    { name: "Desktop", category: "Electronics", price: 1500, inStock: true },
    { name: "Phone", category: "Electronics", price: 500, inStock: false }
  ];
  const criteria = { category: "Electronics", inStock: true };
  expect(filterByCriteria(products, criteria)).to.deep.equal([
    { name: "Laptop", category: "Electronics", price: 1000, inStock: true },
    { name: "Desktop", category: "Electronics", price: 1500, inStock: true }
  ]);
});

it("filterByCriteria([{name: 'TV', category: 'Electronics', price: 800}], {name: 'TV'}) should return [{name: 'TV', category: 'Electronics', price: 800}]", () => {
  const products = [
    { name: "TV", category: "Electronics", price: 800 }
  ];
  const criteria = { name: "TV" };
  expect(filterByCriteria(products, criteria)).to.deep.equal([
    { name: "TV", category: "Electronics", price: 800 }
  ]);
});

it("filterByCriteria([{name: 'Mouse', category: 'Electronics'}, {name: 'Keyboard', category: 'Electronics'}], {category: 'Electronics'}) should return [{name: 'Mouse', category: 'Electronics'}, {name: 'Keyboard', category: 'Electronics'}]", () => {
  const products = [
    { name: "Mouse", category: "Electronics" },
    { name: "Keyboard", category: "Electronics" }
  ];
  expect(filterByCriteria(products, { category: "Electronics" })).to.deep.equal([
    { name: "Mouse", category: "Electronics" },
    { name: "Keyboard", category: "Electronics" }
  ]);
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
