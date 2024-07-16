// NAMEEN:
// NAMERU:Перевести строку в верхний регистр

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `allUpper`, которая принимает строку и возвращает эту же строку, но в верхнем регистре.

Примеры запуска функции:
```javascript
allUpper('Hello') // 'HELLO'
allUpper('Hello World') // 'HELLO WORLD'
allUpper('aaa') // 'AAA'
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
fun
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function allUpper(str) {
  return str.toUpperCase();
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function allUpper', () => {
  expect(allUpper).to.be.a('function');
});

it('allUpper("Hello") should return "HELLO"', () => {
  expect(allUpper('Hello')).to.equal('HELLO');
});

it('allUpper("Hello World") should return "HELLO WORLD"', () => {
  expect(allUpper('Hello World')).to.equal('HELLO WORLD');
});

it('allUpper("aaa") should return "AAA"', () => {
  expect(allUpper('aaa')).to.equal('AAA');
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
