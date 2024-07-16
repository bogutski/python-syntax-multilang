// NAMEEN:
// NAMERU:Функция возвращает первый символ строки

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напиши функцию `firstSymbol`, которая принимает строку и возвращает первый символ этой строки.

Примеры запуска функции:
```javascript
firstSymbol('abc'); // 'a'
firstSymbol('JS'); // 'J'
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
fun
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function firstSymbol(str) {
  return str[0];
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function firstSymbol', () => {
  expect(firstSymbol).to.be.a('function');
});

it('firstSymbol("abc") should return "a"', () => {
  expect(firstSymbol('abc')).to.equal('a');
});

it('firstSymbol("JS") should return "J"', () => {
  expect(firstSymbol('JS')).to.equal('J');
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
