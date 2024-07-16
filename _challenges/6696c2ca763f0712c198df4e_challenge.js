// NAMEEN:
// NAMERU:Функция возвращает 3.14

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `pi`, которая возвращает число `3.14`
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
function pie(){
  return 3;
}
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function pi() {
  return 3.14;
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function pi', () => {
  expect(pi).to.be.a('function');
});

it('Function returns 3.14', () => {
  expect(pi()).eq(3.14);
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
