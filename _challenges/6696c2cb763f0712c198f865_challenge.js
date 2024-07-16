// NAMEEN:
// NAMERU:Найти индекс первого элемента, который содержит определенную подстроку и длина строки которого превышает заданное значение

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `findFirstIndexWithSubstringAndLength`, которая принимает массив строк, подстроку и число.

Функция должна вернуть индекс первого элемента в массиве, который содержит указанную подстроку и длина строки которого превышает заданное значение.

Если такой строки нет, функция должна вернуть строку `Element not found`.


Примеры запуска функции:
```javascript
findFirstIndexWithSubstringAndLength(['apple pie', 'banana split', 'cherry tart', 'blueberry pie'], 'pie', 10); // 3
findFirstIndexWithSubstringAndLength(['cat', 'dog', 'elephant', 'bird'], 'og', 2); // 1
findFirstIndexWithSubstringAndLength(['hello', 'world', 'hi'], 'world', 4); // 1
findFirstIndexWithSubstringAndLength(['one', 'two', 'three'], 'four', 3); // "Element not found"
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
function findFirstIndexWithSubstringAndLength(){

}
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function findFirstIndexWithSubstringAndLength(arr, str, length) {
  const res = arr.findIndex(el => el.includes(str) && el.length > length)
  return res !== -1 ? res : 'Element not found';
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function findFirstIndexWithSubstringAndLength', () => {
  expect(findFirstIndexWithSubstringAndLength).to.be.a('function');
});

it('findFirstIndexWithSubstringAndLength(["apple pie", "banana split", "cherry tart", "blueberry pie"], "pie", 10) should return 3', function() {
  expect(findFirstIndexWithSubstringAndLength(["apple pie", "banana split", "cherry tart", "blueberry pie"], "pie", 10)).to.equal(3);
});

it('findFirstIndexWithSubstringAndLength(["cat", "dog", "elephant", "bird"], "og", 2) should return 1', function() {
  expect(findFirstIndexWithSubstringAndLength(["cat", "dog", "elephant", "bird"], "og", 2)).to.equal(1);
});

it('findFirstIndexWithSubstringAndLength(["hello", "world", "hi"], "world", 4) should return 1', function() {
  expect(findFirstIndexWithSubstringAndLength(["hello", "world", "hi"], "world", 4)).to.equal(1);
});

it('findFirstIndexWithSubstringAndLength(["one", "two", "three"], "four", 3) should return "Element not found"', function() {
  expect(findFirstIndexWithSubstringAndLength(["one", "two", "three"], "four", 3)).to.equal("Element not found");
});

it('findFirstIndexWithSubstringAndLength(["lemon", "lime", "banana", "berry"], "na", 5) should return 2', function() {
  expect(findFirstIndexWithSubstringAndLength(["lemon", "lime", "banana", "berry"], "na", 5)).to.equal(2);
});

it('findFirstIndexWithSubstringAndLength(["apple", "banana", "apricot", "blueberry"], "apple", 4) should return 0', function() {
  expect(findFirstIndexWithSubstringAndLength(["apple", "banana", "apricot", "blueberry"], "apple", 4)).to.equal(0);
});

it('findFirstIndexWithSubstringAndLength(["strawberry", "raspberry", "blueberry"], "berry", 7) should return 0', function() {
  expect(findFirstIndexWithSubstringAndLength(["strawberry", "raspberry", "blueberry"], "berry", 7)).to.equal(0);
});

it('findFirstIndexWithSubstringAndLength(["kiwi", "melon", "orange"], "me", 3) should return 1', function() {
  expect(findFirstIndexWithSubstringAndLength(["kiwi", "melon", "orange"], "me", 3)).to.equal(1);
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
