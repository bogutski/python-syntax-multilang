// NAMEEN:
// NAMERU:Проверка наличия объекта с определенным свойством и значением в массиве объектов

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `containsObjectWithProperty`, которая принимает массив объектов и два параметра: имя свойства и значение свойства.

Функция должна возвращать `true`, если в массиве есть объект с указанным свойством, равным указанному значению, и `false` в противном случае.

Один из вариантов решения может быть использование методов: `map()` и `includes()`.


Примеры запуска функции:
```javascript
containsObjectWithProperty([{age: 25}, {age: 30}, {age: 35}], 'age', 40); // false
containsObjectWithProperty([{name: 'Alice', age: 25}, {name: 'Bob', age: 30}], 'age', 30); // true
containsObjectWithProperty([{name: 'Alice'}, {name: 'Bob'}, {name: 'Charlie'}], 'name', 'Bob'); // true
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
function containsObjectWithProperty(){

}
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function containsObjectWithProperty(arr, key, value) {
  return arr.map(obj => obj[key]).includes(value);
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function containsObjectWithProperty', () => {
  expect(containsObjectWithProperty).to.be.a('function');
});

it('containsObjectWithProperty([{name: "Alice"}, {name: "Bob"}, {name: "Charlie"}], "name", "Bob") should return true', function() {
  expect(containsObjectWithProperty([{name: "Alice"}, {name: "Bob"}, {name: "Charlie"}], "name", "Bob")).to.equal(true);
});

it('containsObjectWithProperty([{age: 25}, {age: 30}, {age: 35}], "age", 40) should return false', function() {
  expect(containsObjectWithProperty([{age: 25}, {age: 30}, {age: 35}], "age", 40)).to.equal(false);
});

it('containsObjectWithProperty([{name: "Alice", age: 25}, {name: "Bob", age: 30}], "age", 30) should return true', function() {
  expect(containsObjectWithProperty([{name: "Alice", age: 25}, {name: "Bob", age: 30}], "age", 30)).to.equal(true);
});

it('containsObjectWithProperty([{name: "Alice", age: 25}, {name: "Bob", age: 30}], "name", "Charlie") should return false', function() {
  expect(containsObjectWithProperty([{name: "Alice", age: 25}, {name: "Bob", age: 30}], "name", "Charlie")).to.equal(false);
});

it('containsObjectWithProperty([{color: "red"}, {color: "blue"}, {color: "green"}], "color", "blue") should return true', function() {
  expect(containsObjectWithProperty([{color: "red"}, {color: "blue"}, {color: "green"}], "color", "blue")).to.equal(true);
});

it('containsObjectWithProperty([{status: "active"}, {status: "inactive"}], "status", "pending") should return false', function() {
  expect(containsObjectWithProperty([{status: "active"}, {status: "inactive"}], "status", "pending")).to.equal(false);
});

it('containsObjectWithProperty([{id: 1}, {id: 2}, {id: 3}], "id", 2) should return true', function() {
  expect(containsObjectWithProperty([{id: 1}, {id: 2}, {id: 3}], "id", 2)).to.equal(true);
});

it('containsObjectWithProperty([{name: "Alice", age: 25}, {name: "Bob", age: 30}], "age", 25) should return true', function() {
  expect(containsObjectWithProperty([{name: "Alice", age: 25}, {name: "Bob", age: 30}], "age", 25)).to.equal(true);
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
