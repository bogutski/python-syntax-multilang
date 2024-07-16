// NAMEEN:
// NAMERU:Найти индекс последнего элемента, содержащего заданный символ указанное количество раз

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `findLastIndexBySymbolCount`, которая принимает массив строк, символ и целевое количество вхождений символа.

Строки в массиве могут состоять из букв в разном регистре, и передаваемый символ также может быть в разных регистрах.

Функция должна вернуть индекс последнего элемента в массиве, который содержит указанный символ заданное количество раз, игнорируя регистр.

Если такого элемента нет, функция должна вернуть `-1`.


Примеры запуска функции:
```javascript
findLastIndexBySymbolCount(['hello', 'WORLD', 'JAVAScript'], 'a', 2); // 2
findLastIndexBySymbolCount(['BanAna', 'ApPle', 'GraPe'], 'A', 2); // 0
findLastIndexBySymbolCount(['cat', 'dOg', 'eLePhant'], 'E', 1); // 2
findLastIndexBySymbolCount(['One', 'tWo', 'Three'], 'b', 1); // -1
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
function findLastIndexBySymbolCount(){

}
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function findLastIndexBySymbolCount(arr, symbol, target) {
  symbol = symbol.toLowerCase()

  return arr.findLastIndex(str => {
    str = str.toLowerCase();
    let count = 0

    for(let char of str) {
      if(char === symbol) count++
      if(count === target) return true
    }
    return false
  });
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function findLastIndexBySymbolCount', () => {
  expect(findLastIndexBySymbolCount).to.be.a('function');
});

it('findLastIndexBySymbolCount(["hello", "WORLD", "JAVAScript"], "a", 2) should return 2', function() {
  expect(findLastIndexBySymbolCount(["hello", "WORLD", "JAVAScript"], "a", 2)).to.equal(2);
});

it('findLastIndexBySymbolCount(["BanAna", "ApPle", "GraPe"], "a", 2) should return 0', function() {
  expect(findLastIndexBySymbolCount(["BanAna", "ApPle", "GraPe"], "a", 2)).to.equal(0);
});

it('findLastIndexBySymbolCount(["cat", "dOg", "eLePhant"], "e", 1) should return 2', function() {
  expect(findLastIndexBySymbolCount(["cat", "dOg", "eLePhant"], "e", 1)).to.equal(2);
});

it('findLastIndexBySymbolCount(["One", "tWo", "Three"], "O", 1) should return 1', function() {
  expect(findLastIndexBySymbolCount(["One", "tWo", "Three"], "O", 1)).to.equal(1);
});

it('findLastIndexBySymbolCount(["aPple", "bAnAnA", "chErrY"], "e", 2) should return -1', function() {
  expect(findLastIndexBySymbolCount(["aPple", "bAnAnA", "chErrY"], "e", 2)).to.equal(-1);
});

it('findLastIndexBySymbolCount(["kIwI", "mElOn", "OrAngE"], "N", 1) should return 2', function() {
  expect(findLastIndexBySymbolCount(["kIwI", "mElOn", "OrAngE"], "N", 1)).to.equal(2);
});

it('findLastIndexBySymbolCount(["PiNeApple", "PeAr", "PeAch"], "P", 3) should return 0', function() {
  expect(findLastIndexBySymbolCount(["PiNeApple", "PeAr", "PeAch"], "P", 3)).to.equal(0);
});

it('findLastIndexBySymbolCount(["aAA", "bBB", "cCC"], "c", 2) should return 2', function() {
  expect(findLastIndexBySymbolCount(["aAA", "bBB", "cCC"], "c", 2)).to.equal(2);
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
