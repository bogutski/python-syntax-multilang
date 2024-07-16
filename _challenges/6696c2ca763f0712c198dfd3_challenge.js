// NAMEEN:
// NAMERU:Функция возвращает 'Hello World!'

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напиши функцию `hello`, которая возвращает строку `'Hello World!'`.
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
fun fun
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function hello() {
  return 'Hello World!';
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function hello', () => {
  expect(hello).to.be.a('function');
});

it('Function returns Hello World!', () => {
  expect(hello()).to.equal('Hello World!');
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
