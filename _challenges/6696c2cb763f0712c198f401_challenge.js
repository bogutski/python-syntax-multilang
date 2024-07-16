// NAMEEN:
// NAMERU:Извлечение и возвращение первых N элементов

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Создайте функцию `extractFirstN`, которая принимает массив и число `N`.

Функция должна удалить из массива первые `N` элементов и вернуть массив, содержащий удаленные элементы.

Если `N` больше длины массива, функция должна извлечь и вернуть все элементы массива.


Пример запуска функции:
```javascript
extractFirstN([1, 2, 3], 5); // Должен вернуть [1, 2, 3], исходный массив станет []
extractFirstN([1, 2, 3, 4, 5], 2); // Должен вернуть [1, 2], исходный массив станет [3, 4, 5]
extractFirstN(['a', 'b', 'c', 'd'], 3); // Должен вернуть ['a', 'b', 'c'], исходный массив станет ['d']
extractFirstN([true, false, true], 1); // Должен вернуть [true], исходный массив станет [false, true]
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
function extractFirstN(){

}
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function extractFirstN(arr, num) {
  return arr.splice(0, num);
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function extractFirstN', () => {
  expect(extractFirstN).to.be.a('function');
});

it('Function extractFirstN should include methods splice()', () => {
  const res = extractFirstN.toString()
  expect(res).to.include('.splice(')
});

it("extractFirstN([1, 2, 3, 4, 5], 2) should return [1, 2]", () => {
  expect(extractFirstN([1, 2, 3, 4, 5], 2)).to.deep.equal([1, 2]);
});

it("extractFirstN(['a', 'b', 'c', 'd'], 3) should return ['a', 'b', 'c']", () => {
  expect(extractFirstN(['a', 'b', 'c', 'd'], 3)).to.deep.equal(['a', 'b', 'c']);
});

it("extractFirstN(['a', 'b', 'c', 'd'], 10) should return ['a', 'b', 'c', 'd']", () => {
  expect(extractFirstN(['a', 'b', 'c', 'd'], 10)).to.deep.equal(['a', 'b', 'c', 'd']);
});

it("extractFirstN([true, false, true], 1) should return [true]", () => {
  expect(extractFirstN([true, false, true], 1)).to.deep.equal([true]);
});

it("extractFirstN([1, 2, 3], 5) should return [1, 2, 3] when N is greater than array length", () => {
  expect(extractFirstN([1, 2, 3], 5)).to.deep.equal([1, 2, 3]);
});

// Дополнительные тесты
it("extractFirstN([], 1) should return an empty array if the input array is initially empty", () => {
  expect(extractFirstN([], 1)).to.deep.equal([]);
});

it("extractFirstN([1, 2, 3, 4, 5], 0) should return an empty array when N is 0", () => {
  expect(extractFirstN([1, 2, 3, 4, 5], 0)).to.deep.equal([]);
});

it("should verify that the original array is modified correctly after extraction", () => {
  let originalArray = [1, 2, 3, 4, 5];
  extractFirstN(originalArray, 3);
  expect(originalArray).to.deep.equal([4, 5]);
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
