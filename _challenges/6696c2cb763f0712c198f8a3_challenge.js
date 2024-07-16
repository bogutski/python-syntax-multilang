// NAMEEN:
// NAMERU:Найти индекс последнего элемента, содержащего заданное количество заглавных букв

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `findLastIndexByUpperCaseCount`, которая принимает массив строк и число.

Функция должна вернуть индекс последнего элемента в массиве, который содержит заданное количество заглавных букв.

Если такого элемента нет, функция должна вернуть `-1`.


Примеры запуска функции:
```javascript
findLastIndexByUpperCaseCount(['aBcD', 'EfGh', 'IjKl'], 2); // 2
findLastIndexByUpperCaseCount(['Python', 'JAVA', 'c++'], 0); // 2
findLastIndexByUpperCaseCount(['example', 'test', 'case'], 1); // -1
findLastIndexByUpperCaseCount(['HeLLo', 'WORLD', 'JaVaScRipT'], 3); // 0
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
function findLastIndexByUpperCaseCount(){

}
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function findLastIndexByUpperCaseCount(arr, n) {
  return arr.findLastIndex(str => str.replace(/[^A-Z]/g, '').length === n );
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function findLastIndexByUpperCaseCount', () => {
  expect(findLastIndexByUpperCaseCount).to.be.a('function');
});

it('findLastIndexByUpperCaseCount(["HeLLo", "WORLD", "JaVaScRipT"], 3) should return 0', function() {
  expect(findLastIndexByUpperCaseCount(["HeLLo", "WORLD", "JaVaScRipT"], 3)).to.equal(0);
});

it('findLastIndexByUpperCaseCount(["aBcD", "EfGh", "IjKl"], 2) should return 2', function() {
  expect(findLastIndexByUpperCaseCount(["aBcD", "EfGh", "IjKl"], 2)).to.equal(2);
});

it('findLastIndexByUpperCaseCount(["Python", "JAVA", "c++"], 0) should return 2', function() {
  expect(findLastIndexByUpperCaseCount(["Python", "JAVA", "c++"], 0)).to.equal(2);
});

it('findLastIndexByUpperCaseCount(["example", "test", "case"], 1) should return -1', function() {
  expect(findLastIndexByUpperCaseCount(["example", "test", "case"], 1)).to.equal(-1);
});

it('findLastIndexByUpperCaseCount(["AbCdEf", "gHiJkL", "MnOpQr"], 3) should return 2', function() {
  expect(findLastIndexByUpperCaseCount(["AbCdEf", "gHiJkL", "MnOpQr"], 3)).to.equal(2);
});

it('findLastIndexByUpperCaseCount(["HTML", "CSS", "JavaScript"], 4) should return 0', function() {
  expect(findLastIndexByUpperCaseCount(["HTML", "CSS", "JavaScript"], 4)).to.equal(0);
});

it('findLastIndexByUpperCaseCount(["Java", "Ruby", "Python"], 1) should return 2', function() {
  expect(findLastIndexByUpperCaseCount(["Java", "Ruby", "Python"], 1)).to.equal(2);
});

it('findLastIndexByUpperCaseCount(["Go", "Rust", "CSharp"], 3) should return -1', function() {
  expect(findLastIndexByUpperCaseCount(["Go", "Rust", "CSharp"], 3)).to.equal(-1);
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
