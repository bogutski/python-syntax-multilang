// NAMEEN:
// NAMERU:Модифицировать строку в зависимости от условия

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `modifyString`, которая принимает 2 параметра:

* `str` - строка
* `direction` - строка, которая может принимать значения `up` или `down`

Функция должна возвращать строку в верхнем регистре, если `direction` равен `up`, и в нижнем регистре, если `direction` равен `down`.

Если второй аргумент не передан, то функция должна возвращать строку без изменений.

Если второй аргумент не равен `up` или `down`, то функция должна возвращать строку `Wrong direction`.
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
fun
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function modifyString(str, direction) {
  if (!direction) return str;

  if (direction === 'up') {
    return str.toUpperCase();
  } else if (direction === 'down') {
    return str.toLowerCase();
  }
  return 'Wrong direction';
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function modifyString', () => {
  expect(modifyString).to.be.a('function');
});

it('modifyString("Hello", "up") should return "HELLO"', () => {
  expect(modifyString('Hello', 'up')).to.equal('HELLO');
});

it('modifyString("Hello", "down") should return "hello"', () => {
  expect(modifyString('Hello', 'down')).to.equal('hello');
});

it('modifyString("Hello") should return "Hello"', () => {
  expect(modifyString('Hello')).to.equal('Hello');
});

it('modifyString("Hello World", "up") should return "HELLO WORLD"', () => {
  expect(modifyString('Hello World', 'up')).to.equal('HELLO WORLD');
});

it('modifyString("Hello World", "down") should return "hello world"', () => {
  expect(modifyString('Hello World', 'down')).to.equal('hello world');
});

it('modifyString("AAA", "up") should return "AAA"', () => {
  expect(modifyString('AAA', 'up')).to.equal('AAA');
});

it('modifyString("AAA", "down") should return "aaa"', () => {
  expect(modifyString('AAA', 'down')).to.equal('aaa');
});

it('modifyString("AAA", "left") should return "Wrong direction"', () => {
  expect(modifyString('AAA', 'left')).to.equal('Wrong direction');
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
