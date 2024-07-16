// NAMEEN:
// NAMERU:Функция вычисляет длину строки

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `stringLength`, которая принимает строку и возвращает ее длину.
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
fun
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function stringLength(str) {
  return str.length;
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function stringLength', () => {
  expect(stringLength).to.be.a('function');
});

it('stringLength("Hello") should return 5', () => {
  expect(stringLength('Hello')).to.equal(5);
});

it('stringLength("Hello World") should return 11', () => {
  expect(stringLength('Hello World')).to.equal(11);
});

it('stringLength("1234567890") should return 10', () => {
  expect(stringLength('1234567890')).to.equal(10);
});

it('stringLength("") should return 0', () => {
  expect(stringLength('')).to.equal(0);
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
