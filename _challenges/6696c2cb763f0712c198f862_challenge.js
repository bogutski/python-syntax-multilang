// NAMEEN:
// NAMERU:Найти индекс первого объекта с определенной комбинацией свойств

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `findIndexByProperties`, которая принимает массив объектов и объект с целевыми значениями свойств.

Функция должна вернуть индекс первого объекта в массиве, который содержит все указанные свойства и значения.

Если такой объект не найден, функция должна вернуть строку `Object not found`.


Примеры запуска функции:
```javascript
console.log(findIndexByProperties(
    [{name: 'Alice', age: 25}, {name: 'Bob', age: 30}, {name: 'Charlie', age: 35}],
    {name: 'Bob', age: 30}
));
// Вывод: 1

console.log(findIndexByProperties(
    [{name: 'Alice', age: 25}, {name: 'Bob', age: 30}, {name: 'Charlie', age: 35}],
    {name: 'Alice'}
));
// Вывод: 0

console.log(findIndexByProperties(
    [{name: 'Alice', age: 25}, {name: 'Bob', age: 30}, {name: 'Charlie', age: 35}],
    {age: 35}
));
// Вывод: 2

console.log(findIndexByProperties(
    [{name: 'Alice', age: 25}, {name: 'Bob', age: 30}, {name: 'Charlie', age: 35}],
    {name: 'David'}
));
// Вывод: "Object not found"
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
function findIndexByProperties(){

}
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function findIndexByProperties(arr, object) {
  const arrayOfKeys = Object.keys(object)
  const res = arr.findIndex(obj => {
    return arrayOfKeys.every(key => object[key] === obj[key])
  })

  return res !== -1 ? res : 'Object not found';
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function findIndexByProperties', () => {
  expect(findIndexByProperties).to.be.a('function');
});

it('findIndexByProperties([{name: "Alice", age: 25}, {name: "Bob", age: 30}, {name: "Charlie", age: 35}], {name: "Bob", age: 30}) should return 1', function() {
  expect(findIndexByProperties([{name: "Alice", age: 25}, {name: "Bob", age: 30}, {name: "Charlie", age: 35}], {name: "Bob", age: 30})).to.equal(1);
});

it('findIndexByProperties([{name: "Alice", age: 25}, {name: "Bob", age: 30}, {name: "Charlie", age: 35}], {name: "Alice"}) should return 0', function() {
  expect(findIndexByProperties([{name: "Alice", age: 25}, {name: "Bob", age: 30}, {name: "Charlie", age: 35}], {name: "Alice"})).to.equal(0);
});

it('findIndexByProperties([{name: "Alice", age: 25}, {name: "Bob", age: 30}, {name: "Charlie", age: 35}], {age: 35}) should return 2', function() {
  expect(findIndexByProperties([{name: "Alice", age: 25}, {name: "Bob", age: 30}, {name: "Charlie", age: 35}], {age: 35})).to.equal(2);
});

it('findIndexByProperties([{name: "Alice", age: 25}, {name: "Bob", age: 30}, {name: "Charlie", age: 35}], {name: "David"}) should return "Object not found"', function() {
  expect(findIndexByProperties([{name: "Alice", age: 25}, {name: "Bob", age: 30}, {name: "Charlie", age: 35}], {name: "David"})).to.equal("Object not found");
});

it('findIndexByProperties([{name: "Alice", age: 25}, {name: "Bob", age: 30}, {name: "Charlie", age: 35}], {name: "Charlie", age: 35}) should return 2', function() {
  expect(findIndexByProperties([{name: "Alice", age: 25}, {name: "Bob", age: 30}, {name: "Charlie", age: 35}], {name: "Charlie", age: 35})).to.equal(2);
});

it('findIndexByProperties([{name: "Alice", age: 25}, {name: "Bob", age: 30}, {name: "Charlie", age: 35}], {name: "Alice", age: 25}) should return 0', function() {
  expect(findIndexByProperties([{name: "Alice", age: 25}, {name: "Bob", age: 30}, {name: "Charlie", age: 35}], {name: "Alice", age: 25})).to.equal(0);
});

it('findIndexByProperties([{name: "Alice", age: 25}, {name: "Bob", age: 30}, {name: "Charlie", age: 35}], {age: 30}) should return 1', function() {
  expect(findIndexByProperties([{name: "Alice", age: 25}, {name: "Bob", age: 30}, {name: "Charlie", age: 35}], {age: 30})).to.equal(1);
});

it('findIndexByProperties([{name: "Alice", age: 25}, {name: "Bob", age: 30}, {name: "Charlie", age: 35}], {name: "Bob", age: 35}) should return "Object not found"', function() {
  expect(findIndexByProperties([{name: "Alice", age: 25}, {name: "Bob", age: 30}, {name: "Charlie", age: 35}], {name: "Bob", age: 35})).to.equal("Object not found");
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
