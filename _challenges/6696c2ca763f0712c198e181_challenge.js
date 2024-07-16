// NAMEEN:
// NAMERU:True если второй аргумент больше первого

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `secondIsBigger`, которая принимает два числа `first` и `second`
и возвращает `true`, если второе число `second` больше первого `first`, и `false` если меньше или равно.
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
fun
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function secondIsBigger(first, second) {
  return first < second;
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function secondIsBigger', () => {
  expect(secondIsBigger).to.be.a('function');
});

it('secondIsBigger(1, 2) should return true', () => {
  expect(secondIsBigger(1, 2)).to.equal(true);
});

it('secondIsBigger(2, 1) should return false', () => {
  expect(secondIsBigger(2, 1)).to.equal(false);
});

it('secondIsBigger(1, 1) should return false', () => {
  expect(secondIsBigger(1, 1)).to.equal(false);
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
