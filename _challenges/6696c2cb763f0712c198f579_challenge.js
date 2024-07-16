// NAMEEN:
// NAMERU:Глубина сглаживания с условием

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `conditionalFlatten`, которая принимает два аргумента: вложенный массив `nestedArray` и целочисленный параметр `depth`.

Функция должна выпрямить массив до указанной глубины `depth`, а затем применить фильтр, который удаляет все значения `null` и `undefined` из результата.


Примеры Запуска Функции:
```javascript
conditionalFlatten([null, [[undefined, 2], 3]], 2); // [2, 3]
conditionalFlatten([[['a', null], undefined], [['b', null], 'c']], Infinity); // ['a', 'b', 'c']
conditionalFlatten([1, [2, null, [3, undefined]], [4, [5, 6]]], 1); // [1, 2, [3, undefined], 4, [5, 6]]
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
function conditionalFlatten(){

}
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function conditionalFlatten(arr, depth) {
  const flatten = arr.flat(depth)
  let res = []

  for(let el of flatten){
    if(el !== undefined && el !== null) res.push(el)
  }

  return res;
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function conditionalFlatten', () => {
  expect(conditionalFlatten).to.be.a('function');
});

it('Function conditionalFlatten should include method flat()', () => {
  const res = conditionalFlatten.toString()
  expect(res).to.include('.flat(')
});

it("conditionalFlatten([1, [2, null, [3, undefined]], [4, [5, 6]]], 1) should return [1, 2, [3, undefined], 4, [5, 6]]", function() {
  expect(conditionalFlatten([1, [2, null, [3, undefined]], [4, [5, 6]]], 1)).to.deep.equal([1, 2, [3, undefined], 4, [5, 6]]);
});

it("conditionalFlatten([null, [[undefined, 2], 3]], 2) should return [2, 3]", function() {
  expect(conditionalFlatten([null, [[undefined, 2], 3]], 2)).to.deep.equal([2, 3]);
});

it("conditionalFlatten([[['a']], [['b', null], 'c']], Infinity) should return ['a', 'b', 'c']", function() {
  expect(conditionalFlatten([[['a']], [['b', null], 'c']], Infinity)).to.deep.equal(['a', 'b', 'c']);
});

it("conditionalFlatten([[null, [1]], [2, [3]]], 1) should remove null values and return [1, 2, [3]]", function() {
  expect(conditionalFlatten([[null, [1]], [2, [3]]], 1)).to.deep.equal([[1], 2, [3]]);
});

it("conditionalFlatten([[], [[], [0]]], 2) should return [0]", function() {
  expect(conditionalFlatten([[], [[], [0]]], 2)).to.deep.equal([0]);
});

it("conditionalFlatten([['', false], [true, NaN]], 1) should filter out only null and undefined", function() {
  expect(conditionalFlatten([['', false], [true, NaN]], 1)).to.deep.equal(['', false, true, NaN]);
});

it("conditionalFlatten([[1, [2]], [[3, 4], [5]]], 1) should return [1, [2], [3, 4], [5]]", function() {
  expect(conditionalFlatten([[1, [2]], [[3, 4], [5]]], 1)).to.deep.equal([1, [2], [3, 4], [5]]);
});

it("conditionalFlatten([['hello', undefined], [null, 'world']], Infinity) should return ['hello', 'world']", function() {
  expect(conditionalFlatten([['hello', undefined], [null, 'world']], Infinity)).to.deep.equal(['hello', 'world']);
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
