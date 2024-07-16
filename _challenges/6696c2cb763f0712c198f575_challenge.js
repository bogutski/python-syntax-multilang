// NAMEEN:
// NAMERU:Сглаживание вложенных массивов до полной плоскости

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `deepFlatten`, которая принимает один аргумент — вложенный массив `nestedArray`.

Функция должна возвращать новый массив, в котором все элементы вложенных массивов были полностью выпрямлены, независимо от уровня их вложенности, используя метод `Array.prototype.flat()` с параметром `Infinity`.


Примеры Запуска Функции:
```javascript
deepFlatten([1, [2, 3], [4, [5, 6]]]); // [1, 2, 3, 4, 5, 6]
deepFlatten([[1], 2, [[3, 4], [5]], 6]); // [1, 2, 3, 4, 5, 6]
deepFlatten([['a', ['b']], ['c', ['d', ['e']]]]); // ['a', 'b', 'c', 'd', 'e']
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
function deepFlatten(){

}
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function deepFlatten(arr) {
  return arr.flat(Infinity);
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function deepFlatten', () => {
  expect(deepFlatten).to.be.a('function');
});

it('Function deepFlatten should include method flat()', () => {
  const res = deepFlatten.toString()
  expect(res).to.include('.flat(')
});

it("deepFlatten([1, [2, 3], [4, [5, 6]]]) should return [1, 2, 3, 4, 5, 6]", function() {
  expect(deepFlatten([1, [2, 3], [4, [5, 6]]])).to.deep.equal([1, 2, 3, 4, 5, 6]);
});

it("deepFlatten([[1], 2, [[3, 4], [5]], 6]) should return [1, 2, 3, 4, 5, 6]", function() {
  expect(deepFlatten([[1], 2, [[3, 4], [5]], 6])).to.deep.equal([1, 2, 3, 4, 5, 6]);
});

it("deepFlatten([['a', ['b']], ['c', ['d', ['e']]]]) should return ['a', 'b', 'c', 'd', 'e']", function() {
  expect(deepFlatten([['a', ['b']], ['c', ['d', ['e']]]])).to.deep.equal(['a', 'b', 'c', 'd', 'e']);
});

it("deepFlatten([]) should return an empty array", function() {
  expect(deepFlatten([])).to.deep.equal([]);
});

it("deepFlatten([[], [[]], [[[]]]]) should return an empty array", function() {
  expect(deepFlatten([[], [[]], [[[]]]])).to.deep.equal([]);
});

it("deepFlatten([0, [1, [2, [3, [4]]]]]) should return [0, 1, 2, 3, 4]", function() {
  expect(deepFlatten([0, [1, [2, [3, [4]]]]])).to.deep.equal([0, 1, 2, 3, 4]);
});

it("deepFlatten([['flat', ['is', ['awesome']]]]) should return ['flat', 'is', 'awesome']", function() {
  expect(deepFlatten(['flat', ['is', ['awesome']]])).to.deep.equal(['flat', 'is', 'awesome']);
});

it("deepFlatten([[['infinity']], [['flat']]]) should return ['infinity', 'flat']", function() {
  expect(deepFlatten([[['infinity']], [['flat']]])).to.deep.equal(['infinity', 'flat']);
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
