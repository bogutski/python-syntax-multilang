// NAMEEN:
// NAMERU:Фильтрация товаров по категориям

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `filterByCategory`, которая принимает массив объектов, представляющих товары и строку.

 * Ключи объектов: `name` и `category`.
 * Строка - указывает категорию.

Функция должна возвращать новый массив, содержащий только те товары, которые соответствуют указанной категории.


Примеры запуска функции:
```javascript
const products = [
  { name: "Laptop", category: "Electronics" },
  { name: "Cheese", category: "Food" },
  { name: "TV", category: "Electronics" },
  { name: "Apples", category: "Food" }
];

console.log(filterByCategory(products, "Electronics"));
// [{ name: "Laptop", category: "Electronics" }, { name: "TV", category: "Electronics" }]
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
function filterByCategory(){

}
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function filterByCategory(array, string) {
  return array.filter(({category}) => category === string);
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function filterByCategory', () => {
  expect(filterByCategory).to.be.a('function');
});

it("Function filterByCategory should include filter method", () => {
  const result = filterByCategory.toString();
  expect(result).to.include('.filter(');
});

it("filterByCategory should return products that match the 'Electronics' category", () => {
  const products = [
    { name: "Laptop", category: "Electronics" },
    { name: "Cheese", category: "Food" },
    { name: "TV", category: "Electronics" },
    { name: "Apples", category: "Food" }
  ];
  expect(filterByCategory(products, "Electronics")).to.deep.equal([
    { name: "Laptop", category: "Electronics" },
    { name: "TV", category: "Electronics" }
  ]);
});

it("filterByCategory should return an empty array when no products match the category", () => {
  const products = [
    { name: "Laptop", category: "Electronics" },
    { name: "TV", category: "Electronics" }
  ];
  expect(filterByCategory(products, "Clothing")).to.deep.equal([]);
});

it("filterByCategory should handle case where products array is empty", () => {
  expect(filterByCategory([], "Electronics")).to.deep.equal([]);
});

it("filterByCategory should not alter the original products array", () => {
  const products = [{ name: "Laptop", category: "Electronics" }];
  filterByCategory(products, "Electronics");
  expect(products).to.deep.equal([{ name: "Laptop", category: "Electronics" }]);
});

it("filterByCategory should handle products with mixed case categories", () => {
  const products = [
    { name: "Laptop", category: "electronics" },
    { name: "TV", category: "Electronics" }
  ];
  expect(filterByCategory(products, "Electronics")).to.deep.equal([{ name: "TV", category: "Electronics" }]);
});

it("filterByCategory should return multiple items for a popular category", () => {
  const products = [
    { name: "Cheese", category: "Food" },
    { name: "Apples", category: "Food" },
    { name: "Banana", category: "Food" }
  ];
  expect(filterByCategory(products, "Food")).to.deep.equal([
    { name: "Cheese", category: "Food" },
    { name: "Apples", category: "Food" },
    { name: "Banana", category: "Food" }
  ]);
});

it("filterByCategory should be case sensitive", () => {
  const products = [
    { name: "Mouse", category: "Electronics" },
    { name: "Keyboard", category: "electronics" }
  ];
  expect(filterByCategory(products, "electronics")).to.deep.equal([
    { name: "Keyboard", category: "electronics" }
  ]);
});

it("filterByCategory should correctly filter when multiple products have the same category", () => {
  const products = [
    { name: "T-shirt", category: "Clothing" },
    { name: "Jeans", category: "Clothing" },
    { name: "Cap", category: "Clothing" }
  ];
  expect(filterByCategory(products, "Clothing")).to.deep.equal([
    { name: "T-shirt", category: "Clothing" },
    { name: "Jeans", category: "Clothing" },
    { name: "Cap", category: "Clothing" }
  ]);
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
