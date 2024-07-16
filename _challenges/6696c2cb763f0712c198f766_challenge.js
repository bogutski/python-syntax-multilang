// NAMEEN:
// NAMERU:Найти последнюю строку, начинающуюся с заданной буквы

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `findLastStartingWith`, которая принимает массив строк и символ (букву), и возвращает последнюю строку в массиве, начинающуюся с этого символа.

Если такой строки нет, функция должна вернуть `undefined`.


Примеры запуска функции:
```javascript
findLastStartingWith(['apple', 'banana', 'apricot', 'kiwi', 'peach'], 'a') // "apricot"
findLastStartingWith(['apple', 'banana', 'kiwi', 'peach'], 'b') // "banana"
findLastStartingWith(['kiwi', 'peach'], 'a') // undefined
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
function findLastStartingWith(){

}
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function findLastStartingWith(arr, symbol) {
  return arr.findLast(el => el.startsWith(symbol));
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function findLastStartingWith', () => {
  expect(findLastStartingWith).to.be.a('function');
});

it("Function findLastStartingWith should include findLast method", () => {
  const result = findLastStartingWith.toString();
  expect(result).to.include('.findLast(');
});

it('findLastStartingWith(["apple", "banana", "apricot", "kiwi", "peach"], "a") should return "apricot"', function() {
  expect(findLastStartingWith(['apple', 'banana', 'apricot', 'kiwi', 'peach'], 'a')).to.equal('apricot');
});

it('findLastStartingWith(["apple", "banana", "kiwi", "peach"], "b") should return "banana"', function() {
  expect(findLastStartingWith(['apple', 'banana', 'kiwi', 'peach'], 'b')).to.equal('banana');
});

it('findLastStartingWith(["kiwi", "peach"], "a") should return undefined', function() {
  expect(findLastStartingWith(['kiwi', 'peach'], 'a')).to.be.undefined;
});

it('findLastStartingWith(["banana", "apple", "apricot"], "a") should return "apricot"', function() {
  expect(findLastStartingWith(['banana', 'apple', 'apricot'], 'a')).to.equal('apricot');
});

it('findLastStartingWith(["cherry", "plum", "pear", "apple"], "p") should return "pear"', function() {
  expect(findLastStartingWith(['cherry', 'plum', 'pear', 'apple'], 'p')).to.equal('pear');
});

it('findLastStartingWith(["melon", "mango", "kiwi"], "m") should return "mango"', function() {
  expect(findLastStartingWith(['melon', 'mango', 'kiwi'], 'm')).to.equal('mango');
});

it('findLastStartingWith(["strawberry", "raspberry", "blueberry"], "r") should return "raspberry"', function() {
  expect(findLastStartingWith(['strawberry', 'raspberry', 'blueberry'], 'r')).to.equal('raspberry');
});

it('findLastStartingWith([], "k") should return undefined', function() {
  expect(findLastStartingWith([], 'k')).to.be.undefined;
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
