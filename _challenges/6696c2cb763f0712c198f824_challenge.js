// NAMEEN:
// NAMERU:Найти последний индекс элемента в массиве объектов по значению свойства

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `findLastIndexByProperty`, которая принимает массив объектов (всегда только одно свойство) и значение свойства.

Функция должна вернуть индекс последнего объекта в массиве, у которого значение свойства равно заданному значению.

Если такой объект не найден, функция должна вернуть строку `Not found`.


Примеры запуска функции:
```javascript
findLastIndexByProperty([{age: 25}, {age: 30}, {age: 35}, {age: 30}], 30); // 3
findLastIndexByProperty([{status: 'active'}, {status: 'inactive'}, {status: 'active'}], 'active'); // 2
findLastIndexByProperty([{name: 'Alice'}, {name: 'Bob'}, {name: 'Charlie'}, {name: 'Bob'}], 'Bob'); // 3
findLastIndexByProperty([{type: 'fruit'}, {type: 'vegetable'}, {type: 'fruit'}], 'meat'); // "Not found"
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
function findLastIndexByProperty(arr, value) {
  const onlyValues =arr.map(obj => Object.values(obj)).flat()
  const result = onlyValues.lastIndexOf(value)
  return result !== -1 ? result : 'Not found';
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function findLastIndexByProperty', () => {
  expect(findLastIndexByProperty).to.be.a('function');
});

it('findLastIndexByProperty([{name: "Alice"}, {name: "Bob"}, {name: "Charlie"}, {name: "Bob"}], "Bob") should return 3', function() {
  expect(findLastIndexByProperty([{name: "Alice"}, {name: "Bob"}, {name: "Charlie"}, {name: "Bob"}], "Bob")).to.equal(3);
});

it('findLastIndexByProperty([{age: 25}, {age: 30}, {age: 35}, {age: 30}], 30) should return 3', function() {
  expect(findLastIndexByProperty([{age: 25}, {age: 30}, {age: 35}, {age: 30}], 30)).to.equal(3);
});

it('findLastIndexByProperty([{type: "fruit"}, {type: "vegetable"}, {type: "fruit"}], "meat") should return "Not found"', function() {
  expect(findLastIndexByProperty([{type: "fruit"}, {type: "vegetable"}, {type: "fruit"}], "meat")).to.equal("Not found");
});

it('findLastIndexByProperty([{status: "active"}, {status: "inactive"}, {status: "active"}], "active") should return 2', function() {
  expect(findLastIndexByProperty([{status: "active"}, {status: "inactive"}, {status: "active"}], "active")).to.equal(2);
});

it('findLastIndexByProperty([{color: "red"}, {color: "green"}, {color: "blue"}], "green") should return 1', function() {
  expect(findLastIndexByProperty([{color: "red"}, {color: "green"}, {color: "blue"}], "green")).to.equal(1);
});

it('findLastIndexByProperty([{height: 150}, {height: 160}, {height: 150}], 150) should return 2', function() {
  expect(findLastIndexByProperty([{height: 150}, {height: 160}, {height: 150}], 150)).to.equal(2);
});

it('findLastIndexByProperty([], "anything") should return "Not found"', function() {
  expect(findLastIndexByProperty([], "anything")).to.equal("Not found");
});

it('findLastIndexByProperty([{category: "A"}, {category: "B"}, {category: "A"}], "A") should return 2', function() {
  expect(findLastIndexByProperty([{category: "A"}, {category: "B"}, {category: "A"}], "A")).to.equal(2);
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
