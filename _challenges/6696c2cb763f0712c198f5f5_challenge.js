// NAMEEN:
// NAMERU:Сортировка товаров по цене и алфавиту

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `sortProductsByPriceAndName`, которая принимает массив объектов продуктов.

Каждый из объектов содержит свойства `name` и `price`.

Функция должна возвращать новый массив, содержащий продукты, отсортированные сначала по возрастанию цены, а при равенстве цен — по алфавиту названия.


Примеры запуска функции:
```javascript
const products = [
  { name: "Apple", price: 50 },
  { name: "Orange", price: 30 },
  { name: "Banana", price: 50 },
  { name: "Pear", price: 30 }
];

console.log(sortProductsByPriceAndName(products));
// Вывод: [
// { name: "Orange", price: 30 },
// { name: "Pear", price: 30 },
// { name: "Apple", price: 50 },
// { name: "Banana", price: 50 }]
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
function sortProductsByPriceAndName(){

}
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function sortProductsByPriceAndName(arr) {
  return arr.slice().sort((a, b) => {
    return a.price === b.price ? a.name.localeCompare(b.name) : a.price - b.price
  });
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function sortProductsByPriceAndName', () => {
  expect(sortProductsByPriceAndName).to.be.a('function');
});

it('Function sortProductsByPriceAndName should include method sort()', () => {
  const res = sortProductsByPriceAndName.toString()
  expect(res).to.include('.sort(')
});

it('sortProductsByPriceAndName([{ name: "Apple", price: 50 }, { name: "Orange", price: 30 }, { name: "Banana", price: 50 }, { name: "Pear", price: 30 }]) should sort by price then alphabetically by name', () => {
  const products = [
    { name: "Apple", price: 50 },
    { name: "Orange", price: 30 },
    { name: "Banana", price: 50 },
    { name: "Pear", price: 30 }
  ];
  expect(sortProductsByPriceAndName(products)).to.deep.equal([
    { name: "Orange", price: 30 },
    { name: "Pear", price: 30 },
    { name: "Apple", price: 50 },
    { name: "Banana", price: 50 }
  ]);
});

it('sortProductsByPriceAndName([]) should return an empty array', () => {
  expect(sortProductsByPriceAndName([])).to.deep.equal([]);
});

it('sortProductsByPriceAndName([{ name: "Grape", price: 100 }]) should return the same single-product array', () => {
  expect(sortProductsByPriceAndName([{ name: "Grape", price: 100 }])).to.deep.equal([{ name: "Grape", price: 100 }]);
});

it('sortProductsByPriceAndName([{ name: "Mango", price: 20 }, { name: "Kiwi", price: 20 }]) should sort alphabetically when prices are the same', () => {
  expect(sortProductsByPriceAndName([{ name: "Mango", price: 20 }, { name: "Kiwi", price: 20 }])).to.deep.equal([{ name: "Kiwi", price: 20 }, { name: "Mango", price: 20 }]);
});

it('sortProductsByPriceAndName([{ name: "Lemon", price: 15 }, { name: "Lime", price: 15 }, { name: "Watermelon", price: 30 }]) should first sort by price and then alphabetically', () => {
  expect(sortProductsByPriceAndName([{ name: "Lemon", price: 15 }, { name: "Lime", price: 15 }, { name: "Watermelon", price: 30 }])).to.deep.equal([{ name: "Lemon", price: 15 }, { name: "Lime", price: 15 }, { name: "Watermelon", price: 30 }]);
});

it('sortProductsByPriceAndName([{ name: "Cherry", price: 30 }, { name: "Apple", price: 30 }, { name: "Banana", price: 25 }]) should return correctly sorted array', () => {
  const products = [
    { name: "Cherry", price: 30 },
    { name: "Apple", price: 30 },
    { name: "Banana", price: 25 }
  ];
  expect(sortProductsByPriceAndName(products)).to.deep.equal([
    { name: "Banana", price: 25 },
    { name: "Apple", price: 30 },
    { name: "Cherry", price: 30 }
  ]);
});

it('sortProductsByPriceAndName([{ name: "Fig", price: 50 }, { name: "Date", price: 50 }]) should handle products with identical prices', () => {
  const products = [{ name: "Fig", price: 50 }, { name: "Date", price: 50 }];
  expect(sortProductsByPriceAndName(products)).to.deep.equal([{ name: "Date", price: 50 }, { name: "Fig", price: 50 }]);
});

it('sortProductsByPriceAndName([{ name: "Eggplant", price: 40 }, { name: "Cucumber", price: 40 }, { name: "Carrot", price: 20 }]) should sort products by price ascending and by name ascending within the same price', () => {
  const products = [
    { name: "Eggplant", price: 40 },
    { name: "Cucumber", price: 40 },
    { name: "Carrot", price: 20 }
  ];
  expect(sortProductsByPriceAndName(products)).to.deep.equal([
    { name: "Carrot", price: 20 },
    { name: "Cucumber", price: 40 },
    { name: "Eggplant", price: 40 }
  ]);
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
