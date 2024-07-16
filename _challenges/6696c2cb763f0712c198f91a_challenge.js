// NAMEEN:
// NAMERU:Проверка, что хотя бы один объект содержит указанное значение в любом из своих свойств

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `hasObjectWithValue`, которая принимает массив объектов и значение.

Функция должна возвращать `true`, если в массиве есть хотя бы один объект, который содержит указанное значение в любом из своих свойств, и `false` в противном случае.


Примеры запуска функции:
```javascript
hasObjectWithValue([{a: 1, b: 2}, {c: 3, d: 4}, {e: 5}], 3); // true
hasObjectWithValue([{a: 1, b: 2}, {c: 3, d: 4}, {e: 5}], 6); // false
hasObjectWithValue([{name: 'Alice', age: 25}, {name: 'Bob', age: 30}], 'Bob'); // true
hasObjectWithValue([{name: 'Alice', age: 25}, {name: 'Bob', age: 30}], 'Charlie'); // false
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
function hasObjectWithValue(){

}
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function hasObjectWithValue(arr, value) {
  return arr.some(obj => Object.values(obj).includes(value));
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function hasObjectWithValue', () => {
  expect(hasObjectWithValue).to.be.a('function');
});

it('hasObjectWithValue([{a: 1, b: 2}, {c: 3, d: 4}, {e: 5}], 3) should return true', function() {
  expect(hasObjectWithValue([{a: 1, b: 2}, {c: 3, d: 4}, {e: 5}], 3)).to.equal(true);
});

it('hasObjectWithValue([{a: 1, b: 2}, {c: 3, d: 4}, {e: 5}], 6) should return false', function() {
  expect(hasObjectWithValue([{a: 1, b: 2}, {c: 3, d: 4}, {e: 5}], 6)).to.equal(false);
});

it('hasObjectWithValue([{name: "Alice", age: 25}, {name: "Bob", age: 30}], "Bob") should return true', function() {
  expect(hasObjectWithValue([{name: "Alice", age: 25}, {name: "Bob", age: 30}], "Bob")).to.equal(true);
});

it('hasObjectWithValue([{name: "Alice", age: 25}, {name: "Bob", age: 30}], "Charlie") should return false', function() {
  expect(hasObjectWithValue([{name: "Alice", age: 25}, {name: "Bob", age: 30}], "Charlie")).to.equal(false);
});

it('hasObjectWithValue([{x: 10, y: 20}, {z: 30, w: 40}], 20) should return true', function() {
  expect(hasObjectWithValue([{x: 10, y: 20}, {z: 30, w: 40}], 20)).to.equal(true);
});

it('hasObjectWithValue([{x: 10, y: 20}, {z: 30, w: 40}], 50) should return false', function() {
  expect(hasObjectWithValue([{x: 10, y: 20}, {z: 30, w: 40}], 50)).to.equal(false);
});

it('hasObjectWithValue([{a: "apple", b: "banana"}, {c: "cherry", d: "date"}], "banana") should return true', function() {
  expect(hasObjectWithValue([{a: "apple", b: "banana"}, {c: "cherry", d: "date"}], "banana")).to.equal(true);
});

it('hasObjectWithValue([{a: "apple", b: "banana"}, {c: "cherry", d: "date"}], "fig") should return false', function() {
  expect(hasObjectWithValue([{a: "apple", b: "banana"}, {c: "cherry", d: "date"}], "fig")).to.equal(false);
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
