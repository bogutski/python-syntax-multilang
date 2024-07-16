// NAMEEN:
// NAMERU:Проверка, что все строки в массиве содержат хотя бы одну заглавную букву

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `areAllStringsContainingUpperCase`, которая принимает массив строк и возвращает `true`, если все строки в массиве содержат хотя бы одну заглавную букву, и `false` в противном случае.


Примеры запуска функции:
```javascript
areAllStringsContainingUpperCase(['hEllo', 'worlD', 'JavaScript']); // true
areAllStringsContainingUpperCase(['hello', 'world', 'JavaScript']); // false
areAllStringsContainingUpperCase(['HELLO', 'WORLD', 'JAVASCRIPT']); // true
areAllStringsContainingUpperCase(['Hello', 'world', 'JavaScript']); // false
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
function areAllStringsContainingUpperCase(){

}
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function areAllStringsContainingUpperCase(arr) {
  return arr.every(word => word.toLowerCase() !== word);
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function areAllStringsContainingUpperCase', () => {
  expect(areAllStringsContainingUpperCase).to.be.a('function');
});

it('areAllStringsContainingUpperCase(["Hello", "World", "JavaScript"]) should return true', function() {
  expect(areAllStringsContainingUpperCase(["Hello", "World", "JavaScript"])).to.equal(true);
});

it('areAllStringsContainingUpperCase(["hello", "world", "JavaScript"]) should return false', function() {
  expect(areAllStringsContainingUpperCase(["hello", "world", "JavaScript"])).to.equal(false);
});

it('areAllStringsContainingUpperCase(["HELLO", "WORLD", "JAVASCRIPT"]) should return true', function() {
  expect(areAllStringsContainingUpperCase(["HELLO", "WORLD", "JAVASCRIPT"])).to.equal(true);
});

it('areAllStringsContainingUpperCase(["Hello", "world", "JavaScript"]) should return false', function() {
  expect(areAllStringsContainingUpperCase(["Hello", "world", "JavaScript"])).to.equal(false);
});

it('areAllStringsContainingUpperCase(["UpperCase", "InEvery", "String"]) should return true', function() {
  expect(areAllStringsContainingUpperCase(["UpperCase", "InEvery", "String"])).to.equal(true);
});

it('areAllStringsContainingUpperCase(["nocapitals", "insome", "strings"]) should return false', function() {
  expect(areAllStringsContainingUpperCase(["nocapitals", "insome", "strings"])).to.equal(false);
});

it('areAllStringsContainingUpperCase(["AaAa", "BbBb", "CcCc"]) should return true', function() {
  expect(areAllStringsContainingUpperCase(["AaAa", "BbBb", "CcCc"])).to.equal(true);
});

it('areAllStringsContainingUpperCase(["lowercase", "uppercase", "mixedCASE"]) should return false', function() {
  expect(areAllStringsContainingUpperCase(["lowercase", "uppercase", "mixedCASE"])).to.equal(false);
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
