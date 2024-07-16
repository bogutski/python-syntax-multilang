// NAMEEN:
// NAMERU:Подсчет наличия элементов из второго массива в первом массиве

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `countElementsInArray`, которая принимает два массива.

Функция должна определить, сколько элементов из второго массива присутствуют в первом массиве, и вернуть объект вида: `{foundElements: <array>, totalCount: <count>}`, где:
  * `foundElements` — массив найденных элементов,
  * `totalCount` — общее количество найденных элементов.


Примеры запуска функции:
```javascript
console.log(countElementsInArray(['apple', 'banana', 'cherry', 'apple'], ['apple', 'cherry', 'grape', 'apple']));
// { foundElements: ['apple', 'cherry', 'apple'], totalCount: 3 }

console.log(countElementsInArray([1, 2, 3, 4], [2, 3, 5, 2]));
// { foundElements: [2, 3, 2], totalCount: 3 }

console.log(countElementsInArray(['cat', 'dog', 'fish'], ['dog', 'cat']));
// { foundElements: ['dog', 'cat'], totalCount: 2 }
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
function countElementsInArray(){

}
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function countElementsInArray(arr1, arr2) {
  let count = 0
  let result = []

  arr2.forEach(el => {
    if(arr1.includes(el)) {
      count++
      result.push(el)
    }
  })

  return {foundElements: result, totalCount: count};
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function countElementsInArray', () => {
  expect(countElementsInArray).to.be.a('function');
});

it('countElementsInArray(["apple", "banana", "cherry", "apple"], ["apple", "cherry", "grape", "apple"]) should return {foundElements: ["apple", "cherry", "apple"], totalCount: 3}', function() {
  expect(countElementsInArray(["apple", "banana", "cherry", "apple"], ["apple", "cherry", "grape", "apple"])).to.deep.equal({
    foundElements: ["apple", "cherry", "apple"],
    totalCount: 3
  });
});

it('countElementsInArray([1, 2, 3, 4, 2, 3], [2, 3, 5, 2]) should return {foundElements: [2, 3, 2], totalCount: 3}', function() {
  expect(countElementsInArray([1, 2, 3, 4, 2, 3], [2, 3, 5, 2])).to.deep.equal({
    foundElements: [2, 3, 2],
    totalCount: 3
  });
});

it('countElementsInArray(["cat", "dog", "fish"], ["dog", "dog", "cat"]) should return {foundElements: ["dog", "dog", "cat"], totalCount: 3}', function() {
  expect(countElementsInArray(["cat", "dog", "fish"], ["dog", "dog", "cat"])).to.deep.equal({
    foundElements: ["dog", "dog", "cat"],
    totalCount: 3
  });
});

it('countElementsInArray(["a", "b", "c"], ["d", "e", "f"]) should return {foundElements: [], totalCount: 0}', function() {
  expect(countElementsInArray(["a", "b", "c"], ["d", "e", "f"])).to.deep.equal({
    foundElements: [],
    totalCount: 0
  });
});

it('countElementsInArray(["x", "y", "z"], ["x", "x", "x"]) should return {foundElements: ["x", "x", "x"], totalCount: 3}', function() {
  expect(countElementsInArray(["x", "y", "z"], ["x", "x", "x"])).to.deep.equal({
    foundElements: ["x", "x", "x"],
    totalCount: 3
  });
});

it('countElementsInArray([true, false, true], [true, true, true]) should return {foundElements: [true, true, true], totalCount: 3}', function() {
  expect(countElementsInArray([true, false, true], [true, true, true])).to.deep.equal({
    foundElements: [true, true, true],
    totalCount: 3
  });
});

it('countElementsInArray([null, undefined, null], [null, null, undefined]) should return {foundElements: [null, null, undefined], totalCount: 3}', function() {
  expect(countElementsInArray([null, undefined, null], [null, null, undefined])).to.deep.equal({
    foundElements: [null, null, undefined],
    totalCount: 3
  });
});

it('countElementsInArray(["apple", "banana", "cherry"], ["banana", "banana", "banana"]) should return {foundElements: ["banana", "banana", "banana"], totalCount: 3}', function() {
  expect(countElementsInArray(["apple", "banana", "cherry"], ["banana", "banana", "banana"])).to.deep.equal({
    foundElements: ["banana", "banana", "banana"],
    totalCount: 3
  });
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
