// NAMEEN:
// NAMERU:Сделать только один пробел между словами

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `separator`, которая принимает две строки и возвращает их соединенные через один пробел, но без пробелов в начале и в конце.

Пример запуска функции:
```javascript
separator('  abc', '  def '); // 'abc def'
separator('abc  ', '  def'); // 'abc def'
separator('  hello', '  world       '); // 'hello world'
separator('  hello', '  world'); // 'hello world'
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
fun
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function separator(string1, string2) {
  return string1.trim() + ' ' + string2.trim();
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function separator', () => {
  expect(separator).to.be.a('function');
});

it('separator("  abc", "  def ") should return "abc def"', () => {
  expect(separator('  abc', '  def ')).to.be.equal('abc def');
});

it('separator("abc  ", "  def") should return "abc def"', () => {
  expect(separator('abc  ', '  def')).to.be.equal('abc def');
});

it('separator("  hello", "  world       ") should return "hello world"', () => {
  expect(separator('  hello', '  world       ')).to.be.equal('hello world');
});

it('separator("  hello", "  world") should return "hello world"', () => {
  expect(separator('  hello', '  world')).to.be.equal('hello world');
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
