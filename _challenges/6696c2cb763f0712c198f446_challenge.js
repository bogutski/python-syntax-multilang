// NAMEEN:
// NAMERU:Гибкое изменение массива с возвратом изменений

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Разработайте функцию `flexibleModifyAndTrack`, которая принимает исходный массив `originalArray` и объект с произвольным количеством операций изменения.

Каждая операция представлена объектом с тремя ключами: [{start: 2, deleteCount: 1, items: [6]}, ...], где:
* `start` - начальный индекс для изменения,
* `deleteCount` - количество удаляемых элементов,
* `items` - массив элементов для добавления.

Функция должна применять все операции к исходному массиву последовательно, и возвращать объект с двумя массивами:
* `finalArray` - итоговый массив после всех изменений,
* `changes` - массив, содержащий информацию обо всех добавленных или удаленных элементах в формате:
 {added: [элементы], removed: [элементы]} для каждой операции.

Исходный массив должен оставаться неизменным.


Пример запуска функции:
```javascript
const originalArray = [1, 2, 3, 4, 5];
const operations = [
  { start: 2, deleteCount: 1, items: [6] },
  { start: 4, deleteCount: 0, items: [7, 8] }
];

console.log(flexibleModifyAndTrack(originalArray, operations));
// {
// finalArray: [1, 2, 6, 4, 7, 8, 5],
// changes: [
// { added: [6], removed: [3] },
// { added: [7, 8], removed: [] }]
// }
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
function flexibleModifyAndTrack(){

}
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function flexibleModifyAndTrack(arr, toDo) {
  let finalArray = [...arr]
  let changes = []

  for(let {start, deleteCount, items} of toDo){
    const removedEl = finalArray.splice(start, deleteCount, ...items)
    changes.push({added: items, removed: removedEl})
  }

  return {finalArray, changes};
}
// SOLUTIONEND


// OPENTESTSSTART
Array.prototype.toSpliced = function(start, deleteCount, ...items) {
  let newArray = this.slice();
  if(deleteCount === undefined) deleteCount = newArray.length - start
  newArray.splice(start, deleteCount, ...items);
  return newArray;
};

it('Created function flexibleModifyAndTrack', () => {
  expect(flexibleModifyAndTrack).to.be.a('function');
});

it("correctly modifies and tracks array changes", () => {
  const originalArray = [1, 2, 3, 4, 5];
  const operations = [
    { start: 2, deleteCount: 1, items: [6] },
    { start: 4, deleteCount: 0, items: [7, 8] }
  ];

  const { finalArray, changes } = flexibleModifyAndTrack(originalArray, operations);
  expect(finalArray).to.deep.equal([1, 2, 6, 4, 7, 8, 5]);
  expect(changes).to.deep.equal([
    { added: [6], removed: [3] },
    { added: [7, 8], removed: [] }
  ]);
});

it("handles adding at the start", () => {
  const { finalArray, changes } = flexibleModifyAndTrack([1, 2, 3], [{ start: 0, deleteCount: 0, items: [0] }]);
  expect(finalArray).to.deep.equal([0, 1, 2, 3]);
  expect(changes).to.deep.equal([{ added: [0], removed: [] }]);
});

it("handles adding at the end", () => {
  const { finalArray, changes } = flexibleModifyAndTrack([1, 2, 3], [{ start: 3, deleteCount: 0, items: [4] }]);
  expect(finalArray).to.deep.equal([1, 2, 3, 4]);
  expect(changes).to.deep.equal([{ added: [4], removed: [] }]);
});

it("handles removing from the start", () => {
  const { finalArray, changes } = flexibleModifyAndTrack([1, 2, 3, 4], [{ start: 0, deleteCount: 2, items: [] }]);
  expect(finalArray).to.deep.equal([3, 4]);
  expect(changes).to.deep.equal([{ added: [], removed: [1, 2] }]);
});

it("handles removing from the end", () => {
  const { finalArray, changes } = flexibleModifyAndTrack([1, 2, 3, 4], [{ start: 2, deleteCount: 2, items: [] }]);
  expect(finalArray).to.deep.equal([1, 2]);
  expect(changes).to.deep.equal([{ added: [], removed: [3, 4] }]);
});

it("handles replacing in the middle", () => {
  const { finalArray, changes } = flexibleModifyAndTrack([1, 2, 3, 4], [{ start: 1, deleteCount: 2, items: [5, 6] }]);
  expect(finalArray).to.deep.equal([1, 5, 6, 4]);
  expect(changes).to.deep.equal([{ added: [5, 6], removed: [2, 3] }]);
});

it("no operations result in the same array", () => {
  const { finalArray, changes } = flexibleModifyAndTrack([1, 2, 3], []);
  expect(finalArray).to.deep.equal([1, 2, 3]);
  expect(changes).to.deep.equal([]);
});

it("handles complex multiple operations", () => {
  const { finalArray, changes } = flexibleModifyAndTrack([1, 2, 3, 4, 5], [
    { start: 1, deleteCount: 1, items: [6] },
    { start: 4, deleteCount: 1, items: [7, 8] }
  ]);
  expect(finalArray).to.deep.equal([1, 6, 3, 4, 7, 8]);
  expect(changes).to.deep.equal([
    { added: [6], removed: [2] },
    { added: [7, 8], removed: [5] }
  ]);
});

it("operation with deleteCount greater than array length", () => {
  const { finalArray, changes } = flexibleModifyAndTrack([1, 2, 3], [{ start: 1, deleteCount: 5, items: [4, 5] }]);
  expect(finalArray).to.deep.equal([1, 4, 5]);
  expect(changes).to.deep.equal([{ added: [4, 5], removed: [2, 3] }]);
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
