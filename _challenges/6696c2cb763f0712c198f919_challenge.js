// NAMEEN:
// NAMERU:Проверка на наличие объекта с определенным свойством

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `hasObjectWithProperty`, которая принимает массив объектов и строку (имя свойства).

Функция должна возвращать `true`, если в массиве есть хотя бы один объект с указанным свойством, и `false` в противном случае.


Примеры запуска функции:
```javascript
hasObjectWithProperty([{a: 1}, {b: 2}, {c: 3}], 'b'); // true
hasObjectWithProperty([{a: 1}, {b: 2}, {c: 3}], 'd'); // false
hasObjectWithProperty([{name: 'Alice'}, {age: 25}, {city: 'London'}], 'age'); // true
hasObjectWithProperty([{name: 'Alice'}, {age: 25}, {city: 'London'}], 'country'); // false
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
function hasObjectWithProperty(){

}
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function hasObjectWithProperty(arr, key) {
  return arr.some(obj => obj.hasOwnProperty(key));
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function hasObjectWithProperty', () => {
  expect(hasObjectWithProperty).to.be.a('function');
});

it("Function hasObjectWithProperty should include some method", () => {
  const result = hasObjectWithProperty.toString();
  expect(result).to.include('.some(');
});

it('hasObjectWithProperty([{a: 1}, {b: 2}, {c: 3}], "b") should return true', function() {
  expect(hasObjectWithProperty([{a: 1}, {b: 2}, {c: 3}], "b")).to.equal(true);
});

it('hasObjectWithProperty([{a: 1}, {b: 2}, {c: 3}], "d") should return false', function() {
  expect(hasObjectWithProperty([{a: 1}, {b: 2}, {c: 3}], "d")).to.equal(false);
});

it('hasObjectWithProperty([{name: "Alice"}, {age: 25}, {city: "London"}], "age") should return true', function() {
  expect(hasObjectWithProperty([{name: "Alice"}, {age: 25}, {city: "London"}], "age")).to.equal(true);
});

it('hasObjectWithProperty([{name: "Alice"}, {age: 25}, {city: "London"}], "country") should return false', function() {
  expect(hasObjectWithProperty([{name: "Alice"}, {age: 25}, {city: "London"}], "country")).to.equal(false);
});

it('hasObjectWithProperty([{a: 1}, {b: 2}, {c: 3}], "a") should return true', function() {
  expect(hasObjectWithProperty([{a: 1}, {b: 2}, {c: 3}], "a")).to.equal(true);
});

it('hasObjectWithProperty([{x: 10}, {y: 20}, {z: 30}], "x") should return true', function() {
  expect(hasObjectWithProperty([{x: 10}, {y: 20}, {z: 30}], "x")).to.equal(true);
});

it('hasObjectWithProperty([{x: 10}, {y: 20}, {z: 30}], "w") should return false', function() {
  expect(hasObjectWithProperty([{x: 10}, {y: 20}, {z: 30}], "w")).to.equal(false);
});

it('hasObjectWithProperty([{name: "Bob"}, {age: 30}, {city: "New York"}], "city") should return true', function() {
  expect(hasObjectWithProperty([{name: "Bob"}, {age: 30}, {city: "New York"}], "city")).to.equal(true);
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
