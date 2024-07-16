// NAMEEN:
// NAMERU:Возведите число в квадрат

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `powerOfTwo`, которая принимает 1 параметр и возвращает число, возведенное в квадрат.
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
fun
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function powerOfTwo(n) {
  return n * n;
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function powerOfTwo', () => {
  expect(powerOfTwo).to.be.a('function');
});

it('Function returns correct result for argument `1`', () => {
  expect(powerOfTwo(1)).to.equal(1);
});

it('Function returns correct result for argument `2`', () => {
  expect(powerOfTwo(2)).to.equal(4);
});

it('Function returns correct result for argument `3`', () => {
  expect(powerOfTwo(3)).to.equal(9);
});

it('Function returns correct result for argument `4`', () => {
  expect(powerOfTwo(4)).to.equal(16);
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
