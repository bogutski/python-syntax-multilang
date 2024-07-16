// NAMEEN:
// NAMERU:Все числа true кроме нуля

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напиши функцию `numberToBoolean`, которая принимает число и возвращает `true`, если число не равно нулю, и `false` если равно нулю.
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
function sum(num1, num2){

}
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function numberToBoolean(num) {
  return !!num;
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function numberToBoolean', () => {
  expect(numberToBoolean).to.be.a('function');
});

it('numberToBoolean(1) should return true', () => {
  expect(numberToBoolean(1)).to.equal(true);
});

it('numberToBoolean(0) should return false', () => {
  expect(numberToBoolean(0)).to.equal(false);
});

it('numberToBoolean(-1) should return true', () => {
  expect(numberToBoolean(-1)).to.equal(true);
});

it('numberToBoolean(2) should return true', () => {
  expect(numberToBoolean(2)).to.equal(true);
});

it('numberToBoolean(3) should return true', () => {
  expect(numberToBoolean(3)).to.equal(true);
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
