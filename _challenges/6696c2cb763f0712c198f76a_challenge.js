// NAMEEN:
// NAMERU:Найти последний самый дорогой продукт в категории и отобразить отфильтрованные продукты

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `findLastExpensiveInCategory`, которая принимает:
 * массив объектов (продукты),
 * строку (категория),
 * число (минимальная цена).

Функция должна сначала отфильтровать массив, оставляя только продукты указанной категории с ценой выше или равной минимальной.

Затем функция должна находить последний самый дорогой продукт среди отфильтрованных.

Функция возвращает объект с двумя свойствами: `filtered`, содержащий массив отфильтрованных продуктов, и `maxPrice`, содержащий последний продукт с максимальной ценой или `undefined`, если таковых нет.


Примеры запуска функции:
```javascript
console.log(findLastExpensiveInCategory([{name: 'Apple', type: 'Fruit', price: 3}, {name: 'Banana', type: 'Fruit', price: 1}, {name: 'Cherry', type: 'Fruit', price: 5}], 'Fruit', 2))
// {
//   filtered: [
//     { name: 'Apple', type: 'Fruit', price: 3 },
//     { name: 'Cherry', type: 'Fruit', price: 5 }
//   ],
//   maxPrice: { name: 'Cherry', type: 'Fruit', price: 5 }
// }

console.log(findLastExpensiveInCategory([{name: 'Carrot', type: 'Vegetable', price: 2}, {name: 'Celery', type: 'Vegetable', price: 3}, {name: 'Beet', type: 'Vegetable', price: 1}], 'Vegetable', 2))
// {
//   filtered: [
//     { name: 'Carrot', type: 'Vegetable', price: 2 },
//     { name: 'Celery', type: 'Vegetable', price: 3 }
//   ],
//   maxPrice: { name: 'Celery', type: 'Vegetable', price: 3 }
// }

console.log(findLastExpensiveInCategory([{name: 'Milk', type: 'Dairy', price: 4}, {name: 'Cheese', type: 'Dairy', price: 5}], 'Dairy', 6))
// { filtered: [], maxPrice: undefined }
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
function findLastExpensiveInCategory(){

}
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function findLastExpensiveInCategory(products, category, min) {
  const filtered = products.filter(({type, price}) => type === category && price >= min);
  const maxPrice = filtered.findLast((el, _, array) => el.price === Math.max(...array.map(({price}) => price)))

  return {filtered, maxPrice}
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function findLastExpensiveInCategory', () => {
  expect(findLastExpensiveInCategory).to.be.a('function');
});

it('findLastExpensiveInCategory([{name: "Apple", type: "Fruit", price: 3}, {name: "Banana", type: "Fruit", price: 1}, {name: "Cherry", type: "Fruit", price: 5}], "Fruit", 2) should return {filtered: [{name: "Apple", type: "Fruit", price: 3}, {name: "Cherry", type: "Fruit", price: 5}], maxPrice: {name: "Cherry", type: "Fruit", price: 5}}', function() {
  expect(findLastExpensiveInCategory([{name: 'Apple', type: 'Fruit', price: 3}, {name: 'Banana', type: 'Fruit', price: 1}, {name: 'Cherry', type: 'Fruit', price: 5}], 'Fruit', 2)).to.deep.equal({
    filtered: [{name: 'Apple', type: 'Fruit', price: 3}, {name: 'Cherry', type: 'Fruit', price: 5}],
    maxPrice: {name: 'Cherry', type: 'Fruit', price: 5}
  });
});

it('findLastExpensiveInCategory([{name: "Carrot", type: "Vegetable", price: 2}, {name: "Celery", type: "Vegetab...', function(){
expect(findLastExpensiveInCategory([{name: 'Carrot', type: 'Vegetable', price: 2}, {name: 'Celery', type: 'Vegetable', price: 3}, {name: 'Beet', type: 'Vegetable', price: 1}], 'Vegetable', 2)).to.deep.equal({
  filtered: [{name: 'Carrot', type: 'Vegetable', price: 2}, {name: 'Celery', type: 'Vegetable', price: 3}],
  maxPrice: {name: 'Celery', type: 'Vegetable', price: 3}
});
});

it('findLastExpensiveInCategory([{name: "Milk", type: "Dairy", price: 4}, {name: "Cheese", type: "Dairy", price: 5}], "Dairy", 6) should return {filtered: [], maxPrice: undefined}', function() {
  expect(findLastExpensiveInCategory([{name: 'Milk', type: 'Dairy', price: 4}, {name: 'Cheese', type: 'Dairy', price: 5}], 'Dairy', 6)).to.deep.equal({
    filtered: [],
    maxPrice: undefined
  });
});

it('findLastExpensiveInCategory([{name: "Pear", type: "Fruit", price: 3}, {name: "Tomato", type: "Vegetable", price: 2}, {name: "Peach", type: "Fruit", price: 4}], "Fruit", 2) should return {filtered: [{name: "Pear", type: "Fruit", price: 3}, {name: "Peach", type: "Fruit", price: 4}], maxPrice: {name: "Peach", type: "Fruit", price: 4}}', function() {
  expect(findLastExpensiveInCategory([{name: 'Pear', type: 'Fruit', price: 3}, {name: 'Tomato', type: 'Vegetable', price: 2}, {name: 'Peach', type: 'Fruit', price: 4}], 'Fruit', 2)).to.deep.equal({
    filtered: [{name: 'Pear', type: 'Fruit', price: 3}, {name: 'Peach', type: 'Fruit', price: 4}],
    maxPrice: {name: 'Peach', type: 'Fruit', price: 4}
  });
});

it('findLastExpensiveInCategory([{name: "Zucchini", type: "Vegetable", price: 1}, {name: "Spinach", type: "Vegetable", price: 2}], "Vegetable", 2) should return {filtered: [{name: "Spinach", type: "Vegetable", price: 2}], maxPrice: {name: "Spinach", type: "Vegetable", price: 2}}', function() {
  expect(findLastExpensiveInCategory([{name: 'Zucchini', type: 'Vegetable', price: 1}, {name: 'Spinach', type: 'Vegetable', price: 2}], 'Vegetable', 2)).to.deep.equal({
    filtered: [{name: 'Spinach', type: 'Vegetable', price: 2}],
    maxPrice: {name: 'Spinach', type: 'Vegetable', price: 2}
  });
});

it('findLastExpensiveInCategory([{name: "Butter", type: "Dairy", price: 3}, {name: "Yogurt", type: "Dairy", price: 4}], "Dairy", 3) should return {filtered: [{name: "Butter", type: "Dairy", price: 3}, {name: "Yogurt", type: "Dairy", price: 4}], maxPrice: {name: "Yogurt", type: "Dairy", price: 4}}', function() {
  expect(findLastExpensiveInCategory([{name: 'Butter', type: 'Dairy', price: 3}, {name: 'Yogurt', type: 'Dairy', price: 4}], 'Dairy', 3)).to.deep.equal({
    filtered: [{name: 'Butter', type: 'Dairy', price: 3}, {name: 'Yogurt', type: 'Dairy', price: 4}],
    maxPrice: {name: 'Yogurt', type: 'Dairy', price: 4}
  });
});

it('findLastExpensiveInCategory([{name: "Salmon", type: "Fish", price: 10}, {name: "Tuna", type: "Fish", price: 12}], "Fish", 10) should return {filtered: [{name: "Salmon", type: "Fish", price: 10}, {name: "Tuna", type: "Fish", price: 12}], maxPrice: {name: "Tuna", type: "Fish", price: 12}}', function() {
  expect(findLastExpensiveInCategory([{name: 'Salmon', type: 'Fish', price: 10}, {name: 'Tuna', type: 'Fish', price: 12}], 'Fish', 10)).to.deep.equal({
    filtered: [{name: 'Salmon', type: 'Fish', price: 10}, {name: 'Tuna', type: 'Fish', price: 12}],
    maxPrice: {name: 'Tuna', type: 'Fish', price: 12}
  });
});

it('findLastExpensiveInCategory([{name: "Lager", type: "Beer", price: 2}, {name: "Ale", type: "Beer", price: 3}, {name: "Stout", type: "Beer", price: 3}], "Beer", 2) should return {filtered: [{name: "Lager", type: "Beer", price: 2}, {name: "Ale", type: "Beer", price: 3}, {name: "Stout", type: "Beer", price: 3}], maxPrice: {name: "Stout", type: "Beer", price: 3}}', function() {
  expect(findLastExpensiveInCategory([{name: 'Lager', type: 'Beer', price: 2}, {name: 'Ale', type: 'Beer', price: 3}, {name: 'Stout', type: 'Beer', price: 3}], 'Beer', 2)).to.deep.equal({
    filtered: [{name: 'Lager', type: 'Beer', price: 2}, {name: 'Ale', type: 'Beer', price: 3}, {name: 'Stout', type: 'Beer', price: 3}],
    maxPrice: {name: 'Stout', type: 'Beer', price: 3}
  });
});

it('findLastExpensiveInCategory([], "AnyCategory", 1) should return {filtered: [], maxPrice: undefined}', function() {
  expect(findLastExpensiveInCategory([], 'AnyCategory', 1)).to.deep.equal({
    filtered: [],
    maxPrice: undefined
  });
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
