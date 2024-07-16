// NAMEEN:
// NAMERU:Функция возвращает последний символ строки

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напиши функцию `lastSymbol`, которая принимает строку и возвращает последний символ этой строки.

Примеры запуска функции:
```javascript
lastSymbol('abc'); // 'c'
lastSymbol('JS'); // 'S'
lastSymbol('Hello world'); // 'd'
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
fun
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function lastSymbol(str) {
  return str[str.length - 1];
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function lastSymbol', () => {
  expect(lastSymbol).to.be.a('function');
});

it('lastSymbol("abc") should return "c"', () => {
  expect(lastSymbol('abc')).to.equal('c');
});

it('lastSymbol("JS") should return "S"', () => {
  expect(lastSymbol('JS')).to.equal('S');
});

it('lastSymbol("Hello world") should return "d"', () => {
  expect(lastSymbol('Hello world')).to.equal('d');
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
