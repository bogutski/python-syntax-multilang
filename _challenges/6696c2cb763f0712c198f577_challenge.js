// NAMEEN:
// NAMERU:Условное сглаживание и фильтрация вложенных массивов

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `filterAndFlatten`, которая принимает два аргумента — вложенный массив `nestedArray` и функцию `predicate`.

Функция должна сначала "выпрямить" все элементы вложенных массивов до одного уровня, используя метод `Array.prototype.flat()`, а затем фильтровать результат по заданному условию в функции `predicate`, возвращая новый массив только с теми элементами, которые удовлетворяют условию `predicate`.


Примеры запуска функции:
```javascript
filterAndFlatten([[1, 2], [3, 4]], x => x > 2); // [3, 4]
filterAndFlatten([1, [2, 3], [4, [5, 6]]], x => x % 2 === 0); // [2, 4, 6]
filterAndFlatten([['a', ['b']], ['1', [2, [3]]]], x => typeof x === 'string'); // ['a', 'b', '1']
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
function filterAndFlatten(){

}
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function filterAndFlatten(arr, isTrue) {
  const flattenArray = arr.flat(Infinity)
  let result = []

  for(let el of flattenArray){
    if(isTrue(el)) result.push(el)
  }

  return result;
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function filterAndFlatten', () => {
  expect(filterAndFlatten).to.be.a('function');
});

it('Function filterAndFlatten should include method flat()', () => {
  const res = filterAndFlatten.toString()
  expect(res).to.include('.flat(')
});

it("filterAndFlatten([1, [2, 3], [4, [5, 6]]], x => x % 2 === 0) should return [2, 4, 6]", function() {
  expect(filterAndFlatten([1, [2, 3], [4, [5, 6]]], x => x % 2 === 0)).to.deep.equal([2, 4, 6]);
});

it("filterAndFlatten([[1, 2], [3, 4]], x => x > 2) should return [3, 4]", function() {
  expect(filterAndFlatten([[1, 2], [3, 4]], x => x > 2)).to.deep.equal([3, 4]);
});

it("filterAndFlatten([['a', ['b']], ['c', ['d', ['e']]]], x => typeof x === 'string') should return ['a', 'b', 'c', 'd', 'e']", function() {
  expect(filterAndFlatten([['a', ['b']], ['c', ['d', ['e']]]], x => typeof x === 'string')).to.deep.equal(['a', 'b', 'c', 'd', 'e']);
});

it("filterAndFlatten([0, [null, undefined]], x => x != null) should return [0]", function() {
  expect(filterAndFlatten([0, [null, undefined]], x => x != null)).to.deep.equal([0]);
});

it("filterAndFlatten([[true, false], [false]], x => x) should return [true]", function() {
  expect(filterAndFlatten([[true, false], [false]], x => x)).to.deep.equal([true]);
});

it("filterAndFlatten([[NaN, Infinity], [1]], x => !isNaN(x)) should return [Infinity, 1]", function() {
  expect(filterAndFlatten([[NaN, Infinity], [1]], x => !isNaN(x))).to.deep.equal([Infinity, 1]);
});

it("filterAndFlatten([['flat', ['nested']], [['more', 'nested'], 'values']], x => x.includes('nested')) should return ['nested', 'nested']", function() {
  expect(filterAndFlatten([['flat', ['nested']], [['more', 'nested'], 'values']], x => x.includes('nested'))).to.deep.equal(['nested', 'nested']);
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
