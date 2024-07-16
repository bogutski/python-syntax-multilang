// NAMEEN:
// NAMERU:Найти индекс первого элемента, длина строки которого больше длины следующего элемента

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `findFirstIndexLongerThanNext`, которая принимает массив строк.

Функция должна вернуть индекс первого элемента в массиве, длина строки которого больше длины следующего элемента.

Если такого элемента нет, функция должна вернуть строку `Element not found`.


Примеры запуска функции:
```javascript
findFirstIndexLongerThanNext(['apple', 'banana', 'cherry', 'date']); // 2
findFirstIndexLongerThanNext(['elephant', 'cat', 'dog', 'bird']); // 0
findFirstIndexLongerThanNext(['hello', 'world', 'hi']); // 1
findFirstIndexLongerThanNext(['one', 'two', 'three']); // "Element not found"
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
function findFirstIndexLongerThanNext(){

}
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function findFirstIndexLongerThanNext(arr) {
  const res = arr.findIndex((string, i, original) => {
    if(i !== original.length - 1) return string.length > original[i + 1].length
    else return false
  })

  return res !== -1 ? res : 'Element not found';
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function findFirstIndexLongerThanNext', () => {
  expect(findFirstIndexLongerThanNext).to.be.a('function');
});

it('findFirstIndexLongerThanNext(["apple", "banana", "cherry", "date"]) should return 2', function() {
  expect(findFirstIndexLongerThanNext(["apple", "banana", "cherry", "date"])).to.equal(2);
});

it('findFirstIndexLongerThanNext(["cat", "dog", "elephant", "bird"]) should return 2', function() {
  expect(findFirstIndexLongerThanNext(["cat", "dog", "elephant", "bird"])).to.equal(2);
});

it('findFirstIndexLongerThanNext(["hello", "world", "hi"]) should return 1', function() {
  expect(findFirstIndexLongerThanNext(["hello", "world", "hi"])).to.equal(1);
});

it('findFirstIndexLongerThanNext(["one", "two", "three"]) should return "Element not found"', function() {
  expect(findFirstIndexLongerThanNext(["one", "two", "three"])).to.equal("Element not found");
});

it('findFirstIndexLongerThanNext(["short", "tiny", "small", "big"]) should return 0', function() {
  expect(findFirstIndexLongerThanNext(["short", "tiny", "small", "big"])).to.equal(0);
});

it('findFirstIndexLongerThanNext(["long", "longer", "longest"]) should return "Element not found"', function() {
  expect(findFirstIndexLongerThanNext(["long", "longer", "longest"])).to.equal("Element not found");
});

it('findFirstIndexLongerThanNext(["this", "is", "a", "test"]) should return 0', function() {
  expect(findFirstIndexLongerThanNext(["this", "is", "a", "test"])).to.equal(0);
});

it('findFirstIndexLongerThanNext(["a", "ab", "abc", "abcd"]) should return "Element not found"', function() {
  expect(findFirstIndexLongerThanNext(["a", "ab", "abc", "abcd"])).to.equal("Element not found");
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
