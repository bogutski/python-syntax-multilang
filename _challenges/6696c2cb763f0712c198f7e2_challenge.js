// NAMEEN:
// NAMERU:Найти индекс элемента без учета регистра

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `findIndexIgnoreCase`, которая принимает массив строк и строку.

Функция должна вернуть индекс первого вхождения строки в массиве без учета регистра. Если строка не найдена, функция должна вернуть `-1`.


Примеры запуска функции:
```javascript
findIndexIgnoreCase(['apple', 'banana', 'Mango'], 'mango'); // 2
findIndexIgnoreCase(['Cat', 'Dog', 'Fish'], 'cat'); // 0
findIndexIgnoreCase(['hello', 'world'], 'WORLD'); // 1
findIndexIgnoreCase(['a', 'b', 'c'], 'D'); // -1
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
function findIndexIgnoreCase(){

}
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function findIndexIgnoreCase(arr, element) {
  const modified = arr.map(str => str.toLowerCase())
  return modified.indexOf(element.toLowerCase());
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function findIndexIgnoreCase', () => {
  expect(findIndexIgnoreCase).to.be.a('function');
});

it("Function findIndexIgnoreCase should include indexOf method", () => {
  const result = findIndexIgnoreCase.toString();
  expect(result).to.include('.indexOf(');
});

it('findIndexIgnoreCase(["apple", "banana", "Mango"], "mango") should return 2', function() {
  expect(findIndexIgnoreCase(["apple", "banana", "Mango"], "mango")).to.equal(2);
});

it('findIndexIgnoreCase(["Cat", "Dog", "Fish"], "cat") should return 0', function() {
  expect(findIndexIgnoreCase(["Cat", "Dog", "Fish"], "cat")).to.equal(0);
});

it('findIndexIgnoreCase(["hello", "world"], "WORLD") should return 1', function() {
  expect(findIndexIgnoreCase(["hello", "world"], "WORLD")).to.equal(1);
});

it('findIndexIgnoreCase(["a", "b", "c"], "D") should return -1', function() {
  expect(findIndexIgnoreCase(["a", "b", "c"], "D")).to.equal(-1);
});

it('findIndexIgnoreCase(["JavaScript", "Python", "Ruby"], "python") should return 1', function() {
  expect(findIndexIgnoreCase(["JavaScript", "Python", "Ruby"], "python")).to.equal(1);
});

it('findIndexIgnoreCase(["One", "Two", "Three"], "three") should return 2', function() {
  expect(findIndexIgnoreCase(["One", "Two", "Three"], "three")).to.equal(2);
});

it('findIndexIgnoreCase(["Red", "Green", "Blue"], "red") should return 0', function() {
  expect(findIndexIgnoreCase(["Red", "Green", "Blue"], "red")).to.equal(0);
});

it('findIndexIgnoreCase([], "anything") should return -1', function() {
  expect(findIndexIgnoreCase([], "anything")).to.equal(-1);
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
