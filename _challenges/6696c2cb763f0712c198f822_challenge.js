// NAMEEN:
// NAMERU:Найти последний индекс элемента в многомерном массиве

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `findLastIndexInMultidimensionalArray`, которая принимает многомерный массив и элемент.

Функция должна вернуть индекс последнего вхождения элемента в многомерном массиве (в плоском представлении).

Если элемент не найден, функция должна вернуть `-1`.


Примеры запуска функции:
```javascript
findLastIndexInMultidimensionalArray([[1, 2], [2, 3, 4], [2, 5]], 2); // 5
findLastIndexInMultidimensionalArray([['cat', 'dog'], ['fish', 'bird']], 'lion'); // -1
findLastIndexInMultidimensionalArray([['a', 'b'], ['c', 'd', 'a'], ['e', 'f']], 'a'); // 3
findLastIndexInMultidimensionalArray([[true, false], [true, true], [false, true]], true); // 5
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
function findLastIndexInMultidimensionalArray(){

}
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function findLastIndexInMultidimensionalArray(arr, element) {
  return arr.flat(Infinity).lastIndexOf(element);
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function findLastIndexInMultidimensionalArray', () => {
  expect(findLastIndexInMultidimensionalArray).to.be.a('function');
});

it("Function findLastIndexInMultidimensionalArray should include lastIndexOf method", () => {
  const result = findLastIndexInMultidimensionalArray.toString();
  expect(result).to.include('.lastIndexOf(');
});

it('findLastIndexInMultidimensionalArray([["a", "b"], ["c", "d", "a"], ["e", "f"]], "a") should return 4', function() {
  expect(findLastIndexInMultidimensionalArray([["a", "b"], ["c", "d", "a"], ["e", "f"]], "a")).to.equal(4);
});

it('findLastIndexInMultidimensionalArray([[1, 2], [3, 4], [2, 5]], 2) should return 4', function() {
  expect(findLastIndexInMultidimensionalArray([[1, 2], [3, 4], [2, 5]], 2)).to.equal(4);
});

it('findLastIndexInMultidimensionalArray([["cat", "dog"], ["fish", "bird"]], "lion") should return -1', function() {
  expect(findLastIndexInMultidimensionalArray([["cat", "dog"], ["fish", "bird"]], "lion")).to.equal(-1);
});

it('findLastIndexInMultidimensionalArray([[true, false], [true], [false, true]], true) should return 4', function() {
  expect(findLastIndexInMultidimensionalArray([[true, false], [true], [false, true]], true)).to.equal(4);
});

it('findLastIndexInMultidimensionalArray([["apple"], ["banana", "apple"], ["cherry"]], "apple") should return 2', function() {
  expect(findLastIndexInMultidimensionalArray([["apple"], ["banana", "apple"], ["cherry"]], "apple")).to.equal(2);
});

it('findLastIndexInMultidimensionalArray([[1, 2, 3], [4, 5, 6], [7, 8, 9]], 4) should return 3', function() {
  expect(findLastIndexInMultidimensionalArray([[1, 2, 3], [4, 5, 6], [7, 8, 9]], 4)).to.equal(3);
});

it('findLastIndexInMultidimensionalArray([[], [], []], "anything") should return -1', function() {
  expect(findLastIndexInMultidimensionalArray([[], [], []], "anything")).to.equal(-1);
});

it('findLastIndexInMultidimensionalArray([[null], [null], [null]], null) should return 2', function() {
  expect(findLastIndexInMultidimensionalArray([[null], [null], [null]], null)).to.equal(2);
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
