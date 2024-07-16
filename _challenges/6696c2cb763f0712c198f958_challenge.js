// NAMEEN:
// NAMERU:Извлечение уникальных элементов после определенного индекса

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `getUniqueElementsAfterIndex`, которая принимает массив и число.

Функция должна возвращать новый массив, содержащий все уникальные элементы массива после указанного индекса (включительно).


Примеры запуска функции:
```javascript
getUniqueElementsAfterIndex([1, 2, 3, 4, 2, 5, 3, 6], 2); // [3, 4, 2, 5, 6]
getUniqueElementsAfterIndex([10, 20, 30, 10, 20, 40, 20], 4); // [20, 40]
getUniqueElementsAfterIndex([true, false, true, true, false], 1); // [false, true]
getUniqueElementsAfterIndex(['a', 'b', 'c', 'a', 'd', 'b', 'e', 'd'], 3); // ['a', 'd', 'b', 'e']
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
function getUniqueElementsAfterIndex(){

}
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function getUniqueElementsAfterIndex(arr, n) {
  return arr.slice(n).filter((el, i, array) => array.indexOf(el) === i);
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function getUniqueElementsAfterIndex', () => {
  expect(getUniqueElementsAfterIndex).to.be.a('function');
});

it('getUniqueElementsAfterIndex([1, 2, 3, 4, 2, 5, 3, 6], 2) should return [3, 4, 2, 5, 6]', function() {
  expect(getUniqueElementsAfterIndex([1, 2, 3, 4, 2, 5, 3, 6], 2)).to.eql([3, 4, 2, 5, 6]);
});

it('getUniqueElementsAfterIndex(["a", "b", "c", "a", "d", "b", "e"], 3) should return ["a", "d", "b", "e"]', function() {
  expect(getUniqueElementsAfterIndex(["a", "b", "c", "a", "d", "b", "e"], 3)).to.eql(["a", "d", "b", "e"]);
});

it('getUniqueElementsAfterIndex([true, false, true, true, false], 1) should return [false, true]', function() {
  expect(getUniqueElementsAfterIndex([true, false, true, true, false], 1)).to.eql([false, true]);
});

it('getUniqueElementsAfterIndex([10, 20, 30, 10, 20, 40], 4) should return [20, 40]', function() {
  expect(getUniqueElementsAfterIndex([10, 20, 30, 10, 20, 40], 4)).to.eql([20, 40]);
});

it('getUniqueElementsAfterIndex([1, 2, 3, 1, 2, 3, 4, 5], 0) should return [1, 2, 3, 4, 5]', function() {
  expect(getUniqueElementsAfterIndex([1, 2, 3, 1, 2, 3, 4, 5], 0)).to.eql([1, 2, 3, 4, 5]);
});

it('getUniqueElementsAfterIndex([1, 2, 2, 3, 3, 4, 4, 5, 5], 2) should return [2, 3, 4, 5]', function() {
  expect(getUniqueElementsAfterIndex([1, 2, 2, 3, 3, 4, 4, 5, 5], 2)).to.eql([2, 3, 4, 5]);
});

it('getUniqueElementsAfterIndex(["apple", "banana", "apple", "cherry", "banana"], 1) should return ["banana", "apple", "cherry"]', function() {
  expect(getUniqueElementsAfterIndex(["apple", "banana", "apple", "cherry", "banana"], 1)).to.eql(["banana", "apple", "cherry"]);
});

it('getUniqueElementsAfterIndex([null, undefined, null, false, undefined, true], 2) should return [null, false, undefined, true]', function() {
  expect(getUniqueElementsAfterIndex([null, undefined, null, false, undefined, true], 2)).to.eql([null, false, undefined, true]);
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
