// NAMEEN:
// NAMERU:Найти последний самый дорогой продукт в каждой категории

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию findLastMostExpensiveByCategory, которая принимает массив объектов.

Каждый из объектов представляет продукт с атрибутами: `name`, `category`, и `price`:
[
  {name: 'Apple', category: 'Fruits', price: 5},
  {name: 'Broccoli', category: 'Vegetables', price: 2},
  {name: 'Orange', category: 'Fruits', price: 3},
  {name: 'Carrot', category: 'Vegetables', price: 10}
]

Функция должна возвращать объект, где каждый ключ соответствует категории, а значение — это объект с данными о последнем самом дорогом продукте в этой категории:
{
  Fruits: {name: 'Apple', price: 5},
  Vegetables: {name: 'Carrot', price: 10}
}


Примеры запуска функции:
```javascript
console.log(findLastMostExpensiveByCategory(
    [{name: 'Apple', category: 'Fruits', price: 4},
      {name: 'Orange', category: 'Fruits', price: 1},
      {name: 'Banana', category: 'Fruits', price: 4},
      {name: 'Broccoli', category: 'Vegetables', price: 2},
      {name: 'Carrot', category: 'Vegetables', price: 1}]))

// {
//   Fruits: { name: 'Banana', price: 4},
//   Vegetables: { name: 'Broccoli', price: 2 }
// }
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
function findLastMostExpensiveByCategory(){

}
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function findLastMostExpensiveByCategory(arr) {
  let objectOfMax = {}

  for(let obj of arr){
    if(obj.category in objectOfMax){
      if(objectOfMax[obj.category].price <= obj.price) objectOfMax[obj.category] = {name: obj.name, price: obj.price}
    } else {
      objectOfMax[obj.category] = {name: obj.name, price: obj.price}
    }
  }

  return objectOfMax;
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function findLastMostExpensiveByCategory', () => {
  expect(findLastMostExpensiveByCategory).to.be.a('function');
});

it('findLastMostExpensiveByCategory([{name: "Apple", category: "Fruits", price: 2}, {name: "Orange", category: "Fruits", price: 3}, {name: "Banana", category: "Fruits", price: 1}, {name: "Broccoli", category: "Vegetables", price: 2}, {name: "Carrot", category: "Vegetables", price: 1}]) should return {Fruits: {name: "Orange", price: 3}, Vegetables: {name: "Broccoli", price: 2}}', function() {
  expect(findLastMostExpensiveByCategory([{name: 'Apple', category: 'Fruits', price: 2}, {name: 'Orange', category: 'Fruits', price: 3}, {name: 'Banana', category: 'Fruits', price: 1}, {name: 'Broccoli', category: 'Vegetables', price: 2}, {name: 'Carrot', category: 'Vegetables', price: 1}])).to.deep.equal({Fruits: {name: 'Orange', price: 3}, Vegetables: {name: 'Broccoli', price: 2}});
});

it('findLastMostExpensiveByCategory([]) should return {}', function() {
  expect(findLastMostExpensiveByCategory([])).to.deep.equal({});
});

it('findLastMostExpensiveByCategory([{name: "Pen", category: "Stationery", price: 1.5}, {name: "Pencil", category: "Stationery", price: 0.5}, {name: "Notebook", category: "Stationery", price: 1.5}]) should return {Stationery: {name: "Notebook", price: 1.5}}', function() {
  expect(findLastMostExpensiveByCategory([{name: 'Pen', category: 'Stationery', price: 1.5}, {name: 'Pencil', category: 'Stationery', price: 0.5}, {name: 'Notebook', category: 'Stationery', price: 1.5}])).to.deep.equal({Stationery: {name: 'Notebook', price: 1.5}});
});

it('findLastMostExpensiveByCategory([{name: "Laptop", category: "Electronics", price: 999}, {name: "Smartphone", category: "Electronics", price: 699}]) should return {Electronics: {name: "Laptop", price: 999}}', function() {
  expect(findLastMostExpensiveByCategory([{name: 'Laptop', category: 'Electronics', price: 999}, {name: 'Smartphone', category: 'Electronics', price: 699}])).to.deep.equal({Electronics: {name: 'Laptop', price: 999}});
});

it('findLastMostExpensiveByCategory([{name: "Gala Apple", category: "Fruits", price: 1}, {name: "Navel Orange", category: "Fruits", price: 2}, {name: "Granny Smith Apple", category: "Fruits", price: 2}]) should return {Fruits: {name: "Granny Smith Apple", price: 2}}', function() {
  expect(findLastMostExpensiveByCategory([{name: 'Gala Apple', category: 'Fruits', price: 1}, {name: 'Navel Orange', category: 'Fruits', price: 2}, {name: 'Granny Smith Apple', category: 'Fruits', price: 2}])).to.deep.equal({Fruits: {name: 'Granny Smith Apple', price: 2}});
});

it('findLastMostExpensiveByCategory([{name: "Chicken Breast", category: "Meat", price: 5}, {name: "Pork Belly", category: "Meat", price: 12}, {name: "Chicken Thighs", category: "Meat", price: 8}]) should return {Meat: {name: "Pork Belly", price: 12}}', function() {
  expect(findLastMostExpensiveByCategory([{name: 'Chicken Breast', category: 'Meat', price: 5}, {name: 'Pork Belly', category: 'Meat', price: 12}, {name: 'Chicken Thighs', category: 'Meat', price: 8}])).to.deep.equal({Meat: {name: 'Pork Belly', price: 12}});
});

it('findLastMostExpensiveByCategory([{name: "Almond Milk", category: "Beverages", price: 3}, {name: "Soy Milk", category: "Beverages", price: 2}, {name: "Cow Milk", category: "Beverages", price: 1}]) should return {Beverages: {name: "Almond Milk", price: 3}}', function() {
  expect(findLastMostExpensiveByCategory([{name: 'Almond Milk', category: 'Beverages', price: 3}, {name: 'Soy Milk', category: 'Beverages', price: 2}, {name: 'Cow Milk', category: 'Beverages', price: 1}])).to.deep.equal({Beverages: {name: 'Almond Milk', price: 3}});
});

it('findLastMostExpensiveByCategory([{name: "Wheat Bread", category: "Bakery", price: 2}, {name: "Rye Bread", category: "Bakery", price: 3}, {name: "Sourdough", category: "Bakery", price: 4}, {name: "Baguette", category: "Bakery", price: 4}]) should return {Bakery: {name: "Baguette", price: 4}}', function() {
  expect(findLastMostExpensiveByCategory([{name: 'Wheat Bread', category: 'Bakery', price: 2}, {name: 'Rye Bread', category: 'Bakery', price: 3}, {name: 'Sourdough', category: 'Bakery', price: 4}, {name: 'Baguette', category: 'Bakery', price: 4}])).to.deep.equal({Bakery: {name: 'Baguette', price: 4}});
});

it('findLastMostExpensiveByCategory([{name: "American Cheese", category: "Dairy", price: 1}, {name: "Cheddar Cheese", category: "Dairy", price: 2}, {name: "Gouda Cheese", category: "Dairy", price: 3}, {name: "Swiss Cheese", category: "Dairy", price: 2}]) should return {Dairy: {name: "Gouda Cheese", price: 3}}', function() {
  expect(findLastMostExpensiveByCategory([{name: 'American Cheese', category: 'Dairy', price: 1}, {name: 'Cheddar Cheese', category: 'Dairy', price: 2}, {name: 'Gouda Cheese', category: 'Dairy', price: 3}, {name: 'Swiss Cheese', category: 'Dairy', price: 2}])).to.deep.equal({Dairy: {name: 'Gouda Cheese', price: 3}});
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
