// NAMEEN:
// NAMERU:Найти симметричную разность двух массивов

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Создайте функцию `calculateSymmetricDifference`, которая принимает два массива в качестве аргументов.

Функция должна возвращать массив, содержащий симметричную разность двух массивов (элементы, присутствующие в одном из массивов, но не в обоих одновременно).

Результирующий массив не должен содержать дубликатов.

Если оба массива пустые, либо все элементы совпадают, вернуть пустой массив.

Пример запуска функции:
```javascript
calculateSymmetricDifference([], [])  // []
calculateSymmetricDifference([1, 2], [2, 1])   // []
calculateSymmetricDifference([1, 2], [2, 3])   // [ 1, 3 ]
calculateSymmetricDifference([], [10, 20, 30]) // [ 10, 20, 30 ]
calculateSymmetricDifference(['a', 'b', 'c'], ['c', 'd', 'a']) // [ 'b', 'd' ]
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
fun
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function calculateSymmetricDifference(arr1, arr2) {
  const result = []

  for(let i = 0; i < arr1.length; i++){
    if(!arr2.includes(arr1[i]) && !result.includes(arr1[i])) result.push(arr1[i])
  }

  for(let i = 0; i < arr2.length; i++){
    if(!arr1.includes(arr2[i]) && !result.includes(arr2[i])) result.push(arr2[i])
  }

  return result
}
// SOLUTIONEND


// OPENTESTSSTART
it('Function calculateSymmetricDifference is created', () => {
  expect(calculateSymmetricDifference).to.be.a('function');
});

it('calculateSymmetricDifference([1, 2, 3], [2, 3, 4]) should return [1, 4]', () => {
  expect(calculateSymmetricDifference([1, 2, 3], [2, 3, 4])).to.deep.equal([1, 4]);
});

it('calculateSymmetricDifference(["apple", "banana", "cherry"], ["banana", "cherry", "fig"]) should return ["apple", "fig"]', () => {
  expect(calculateSymmetricDifference(["apple", "banana", "cherry"], ["banana", "cherry", "fig"])).to.deep.equal(["apple", "fig"]);
});

it('calculateSymmetricDifference([], [1, 2, 3]) should return [1, 2, 3]', () => {
  expect(calculateSymmetricDifference([], [1, 2, 3])).to.deep.equal([1, 2, 3]);
});

it('calculateSymmetricDifference([true, false, null], [null, false, true]) should return []', () => {
  expect(calculateSymmetricDifference([true, false, null], [null, false, true])).to.deep.equal([]);
});

it('calculateSymmetricDifference(["1", "2", "3"], [1, 2, 3]) should return ["1", "2", "3", 1, 2, 3]', () => {
  expect(calculateSymmetricDifference(["1", "2", "3"], [1, 2, 3])).to.deep.equal(["1", "2", "3", 1, 2, 3]);
});

it('calculateSymmetricDifference with identical numeric arrays should return []', () => {
  expect(calculateSymmetricDifference([1, 2, 3], [1, 2, 3])).to.deep.equal([]);
});

it('calculateSymmetricDifference with both arrays being empty should return []', () => {
  expect(calculateSymmetricDifference([], [])).to.deep.equal([]);
});

it('calculateSymmetricDifference with arrays containing mixed types should return the correct symmetric difference', () => {
  expect(calculateSymmetricDifference(["1", 2, true], [1, "2", false])).to.deep.equal(["1", 2, true, 1, "2", false]);
});

it('calculateSymmetricDifference with one array containing all elements of the other should return the non-common elements', () => {
  expect(calculateSymmetricDifference([1, 2, 3, 4], [2, 3])).to.deep.equal([1, 4]);
});

it('calculateSymmetricDifference with arrays containing duplicate values should return a result without duplicates', () => {
  expect(calculateSymmetricDifference([1, 2, 2, 3], [3, 4, 4, 5])).to.deep.equal([1, 2, 4, 5]);
});

it('calculateSymmetricDifference with non-primitive elements (objects) being compared by reference should consider them distinct', () => {
  const obj1 = { key: 'value1' };
  const obj2 = { key: 'value2' };
  const obj3 = { key: 'value1' };
  expect(calculateSymmetricDifference([obj1, obj2], [obj2, obj3])).to.deep.equal([obj1, obj3]);
});

it('calculateSymmetricDifference with arrays containing complex types (arrays, objects) should handle them correctly 1', () => {
  expect(calculateSymmetricDifference([["apple"], { key: "value" }], [["banana"], { key: "value" }])).to.deep.equal([["apple"], { key: "value" }, ["banana"], { key: "value" }]);
});

it('calculateSymmetricDifference with arrays containing complex types (arrays, objects) should handle them correctly 2', () => {
  const obj = { key: "value" }
  const arr = ["apple"]
  expect(calculateSymmetricDifference([obj, arr], [obj, arr])).to.deep.equal([]);
});

it('calculateSymmetricDifference with arrays containing undefined and null values should treat them as valid elements', () => {
  expect(calculateSymmetricDifference([undefined, null], [null, undefined, "test"])).to.deep.equal(["test"]);
});

it('calculateSymmetricDifference with arrays containing boolean values only should correctly identify symmetric difference', () => {
  expect(calculateSymmetricDifference([true, false], [true, true, false, false])).to.deep.equal([]);
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
