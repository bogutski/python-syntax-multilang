// NAMEEN:
// NAMERU:Слияние и разделение массивов

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `mergeAndSplit`, которая принимает пять аргументов:

* исходный массив,
* позицию начала вставки `insertAt`,
* массив элементов `elementsToInsert` для добавления,
* позицию начала удаления `deleteFrom`,
* количество элементов для удаления `deleteCount`.

Функция должна сначала вставить `elementsToInsert` в переданный массив начиная с позиции `insertAt`.

Затем создать копию переданного массива, и удалить сегмент начиная с `deleteFrom` на `deleteCount` элементов.

Ваша функция должна возвращать объект с двумя свойствами: `merged` для массива после вставки и `newArray` для нового массива.


Пример запуска функции:
```javascript
mergeAndSplit([1, 2, 3, 4, 5], 3, [6, 7, 8], 1, 4);
// { merged: [1, 2, 3, 6, 7, 8, 4, 5], newArray: [1, 8, 4, 5] }
mergeAndSplit(['a'], 0, ['b', 'c', 'd'], 3, 1);
// { merged: ['b', 'c', 'd', 'a'], newArray: ['b', 'c', 'd'] }
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
function mergeAndSplit(){

}
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function mergeAndSplit(arr, insertAt, elementsToInsert, deleteFrom, deleteCount) {
  const withNewEl = arr.toSpliced(insertAt, 0, ...elementsToInsert)
  const newArr = withNewEl.toSpliced(deleteFrom, deleteCount);

  return {merged: withNewEl, newArray: newArr}
}
// SOLUTIONEND


// OPENTESTSSTART
Array.prototype.toSpliced = function(start, deleteCount, ...items) {
  let newArray = this.slice();
  if(deleteCount === undefined) deleteCount = newArray.length - start
  newArray.splice(start, deleteCount, ...items);
  return newArray;
};

it('Created function mergeAndSplit', () => {
  expect(mergeAndSplit).to.be.a('function');
});

it('Function mergeAndSplit should include method toSpliced()', () => {
  const res = mergeAndSplit.toString()
  expect(res).to.include('.toSpliced(')
});

it("should correctly merge and split the array with numbers", () => {
  const { merged, newArray } = mergeAndSplit([1, 2, 3, 4, 5], 3, [6, 7, 8], 1, 4);
  expect(merged).to.deep.equal([1, 2, 3, 6, 7, 8, 4, 5]);
  expect(newArray).to.deep.equal([1, 8, 4, 5]);
});

it("should correctly merge and create new array with strings", () => {
  const { merged, newArray } = mergeAndSplit(['a'], 0, ['b', 'c', 'd'], 3, 1);
  expect(merged).to.deep.equal(['b', 'c', 'd', 'a']);
  expect(newArray).to.deep.equal(['b', 'c', 'd']);
});

it("should handle empty elementsToInsert and return unchanged arrays", () => {
  const { merged, newArray } = mergeAndSplit([10, 20, 30], 1, [], 0, 1);
  expect(merged).to.deep.equal([10, 20, 30]);
  expect(newArray).to.deep.equal([20, 30]);
});

it("should correctly insert at the beginning and remove from the end", () => {
  const { merged, newArray } = mergeAndSplit([1, 2, 3], 0, [0], 2, 1);
  expect(merged).to.deep.equal([0, 1, 2, 3]);
  expect(newArray).to.deep.equal([0, 1, 3]);
});

it("should correctly insert at the end and remove from the beginning", () => {
  const { merged, newArray } = mergeAndSplit(['x', 'y'], 2, ['z'], 0, 1);
  expect(merged).to.deep.equal(['x', 'y', 'z']);
  expect(newArray).to.deep.equal(['y', 'z']);
});

it("should handle insert and delete at the same position", () => {
  const { merged, newArray } = mergeAndSplit([100, 200, 300], 1, [150], 1, 2);
  expect(merged).to.deep.equal([100, 150, 200, 300]);
  expect(newArray).to.deep.equal([100, 300]);
});

it("should return original array in merged when insertAt is beyond array length", () => {
  const { merged, newArray } = mergeAndSplit(['a', 'b'], 5, ['c'], 0, 2);
  expect(merged).to.deep.equal(['a', 'b', 'c']);
  expect(newArray).to.deep.equal(['c']);
});

it("should return original array in newArray when deleteFrom is beyond array length", () => {
  const { merged, newArray } = mergeAndSplit(['a', 'b', 'c'], 2, ['d', 'e'], 5, 1);
  expect(merged).to.deep.equal(['a', 'b', 'd', 'e', 'c']);
  expect(newArray).to.deep.equal(['a', 'b', 'd', 'e', 'c']);
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
