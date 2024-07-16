// NAMEEN:
// NAMERU:Убрать пробелы и перевести в нижний регистр

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `cleanAndLower`, которая принимает строку и возвращает ее без пробелов в начале и конце, и в нижнем регистре.

Пример:
```javascript
cleanAndLower('  Hello World  ') // 'hello world'
cleanAndLower('  tESt  ') // 'test'
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
fun
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function cleanAndLower(text) {
  return text.trim().toLowerCase();
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function cleanAndLower', () => {
  expect(cleanAndLower).to.be.a('function');
});

it('cleanAndLower("  Hello World  ") should return "hello world"', () => {
  expect(cleanAndLower('  Hello World  ')).to.equal('hello world');
});

it('cleanAndLower("  tESt  ") should return "test"', () => {
  expect(cleanAndLower('  tESt  ')).to.equal('test');
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
