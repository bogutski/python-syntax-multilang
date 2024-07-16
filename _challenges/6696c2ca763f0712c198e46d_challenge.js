// NAMEEN:
// NAMERU:Повторить первую и последнюю букву строки

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напиши функцию `repeatString`, которая принимает 2 параметра:

1. `string` - строка
2. `count` - число

Пусть функция возьмет первый символ строки и последний символ строки и повторит их `count` раз.

Пример запуска функции:
```javascript
repeatString('abc', 3); // 'acacac'
repeatString('abcde', 2); // 'aeae'
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
fun
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function repeatString(string, count) {
  const firstLetter = string[0];
  const lastLetter = string[string.length - 1];
  return (firstLetter + lastLetter).repeat(count);
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function repeatString', () => {
  expect(repeatString).to.be.a('function');
});

it('repeatString("abc", 3) should return "acacac"', () => {
  expect(repeatString('abc', 3)).to.be.equal('acacac');
});

it('repeatString("abcde", 2) should return "aeae"', () => {
  expect(repeatString('abcde', 2)).to.be.equal('aeae');
});

it('repeatString("abc", 1) should return "ac"', () => {
  expect(repeatString('abc', 1)).to.be.equal('ac');
});

it('repeatString("abc", 0) should return ""', () => {
  expect(repeatString('abc', 0)).to.be.equal('');
});

it('repeatString("aaa", 3) should return "aaaaaa"', () => {
  expect(repeatString('aaa', 3)).to.be.equal('aaaaaa');
});

it('repeatString("qwe", 4) should return "qeqeqeqe"', () => {
  expect(repeatString('qwe', 4)).to.be.equal('qeqeqeqe');
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
