// NAMEEN:
// NAMERU:Удаление пробелов из строки

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `noSpaces`, которая принимает строку, в которой могут быть пробелы, и возвращает новую, копию оригинальной строки, но без пробелов.

Если входная строка пустая, верните пустую строку.

Примеры запуска функции:
```javascript
noSpaces('Hello World') // 'HelloWorld'
noSpaces('a b c') // 'abc'
noSpaces('') // ''
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
fun
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function noSpaces(sting){
  let newString = '';
  for (let i = 0; i < sting.length; i++) {
    if(sting[i] !== ' '){
      newString += sting[i]
    }
  }
  return newString;
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function noSpaces', () => {
  expect(noSpaces).to.be.a('function');
});

it("noSpaces('Hello World') should return 'HelloWorld'", () => {
  expect(noSpaces('Hello World')).to.equal('HelloWorld');
});

it("noSpaces('J a v a S c r i p t') should return 'JavaScript'", () => {
  expect(noSpaces('J a v a S c r i p t')).to.equal('JavaScript');
});

it("noSpaces('A p p l e') should return 'Apple'", () => {
  expect(noSpaces('A p p l e')).to.equal('Apple');
});

it("noSpaces('1 2 3 4 5') should return '12345'", () => {
  expect(noSpaces('1 2 3 4 5')).to.equal('12345');
});

it("noSpaces(' ') should return ''", () => {
  expect(noSpaces(' ')).to.equal('');
});

it("noSpaces('') should return ''", () => {
  expect(noSpaces('')).to.equal('');
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
