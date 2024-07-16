// NAMEEN:
// NAMERU:Найти индекс последнего элемента с определенным значением свойства

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `findLastIndexByProperty`, которая принимает массив объектов, ключ и значение свойства.

Функция должна вернуть индекс последнего объекта в массиве, у которого значение свойства, указанного ключом, равно переданному значению.

Если такого объекта нет, функция должна вернуть `-1`.


Примеры запуска функции:
```javascript
findLastIndexByProperty([{age: 25}, {age: 30}, {age: 35}, {age: 30}], 'age', 30); // 3
findLastIndexByProperty([{type: 'fruit'}, {type: 'vegetable'}, {type: 'fruit'}], 'type', 'meat'); // -1
findLastIndexByProperty([{status: 'active'}, {status: 'inactive'}, {status: 'active'}], 'status', 'active'); // 2
findLastIndexByProperty([{name: 'Alice'}, {name: 'Bob'}, {name: 'Charlie'}, {name: 'Alice'}], 'name', 'Alice'); // 3
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
function findLastIndexByProperty(){

}
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function findLastIndexByProperty(arr, key, value) {
  return arr.findLastIndex(object => object[key] === value);
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function findLastIndexByProperty', () => {
  expect(findLastIndexByProperty).to.be.a('function');
});

it("Function findLastIndexByProperty should include findLastIndex method", () => {
  const result = findLastIndexByProperty.toString();
  expect(result).to.include('.findLastIndex(');
});

it('findLastIndexByProperty([{name: "Alice"}, {name: "Bob"}, {name: "Charlie"}, {name: "Alice"}], "name", "Alice") should return 3', function() {
  expect(findLastIndexByProperty([{name: "Alice"}, {name: "Bob"}, {name: "Charlie"}, {name: "Alice"}], "name", "Alice")).to.equal(3);
});

it('findLastIndexByProperty([{age: 25}, {age: 30}, {age: 35}, {age: 30}], "age", 30) should return 3', function() {
  expect(findLastIndexByProperty([{age: 25}, {age: 30}, {age: 35}, {age: 30}], "age", 30)).to.equal(3);
});

it('findLastIndexByProperty([{type: "fruit"}, {type: "vegetable"}, {type: "fruit"}], "type", "meat") should return -1', function() {
  expect(findLastIndexByProperty([{type: "fruit"}, {type: "vegetable"}, {type: "fruit"}], "type", "meat")).to.equal(-1);
});

it('findLastIndexByProperty([{status: "active"}, {status: "inactive"}, {status: "active"}], "status", "active") should return 2', function() {
  expect(findLastIndexByProperty([{status: "active"}, {status: "inactive"}, {status: "active"}], "status", "active")).to.equal(2);
});

it('findLastIndexByProperty([{color: "red"}, {color: "green"}, {color: "blue"}, {color: "red"}], "color", "red") should return 3', function() {
  expect(findLastIndexByProperty([{color: "red"}, {color: "green"}, {color: "blue"}, {color: "red"}], "color", "red")).to.equal(3);
});

it('findLastIndexByProperty([{height: 150}, {height: 160}, {height: 150}], "height", 150) should return 2', function() {
  expect(findLastIndexByProperty([{height: 150}, {height: 160}, {height: 150}], "height", 150)).to.equal(2);
});

it('findLastIndexByProperty([], "anyKey", "anyValue") should return -1', function() {
  expect(findLastIndexByProperty([], "anyKey", "anyValue")).to.equal(-1);
});

it('findLastIndexByProperty([{category: "A"}, {category: "B"}, {category: "A"}], "category", "A") should return 2', function() {
  expect(findLastIndexByProperty([{category: "A"}, {category: "B"}, {category: "A"}], "category", "A")).to.equal(2);
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
