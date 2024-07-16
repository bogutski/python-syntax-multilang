// NAMEEN:
// NAMERU:Функция повторяет строку согласно своей длине

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напиши функцию `repeatString`, которая принимает строку и возвращает ее повторенную столько раз, сколько длина этой строки.

Пример запуска функции:
```javascript
repeatString('abc1'); // 'abc1abc1abc1abc1'
repeatString('abc'); // 'abcabcabc'
repeatString('qw'); // 'qwqw'
repeatString('q'); // 'q'
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
fun
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function repeatString(string) {
  return string.repeat(string.length);
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function repeatString', () => {
  expect(repeatString).to.be.a('function');
});

it('repeatString("abc1") should return "abc1abc1abc1abc1"', () => {
  expect(repeatString('abc1')).to.equal('abc1abc1abc1abc1');
});

it('repeatString("abc") should return "abcabcabc"', () => {
  expect(repeatString('abc')).to.equal('abcabcabc');
});

it('repeatString("qw") should return "qwqw"', () => {
  expect(repeatString('qw')).to.equal('qwqw');
});

it('repeatString("q") should return "q"', () => {
  expect(repeatString('q')).to.equal('q');
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
