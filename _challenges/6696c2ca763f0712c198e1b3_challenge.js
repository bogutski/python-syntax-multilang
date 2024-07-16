// NAMEEN:
// NAMERU:Определяем четное и нечетное число

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
В функцию `oddOrEven` передается число. Нужно определить, четное ли оно, и вернуть строку `'even'` или `'odd'` в зависимости от результата.

Используй оператор `%` для определения остатка от деления.
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
fun
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function oddOrEven(num) {
  return num % 2 < 1 ? 'even' : 'odd';
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function oddOrEven', () => {
  expect(oddOrEven).to.be.a('function');
});

it('oddOrEven(1) returns "odd"', () => {
  expect(oddOrEven(1)).to.equal('odd');
});

it('oddOrEven(2) returns "even"', () => {
  expect(oddOrEven(2)).to.equal('even');
});

it('oddOrEven(3) returns "odd"', () => {
  expect(oddOrEven(3)).to.equal('odd');
});

it('oddOrEven(4) returns "even"', () => {
  expect(oddOrEven(4)).to.equal('even');
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
