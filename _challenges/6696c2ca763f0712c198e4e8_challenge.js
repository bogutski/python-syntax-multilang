// NAMEEN:
// NAMERU:Два слова в строке разделены одним пробелом

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Нужно определить, что между двумя словами в строке есть только один пробел.

Напишите функцию `isOneSpace`, которая принимает строку и возвращает `true`, если между двумя словами в строке есть только один пробел.

В функцию всегда передается строка, в которой есть два слова, разделенных пробелом или несколькими пробелами.

Примеры:
```javascript
isOneSpace('a b'); // true
isOneSpace('a  b'); // false
isOneSpace('a   b'); // false
isOneSpace('a    b'); // false

isOneSpace('hello world'); // true
isOneSpace('hello  world'); // false
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
fun
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function isOneSpace(str) {
  return str.indexOf(' ') === str.lastIndexOf(' ');
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function isOneSpace', () => {
  expect(isOneSpace).to.be.a('function');
});

it('isOneSpace("w t") should return true', () => {
  expect(isOneSpace('w t')).to.be.true;
});

it('isOneSpace("q  o") should return false', () => {
  expect(isOneSpace('q  o')).to.be.false;
});

it('isOneSpace("Bob   Jay") should return false', () => {
  expect(isOneSpace('Bob   Jay')).to.be.false;
});

it('isOneSpace("cat    dog") should return false', () => {
  expect(isOneSpace('cat    dog')).to.be.false;
});

it('isOneSpace("hi js") should return true', () => {
  expect(isOneSpace('hi js')).to.be.true;
});

it('isOneSpace("Hello  World!") should return false', () => {
  expect(isOneSpace('Hello  World!')).to.be.false;
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
