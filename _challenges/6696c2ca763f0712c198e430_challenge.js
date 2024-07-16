// NAMEEN:
// NAMERU:Модифицировать строку в зависимости от ее длины

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `modifyString`, которая принимает строку в качестве параметра.

Если длина строки четная, то есть делится на 2 без остатка, то функция должна вернуть строку, в которой каждый символ будет в верхнем регистре.

Если длина строки нечетная, то функция должна вернуть строку, в которой каждый символ будет в нижнем регистре.

Примеры запуска функции:
```javascript
modifyString('Hello') // 'hello'
modifyString('Aa') // 'AA'
modifyString('aAa') // 'aaa'
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
fun
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function modifyString(str) {
  if (str.length % 2 === 0) {
    return str.toUpperCase();
  }
  return str.toLowerCase();
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function modifyString', () => {
  expect(modifyString).to.be.a('function');
});

it('modifyString("Hello") should return "hello"', () => {
  expect(modifyString('Hello')).to.equal('hello');
});

it('modifyString("Aa") should return "AA"', () => {
  expect(modifyString('Aa')).to.equal('AA');
});

it('modifyString("aAa") should return "aaa"', () => {
  expect(modifyString('aAa')).to.equal('aaa');
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
