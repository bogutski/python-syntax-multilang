// NAMEEN:
// NAMERU:Удаление и возвращение из массива

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `removeAndReturn`, которая принимает массив, индекс начала удаления, и количество элементов для удаления.

Функция должна удалить указанное количество элементов из массива, начиная с заданного индекса, и вернуть массив удаленных элементов.

Если индекс начала удаления выходит за пределы массива, функция должна вернуть пустой массив.

Если количество элементов для удаления превышает размер массива от начального индекса до конца, удаляются все элементы до конца массива.


Пример запуска функции:
```javascript
removeAndReturn([1, 2, 3], 3, 1); // Должен вернуть [], исходный массив остается неизменным [1, 2, 3]
removeAndReturn([1, 2, 3, 4, 5], 1, 2);  // Должен вернуть [2, 3], исходный массив станет [1, 4, 5]
removeAndReturn([1, 2, 3, 4, 5], 2, 10); // Должен вернуть [3, 4, 5], исходный массив станет [1, 2]
removeAndReturn([true, false, true], 0, 1);  // Должен вернуть [true], исходный массив станет [false, true]
removeAndReturn(['a', 'b', 'c', 'd'], 2, 2); // Должен вернуть ['c', 'd'], исходный массив станет ['a', 'b']
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
function removeAndReturn(){

}
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function removeAndReturn(arr, start, deleteCount) {
  return arr.splice(start, deleteCount);
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function removeAndReturn', () => {
  expect(removeAndReturn).to.be.a('function');
});

it('Function removeAndReturn should include methods splice()', () => {
  const res = removeAndReturn.toString()
  expect(res).to.include('.splice(')
});

it("removeAndReturn([1, 2, 3, 4, 5], 1, 2) should return [2, 3]", () => {
  expect(removeAndReturn([1, 2, 3, 4, 5], 1, 2)).to.deep.equal([2, 3]);
});

it("removeAndReturn(['a', 'b', 'c', 'd'], 2, 2) should return ['c', 'd']", () => {
  expect(removeAndReturn(['a', 'b', 'c', 'd'], 2, 2)).to.deep.equal(['c', 'd']);
});

it("removeAndReturn(['a', 'b', 'c'], 2, 0) should return []", () => {
  expect(removeAndReturn(['a', 'b', 'c'], 2, 0)).to.deep.equal([]);
});

it("removeAndReturn([true, false, true], 0, 1) should return [true]", () => {
  expect(removeAndReturn([true, false, true], 0, 1)).to.deep.equal([true]);
});

it("removeAndReturn([1, 2, 3], 3, 1) should return an empty array when start index is beyond array length", () => {
  expect(removeAndReturn([1, 2, 3], 3, 1)).to.deep.equal([]);
});

it("removeAndReturn([1, 2, 3, 4, 5], 2, 10) should return [3, 4, 5] when deleteCount exceeds elements count from start", () => {
  expect(removeAndReturn([1, 2, 3, 4, 5], 2, 10)).to.deep.equal([3, 4, 5]);
});

it("removeAndReturn([], 0, 1) should return an empty array if the input array is initially empty", () => {
  expect(removeAndReturn([], 0, 1)).to.deep.equal([]);
});

it("should verify that the original array is modified correctly after elements are removed", () => {
  let originalArray = [1, 2, 3, 4, 5];
  removeAndReturn(originalArray, 1, 3);
  expect(originalArray).to.deep.equal([1, 5]);
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
