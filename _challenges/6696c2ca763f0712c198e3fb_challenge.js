// NAMEEN:
// NAMERU:Первый и последний символ строки

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напиши функцию `firstAndLastSymbol`, которая принимает строку и возвращает строку, состоящую из первого и последнего символа этой строки.

Примеры запуска функции:
```javascript
firstAndLastSymbol('abc'); // 'ac'
firstAndLastSymbol('JS'); // 'JS'
firstAndLastSymbol('Hello world'); // 'Hd'
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
fun
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function firstAndLastSymbol(str) {
  return str[0] + str[str.length - 1];
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function firstAndLastSymbol', () => {
  expect(firstAndLastSymbol).to.be.a('function');
});

it('firstAndLastSymbol("abc") should return "ac"', () => {
  expect(firstAndLastSymbol('abc')).to.equal('ac');
});

it('firstAndLastSymbol("JS") should return "JS"', () => {
  expect(firstAndLastSymbol('JS')).to.equal('JS');
});

it('firstAndLastSymbol("Hello world") should return "Hd"', () => {
  expect(firstAndLastSymbol('Hello world')).to.equal('Hd');
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
