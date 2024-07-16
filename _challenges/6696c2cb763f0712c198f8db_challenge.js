// NAMEEN:
// NAMERU:Проверка возраста пользователей

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `areAllAdults`, которая принимает массив объектов пользователей и возвращает `true`, если все пользователи старше или равны `18` лет, и `false` в противном случае.


Примеры запуска функции:
```javascript
areAllAdults([{name: 'Alice', age: 25}, {name: 'Bob', age: 30}, {name: 'Charlie', age: 35}]); // true
areAllAdults([{name: 'Alice', age: 17}, {name: 'Bob', age: 30}, {name: 'Charlie', age: 35}]); // false
areAllAdults([{name: 'Alice', age: 25}, {name: 'Bob', age: 16}, {name: 'Charlie', age: 35}]); // false
areAllAdults([{name: 'Alice', age: 15}, {name: 'Bob', age: 12}, {name: 'Charlie', age: 10}]); // false
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
function areAllAdults(){

}
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function areAllAdults(arr) {
  return arr.every(obj => obj.age >= 18);
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function areAllAdults', () => {
  expect(areAllAdults).to.be.a('function');
});

it("Function areAllAdults should include every method", () => {
  const result = areAllAdults.toString();
  expect(result).to.include('.every(');
});

it('areAllAdults([{name: "Alice", age: 25}, {name: "Bob", age: 30}, {name: "Charlie", age: 35}]) should return true', function() {
  expect(areAllAdults([{name: "Alice", age: 25}, {name: "Bob", age: 30}, {name: "Charlie", age: 35}])).to.equal(true);
});

it('areAllAdults([{name: "Alice", age: 17}, {name: "Bob", age: 30}, {name: "Charlie", age: 35}]) should return false', function() {
  expect(areAllAdults([{name: "Alice", age: 17}, {name: "Bob", age: 30}, {name: "Charlie", age: 35}])).to.equal(false);
});

it('areAllAdults([{name: "Alice", age: 25}, {name: "Bob", age: 16}, {name: "Charlie", age: 35}]) should return false', function() {
  expect(areAllAdults([{name: "Alice", age: 25}, {name: "Bob", age: 16}, {name: "Charlie", age: 35}])).to.equal(false);
});

it('areAllAdults([{name: "Alice", age: 15}, {name: "Bob", age: 12}, {name: "Charlie", age: 10}]) should return false', function() {
  expect(areAllAdults([{name: "Alice", age: 15}, {name: "Bob", age: 12}, {name: "Charlie", age: 10}])).to.equal(false);
});

it('areAllAdults([{name: "John", age: 20}, {name: "Jane", age: 19}, {name: "Joe", age: 18}]) should return true', function() {
  expect(areAllAdults([{name: "John", age: 20}, {name: "Jane", age: 19}, {name: "Joe", age: 18}])).to.equal(true);
});

it('areAllAdults([{name: "Mike", age: 21}, {name: "Lucy", age: 22}, {name: "Tom", age: 23}]) should return true', function() {
  expect(areAllAdults([{name: "Mike", age: 21}, {name: "Lucy", age: 22}, {name: "Tom", age: 23}])).to.equal(true);
});

it('areAllAdults([{name: "Tim", age: 17}, {name: "Anna", age: 18}, {name: "Steve", age: 19}]) should return false', function() {
  expect(areAllAdults([{name: "Tim", age: 17}, {name: "Anna", age: 18}, {name: "Steve", age: 19}])).to.equal(false);
});

it('areAllAdults([{name: "Alice", age: 18}]) should return true', function() {
  expect(areAllAdults([{name: "Alice", age: 18}])).to.equal(true);
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
