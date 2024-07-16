// NAMEEN:
// NAMERU:Извлечение подмассива и приведение его к верхнему регистру

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `getUpperCaseSlice`, которая принимает массив строк и два числа.

Функция должна возвращать новый массив, содержащий элементы массива между указанными индексами (включительно для начала и не включительно для конца), преобразованные в верхний регистр.


Примеры запуска функции:
```javascript
getUpperCaseSlice(['apple', 'banana', 'cherry', 'date', 'fig'], 1, 4); // ['BANANA', 'CHERRY', 'DATE']
getUpperCaseSlice(['dog', 'cat', 'rabbit', 'hamster'], 0, 3); // ['DOG', 'CAT', 'RABBIT']
getUpperCaseSlice(['sun', 'moon', 'stars'], 2, 3); // ['STARS']
getUpperCaseSlice(['blue', 'green', 'red'], 1, 2); // ['GREEN']
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
function getUpperCaseSlice(){

}
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function getUpperCaseSlice(arr, start, end) {
  return arr.slice(start, end).map(el => el.toUpperCase());
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function getUpperCaseSlice', () => {
  expect(getUpperCaseSlice).to.be.a('function');
});

it('getUpperCaseSlice(["apple", "banana", "cherry", "date", "fig"], 1, 4) should return ["BANANA", "CHERRY", "DATE"]', function() {
  expect(getUpperCaseSlice(["apple", "banana", "cherry", "date", "fig"], 1, 4)).to.eql(["BANANA", "CHERRY", "DATE"]);
});

it('getUpperCaseSlice(["dog", "cat", "rabbit", "hamster"], 0, 3) should return ["DOG", "CAT", "RABBIT"]', function() {
  expect(getUpperCaseSlice(["dog", "cat", "rabbit", "hamster"], 0, 3)).to.eql(["DOG", "CAT", "RABBIT"]);
});

it('getUpperCaseSlice(["sun", "moon", "stars"], 2, 3) should return ["STARS"]', function() {
  expect(getUpperCaseSlice(["sun", "moon", "stars"], 2, 3)).to.eql(["STARS"]);
});

it('getUpperCaseSlice(["blue", "green", "red"], 1, 2) should return ["GREEN"]', function() {
  expect(getUpperCaseSlice(["blue", "green", "red"], 1, 2)).to.eql(["GREEN"]);
});

it('getUpperCaseSlice(["one", "two", "three", "four"], 1, 3) should return ["TWO", "THREE"]', function() {
  expect(getUpperCaseSlice(["one", "two", "three", "four"], 1, 3)).to.eql(["TWO", "THREE"]);
});

it('getUpperCaseSlice(["apple", "banana", "cherry", "date"], 0, 2) should return ["APPLE", "BANANA"]', function() {
  expect(getUpperCaseSlice(["apple", "banana", "cherry", "date"], 0, 2)).to.eql(["APPLE", "BANANA"]);
});

it('getUpperCaseSlice(["first", "second", "third"], 1, 3) should return ["SECOND", "THIRD"]', function() {
  expect(getUpperCaseSlice(["first", "second", "third"], 1, 3)).to.eql(["SECOND", "THIRD"]);
});

it('getUpperCaseSlice(["a", "b", "c", "d"], 2, 4) should return ["C", "D"]', function() {
  expect(getUpperCaseSlice(["a", "b", "c", "d"], 2, 4)).to.eql(["C", "D"]);
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
