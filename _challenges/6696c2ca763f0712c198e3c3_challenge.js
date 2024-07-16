// NAMEEN:
// NAMERU:Определите тренд роста или падения

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `trend`, которая принимает три строки и возвращает строку `Up`, если длина второй строки больше первой, а длина третьей строки больше второй.

Если длина второй строки меньше первой, а длина третьей строки меньше второй, возвращается строка `Down`.

Если ни одно из условий не выполняется, возвращается строка `Not sure`.

Примеры запуска функции:
```javascript
trend('aaa', 'aa', 'a'); // 'Down'
trend('aaa', 'bbbb', 'bbbbb'); // 'Up'
trend('aaa', 'qqq', 'qqqqq'); // 'Not sure'
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
fun
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function trend(str1, str2, str3) {
  if (str1.length < str2.length && str2.length < str3.length) {
    return 'Up';
  } else if (str1.length > str2.length && str2.length > str3.length) {
    return 'Down';
  }
  return 'Not sure';
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function trend', () => {
  expect(trend).to.be.a('function');
});

it('trend("aaa", "aa", "a") should return "Down"', () => {
  expect(trend('aaa', 'aa', 'a')).to.equal('Down');
});

it('trend("aaa", "bbbb", "bbbbb") should return "Up"', () => {
  expect(trend('aaa', 'bbbb', 'bbbbb')).to.equal('Up');
});

it('trend("aaa", "qqq", "qqqqq") should return "Not sure"', () => {
  expect(trend('aaa', 'qqq', 'qqqqq')).to.equal('Not sure');
});

it('trend("a", "b", "c") should return "Not sure"', () => {
  expect(trend('a', 'b', 'c')).to.equal('Not sure');
});

it('trend("a", "aaaaaaa", "aaaaaaaaaaaaaa") should return "Up"', () => {
  expect(trend('a', 'aaaaaaa', 'aaaaaaaaaaaaaa')).to.equal('Up');
});

it('trend("aaaaaaaaaa", "aa", "a") should return "Down"', () => {
  expect(trend('aaaaaaaaaa', 'aa', 'a')).to.equal('Down');
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
