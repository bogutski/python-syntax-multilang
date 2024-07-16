// NAMEEN:
// NAMERU:Проверка, что все объекты содержат хотя бы одно значение из списка

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `doAllObjectsContainValues`, которая принимает массив объектов и массив значений.

Функция должна возвращать `true`, если все объекты в массиве содержат хотя бы одно значение из указанного массива значений, и `false` в противном случае.


Примеры запуска функции:
```javascript
doAllObjectsContainValues([{x: 10, y: 20}, {x: 30, y: 40}], [20, 40]); // true
doAllObjectsContainValues([{a: 1, b: 2}, {a: 3, b: 4}, {a: 5}], [1, 7, 8]); // false
doAllObjectsContainValues([{a: 1, b: 2}, {a: 3, b: 4}, {a: 5, b: 6}], [1, 4, 6]); // true
doAllObjectsContainValues([{name: 'Alice', age: 25}, {age: 30}], ['Charlie', 30]); // false
doAllObjectsContainValues([{name: 'Alice', age: 25}, {name: 'Bob', age: 40}], ['Alice', 40]); // true
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
function doAllObjectsContainValues(){

}
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function doAllObjectsContainValues(arr, values) {
  return arr.every(object => {
    const onlyValues = Object.values(object)
    for(let el of onlyValues) {
      if(values.includes(el)) return true
    }
    return false
  });
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function doAllObjectsContainValues', () => {
  expect(doAllObjectsContainValues).to.be.a('function');
});

it('doAllObjectsContainValues([{a: 1, b: 2}, {a: 3, b: 4}, {a: 5, b: 6}], [1, 4, 6]) should return true', function() {
  expect(doAllObjectsContainValues([{a: 1, b: 2}, {a: 3, b: 4}, {a: 5, b: 6}], [1, 4, 6])).to.equal(true);
});

it('doAllObjectsContainValues([{a: 1, b: 2}, {a: 3, b: 4}, {a: 5}], [1, 7, 8]) should return false', function() {
  expect(doAllObjectsContainValues([{a: 1, b: 2}, {a: 3, b: 4}, {a: 5}], [1, 7, 8])).to.equal(false);
});

it('doAllObjectsContainValues([{x: 10, y: 20}, {x: 30, y: 40}], [20, 40]) should return true', function() {
  expect(doAllObjectsContainValues([{x: 10, y: 20}, {x: 30, y: 40}], [20, 40])).to.equal(true);
});

it('doAllObjectsContainValues([{name: "Alice", age: 25}, {name: "Bob", age: 30}], ["Alice", 40]) should return false', function() {
  expect(doAllObjectsContainValues([{name: "Alice", age: 25}, {name: "Bob", age: 30}], ["Alice", 40])).to.equal(false);
});

it('doAllObjectsContainValues([{name: "Alice", age: 25}, {age: 30}], ["Charlie", 30]) should return false', function() {
  expect(doAllObjectsContainValues([{name: "Alice", age: 25}, {age: 30}], ["Charlie", 30])).to.equal(false);
});

it('doAllObjectsContainValues([{name: "Alice", age: 25}, {age: 30}], ["Charlie", 35]) should return false', function() {
  expect(doAllObjectsContainValues([{name: "Alice", age: 25}, {age: 30}], ["Charlie", 35])).to.equal(false);
});

it('doAllObjectsContainValues([{name: "John", score: 100}, {name: "Jane", score: 90}], [100, 90]) should return true', function() {
  expect(doAllObjectsContainValues([{name: "John", score: 100}, {name: "Jane", score: 90}], [100, 90])).to.equal(true);
});

it('doAllObjectsContainValues([{item: "apple", price: 1.2}, {item: "banana", price: 0.8}], ["apple", "grape"]) should return false', function() {
  expect(doAllObjectsContainValues([{item: "apple", price: 1.2}, {item: "banana", price: 0.8}], ["apple", "grape"])).to.equal(false);
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
