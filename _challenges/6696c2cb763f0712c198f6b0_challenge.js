// NAMEEN:
// NAMERU:Инверсия внутренних массивов и их объединение

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `reverseSubArraysAndFlatten`, которая принимает двухмерный массив массивов и возвращает новый массив.

Функция должна сначала инвертировать каждый внутренний массив с использованием `toReversed()`, а затем объединить все инвертированные массивы в один массив.


Примеры запуска функции:
```javascript
reverseSubArraysAndFlatten([[], [1, 2], []]); // [2, 1]
reverseSubArraysAndFlatten([[1, 2], [3, 4], [5, 6]]); // [2, 1, 4, 3, 6, 5]
reverseSubArraysAndFlatten([[1, 2], [3, 4], [5, 6]]); // [2, 1, 4, 3, 6, 5]
reverseSubArraysAndFlatten([['a', 'b'], ['c', 'd'], ['e', 'f']]); // ['b', 'a', 'd', 'c', 'f', 'e']
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
function reverseSubArraysAndFlatten(){

}
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function reverseSubArraysAndFlatten(arr) {
  return arr.flatMap(el => el.toReversed());
}
// SOLUTIONEND


// OPENTESTSSTART
Array.prototype.toReversed = function(){
  return this.slice().reverse()
}

it('Created function reverseSubArraysAndFlatten', () => {
  expect(reverseSubArraysAndFlatten).to.be.a('function');
});

it("Function reverseSubArraysAndFlatten() should include toReversed method", () => {
  const result = reverseSubArraysAndFlatten.toString();
  expect(result).to.include('.toReversed()');
});

it("Function reverseSubArraysAndFlatten() should not include comments", () => {
  const result = reverseSubArraysAndFlatten.toString();
  expect(result).to.not.include('//');
  expect(result).to.not.include('/*');
});

it("Function reverseSubArraysAndFlatten() should not modify the original array", () => {
  let originalArray = [[1, 2], [3, 4]];
  reverseSubArraysAndFlatten(originalArray);
  expect(originalArray).to.deep.equal([[1, 2], [3, 4]]);
});

it("reverseSubArraysAndFlatten([[1, 2], [3, 4], [5, 6]]) should return [2, 1, 4, 3, 6, 5]", () => {
  expect(reverseSubArraysAndFlatten([[1, 2], [3, 4], [5, 6]])).to.deep.equal([2, 1, 4, 3, 6, 5]);
});

it("reverseSubArraysAndFlatten([['a', 'b'], ['c', 'd'], ['e', 'f']]) should return ['b', 'a', 'd', 'c', 'f', 'e']", () => {
  expect(reverseSubArraysAndFlatten([['a', 'b'], ['c', 'd'], ['e', 'f']])).to.deep.equal(['b', 'a', 'd', 'c', 'f', 'e']);
});

it("reverseSubArraysAndFlatten([[], [1, 2], []]) should return [2, 1]", () => {
  expect(reverseSubArraysAndFlatten([[], [1, 2], []])).to.deep.equal([2, 1]);
});

it("reverseSubArraysAndFlatten([[10], [20, 30], [40, 50, 60]]) should return [10, 30, 20, 60, 50, 40]", () => {
  expect(reverseSubArraysAndFlatten([[10], [20, 30], [40, 50, 60]])).to.deep.equal([10, 30, 20, 60, 50, 40]);
});

it("reverseSubArraysAndFlatten([]) should return []", () => {
  expect(reverseSubArraysAndFlatten([])).to.deep.equal([]);
});

it("reverseSubArraysAndFlatten([[100]]) should return [100]", () => {
  expect(reverseSubArraysAndFlatten([[100]])).to.deep.equal([100]);
});

it("reverseSubArraysAndFlatten([[1, 2, 3], [], [4, 5]]) should return [3, 2, 1, 5, 4]", () => {
  expect(reverseSubArraysAndFlatten([[1, 2, 3], [], [4, 5]])).to.deep.equal([3, 2, 1, 5, 4]);
});

it("reverseSubArraysAndFlatten([[1], [2], [3]]) should return [1, 2, 3]", () => {
  expect(reverseSubArraysAndFlatten([[1], [2], [3]])).to.deep.equal([1, 2, 3]);
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
