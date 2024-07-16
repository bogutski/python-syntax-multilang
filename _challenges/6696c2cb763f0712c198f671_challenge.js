// NAMEEN:
// NAMERU:Сортировка массива строк по длине и обращение их порядка

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `sortAndReverseStringsByLength`, которая принимает массив строк.

Функция должна сначала отсортировать строки по убыванию их длины. Затем функция должна обратить порядок отсортированных строк в массиве и вернуть результат в виде нового массива.


Примеры запуска функции:
```javascript
sortAndReverseStringsByLength(["short", "longer", "longest", "tiny"]); // ['tiny', 'short', 'longer', 'longest']
sortAndReverseStringsByLength(["apple", "bananas", "cherry"]); // ['apple', 'cherry', 'bananas']
sortAndReverseStringsByLength([]); // []
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
function sortAndReverseStringsByLength(){

}
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function sortAndReverseStringsByLength(array) {
  const result = [...array].sort((a, b) => b.length - a.length)
  return result.reverse();
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function sortAndReverseStringsByLength', () => {
  expect(sortAndReverseStringsByLength).to.be.a('function');
});

it("original array should not be modified", () => {
  const array = ['a', 'abc', 'abcd', 'b', 'ab'];
  sortAndReverseStringsByLength(array)
  expect(array).to.deep.equal(['a', 'abc', 'abcd', 'b', 'ab']);
});

it("sortAndReverseStringsByLength should have the reverse method", () => {
  const result = sortAndReverseStringsByLength.toString();
  expect(result).to.include('.reverse()');
});

it("sortAndReverseStringsByLength(['short', 'longer', 'longest', 'tiny']) should return ['tiny', 'short', 'longer', 'longest']", () => {
  expect(sortAndReverseStringsByLength(["short", "longer", "longest", "tiny"])).to.deep.equal(["tiny", "short", "longer", "longest"]);
});

it("sortAndReverseStringsByLength(['apple', 'banana', 'cherry']) should return ['apple', 'cherry', 'banana']", () => {
  expect(sortAndReverseStringsByLength(["apple", "banana", "cherry"])).to.deep.equal(["apple", "cherry", "banana"]);
});

it("sortAndReverseStringsByLength([]) should return an empty array", () => {
  expect(sortAndReverseStringsByLength([])).to.deep.equal([]);
});

it("sortAndReverseStringsByLength(['one', 'two', 'three', 'four']) should return ['two', 'one', 'four', 'three']", () => {
  expect(sortAndReverseStringsByLength(["one", "two", "three", "four"])).to.deep.equal(["two", "one", "four", "three"]);
});

it("sortAndReverseStringsByLength(['word']) should return ['word']", () => {
  expect(sortAndReverseStringsByLength(["word"])).to.deep.equal(["word"]);
});

it("sortAndReverseStringsByLength(['phrase', 'a', 'substantially', 'longer', 'sentence']) should return ['a', 'longer', 'phrase', 'sentence', 'substantially']", () => {
  expect(sortAndReverseStringsByLength(["phrase", "a", "substantially", "longer", "sentence"])).to.deep.equal(["a", "longer", "phrase", "sentence", "substantially"]);
});

it("sortAndReverseStringsByLength(['hello', 'world']) should return ['world', 'hello']", () => {
  expect(sortAndReverseStringsByLength(["hello", "world"])).to.deep.equal(["world", "hello"]);
});

it("sortAndReverseStringsByLength(['test', 'testing', 'tests']) should return ['test', 'tests', 'testing']", () => {
  expect(sortAndReverseStringsByLength(["test", "testing", "tests"])).to.deep.equal(["test", "tests", "testing"]);
});

it("sortAndReverseStringsByLength(['data', 'information', 'fact']) should return ['fact', 'data', 'information']", () => {
  expect(sortAndReverseStringsByLength(["data", "information", "fact"])).to.deep.equal(["fact", "data", "information"]);
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
