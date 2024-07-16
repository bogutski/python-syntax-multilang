// NAMEEN:
// NAMERU:Найти индекс последнего объекта с максимальным значением заданного свойства

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `findLastIndexByMaxProperty`, которая принимает массив объектов и строку, представляющую ключ свойства.

Функция должна вернуть индекс последнего объекта в массиве, значение указанного свойства которого является максимальным среди всех объектов.


Примеры запуска функции:
```javascript
findLastIndexByMaxProperty([{x: 5, y: 10}, {x: 10, y: 30}, {x: 5, y: 25}], 'y'); // 1
findLastIndexByMaxProperty([{value: 100}, {value: 200}, {value: 150}], 'value'); // 1
findLastIndexByMaxProperty([{a: 10, b: 20}, {a: 15, b: 25}, {a: 20, b: 15}], 'a'); // 2
findLastIndexByMaxProperty([{name: 'Alice', age: 40}, {name: 'Bob', age: 25}, {name: 'Charlie', age: 35}], 'age'); // 0
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
function findLastIndexByMaxProperty(){

}
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function findLastIndexByMaxProperty(arr, property) {
  const sorted = arr.slice().sort((a, b) => b[property] - a[property]);
  return arr.findLastIndex(object => object[property] === sorted[0][property]);
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function findLastIndexByMaxProperty', () => {
  expect(findLastIndexByMaxProperty).to.be.a('function');
});

it('findLastIndexByMaxProperty([{a: 10, b: 20}, {a: 15, b: 25}, {a: 20, b: 15}], "a") should return 2', function() {
  expect(findLastIndexByMaxProperty([{a: 10, b: 20}, {a: 15, b: 25}, {a: 20, b: 15}], "a")).to.equal(2);
});

it('findLastIndexByMaxProperty([{x: 5, y: 10}, {x: 10, y: 20}, {x: 5, y: 25}], "y") should return 2', function() {
  expect(findLastIndexByMaxProperty([{x: 5, y: 10}, {x: 10, y: 20}, {x: 5, y: 25}], "y")).to.equal(2);
});

it('findLastIndexByMaxProperty([{name: "Alice", age: 30}, {name: "Bob", age: 25}, {name: "Charlie", age: 35}], "age") should return 2', function() {
  expect(findLastIndexByMaxProperty([{name: "Alice", age: 30}, {name: "Bob", age: 25}, {name: "Charlie", age: 35}], "age")).to.equal(2);
});

it('findLastIndexByMaxProperty([{value: 100}, {value: 200}, {value: 150}], "value") should return 1', function() {
  expect(findLastIndexByMaxProperty([{value: 100}, {value: 200}, {value: 150}], "value")).to.equal(1);
});

it('findLastIndexByMaxProperty([{a: 1}, {a: 2}, {a: 3}, {a: 4}], "a") should return 3', function() {
  expect(findLastIndexByMaxProperty([{a: 1}, {a: 2}, {a: 3}, {a: 4}], "a")).to.equal(3);
});

it('findLastIndexByMaxProperty([{x: 50}, {x: 100}, {x: 50}], "x") should return 1', function() {
  expect(findLastIndexByMaxProperty([{x: 50}, {x: 100}, {x: 50}], "x")).to.equal(1);
});

it('findLastIndexByMaxProperty([{x: 50}, {y: 100}, {x: 50}], "x") should return 2', function() {
  expect(findLastIndexByMaxProperty([{x: 50}, {y: 100}, {x: 50}], "x")).to.equal(2);
});

it('findLastIndexByMaxProperty([{value: 10}, {value: 20}, {value: 30}], "value") should return 2', function() {
  expect(findLastIndexByMaxProperty([{value: 10}, {value: 20}, {value: 30}], "value")).to.equal(2);
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
