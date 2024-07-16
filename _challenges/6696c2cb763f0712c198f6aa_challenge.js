// NAMEEN:
// NAMERU:Использование метода toReversed

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `demonstrateToReversed`, которая принимает массив как аргумент и возвращает новый массив, в котором элементы расположены в обратном порядке.

Ваша задача — использовать метод `toReversed()` для достижения этой цели.


Примеры запуска функции:
```javascript
demonstrateToReversed([1, 2, 3]); // [3, 2, 1]
demonstrateToReversed(['a', 'b', 'c']); // ['c', 'b', 'a']
demonstrateToReversed([]); // []
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
function demonstrateToReversed(){

}
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function demonstrateToReversed(array) {
  return array.toReversed();
}
// SOLUTIONEND


// OPENTESTSSTART
Array.prototype.toReversed = function(){
  return this.slice().reverse()
}

it('Created function demonstrateToReversed', () => {
  expect(demonstrateToReversed).to.be.a('function');
});

it("Function demonstrateToReversed() should include toReversed method", () => {
  const result = demonstrateToReversed.toString();
  expect(result).to.include('.toReversed()');
});

it("Function demonstrateToReversed() should not modify the original array", () => {
  let originalArray = [1, 2, 3, 4, 5];
  demonstrateToReversed(originalArray);
  expect(originalArray).to.deep.equal([1, 2, 3, 4, 5]);
});

it("demonstrateToReversed([1, 2, 3]) should return [3, 2, 1]", () => {
  expect(demonstrateToReversed([1, 2, 3])).to.deep.equal([3, 2, 1]);
});

it("demonstrateToReversed(['a', 'b', 'c']) should return ['c', 'b', 'a']", () => {
  expect(demonstrateToReversed(['a', 'b', 'c'])).to.deep.equal(['c', 'b', 'a']);
});

it("demonstrateToReversed([]) should return []", () => {
  expect(demonstrateToReversed([])).to.deep.equal([]);
});

it("demonstrateToReversed([true, false]) should return [false, true]", () => {
  expect(demonstrateToReversed([true, false])).to.deep.equal([false, true]);
});

it("demonstrateToReversed([1]) should return [1]", () => {
  expect(demonstrateToReversed([1])).to.deep.equal([1]);
});

it("demonstrateToReversed([1, 2, 2, 3]) should return [3, 2, 2, 1]", () => {
  expect(demonstrateToReversed([1, 2, 2, 3])).to.deep.equal([3, 2, 2, 1]);
});

it("demonstrateToReversed(['apple', 'banana']) should return ['banana', 'apple']", () => {
  expect(demonstrateToReversed(['apple', 'banana'])).to.deep.equal(['banana', 'apple']);
});

it("demonstrateToReversed([null, undefined, null]) should return [null, undefined, null]", () => {
  expect(demonstrateToReversed([null, undefined, null])).to.deep.equal([null, undefined, null]);
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
