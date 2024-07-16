// NAMEEN:
// NAMERU:Найти индекс элемента

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `findIndex`, которая принимает массив и элемент.

Функция должна вернуть индекс первого вхождения элемента в массиве. Если элемент не найден, функция должна вернуть `-1`.

Примеры запуска функции:
```javascript
findIndex(['apple', 'banana', 'mango'], 'banana'); // 1
findIndex(['cat', 'dog', 'fish'], 'bird'); // -1
findIndex([1, 2, 3, 4, 5], 3); // 2
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
function findIndex(){

}
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function findIndex(arr, element) {
  return arr.indexOf(element);
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function findIndex', () => {
  expect(findIndex).to.be.a('function');
});

it("Function findIndex should include indexOf method", () => {
  const result = findIndex.toString();
  expect(result).to.include('.indexOf(');
});

it('findIndex(["apple", "banana", "mango"], "banana") should return 1', function() {
  expect(findIndex(["apple", "banana", "mango"], "banana")).to.equal(1);
});

it('findIndex([1, 2, 3, 4, 5], 3) should return 2', function() {
  expect(findIndex([1, 2, 3, 4, 5], 3)).to.equal(2);
});

it('findIndex(["cat", "dog", "fish"], "bird") should return -1', function() {
  expect(findIndex(["cat", "dog", "fish"], "bird")).to.equal(-1);
});

it('findIndex([true, false, true], false) should return 1', function() {
  expect(findIndex([true, false, true], false)).to.equal(1);
});

it('findIndex([null, undefined, null], undefined) should return 1', function() {
  expect(findIndex([null, undefined, null], undefined)).to.equal(1);
});

it('findIndex([NaN, 0, "hello"], NaN) should return -1', function() {
  expect(findIndex([NaN, 0, "hello"], NaN)).to.equal(-1);
});

it('findIndex(["apple", "banana", "mango"], "APPLE") should return -1', function() {
  expect(findIndex(["apple", "banana", "mango"], "APPLE")).to.equal(-1);
});

it('findIndex([], "anything") should return -1', function() {
  expect(findIndex([], "anything")).to.equal(-1);
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
