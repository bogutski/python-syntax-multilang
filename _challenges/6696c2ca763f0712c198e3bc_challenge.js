// NAMEEN:
// NAMERU:Самая длинная строка из двух

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `longestString`, которая принимает две строки и возвращает самую длинную из них.

При равенстве длин возвращается первая строка.

Примеры запуска функции:
```javascript
longestString('aaa', 'aa'); // 'aaa'
longestString('aaa', 'bbbb'); // 'bbbb'
longestString('aaa', 'qqq'); // 'aaa'
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
fun
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function longestString(str1, str2) {
  return str1.length >= str2.length ? str1 : str2;
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function longestString', () => {
  expect(longestString).to.be.a('function');
});

it('longestString("aaa", "aa") should return "aaa"', () => {
  expect(longestString('aaa', 'aa')).to.equal('aaa');
});

it('longestString("aaa", "bbbb") should return "bbbb"', () => {
  expect(longestString('aaa', 'bbbb')).to.equal('bbbb');
});

it('longestString("aaa", "qqq") should return "aaa"', () => {
  expect(longestString('aaa', 'qqq')).to.equal('aaa');
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
