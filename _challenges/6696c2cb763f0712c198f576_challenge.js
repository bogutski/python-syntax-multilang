// NAMEEN:
// NAMERU:Слияние массивов с удалением вложенности

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `mergeAndFlatten`, которая принимает два аргумента — массивы `array1` и `array2`.

Функция должна объединить эти два массива в один и "выпрямить" любую вложенность, используя метод `Array.prototype.flat()`.

В результате должен быть возвращен новый массив, содержащий все элементы обоих массивов на одном уровне.


Примеры Запуска Функции:
```javascript
mergeAndFlatten([1, 2, [3]], [4, [5, 6]]); // [1, 2, 3, 4, 5, 6]
mergeAndFlatten([[1, 2], [3, 4]], [[5, 6], 7]); // [1, 2, 3, 4, 5, 6, 7]
mergeAndFlatten(['a', ['b']], [['c'], 'd']); // ['a', 'b', 'c', 'd']
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
function mergeAndFlatten(){

}
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function mergeAndFlatten(arr1, arr2) {
  return [...arr1, ...arr2].flat(Infinity);
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function mergeAndFlatten', () => {
  expect(mergeAndFlatten).to.be.a('function');
});

it('Function mergeAndFlatten should include method flat()', () => {
  const res = mergeAndFlatten.toString()
  expect(res).to.include('.flat(')
});

it("mergeAndFlatten([1, 2, [3]], [4, [5, 6]]) should return [1, 2, 3, 4, 5, 6]", function() {
  expect(mergeAndFlatten([1, 2, [3]], [4, [5, 6]])).to.deep.equal([1, 2, 3, 4, 5, 6]);
});

it("mergeAndFlatten([[1, 2], [3, 4]], [[5, 6], 7]) should return [1, 2, 3, 4, 5, 6, 7]", function() {
  expect(mergeAndFlatten([[1, 2], [3, 4]], [[5, 6], 7])).to.deep.equal([1, 2, 3, 4, 5, 6, 7]);
});

it("mergeAndFlatten(['a', ['b']], [['c'], 'd']) should return ['a', 'b', 'c', 'd']", function() {
  expect(mergeAndFlatten(['a', ['b']], [['c'], 'd'])).to.deep.equal(['a', 'b', 'c', 'd']);
});

it("mergeAndFlatten([], []) should return an empty array", function() {
  expect(mergeAndFlatten([], [])).to.deep.equal([]);
});

it("mergeAndFlatten([[], [[]]], [[[]], []]) should return an empty array", function() {
  expect(mergeAndFlatten([[], [[]]], [[[]], []])).to.deep.equal([]);
});

it("mergeAndFlatten([0, [1]], [[2], 3]) should return [0, 1, 2, 3]", function() {
  expect(mergeAndFlatten([0, [1]], [[2], 3])).to.deep.equal([0, 1, 2, 3]);
});

it("mergeAndFlatten([[null, undefined], [true, false]], [[NaN], [Infinity]]) should return [null, undefined, true, false, NaN, Infinity]", function() {
  expect(mergeAndFlatten([[null, undefined], [true, false]], [[NaN], [Infinity]])).to.deep.equal([null, undefined, true, false, NaN, Infinity]);
});

it("mergeAndFlatten(['flat', ['nested']], [['more', 'nested'], 'values']) should return ['flat', 'nested', 'more', 'nested', 'values']", function() {
  expect(mergeAndFlatten(['flat', ['nested']], [['more', 'nested'], 'values'])).to.deep.equal(['flat', 'nested', 'more', 'nested', 'values']);
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
