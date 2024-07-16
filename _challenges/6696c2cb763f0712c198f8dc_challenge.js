// NAMEEN:
// NAMERU:Проверка на равную длину строк

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `areAllStringsSameLength`, которая принимает массив.

Функция возвращает `true`, если все строки в массиве имеют одинаковую длину (игнорируя элементы, которые не являются строками), и `false` в противном случае.


Примеры запуска функции:
```javascript
areAllStringsSameLength(['test', 'abcd', 'efgh']); // true
areAllStringsSameLength(['hello', 55, 'world', 0, 10, 'js']);    // false
areAllStringsSameLength(['123', null, '456', '789', undefined]); // true
areAllStringsSameLength([[1, 2, 3], 'a', false, 'bb', true, 'ccc', {}]); // false
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
function areAllStringsSameLength(){

}
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function areAllStringsSameLength(arr) {
  let len
  return arr.every(str => {
    if(typeof str !== 'string') return true
    else {
      if(len === undefined) len = str.length
      else if(str.length !== len) return false
    }
    return true
  });
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function areAllStringsSameLength', () => {
  expect(areAllStringsSameLength).to.be.a('function');
});

it('areAllStringsSameLength(["test", "abcd", "efgh"]) should return true', function() {
  expect(areAllStringsSameLength(["test", "abcd", "efgh"])).to.equal(true);
});

it('areAllStringsSameLength(["hello", 55, "world", 0, 10, "js"]) should return false', function() {
  expect(areAllStringsSameLength(["hello", 55, "world", 0, 10, "js"])).to.equal(false);
});

it('areAllStringsSameLength(["123", null, "456", "789", undefined]) should return true', function() {
  expect(areAllStringsSameLength(["123", null, "456", "789", undefined])).to.equal(true);
});

it('areAllStringsSameLength([[1, 2, 3], "a", false, "bb", true, "ccc", {}]) should return false', function() {
  expect(areAllStringsSameLength([[1, 2, 3], "a", false, "bb", true, "ccc", {}])).to.equal(false);
});

it('areAllStringsSameLength(["same", "size", "test"]) should return true', function() {
  expect(areAllStringsSameLength(["same", "size", "test"])).to.equal(true);
});

it('areAllStringsSameLength(["different", "sizes"]) should return false', function() {
  expect(areAllStringsSameLength(["different", "sizes"])).to.equal(false);
});

it('areAllStringsSameLength(["abc", "def", "ghi"]) should return true', function() {
  expect(areAllStringsSameLength(["abc", "def", "ghi"])).to.equal(true);
});

it('areAllStringsSameLength([]) should return true', function() {
  expect(areAllStringsSameLength([])).to.equal(true);
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
