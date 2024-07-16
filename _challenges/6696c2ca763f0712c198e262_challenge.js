// NAMEEN:
// NAMERU:Определяем какое число

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `defineNumber`, которая принимает параметр – число. Параметр назовите как угодно.

Пусть функция возвращает строку, в зависимости от того, какое число передано:
* если число больше нуля, то функция должна вернуть строку `'positive'`
* если число меньше нуля, то функция должна вернуть строку `'negative'`
* если число равно нулю, то функция должна вернуть строку `'zero'`
* если передано не число, то функция должна вернуть строку `'not a number'`
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
fun
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function defineNumber(number) {
  // if not a number
  if (typeof number !== 'number') {
    return 'not a number';
  }

  if (number > 0) {
    return 'positive';
  } else if (number < 0) {
    return 'negative';
  } else {
    return 'zero';
  }
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function defineNumber', () => {
  expect(defineNumber).to.be.a('function');
});

it('defineNumber(1) returns "positive"', () => {
  expect(defineNumber(1)).to.be.equal('positive');
});

it('defineNumber(20) returns "positive"', () => {
  expect(defineNumber(20)).to.be.equal('positive');
});

it('defineNumber(-1) returns "negative"', () => {
  expect(defineNumber(-1)).to.be.equal('negative');
});

it('defineNumber(-3) returns "negative"', () => {
  expect(defineNumber(-3)).to.be.equal('negative');
});

it('defineNumber(0) returns "zero"', () => {
  expect(defineNumber(0)).to.be.equal('zero');
});

it('defineNumber("1") returns "not a number"', () => {
  expect(defineNumber('1')).to.be.equal('not a number');
});

it('defineNumber(true) returns "not a number"', () => {
  expect(defineNumber(true)).to.be.equal('not a number');
});

it('defineNumber(null) returns "not a number"', () => {
  expect(defineNumber(null)).to.be.equal('not a number');
});

it('defineNumber(undefined) returns "not a number"', () => {
  expect(defineNumber(undefined)).to.be.equal('not a number');
});

it('defineNumber() returns "not a number"', () => {
  expect(defineNumber()).to.be.equal('not a number');
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
