// NAMEEN:
// NAMERU:True если первый символ строки равен последнему

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `firstAndLastEqual`, которая принимает строку и возвращает `true`, если первый символ строки равен последнему, и `false` в противном случае.

Примеры запуска функции:
```javascript
firstAndLastEqual('abc'); // false
firstAndLastEqual('a'); // true
firstAndLastEqual('aa'); // true
firstAndLastEqual('JS'); // false
firstAndLastEqual('J-SJ'); // true
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
fun
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function firstAndLastEqual(str) {
  return str[0] === str[str.length - 1];
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function firstAndLastEqual', () => {
  expect(firstAndLastEqual).to.be.a('function');
});

it('firstAndLastEqual("abc") should return false', () => {
  expect(firstAndLastEqual('abc')).to.equal(false);
});

it('firstAndLastEqual("a") should return true', () => {
  expect(firstAndLastEqual('a')).to.equal(true);
});

it('firstAndLastEqual("aa") should return true', () => {
  expect(firstAndLastEqual('aa')).to.equal(true);
});

it('firstAndLastEqual("JS") should return false', () => {
  expect(firstAndLastEqual('JS')).to.equal(false);
});

it('firstAndLastEqual("J-SJ") should return true', () => {
  expect(firstAndLastEqual('J-SJ')).to.equal(true);
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
