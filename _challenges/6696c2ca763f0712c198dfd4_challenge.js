// NAMEEN:
// NAMERU:Исправьте ошибку в функции hello world

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Требования к функции:
1. Функция должна называться `helloWorld`;
2. Функция должна возвращать строку `'Hello'`;
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
function Hello('World') {
  return 'helloWorld';
}
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function helloWorld() {
  return 'Hello';
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function helloWorld', () => {
  expect(helloWorld).to.be.a('function');
});

it('Function returns Hello', () => {
  expect(helloWorld()).to.equal('Hello');
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
