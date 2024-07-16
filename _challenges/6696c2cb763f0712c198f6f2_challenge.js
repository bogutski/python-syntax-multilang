// NAMEEN:
// NAMERU:Расширенная фильтрация и преобразование данных заказов

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `summarizeAndFilterOrders`, которая принимает:
 * orders - массив заказов (array of objects),
 * minTotal - минимальную общую сумму заказа для фильтрации (number),
 * categories - массив допустимых категорий (array of strings),
 * regions - массив допустимых регионов (array of strings).

Функция должна сначала суммировать массивы сумм в каждом заказе, затем фильтровать заказы, которые соответствуют минимальной сумме, категории и региону.

Возвращаемые данные должны быть в новом формате, как указанно в примере.


Примеры запуска функции:
```javascript
const orders = [
  { id: 1, total: [300, 100, 50], category: "Electronics", region: "North" },
  { id: 2, total: [50, 45, 80], category: "Clothing", region: "South" }
];

console.log(summarizeAndFilterOrders(orders, 200, ["Electronics", "Clothing"], ["North", "South"]));
// Вывод: [{ id: 1, total: 450, category: "Electronics", region: "North" }]
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
function summarizeAndFilterOrders(){

}
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function summarizeAndFilterOrders(orders, minTotal, categories, regions) {
  return orders
      .map(obj => ({...obj, total: obj.total.reduce((acc, n) => acc + n, 0)}))
      .filter(({total, category, region}) =>
          total >= minTotal &&
          categories.includes(category) &&
          regions.includes(region)
      )
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function summarizeAndFilterOrders', () => {
  expect(summarizeAndFilterOrders).to.be.a('function');
});

it("Function summarizeAndFilterOrders should include filter method", () => {
  const result = summarizeAndFilterOrders.toString();
  expect(result).to.include('.filter(');
});

it("summarizeAndFilterOrders should sum totals and filter by min total, categories, and regions, returning the new format", () => {
  const orders = [
    { id: 1, total: [300, 100, 50], category: "Electronics", region: "North" },
    { id: 2, total: [150, 10, 45, 80], category: "Clothing", region: "South" }
  ];
  expect(summarizeAndFilterOrders(orders, 200, ["Electronics", "Clothing"], ["North", "South"])).to.deep.equal([
    { id: 1, total: 450, category: "Electronics", region: "North" }, { id: 2, total: 285, category: "Clothing", region: "South" }
  ]);
});

it("summarizeAndFilterOrders should return an empty array if no orders meet the criteria", () => {
  const orders = [
    { id: 3, total: [100, 50], category: "Electronics", region: "West" }
  ];
  expect(summarizeAndFilterOrders(orders, 200, ["Electronics"], ["West"])).to.deep.equal([]);
});

it("summarizeAndFilterOrders should handle cases with multiple categories and regions correctly", () => {
  const orders = [
    { id: 4, total: [300, 250], category: "Furniture", region: "North" },
    { id: 5, total: [100, 100, 100], category: "Furniture", region: "East" }
  ];
  expect(summarizeAndFilterOrders(orders, 500, ["Furniture"], ["North", "East"])).to.deep.equal([
    { id: 4, total: 550, category: "Furniture", region: "North" }
  ]);
});

it("summarizeAndFilterOrders should handle orders that exactly meet the minimum total requirement", () => {
  const orders = [
    { id: 6, total: [100, 50, 50], category: "Electronics", region: "North" }
  ];
  expect(summarizeAndFilterOrders(orders, 200, ["Electronics"], ["North"])).to.deep.equal([
    { id: 6, total: 200, category: "Electronics", region: "North" }
  ]);
});

it("summarizeAndFilterOrders should exclude orders below the minimum total requirement", () => {
  const orders = [
    { id: 7, total: [100, 95], category: "Electronics", region: "North" }
  ];
  expect(summarizeAndFilterOrders(orders, 200, ["Electronics"], ["North"])).to.deep.equal([]);
});

it("summarizeAndFilterOrders should include orders from multiple matching regions", () => {
  const orders = [
    { id: 8, total: [150, 100], category: "Clothing", region: "North" },
    { id: 9, total: [120, 90], category: "Clothing", region: "South" }
  ];
  expect(summarizeAndFilterOrders(orders, 200, ["Clothing"], ["North", "South"])).to.deep.equal([
    { id: 8, total: 250, category: "Clothing", region: "North" },
    { id: 9, total: 210, category: "Clothing", region: "South" }
  ]);
});

it("summarizeAndFilterOrders should return empty array when no categories match", () => {
  const orders = [
    { id: 10, total: [200, 300], category: "Home Goods", region: "West" }
  ];
  expect(summarizeAndFilterOrders(orders, 100, ["Electronics", "Clothing"], ["West"])).to.deep.equal([]);
});

it("summarizeAndFilterOrders should correctly sum and filter large number of small amounts", () => {
  const orders = [
    { id: 11, total: Array(100).fill(5), category: "Books", region: "East" }  // 100 * 5 = 500
  ];
  expect(summarizeAndFilterOrders(orders, 500, ["Books"], ["East"])).to.deep.equal([
    { id: 11, total: 500, category: "Books", region: "East" }
  ]);
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
