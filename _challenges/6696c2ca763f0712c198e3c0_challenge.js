// NAMEEN:
// NAMERU:Если среди четырех строк есть одинаковые по длине

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `hasEqualLength`, которая принимает четыре строки и возвращает `true`, если среди них есть хотя бы две с одинаковой длиной, и `false` в противном случае.

Примеры запуска функции:
```javascript
hasEqualLength('aaa', 'aa', 'aa', 'aaaa'); // true
hasEqualLength('aaa', 'aa', 'aaa', 'aa'); // true
hasEqualLength('aaa', 'aa', 'aaaa', 'aaaaa'); // false
```
Проверьте каждую пару строк на равенство длины. Если хотя бы одна пара строк имеет одинаковую длину, функция должна возвращать `true`.

Если ни одна пара строк не имеет одинаковой длины, функция должна возвращать `false`.
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
fun
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function hasEqualLength(str1, str2, str3, str4) {
  return (
    str1.length === str2.length ||
    str1.length === str3.length ||
    str1.length === str4.length ||
    str2.length === str3.length ||
    str2.length === str4.length ||
    str3.length === str4.length
  );
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function hasEqualLength', () => {
  expect(hasEqualLength).to.be.a('function');
});

it('hasEqualLength("aaa", "aa", "aa", "aaaa") should return true', () => {
  expect(hasEqualLength('aaa', 'aa', 'aa', 'aaaa')).to.equal(true);
});

it('hasEqualLength("aaa", "aa", "aaa", "aa") should return true', () => {
  expect(hasEqualLength('aaa', 'aa', 'aaa', 'aa')).to.equal(true);
});

it('hasEqualLength("aaa", "aaa", "aa", "aaaaa") should return true', () => {
  expect(hasEqualLength('aaa', 'aaa', 'aa', 'aaaaa')).to.equal(true);
});

it('hasEqualLength("aaa", "aa", "aaaa", "aaaa") should return true', () => {
  expect(hasEqualLength('aaa', 'aa', 'aaaa', 'aaaa')).to.equal(true);
});

it('hasEqualLength("aaa", "aa", "aaaa", "aaaaa") should return false', () => {
  expect(hasEqualLength('aaa', 'aa', 'aaaa', 'aaaaa')).to.equal(false);
});

it('hasEqualLength("", "aa", "aaa", "") should return true', () => {
  expect(hasEqualLength('', 'aa', 'aaa', '')).to.equal(true);
});

it('hasEqualLength("", "aa", "aaa", "aaaa") should return false', () => {
  expect(hasEqualLength('', 'aa', 'aaa', 'aaaa')).to.equal(false);
});

it('hasEqualLength("aaa", "aa", "a", "aaaa") should return false', () => {
  expect(hasEqualLength('aaa', 'aa', 'a', 'aaaa')).to.equal(false);
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
