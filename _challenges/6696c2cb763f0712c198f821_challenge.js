// NAMEEN:
// NAMERU:Найти последний индекс элемента с длиной, равной заданному значению

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `findLastIndexByLength`, которая принимает массив строк и число.

Функция должна вернуть объект с модифицированным массивом длин строк и индексом последнего элемента, длина которого равна заданному числу.

Если такой элемент не найден, функция должна вернуть -1 для индекса.


Примеры запуска функции:
```javascript
console.log(findLastIndexByLength(['apple', 'banana', 'cherry', 'date'], 5));
// { modifiedArray: [ 5, 6, 6, 4 ], index: 0 }

console.log(findLastIndexByLength(['cat', 'dog', 'fish'], 3));
// { modifiedArray: [ 3, 3, 4 ], index: 1 }

console.log(findLastIndexByLength(['apple', 'banana', 'cherry'], 2));
// { modifiedArray: [ 5, 6, 6 ], index: -1 }

console.log(findLastIndexByLength(['one', 'two', 'three', 'four'], 3));
// { modifiedArray: [ 3, 3, 5, 4 ], index: 1 }
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
function findLastIndexByLength(){

}
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function findLastIndexByLength(arr, length) {
  const modified = arr.map(str => str.length)
  return {modifiedArray: modified, index: modified.lastIndexOf(length)};
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function findLastIndexByLength', () => {
  expect(findLastIndexByLength).to.be.a('function');
});

it("Function findLastIndexByLength should include lastIndexOf method", () => {
  const result = findLastIndexByLength.toString();
  expect(result).to.include('.lastIndexOf(');
});

it('findLastIndexByLength(["apple", "banana", "cherry", "date"], 5) should return { modifiedArray: [ 5, 6, 6, 4 ], index: 0 }', function() {
  expect(findLastIndexByLength(["apple", "banana", "cherry", "date"], 5)).to.deep.equal({ modifiedArray: [ 5, 6, 6, 4 ], index: 0 });
});

it('findLastIndexByLength(["cat", "dog", "fish"], 3) should return { modifiedArray: [ 3, 3, 4 ], index: 1 }', function() {
  expect(findLastIndexByLength(["cat", "dog", "fish"], 3)).to.deep.equal({ modifiedArray: [ 3, 3, 4 ], index: 1 });
});

it('findLastIndexByLength(["apple", "banana", "cherry"], 6) should return { modifiedArray: [ 5, 6, 6 ], index: 2 }', function() {
  expect(findLastIndexByLength(["apple", "banana", "cherry"], 6)).to.deep.equal({ modifiedArray: [ 5, 6, 6 ], index: 2 });
});

it('findLastIndexByLength(["one", "two", "three", "four"], 3) should return { modifiedArray: [ 3, 3, 5, 4 ], index: 1 }', function() {
  expect(findLastIndexByLength(["one", "two", "three", "four"], 3)).to.deep.equal({ modifiedArray: [ 3, 3, 5, 4 ], index: 1 });
});

it('findLastIndexByLength(["hello", "world", "hi"], 4) should return { modifiedArray: [ 5, 5, 2 ], index: -1 }', function() {
  expect(findLastIndexByLength(["hello", "world", "hi"], 4)).to.deep.equal({ modifiedArray: [ 5, 5, 2 ], index: -1 });
});

it('findLastIndexByLength(["a", "ab", "abc"], 1) should return { modifiedArray: [ 1, 2, 3 ], index: 0 }', function() {
  expect(findLastIndexByLength(["a", "ab", "abc"], 1)).to.deep.equal({ modifiedArray: [ 1, 2, 3 ], index: 0 });
});

it('findLastIndexByLength([], 1) should return { modifiedArray: [], index: -1 }', function() {
  expect(findLastIndexByLength([], 1)).to.deep.equal({ modifiedArray: [], index: -1 });
});

it('findLastIndexByLength(["short", "medium", "longest"], 6) should return { modifiedArray: [ 5, 6, 7 ], index: 1 }', function() {
  expect(findLastIndexByLength(["short", "medium", "longest"], 6)).to.deep.equal({ modifiedArray: [ 5, 6, 7 ], index: 1 });
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
