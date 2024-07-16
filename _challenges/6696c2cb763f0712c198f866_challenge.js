// NAMEEN:
// NAMERU:Найти индекс первого элемента, содержащего все буквы из заданного слова

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `findIndexContainingAllLetters`, которая принимает массив строк и слово.

Функция должна вернуть индекс первого элемента в массиве, который содержит все буквы из заданного слова.

Если такой строки нет, функция должна вернуть строку `Element not found`.


Примеры запуска функции:
```javascript
findIndexContainingAllLetters(['apple pie', 'banana split', 'cherry tart', 'blueberry pie'], 'berry'); // 3
findIndexContainingAllLetters(['cat', 'dog', 'elephant', 'bird'], 'god'); // 1
findIndexContainingAllLetters(['hello', 'world', 'hi'], 'hell'); // 0
findIndexContainingAllLetters(['one', 'two', 'three'], 'four'); // "Element not found"
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
function findIndexContainingAllLetters(){

}
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function findIndexContainingAllLetters(array, word) {
  const result = array.findIndex(curr => {
    for(let char of word){
      if(!curr.includes(char)) return false
    }
    return true
  })
  return result !== -1 ? result : 'Element not found';
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function findIndexContainingAllLetters', () => {
  expect(findIndexContainingAllLetters).to.be.a('function');
});

it('findIndexContainingAllLetters(["apple pie", "banana split", "cherry tart", "blueberry pie"], "berry") should return 3', function() {
  expect(findIndexContainingAllLetters(["apple pie", "banana split", "cherry tart", "blueberry pie"], "berry")).to.equal(3);
});

it('findIndexContainingAllLetters(["cat", "dog", "elephant", "bird"], "god") should return 1', function() {
  expect(findIndexContainingAllLetters(["cat", "dog", "elephant", "bird"], "god")).to.equal(1);
});

it('findIndexContainingAllLetters(["hello", "world", "hi"], "hell") should return 0', function() {
  expect(findIndexContainingAllLetters(["hello", "world", "hi"], "hell")).to.equal(0);
});

it('findIndexContainingAllLetters(["one", "two", "three"], "four") should return "Element not found"', function() {
  expect(findIndexContainingAllLetters(["one", "two", "three"], "four")).to.equal("Element not found");
});

it('findIndexContainingAllLetters(["lemon", "lime", "banana", "berry"], "mi") should return 1', function() {
  expect(findIndexContainingAllLetters(["lemon", "lime", "banana", "berry"], "mi")).to.equal(1);
});

it('findIndexContainingAllLetters(["apple", "banana", "apricot", "blueberry"], "banana") should return 1', function() {
  expect(findIndexContainingAllLetters(["apple", "banana", "apricot", "blueberry"], "banana")).to.equal(1);
});

it('findIndexContainingAllLetters(["strawberry", "raspberry", "blueberry"], "berry") should return 0', function() {
  expect(findIndexContainingAllLetters(["strawberry", "raspberry", "blueberry"], "berry")).to.equal(0);
});

it('findIndexContainingAllLetters(["kiwi", "melon", "orange"], "lemon") should return 1', function() {
  expect(findIndexContainingAllLetters(["kiwi", "melon", "orange"], "lemon")).to.equal(1);
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
