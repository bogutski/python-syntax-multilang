// NAMEEN:
// NAMERU:True если первый аргумент больше второго

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `firstIsBigger`, которая принимает два числа `first` и `second`
и возвращает `true`, если первое число `first` больше второго `second`, и `false` если меньше или равно.
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
fun
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function firstIsBigger(first, second) {
  return first > second;
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function firstIsBigger', () => {
  expect(firstIsBigger).to.be.a('function');
});

it('firstIsBigger(1, 2) should return false', () => {
  expect(firstIsBigger(1, 2)).to.equal(false);
});

it('firstIsBigger(2, 1) should return true', () => {
  expect(firstIsBigger(2, 1)).to.equal(true);
});

it('firstIsBigger(1, 1) should return false', () => {
  expect(firstIsBigger(1, 1)).to.equal(false);
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
