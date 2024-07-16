// NAMEEN:
// NAMERU:Исправьте ошибку в функции

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Найдите ошибку в функции `message` и исправьте её.

Функция должна возвращать строку `'I love JS'`.
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
function message() {
  return
  'I love JS'
}
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function message() {
  return 'I love JS'
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function message', () => {
  expect(message).to.be.a('function');
});

it('Function returns correct result', () => {
  expect(message()).eq('I love JS');
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
