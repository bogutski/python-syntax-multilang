// NAMEEN:
// NAMERU:Все числа false кроме нуля

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напиши функцию `numberToOppositeBoolean`, которая принимает число и возвращает `false`, если число не равно нулю, и `true` если равно нулю.
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
function sum(num1, num2){

}
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function numberToOppositeBoolean(num) {
  return !num;
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function numberToOppositeBoolean', () => {
  expect(numberToOppositeBoolean).to.be.a('function');
});

it('numberToOppositeBoolean(1) should return false', () => {
  expect(numberToOppositeBoolean(1)).to.equal(false);
});

it('numberToOppositeBoolean(0) should return true', () => {
  expect(numberToOppositeBoolean(0)).to.equal(true);
});

it('numberToOppositeBoolean(-1) should return false', () => {
  expect(numberToOppositeBoolean(-1)).to.equal(false);
});

it('numberToOppositeBoolean(2) should return false', () => {
  expect(numberToOppositeBoolean(2)).to.equal(false);
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
