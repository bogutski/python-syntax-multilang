// NAMEEN:
// NAMERU:Проверка, что все элементы массива содержат заданное количество уникальных символов

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `areAllElementsContainUniqueChars`, которая принимает массив строк и число.

Функция должна возвращать `true`, если все строки в массиве содержат указанное количество или больше уникальных (не повторяющихся) символов, и `false` в противном случае.


Примеры запуска функции:
```javascript
areAllElementsContainUniqueChars(['hello', 'world', 'javascript'], 4); // true
areAllElementsContainUniqueChars(['hello', 'world', 'java'], 5); // false
areAllElementsContainUniqueChars(['abcd', 'efgh', 'ijkl'], 3); // true
areAllElementsContainUniqueChars(['aaa', 'bbb', 'ccc'], 2); // false
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
function areAllElementsContainUniqueChars(){

}
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function areAllElementsContainUniqueChars(arr, min) {
  return arr.every(str => {
    const obj = {}

    for(let char of str) {
      if(!obj.hasOwnProperty(char)) obj[char] = true
    }

    return Object.keys(obj).length >= min
  });
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function areAllElementsContainUniqueChars', () => {
  expect(areAllElementsContainUniqueChars).to.be.a('function');
});

it('areAllElementsContainUniqueChars(["hello", "world", "javascript"], 4) should return true', function() {
  expect(areAllElementsContainUniqueChars(["hello", "world", "javascript"], 4)).to.equal(true);
});

it('areAllElementsContainUniqueChars(["hello", "world", "java"], 5) should return false', function() {
  expect(areAllElementsContainUniqueChars(["hello", "world", "java"], 5)).to.equal(false);
});

it('areAllElementsContainUniqueChars(["abcd", "efgh", "ijkl"], 3) should return true', function() {
  expect(areAllElementsContainUniqueChars(["abcd", "efgh", "ijkl"], 3)).to.equal(true);
});

it('areAllElementsContainUniqueChars(["aaa", "bbb", "ccc"], 2) should return false', function() {
  expect(areAllElementsContainUniqueChars(["aaa", "bbb", "ccc"], 2)).to.equal(false);
});

it('areAllElementsContainUniqueChars(["abcdef", "ghijkl", "mnopqr"], 6) should return true', function() {
  expect(areAllElementsContainUniqueChars(["abcdef", "ghijkl", "mnopqr"], 6)).to.equal(true);
});

it('areAllElementsContainUniqueChars(["aabbcc", "ddeeff", "gghhiijj"], 4) should return false', function() {
  expect(areAllElementsContainUniqueChars(["aabbcc", "ddeeff", "gghhiijj"], 4)).to.equal(false);
});

it('areAllElementsContainUniqueChars(["unique", "characters", "only"], 5) should return false', function() {
  expect(areAllElementsContainUniqueChars(["unique", "characters", "only"], 5)).to.equal(false);
});

it('areAllElementsContainUniqueChars(["test", "data", "here"], 3) should return true', function() {
  expect(areAllElementsContainUniqueChars(["test", "data", "here"], 3)).to.equal(true);
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
