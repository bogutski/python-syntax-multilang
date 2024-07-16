// NAMEEN:
// NAMERU:Конкатенация трех строк

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `concat`, которая принимает три параметра: `first`, `second`, `third` - строки.
Пусть функция возвращает конкатенацию трех строк.

Примеры запуска функции:
```javascript
concat('a', 'b', 'c'); // 'abc'
concat('hello', ' ', 'world'); // 'hello world'
concat('qwe', 'rty', 'uio'); // 'qwertyuio'
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
fun
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function concat(first, second, third) {
  return first + second + third;
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function concat', () => {
  expect(concat).to.be.a('function');
});

it('concat("a", "b", "c") should return "abc"', () => {
  expect(concat('a', 'b', 'c')).to.equal('abc');
});

it('concat("hello", " ", "world") should return "hello world"', () => {
  expect(concat('hello', ' ', 'world')).to.equal('hello world');
});

it('concat("qwe", "rty", "uio") should return "qwertyuio"', () => {
  expect(concat('qwe', 'rty', 'uio')).to.equal('qwertyuio');
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
