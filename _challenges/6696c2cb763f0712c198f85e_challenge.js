// NAMEEN:
// NAMERU:Найти индекс первого объекта с определенным значением свойства

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `findIndexByProperty`, которая принимает массив объектов и значение свойства.

Функция должна вернуть индекс первого объекта в массиве, у которого значение свойства равно переданному значению.

Если такой объект не найден, функция должна вернуть `Value not found`.


Примеры запуска функции:
```javascript
findIndexByProperty([{age: 20}, {age: 25}, {age: 30}], 30); // 2
findIndexByProperty([{name: 'Alice'}, {name: 'Bob'}, {name: 'Charlie'}], 'Bob'); // 1
findIndexByProperty([{type: 'fruit'}, {type: 'vegetable'}, {type: 'fruit'}], 'meat'); // "Value not found"
findIndexByProperty([{status: 'active'}, {status: 'inactive'}, {status: 'active'}], 'active'); // 0
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
function findIndexByProperty(){

}
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function findIndexByProperty(arr, value) {
  const result = arr.findIndex(obj => Object.values(obj).includes(value))
  return result !== -1 ? result : 'Value not found';
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function findIndexByProperty', () => {
  expect(findIndexByProperty).to.be.a('function');
});

it("Function findIndexByProperty should include findIndex method", () => {
  const result = findIndexByProperty.toString();
  expect(result).to.include('.findIndex(');
});

it('findIndexByProperty([{name: "Alice"}, {name: "Bob"}, {name: "Charlie"}], "Bob") should return 1', function() {
  expect(findIndexByProperty([{name: "Alice"}, {name: "Bob"}, {name: "Charlie"}], "Bob")).to.equal(1);
});

it('findIndexByProperty([{age: 25}, {age: 30}, {age: 35}], 30) should return 1', function() {
  expect(findIndexByProperty([{age: 25}, {age: 30}, {age: 35}], 30)).to.equal(1);
});

it('findIndexByProperty([{type: "fruit"}, {type: "vegetable"}, {type: "fruit"}], "meat") should return "Value not found"', function() {
  expect(findIndexByProperty([{type: "fruit"}, {type: "vegetable"}, {type: "fruit"}], "meat")).to.equal("Value not found");
});

it('findIndexByProperty([{status: "active"}, {status: "inactive"}, {status: "active"}], "active") should return 0', function() {
  expect(findIndexByProperty([{status: "active"}, {status: "inactive"}, {status: "active"}], "active")).to.equal(0);
});

it('findIndexByProperty([{color: "red"}, {color: "green"}, {color: "blue"}], "green") should return 1', function() {
  expect(findIndexByProperty([{color: "red"}, {color: "green"}, {color: "blue"}], "green")).to.equal(1);
});

it('findIndexByProperty([{height: 150}, {height: 160}, {height: 150}], 150) should return 0', function() {
  expect(findIndexByProperty([{height: 150}, {height: 160}, {height: 150}], 150)).to.equal(0);
});

it('findIndexByProperty([], "anything") should return "Value not found"', function() {
  expect(findIndexByProperty([], "anything")).to.equal("Value not found");
});

it('findIndexByProperty([{category: "A"}, {category: "B"}, {category: "A"}], "A") should return 0', function() {
  expect(findIndexByProperty([{category: "A"}, {category: "B"}, {category: "A"}], "A")).to.equal(0);
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
