// NAMEEN:
// NAMERU:Найти пересечение двух массивов

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Создайте функцию `findArrayIntersection`, которая принимает два массива в качестве аргументов и возвращает массив, содержащий их пересечение.

В пересечении не должно быть дубликатов.

Если один из массивов пустой, либо нет пересечений - вернуть пустой массив.

Пример запуска функции:
```javascript
findArrayIntersection([ ], [3, 4, 5])    // [ ]
findArrayIntersection([1, 2], [3, 4, 5]) // [ ]
findArrayIntersection([1, 2, 3], [1, 7, 6, 5, 4, 3])       // [ 1, 3 ]
findArrayIntersection([10, 11, 12], [8, 10, 1, 12, 11, 7]) // [ 10, 11, 12 ]
findArrayIntersection(['a1', 'b2', 'c3', 'd4'], ['a', 'd4', 'b3', 'c3']) // [ 'c3', 'd4' ]
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
fun
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function findArrayIntersection(arr1, arr2) {
  const intersection = [];

  for (let i = 0; i < arr1.length; i++) {
    if (arr2.includes(arr1[i]) && !intersection.includes(arr1[i])) {
      intersection.push(arr1[i]);
    }
  }

  return intersection;
}
// SOLUTIONEND


// OPENTESTSSTART
it('Function findArrayIntersection is created', () => {
  expect(findArrayIntersection).to.be.a('function');
});

it('findArrayIntersection([1, 2, 3], [2, 3, 4]) should return [2, 3]', () => {
  expect(findArrayIntersection([1, 2, 3], [2, 3, 4])).to.deep.equal([2, 3]);
});

it('findArrayIntersection(["apple", "banana", "cherry"], ["cherry", "fig", "apple"]) should return ["apple", "cherry"]', () => {
  expect(findArrayIntersection(["apple", "banana", "cherry"], ["cherry", "fig", "apple"])).to.deep.equal(["apple", "cherry"]);
});

it('findArrayIntersection([], ["banana", "apple", "cherry"]) should return []', () => {
  expect(findArrayIntersection([], ["banana", "apple", "cherry"])).to.deep.equal([]);
});

it('findArrayIntersection(["apple", "banana"], []) should return []', () => {
  expect(findArrayIntersection(["apple", "banana"], [])).to.deep.equal([]);
});

it('findArrayIntersection(["apple", "banana"], ["apple", "banana"]) should return ["apple", "banana"]', () => {
  expect(findArrayIntersection(["apple", "banana"], ["apple", "banana"])).to.deep.equal(["apple", "banana"]);
});

it('findArrayIntersection(["apple", "banana"], []) should return []', () => {
  expect(findArrayIntersection(["apple", "banana"], [])).to.deep.equal([]);
});

it('findArrayIntersection([], []) should return []', () => {
  expect(findArrayIntersection([], [])).to.deep.equal([]);
});

it('findArrayIntersection(["apple", "banana"], ["cherry", "date"] should return []', () => {
  expect(findArrayIntersection(["apple", "banana"], ["cherry", "date"])).to.deep.equal([]);
});

it('findArrayIntersection(["1", "2", "3"], [1, 2, 3]) should return []', () => {
  expect(findArrayIntersection(["1", "2", "3"], [1, 2, 3])).to.deep.equal([]);
});

it('findArrayIntersection(["apple", "apple", "banana"], ["banana", "banana", "apple"]) should return ["apple", "banana"]', () => {
  expect(findArrayIntersection(["apple", "apple", "banana"], ["banana", "banana", "apple"])).to.deep.equal(["apple", "banana"]);
});

it('expect(findArrayIntersection([obj1, obj2], [obj1, obj2]) should return [obj1, obj2]', () => {
  const obj1 = { key: 'value1' };
  const obj2 = { key: 'value2' };
  expect(findArrayIntersection([obj1, obj2], [obj1, obj2])).to.deep.equal([obj1, obj2]);
});

it('findArrayIntersection([{ key: "value1" }, { key: "value2" }], [{ key: "value1" }, { key: "value2" }]) should return []', () => {
  expect(findArrayIntersection([{ key: 'value1' }, { key: 'value2' }], [{ key: 'value1' }, { key: 'value2' }])).to.deep.equal([]);
});

it('findArrayIntersection([true, false], [false, true, false]) should return [true, false]', () => {
  expect(findArrayIntersection([true, false], [false, true, false])).to.deep.equal([true, false]);
});

it('findArrayIntersection([null, undefined], [undefined, null, "test"]) should return [null, undefined]', () => {
  expect(findArrayIntersection([null, undefined], [undefined, null, "test"])).to.deep.equal([null, undefined]);
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
