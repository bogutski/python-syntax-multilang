// NAMEEN:
// NAMERU:Найти индекс последнего элемента, содержащего не менее половины букв из заданного слова

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `findLastIndexContainingLetters`, которая принимает массив строк и слово.

Функция должна вернуть индекс последнего элемента в массиве, который содержит не менее половины букв из заданного слова.

Округляйте в большую сторону, если длина строки не четная.

Если такого элемента нет, функция должна вернуть `-1`.


Примеры запуска функции:
```javascript
findLastIndexContainingLetters(['apple', 'banana', 'cherry', 'blueberry'], 'car');
// 2, так как 'cherry' содержит 2 символа: 'c', 'r'.

findLastIndexContainingLetters(['hello', 'world', 'hi'], 'hell'); // 1
// 1, так как 'world' содержит 2 повторяющихся символа: 'l', 'l'.

findLastIndexContainingLetters(['orange', 'kiwi', 'melon'], 'ok'); // 2
// 2, так как 'melon' содержит 1 символ: 'o'.

findLastIndexContainingLetters(['one', 'two', 'three'], 'four'); // -1
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
function findLastIndexContainingLetters(){

}
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function findLastIndexContainingLetters(arr, str) {
  const targetNum = Math.ceil(str.length / 2)

  return arr.findLastIndex(el => {
    let count = 0
    for(let char of str){
      if(el.includes(char)) count++
      if(count === targetNum) return true
    }
    return false
  });
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function findLastIndexContainingLetters', () => {
  expect(findLastIndexContainingLetters).to.be.a('function');
});

it('findLastIndexContainingLetters(["apple", "banana", "cherry", "blueberry"], "car") should return 2', function() {
  expect(findLastIndexContainingLetters(["apple", "banana", "cherry", "blueberry"], "car")).to.equal(2);
});

it('findLastIndexContainingLetters(["hello", "world", "hi"], "hell") should return 1', function() {
  expect(findLastIndexContainingLetters(["hello", "world", "hi"], "hell")).to.equal(1);
});

it('findLastIndexContainingLetters(["one", "two", "three"], "four") should return -1', function() {
  expect(findLastIndexContainingLetters(["one", "two", "three"], "four")).to.equal(-1);
});

it('findLastIndexContainingLetters(["orange", "kiwi", "melon"], "ok") should return 2', function() {
  expect(findLastIndexContainingLetters(["orange", "kiwi", "melon"], "ok")).to.equal(2);
});

it('findLastIndexContainingLetters(["apple", "banana", "cherry", "blueberry"], "berry") should return 3', function() {
  expect(findLastIndexContainingLetters(["apple", "banana", "cherry", "blueberry"], "berry")).to.equal(3);
});

it('findLastIndexContainingLetters(["strawberry", "raspberry", "blueberry"], "berry") should return 2', function() {
  expect(findLastIndexContainingLetters(["strawberry", "raspberry", "blueberry"], "berry")).to.equal(2);
});

it('findLastIndexContainingLetters(["kiwi", "melon", "orange"], "lemon") should return 2', function() {
  expect(findLastIndexContainingLetters(["kiwi", "melon", "orange"], "lemon")).to.equal(2);
});

it('findLastIndexContainingLetters(["kiwi", "melon", "orange"], "zoo") should return 2', function() {
  expect(findLastIndexContainingLetters(["kiwi", "melon", "orange"], "zoo")).to.equal(2);
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
