// NAMEEN:
// NAMERU:

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART

INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
function sum(num1, num2){

}
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function sum(num1, num2) {
  return num1 + num2;
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function sum', () => {
  expect(sum).to.be.a('function');
});

it('Function returns correct result for arguments `-10, 10', () => {
  expect(sum(-10, 10)).eq(0);
});

it('Function returns correct result for arguments `5, 8`', () => {
  expect(sum(5, 8)).eq(13);
});

it('Function returns correct result for arguments `-2, -35`', () => {
  expect(sum(-2, -35)).eq(-37);
});

it('The function returns the correct result for arguments `20, -3`', () => {
  expect(sum(20, -3)).eq(17);
});

it('The function returns a valid result for arguments `0, 0`', () => {
  expect(sum(0, 0)).eq(0);
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
