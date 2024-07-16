// NAMEEN:
// NAMERU:Удаление пробелов только в начале строки

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `clearString`, которая принимает строку и возвращает ее без пробелов только в начале строки.

Пример запуска функции:
```javascript
clearString('  abc'); // 'abc'
clearString('abc  '); // 'abc  '
clearString('  abc  '); // 'abc  '
clearString('  a b c  '); // 'a b c  '
clearString(' a b c '); // 'a b c '
clearString(' a b c'); // 'a b c'
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
fun
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function clearString(string) {
  return string.trimStart();
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function clearString', () => {
  expect(clearString).to.be.a('function');
});

it('clearString("  abc") should return "abc"', () => {
  expect(clearString('  abc')).to.be.equal('abc');
});

it('clearString("abc  ") should return "abc  "', () => {
  expect(clearString('abc  ')).to.be.equal('abc  ');
});

it('clearString("  abc  ") should return "abc  "', () => {
  expect(clearString('  abc  ')).to.be.equal('abc  ');
});

it('clearString("  a b c  ") should return "a b c  "', () => {
  expect(clearString('  a b c  ')).to.be.equal('a b c  ');
});

it('clearString(" a b c ") should return "a b c "', () => {
  expect(clearString(' a b c ')).to.be.equal('a b c ');
});

it('clearString(" a b c") should return "a b c"', () => {
  expect(clearString(' a b c')).to.be.equal('a b c');
});

it('clearString("a b c") should return "a b c"', () => {
  expect(clearString('a b c')).to.be.equal('a b c');
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
