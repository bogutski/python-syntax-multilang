// NAMEEN:
// NAMERU:Длины строк последовательно увеличиваются

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `stringSequence`, которая принимает три строки и возвращает `true`, если длины строк последовательно увеличиваются на 1, и `false` в противном случае.

Рассмотрите пример для понимания условия задачи.

Примеры запуска функции:
```javascript
stringSequence('', 'a', 'aa'); // true
stringSequence('a', 'aa', 'aaa'); // true
stringSequence('aaa', 'aaaa', 'aaaaa'); // true

stringSequence('a', 'aa', 'aaaa'); // false
stringSequence('a', 'aa', 'a'); // false
stringSequence('a', 'a', 'a'); // false
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
fun
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function stringSequence(str1, str2, str3) {
  return str1.length + 1 === str2.length && str2.length + 1 === str3.length;
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function stringSequence', () => {
  expect(stringSequence).to.be.a('function');
});

it('stringSequence("", "a", "aa") should return true', () => {
  expect(stringSequence('', 'a', 'aa')).to.equal(true);
});

it('stringSequence("a", "aa", "aaa") should return true', () => {
  expect(stringSequence('a', 'aa', 'aaa')).to.equal(true);
});

it('stringSequence("aaa", "aaaa", "aaaaa") should return true', () => {
  expect(stringSequence('aaa', 'aaaa', 'aaaaa')).to.equal(true);
});

it('stringSequence("aaa", "aaaaqq", "aaaaaqq") should return false', () => {
  expect(stringSequence('aaa', 'aaaaqq', 'aaaaaqq')).to.equal(false);
});

it('stringSequence("a", "aa", "aaaaaqq") should return false', () => {
  expect(stringSequence('a', 'aa', 'aaaaaqq')).to.equal(false);
});

it('stringSequence("a", "aa", "aaaa") should return false', () => {
  expect(stringSequence('a', 'aa', 'aaaa')).to.equal(false);
});

it('stringSequence("a", "aa", "a") should return false', () => {
  expect(stringSequence('a', 'aa', 'a')).to.equal(false);
});

it('stringSequence("a", "a", "a") should return false', () => {
  expect(stringSequence('a', 'a', 'a')).to.equal(false);
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
