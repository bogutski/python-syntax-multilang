// NAMEEN:
// NAMERU:Перевести строку в нижний регистр

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `allLower`, которая принимает строку и возвращает эту же строку, но в нижнем регистре.

Примеры запуска функции:
```javascript
allLower('Hello') // 'hello'
allLower('Hello World') // 'hello world'
allLower('AAA') // 'aaa'
allLower('AAA aaa') // 'aaa aaa'
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
fun
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function allLower(str) {
  return str.toLowerCase();
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function allLower', () => {
  expect(allLower).to.be.a('function');
});

it('allLower("Hello") should return "hello"', () => {
  expect(allLower('Hello')).to.equal('hello');
});

it('allLower("Hello World") should return "hello world"', () => {
  expect(allLower('Hello World')).to.equal('hello world');
});

it('allLower("AAA") should return "aaa"', () => {
  expect(allLower('AAA')).to.equal('aaa');
});

it('allLower("AAA aaa") should return "aaa aaa"', () => {
  expect(allLower('AAA aaa')).to.equal('aaa aaa');
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
