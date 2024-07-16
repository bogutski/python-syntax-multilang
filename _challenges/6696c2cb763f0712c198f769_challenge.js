// NAMEEN:
// NAMERU:Найти последний продукт с заданным атрибутом и ценой выше указанной

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `findLastProductWithAttribute`, которая принимает массив объектов (представляющих продукты), имя атрибута, значение этого атрибута и минимальную цену.

Функция должна возвращать последний продукт, который имеет указанный атрибут со значением, равным заданному, и цену выше указанной.

Если такого продукта нет, функция должна возвращать `Product was not found`.


Примеры запуска функции:
```javascript
console.log(findLastProductWithAttribute([{name: 'Apple', type: 'Fruit', price: 3}, {name: 'Banana', type: 'Fruit', price: 1}, {name: 'Cucumber', type: 'Vegetable', price: 3}], 'name', 'Apple', 2))
// { name: 'Apple', type: 'Fruit', price: 3 }

console.log(findLastProductWithAttribute([{name: 'Carrot', type: 'Vegetable', price: 2}, {name: 'Banana', type: 'Fruit', price: 5}, {name: 'Apple', type: 'Fruit', price: 1}], 'type', 'Fruit', 3))
// { name: 'Banana', type: 'Fruit', price: 5 }

console.log(findLastProductWithAttribute([{name: 'Carrot', type: 'Vegetable', price: 2}], 'type', 'Fruit', 1))
// "Product was not found"
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
function findLastProductWithAttribute(){

}
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function findLastProductWithAttribute(arr, attribute, value, minPrice) {
  const result = arr.findLast(product => product[attribute] === value && product.price > minPrice)
  return result ? result : 'Product was not found';
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function findLastProductWithAttribute', () => {
  expect(findLastProductWithAttribute).to.be.a('function');
});

it("Function findLastProductWithAttribute should include findLast method", () => {
  const result = findLastProductWithAttribute.toString();
  expect(result).to.include('.findLast(');
});

it('findLastProductWithAttribute([{name: "Apple", type: "Fruit", price: 2}, {name: "Banana", type: "Fruit", price: 1}, {name: "Cucumber", type: "Vegetable", price: 3}], "type", "Fruit", 1) should return {name: "Apple", type: "Fruit", price: 2}', function() {
  expect(findLastProductWithAttribute([{name: 'Apple', type: 'Fruit', price: 2}, {name: 'Banana', type: 'Fruit', price: 1}, {name: 'Cucumber', type: 'Vegetable', price: 3}], 'type', 'Fruit', 1)).to.deep.equal({name: 'Apple', type: 'Fruit', price: 2});
});

it('findLastProductWithAttribute([{name: "Carrot", type: "Vegetable", price: 2}, {name: "Apple", type: "Fruit", price: 5}, {name: "Banana", type: "Fruit", price: 1}], "type", "Fruit", 3) should return {name: "Apple", type: "Fruit", price: 5}', function() {
  expect(findLastProductWithAttribute([{name: 'Carrot', type: 'Vegetable', price: 2}, {name: 'Apple', type: 'Fruit', price: 5}, {name: 'Banana', type: 'Fruit', price: 1}], 'type', 'Fruit', 3)).to.deep.equal({name: 'Apple', type: 'Fruit', price: 5});
});

it('findLastProductWithAttribute([{name: "Carrot", type: "Vegetable", price: 2}], "type", "Fruit", 1) should return "Product was not found"', function() {
  expect(findLastProductWithAttribute([{name: 'Carrot', type: 'Vegetable', price: 2}], 'type', 'Fruit', 1)).to.equal('Product was not found')
});

it('findLastProductWithAttribute([{name: "Potato", type: "Vegetable", price: 1}, {name: "Tomato", type: "Vegetable", price: 2}, {name: "Lettuce", type: "Vegetable", price: 3}], "type", "Vegetable", 2) should return {name: "Lettuce", type: "Vegetable", price: 3}', function() {
  expect(findLastProductWithAttribute([{name: 'Potato', type: 'Vegetable', price: 1}, {name: 'Tomato', type: 'Vegetable', price: 2}, {name: 'Lettuce', type: 'Vegetable', price: 3}], 'type', 'Vegetable', 2)).to.deep.equal({name: 'Lettuce', type: 'Vegetable', price: 3});
});

it('findLastProductWithAttribute([{name: "Strawberry", type: "Berry", price: 4}, {name: "Blueberry", type: "Berry", price: 5}, {name: "Blackberry", type: "Berry", price: 5}], "name", "Blueberry", 4) should return {name: "Blueberry", type: "Berry", price: 5}', function() {
  expect(findLastProductWithAttribute([{name: 'Strawberry', type: 'Berry', price: 4}, {name: 'Blueberry', type: 'Berry', price: 5}, {name: 'Blackberry', type: 'Berry', price: 5}], 'name', 'Blueberry', 4)).to.deep.equal({name: 'Blueberry', type: 'Berry', price: 5});
});

it('findLastProductWithAttribute([{name: "Milk", type: "Dairy", price: 2}, {name: "Cheese", type: "Dairy", price: 6}], "type", "Dairy", 5) should return {name: "Cheese", type: "Dairy", price: 6}', function() {
  expect(findLastProductWithAttribute([{name: 'Milk', type: 'Dairy', price: 2}, {name: 'Cheese', type: 'Dairy', price: 6}], 'type', 'Dairy', 5)).to.deep.equal({name: 'Cheese', type: 'Dairy', price: 6});
});

it('findLastProductWithAttribute([{name: "Chocolate", type: "Snack", price: 2}, {name: "Candy", type: "Snack", price: 1}], "type", "Snack", 1) should return {name: "Chocolate", type: "Snack", price: 2}', function() {
  expect(findLastProductWithAttribute([{name: 'Chocolate', type: 'Snack', price: 2}, {name: 'Candy', type: 'Snack', price: 1}], 'type', 'Snack', 1)).to.deep.equal({name: 'Chocolate', type: 'Snack', price: 2});
});

it('findLastProductWithAttribute([{name: "Bread", type: "Bakery", price: 2}, {name: "Croissant", type: "Bakery", price: 3}, {name: "Bagel", type: "Bakery", price: 1}], "type", "Bakery", 2) should return {name: "Croissant", type: "Bakery", price: 3}', function() {
  expect(findLastProductWithAttribute([{name: 'Bread', type: 'Bakery', price: 2}, {name: 'Croissant', type: 'Bakery', price: 3}, {name: 'Bagel', type: 'Bakery', price: 1}], 'type', 'Bakery', 2)).to.deep.equal({name: 'Croissant', type: 'Bakery', price: 3});
});

it('findLastProductWithAttribute([{name: "Coffee", type: "Beverage", price: 10}, {name: "Tea", type: "Beverage", price: 5}], "type", "Beverage", 8) should return {name: "Coffee", type: "Beverage", price: 10}', function() {
  expect(findLastProductWithAttribute([{name: 'Coffee', type: 'Beverage', price: 10}, {name: 'Tea', type: 'Beverage', price: 5}], 'type', 'Beverage', 8)).to.deep.equal({name: 'Coffee', type: 'Beverage', price: 10});
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
