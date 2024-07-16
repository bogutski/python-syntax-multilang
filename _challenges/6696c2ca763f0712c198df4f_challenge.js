// NAMEEN:
// NAMERU:Весёлая собака

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию function dog(), которая возвращает строку 'Bark!'
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
function bark(){
  return 'Dog!';
}
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function dog() {
  return 'Bark!';
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function ', () => {
  expect(dog).to.be.a('function');
});

it('Function returns correct result', () => {
  expect(dog()).eq('Bark!');
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
