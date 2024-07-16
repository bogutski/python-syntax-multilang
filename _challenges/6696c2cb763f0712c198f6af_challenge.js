// NAMEEN:
// NAMERU:Применение действий и инверсия массива

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `applyAndReverse`, которая принимает массив и функцию `action`.

Функция должна применять переданное действие к каждому элементу массива, а затем возвращать новый массив с измененными элементами в обратном порядке.

Используйте метод `toReversed()` для их инвертирования.


Примеры запуска функции:
```javascript
applyAndReverse([1, 2, 3], x => x * 2); // [6, 4, 2]
applyAndReverse(['a', 'b', 'c'], char => char.toUpperCase()); // ['C', 'B', 'A']
applyAndReverse([true, false, true], bool => !bool); // [false, true, false]
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
function applyAndReverse(){

}
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function applyAndReverse(arr, action) {
  const res = arr.map(action)
  return res.toReversed();
}
// SOLUTIONEND


// OPENTESTSSTART
Array.prototype.toReversed = function(){
  return this.slice().reverse()
}

it('Created function applyAndReverse', () => {
  expect(applyAndReverse).to.be.a('function');
});

it("Function applyAndReverse() should include toReversed method", () => {
  const result = applyAndReverse.toString();
  expect(result).to.include('.toReversed()');
});

it("Function applyAndReverse() should not include comments", () => {
  const result = applyAndReverse.toString();
  expect(result).to.not.include('//');
  expect(result).to.not.include('/*');
});

it("Function applyAndReverse() should not modify the original array", () => {
  let originalArray = [1, 2, 3];
  applyAndReverse(originalArray, x => x * 2);
  expect(originalArray).to.deep.equal([1, 2, 3]);
});

it("applyAndReverse([1, 2, 3], x => x * 2) should return [6, 4, 2]", () => {
  expect(applyAndReverse([1, 2, 3], x => x * 2)).to.deep.equal([6, 4, 2]);
});

it("applyAndReverse(['a', 'b', 'c'], char => char.toUpperCase()) should return ['C', 'B', 'A']", () => {
  expect(applyAndReverse(['a', 'b', 'c'], char => char.toUpperCase())).to.deep.equal(['C', 'B', 'A']);
});

it("applyAndReverse([true, false, true], bool => !bool) should return [false, true, false]", () => {
  expect(applyAndReverse([true, false, true], bool => !bool)).to.deep.equal([false, true, false]);
});

it("applyAndReverse([0, 1, 2, 3], x => x + 1) should return [4, 3, 2, 1]", () => {
  expect(applyAndReverse([0, 1, 2, 3], x => x + 1)).to.deep.equal([4, 3, 2, 1]);
});

it("applyAndReverse(['red', 'green', 'blue'], color => color.slice(0, -1)) should return ['blu', 'gree', 're']", () => {
  expect(applyAndReverse(['red', 'green', 'blue'], color => color.slice(0, -1))).to.deep.equal(['blu', 'gree', 're']);
});

it("applyAndReverse([10, 20, 30], num => num / 2) should return [15, 10, 5]", () => {
  expect(applyAndReverse([10, 20, 30], num => num / 2)).to.deep.equal([15, 10, 5]);
});

it("applyAndReverse(['single'], word => word.repeat(2)) should return ['singlesingle']", () => {
  expect(applyAndReverse(['single'], word => word.repeat(2))).to.deep.equal(['singlesingle']);
});

it("applyAndReverse([3, 6, 9], x => x % 3) should return [0, 0, 0]", () => {
  expect(applyAndReverse([3, 6, 9], x => x % 3)).to.deep.equal([0, 0, 0]);
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
