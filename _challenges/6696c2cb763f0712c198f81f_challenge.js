// NAMEEN:
// NAMERU:Найти индекс последнего вхождения элемента

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `findLastIndex`, которая принимает массив и элемент.

Функция должна вернуть индекс последнего вхождения элемента в массиве. Если элемент не найден, функция должна вернуть `-1`.


Примеры запуска функции:
```javascript
findLastIndex(['apple', 'banana', 'mango', 'banana'], 'banana'); // 3
findLastIndex(['cat', 'dog', 'fish'], 'bird'); // -1
findLastIndex([1, 2, 3, 4, 2, 5], 2); // 4
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
function findLastIndex(){

}
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function findLastIndex(arr, element) {
  return arr.lastIndexOf(element);
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function findLastIndex', () => {
  expect(findLastIndex).to.be.a('function');
});

it("Function findLastIndex should include lastIndexOf method", () => {
  const result = findLastIndex.toString();
  expect(result).to.include('.lastIndexOf(');
});

it('findLastIndex(["apple", "banana", "mango", "banana"], "banana") should return 3', function() {
  expect(findLastIndex(["apple", "banana", "mango", "banana"], "banana")).to.equal(3);
});

it('findLastIndex([1, 2, 3, 4, 2, 5], 2) should return 4', function() {
  expect(findLastIndex([1, 2, 3, 4, 2, 5], 2)).to.equal(4);
});

it('findLastIndex(["cat", "dog", "fish"], "bird") should return -1', function() {
  expect(findLastIndex(["cat", "dog", "fish"], "bird")).to.equal(-1);
});

it('findLastIndex([true, false, true], false) should return 1', function() {
  expect(findLastIndex([true, false, true], false)).to.equal(1);
});

it('findLastIndex([null, undefined, null], null) should return 2', function() {
  expect(findLastIndex([null, undefined, null], null)).to.equal(2);
});

it('findLastIndex([NaN, 0, "hello"], NaN) should return -1', function() {
  expect(findLastIndex([NaN, 0, "hello"], NaN)).to.equal(-1);
});

it('findLastIndex(["apple", "banana", "mango"], "APPLE") should return -1', function() {
  expect(findLastIndex(["apple", "banana", "mango"], "APPLE")).to.equal(-1);
});

it('findLastIndex([], "anything") should return -1', function() {
  expect(findLastIndex([], "anything")).to.equal(-1);
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
