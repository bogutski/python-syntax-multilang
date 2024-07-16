// NAMEEN:
// NAMERU:Найти индекс первого элемента, начинающегося с определенной буквы

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `findFirstIndexStartingWith`, которая принимает массив строк и букву.

Функция должна вернуть индекс первого элемента в массиве, который начинается с данной буквы (без учета регистра и пробелов).

Если такого элемента нет, функция должна вернуть строку "Element not found".


Примеры запуска функции:
```javascript
findFirstIndexStartingWith([' one', '  two', 'three '], 'z'); // "Element not found"
findFirstIndexStartingWith(['  hello', 'world  ', ' hi'], 'W'); // 1
findFirstIndexStartingWith(['cat', ' dog', 'Car', '  cow'], 'c'); // 2
findFirstIndexStartingWith(['  ApplE ', 'BANANA  ', '   aPRIcot', ' BLUEberry '], 'A'); // 0
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
function findFirstIndexStartingWith(){

}
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function findFirstIndexStartingWith(arr, letter) {
  const result = arr.findIndex(string => string.trim().toLowerCase().startsWith(letter.toLowerCase()))
  return result !== -1 ? result : 'Element not found';
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function findFirstIndexStartingWith', () => {
  expect(findFirstIndexStartingWith).to.be.a('function');
});

it('findFirstIndexStartingWith(["  ApplE ", "BANANA  ", "   aPRIcot", " BLUEberry "], "A") should return 0', function() {
  expect(findFirstIndexStartingWith(["  ApplE ", "BANANA  ", "   aPRIcot", " BLUEberry "], "A")).to.equal(0);
});

it('findFirstIndexStartingWith(["cat", " dog", "Car", "  cow"], "c") should return 0', function() {
  expect(findFirstIndexStartingWith(["cat", " dog", "Car", "  cow"], "c")).to.equal(0);
});

it('findFirstIndexStartingWith(["  hello", "world  ", " hi"], "W") should return 1', function() {
  expect(findFirstIndexStartingWith(["  hello", "world  ", " hi"], "W")).to.equal(1);
});

it('findFirstIndexStartingWith([" one", "  two", "three "], "z") should return "Element not found"', function() {
  expect(findFirstIndexStartingWith([" one", "  two", "three "], "z")).to.equal("Element not found");
});

it('findFirstIndexStartingWith(["  lemon", "lime  ", "  banana", "berry  "], "b") should return 2', function() {
  expect(findFirstIndexStartingWith(["  lemon", "lime  ", "  banana", "berry  "], "b")).to.equal(2);
});

it('findFirstIndexStartingWith(["  apple", "banana  ", "  apricot", "blueberry  "], "b") should return 1', function() {
  expect(findFirstIndexStartingWith(["  apple", "banana  ", "  apricot", "blueberry  "], "b")).to.equal(1);
});

it('findFirstIndexStartingWith(["  strawberry", "raspberry  ", "blueberry  "], "R") should return 1', function() {
  expect(findFirstIndexStartingWith(["  strawberry", "raspberry  ", "blueberry  "], "R")).to.equal(1);
});

it('findFirstIndexStartingWith(["kiwi  ", "  melon", " orange"], "o") should return 2', function() {
  expect(findFirstIndexStartingWith(["kiwi  ", "  melon", " orange"], "o")).to.equal(2);
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
