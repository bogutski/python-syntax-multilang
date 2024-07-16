// NAMEEN:
// NAMERU:Сортировка продуктов по весу и цене

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `sortProductsByWeightAndPrice`, которая принимает массив объектов продуктов.

Каждый объект содержит свойства `name`, `weight`, и `price`.

Функция должна возвращать новый массив, содержащий продукты, отсортированные сначала по весу в порядке возрастания, а при равенстве веса — по цене в порядке убывания.


Примеры запуска функции:
```javascript
const products = [
  { name: "Product A", weight: 200, price: 1.99 },
  { name: "Product B", weight: 150, price: 2.99 },
  { name: "Product C", weight: 150, price: 3.99 },
  { name: "Product D", weight: 100, price: 0.99 }
];

console.log(sortProductsByWeightAndPrice(products));
// Вывод: [
//   { name: "Product D", weight: 100, price: 0.99 },
//   { name: "Product C", weight: 150, price: 3.99 },
//   { name: "Product B", weight: 150, price: 2.99 },
//   { name: "Product A", weight: 200, price: 1.99 }
// ]
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
function sortProductsByWeightAndPrice(){

}
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function sortProductsByWeightAndPrice(arr) {
  return arr.slice().sort((a, b) => {
    if(a.weight === b.weight) return b.price - a.price
    else return a.weight - b.weight
  });
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function sortProductsByWeightAndPrice', () => {
  expect(sortProductsByWeightAndPrice).to.be.a('function');
});

it('Function sortProductsByWeightAndPrice should include method sort()', () => {
  const res = sortProductsByWeightAndPrice.toString()
  expect(res).to.include('.sort(')
});

it('sortProductsByWeightAndPrice should sort products first by weight ascending, then by price descending', () => {
  const products = [
    { name: "Product A", weight: 200, price: 1.99 },
    { name: "Product B", weight: 150, price: 2.99 },
    { name: "Product C", weight: 150, price: 3.99 },
    { name: "Product D", weight: 100, price: 0.99 }
  ];
  expect(sortProductsByWeightAndPrice(products)).to.deep.equal([
    { name: "Product D", weight: 100, price: 0.99 },
    { name: "Product C", weight: 150, price: 3.99 },
    { name: "Product B", weight: 150, price: 2.99 },
    { name: "Product A", weight: 200, price: 1.99 }
  ]);
});

it('sortProductsByWeightAndPrice with an empty array should return an empty array', () => {
  expect(sortProductsByWeightAndPrice([])).to.deep.equal([]);
});

it('sortProductsByWeightAndPrice with one product should return the same single product array', () => {
  const product = [{ name: "Single Product", weight: 120, price: 4.99 }];
  expect(sortProductsByWeightAndPrice(product)).to.deep.equal(product);
});

it('sortProductsByWeightAndPrice handles products with the same weight and different prices', () => {
  const products = [
    { name: "Product A", weight: 150, price: 1.00 },
    { name: "Product B", weight: 150, price: 3.00 }
  ];
  expect(sortProductsByWeightAndPrice(products)).to.deep.equal([
    { name: "Product B", weight: 150, price: 3.00 },
    { name: "Product A", weight: 150, price: 1.00 }
  ]);
});

it('sortProductsByWeightAndPrice sorts correctly when all products have the same price but different weights', () => {
  const products = [
    { name: "Product A", weight: 200, price: 2.99 },
    { name: "Product B", weight: 100, price: 2.99 }
  ];
  expect(sortProductsByWeightAndPrice(products)).to.deep.equal([
    { name: "Product B", weight: 100, price: 2.99 },
    { name: "Product A", weight: 200, price: 2.99 }
  ]);
});

it('sortProductsByWeightAndPrice should sort by price descending when weights are the same', () => {
  const products = [
    { name: "Product A", weight: 150, price: 2.50 },
    { name: "Product B", weight: 150, price: 3.50 }
  ];
  expect(sortProductsByWeightAndPrice(products)).to.deep.equal([
    { name: "Product B", weight: 150, price: 3.50 },
    { name: "Product A", weight: 150, price: 2.50 }
  ]);
});

it('sortProductsByWeightAndPrice should sort a mix of different weights and prices correctly', () => {
  const products = [
    { name: "Product A", weight: 200, price: 1.99 },
    { name: "Product B", weight: 100, price: 0.99 },
    { name: "Product C", weight: 150, price: 2.99 }
  ];
  expect(sortProductsByWeightAndPrice(products)).to.deep.equal([
    { name: "Product B", weight: 100, price: 0.99 },
    { name: "Product C", weight: 150, price: 2.99 },
    { name: "Product A", weight: 200, price: 1.99 }
  ]);
});

it('sortProductsByWeightAndPrice should handle large arrays efficiently', () => {
  let largeArray = Array.from({ length: 1000 }, (_, i) => ({ name: `Product ${i}`, weight: i % 50, price: Math.random() * 100 }));
  largeArray = sortProductsByWeightAndPrice(largeArray);
  expect(largeArray[0].weight <= largeArray[1].weight).to.be.true;
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
