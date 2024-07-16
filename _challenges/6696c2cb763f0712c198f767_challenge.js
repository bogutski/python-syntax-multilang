// NAMEEN:
// NAMERU:Найти последний объект с заданным значением свойства

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `findLastWithProperty`, которая принимает массив объектов и строку, представляющую имя свойства, и значение этого свойства.

Функция должна возвращать последний объект в массиве, у которого значение указанного свойства соответствует заданному значению.

Если такого объекта нет, функция должна вернуть `null`.


Примеры запуска функции:
```javascript
findLastWithProperty([{name: 'Alice', age: 25}, {name: 'Bob', age: 30}, {name: 'Alice', age: 22}], 'name', 'Alice') // {name: 'Alice', age: 22}.

findLastWithProperty([{color: 'red', size: 'small'}, {color: 'blue', size: 'large'}, {color: 'red', size: 'medium'}], 'color', 'red') // {color: 'red', size: 'medium'}.

findLastWithProperty([{brand: 'Nike', price: 100}, {brand: 'Adidas', price: 150}], 'brand', 'Puma') // null
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
function findLastWithProperty(){

}
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function findLastWithProperty(arr, key, value) {
  return arr.findLast(obj => obj[key] === value) || null;
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function findLastWithProperty', () => {
  expect(findLastWithProperty).to.be.a('function');
});

it("Function findLastWithProperty should include findLast method", () => {
  const result = findLastWithProperty.toString();
  expect(result).to.include('.findLast(');
});

it('findLastWithProperty([{name: "Alice", age: 25}, {name: "Bob", age: 30}, {name: "Alice", age: 22}], "name", "Alice") should return {name: "Alice", age: 22}', function() {
  expect(findLastWithProperty([{name: 'Alice', age: 25}, {name: 'Bob', age: 30}, {name: 'Alice', age: 22}], 'name', 'Alice')).to.deep.equal({name: 'Alice', age: 22});
});

it('findLastWithProperty([{color: "red", size: "small"}, {color: "blue", size: "large"}, {color: "red", size: "medium"}], "color", "red") should return {color: "red", size: "medium"}', function() {
  expect(findLastWithProperty([{color: 'red', size: 'small'}, {color: 'blue', size: 'large'}, {color: 'red', size: 'medium'}], 'color', 'red')).to.deep.equal({color: 'red', size: 'medium'});
});

it('findLastWithProperty([{brand: "Nike", price: 100}, {brand: "Adidas", price: 150}], "brand", "Puma") should return null', function() {
  expect(findLastWithProperty([{brand: 'Nike', price: 100}, {brand: 'Adidas', price: 150}], 'brand', 'Puma')).to.be.null;
});

it('findLastWithProperty([{type: "sedan", year: 2018}, {type: "SUV", year: 2020}, {type: "sedan", year: 2021}], "type", "sedan") should return {type: "sedan", year: 2021}', function() {
  expect(findLastWithProperty([{type: 'sedan', year: 2018}, {type: 'SUV', year: 2020}, {type: 'sedan', year: 2021}], 'type', 'sedan')).to.deep.equal({type: 'sedan', year: 2021});
});

it('findLastWithProperty([{city: "New York", population: 8000000}, {city: "Los Angeles", population: 4000000}], "city", "Chicago") should return null', function() {
  expect(findLastWithProperty([{city: 'New York', population: 8000000}, {city: 'Los Angeles', population: 4000000}], 'city', 'Chicago')).to.be.null;
});

it('findLastWithProperty([{shape: "circle", color: "blue"}, {shape: "square", color: "red"}, {shape: "circle", color: "green"}], "shape", "circle") should return {shape: "circle", color: "green"}', function() {
  expect(findLastWithProperty([{shape: 'circle', color: 'blue'}, {shape: 'square', color: 'red'}, {shape: 'circle', color: 'green'}], 'shape', 'circle')).to.deep.equal({shape: 'circle', color: 'green'});
});

it('findLastWithProperty([{material: "wood", used: true}, {material: "plastic", used: false}], "used", true) should return {material: "wood", used: true}', function() {
  expect(findLastWithProperty([{material: 'wood', used: true}, {material: 'plastic', used: false}], 'used', true)).to.deep.equal({material: 'wood', used: true});
});

it('findLastWithProperty([], "key", "value") should return null', function() {
  expect(findLastWithProperty([], 'key', 'value')).to.be.null;
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
