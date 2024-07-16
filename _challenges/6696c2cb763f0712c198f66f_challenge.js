// NAMEEN:
// NAMERU:Слияние и обращение порядка элементов в нескольких массивах

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `mergeAndReverse`, которая принимает произвольное количество массивов любых типов данных.

Функция должна сначала объединить все эти массивы в один, а затем вернуть новый массив, в котором элементы следуют в обратном порядке.

Функция должна создавать новый массив, не изменяя исходные.


Примеры запуска функции:
```javascript
mergeAndReverse([1, 2], [3, 4], [5, 6]); // [6, 5, 4, 3, 2, 1]
mergeAndReverse(['a', 'b'], ['c', 'd']); // ['d', 'c', 'b', 'a']
mergeAndReverse([], [1, 2], ['a']); // ['a', 2, 1]
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
function mergeAndReverse(){

}
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function mergeAndReverse(...arr) {
  return [...arr].flat().reverse();
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function mergeAndReverse', () => {
  expect(mergeAndReverse).to.be.a('function');
});

it("mergeAndReverse([1, 2], [3, 4], [5, 6]) should return [6, 5, 4, 3, 2, 1]", () => {
  expect(mergeAndReverse([1, 2], [3, 4], [5, 6])).to.deep.equal([6, 5, 4, 3, 2, 1]);
});

it("mergeAndReverse(['a', 'b'], ['c', 'd']) should return ['d', 'c', 'b', 'a']", () => {
  expect(mergeAndReverse(['a', 'b'], ['c', 'd'])).to.deep.equal(['d', 'c', 'b', 'a']);
});

it("mergeAndReverse([], [1, 2], ['a']) should return ['a', 2, 1]", () => {
  expect(mergeAndReverse([], [1, 2], ['a'])).to.deep.equal(['a', 2, 1]);
});

it("mergeAndReverse([1]) should return [1]", () => {
  expect(mergeAndReverse([1])).to.deep.equal([1]);
});

it("mergeAndReverse() should return an empty array", () => {
  expect(mergeAndReverse()).to.deep.equal([]);
});

it("mergeAndReverse(['Hello', 'world'], [123]) should return [123, 'world', 'Hello']", () => {
  expect(mergeAndReverse(['Hello', 'world'], [123])).to.deep.equal([123, 'world', 'Hello']);
});

it("mergeAndReverse([true, false], [null, undefined], [1, 'two']) should return ['two', 1, undefined, null, false, true]", () => {
  expect(mergeAndReverse([true, false], [null, undefined], [1, 'two'])).to.deep.equal(['two', 1, undefined, null, false, true]);
});

it("mergeAndReverse can handle arrays with different data types and reverse them in place", () => {
  let originalArray = [1, 'two', {three: 3}, [4], null];
  expect(mergeAndReverse(originalArray)).to.deep.equal([null, [4], {three: 3}, 'two', 1]);
});

it("mergeAndReverse should use the flat method to merge arrays", () => {
  const originalArrays = [[1, 2], [3, 4]];
  const flattenedArray = originalArrays.flat();
  mergeAndReverse(...originalArrays);
  expect(flattenedArray).to.deep.equal([1, 2, 3, 4]);
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
