// NAMEEN:
// NAMERU:True если первый больше или равен второму

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `firstIsBiggerOrEqual`, которая принимает два числа `first` и `second` и возвращает `true`, если первое число `first` больше или равно второму `second`, и `false` если меньше.
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
fun
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function firstIsBiggerOrEqual(first, second) {
  return first >= second;
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function firstIsBiggerOrEqual', () => {
  expect(firstIsBiggerOrEqual).to.be.a('function');
});

it('firstIsBiggerOrEqual(1, 2) should return false', () => {
  expect(firstIsBiggerOrEqual(1, 2)).to.equal(false);
});

it('firstIsBiggerOrEqual(2, 1) should return true', () => {
  expect(firstIsBiggerOrEqual(2, 1)).to.equal(true);
});

it('firstIsBiggerOrEqual(1, 1) should return true', () => {
  expect(firstIsBiggerOrEqual(1, 1)).to.equal(true);
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
