// NAMEEN:
// NAMERU:На сколько отличаются две строки по длине

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `diffLength`, которая принимает две строки и возвращает разницу их длин.

Примеры запуска функции:
```javascript
diffLength('aaa', 'aa'); // 1
diffLength('aa', 'aaa'); // 1
diffLength('aaa', ''); // 3
diffLength('', 'aaa'); // 3
diffLength('aaa', 'aaa'); // 0
```

Возвращаемое значение должно быть положительным числом.
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
fun
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function diffLength(str1, str2) {
  return Math.abs(str1.length - str2.length);
}
// SOLUTIONEND

// OPENTESTSSTART
it('Created function diffLength', () => {
  expect(diffLength).to.be.a('function');
});

it('diffLength("aaa", "aa") should return 1', () => {
  expect(diffLength('aaa', 'aa')).to.equal(1);
});

it('diffLength("aaa", "bbbbb") should return 2', () => {
  expect(diffLength('aaa', 'bbbbb')).to.equal(2);
});

it('diffLength("", "qqq") should return 3', () => {
  expect(diffLength('', 'qqq')).to.equal(3);
});

it('diffLength("qqq", "") should return 3', () => {
  expect(diffLength('qqq', '')).to.equal(3);
});

it('diffLength("qqq", "qqq") should return 0', () => {
  expect(diffLength('qqq', 'qqq')).to.equal(0);
});

it('diffLength("q", "qqqq") should return 3', () => {
  expect(diffLength('q', 'qqqq')).to.equal(3);
});

it('diffLength("qqqqaaaa", "---q") should return 4', () => {
  expect(diffLength('qqqqaaaa', '---q')).to.equal(4);
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
