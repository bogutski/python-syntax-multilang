// NAMEEN:
// NAMERU:Ответ на главный вопрос жизни, вселенной и всего такого

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напиши функцию `answerAboutUniverse`, которая возвращает ответ на главный вопрос жизни, вселенной и всего такого.

Функция должна возвращать строку `42`.
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
fun here
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function answerAboutUniverse() {
  return '42'
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function answerAboutUniverse', () => {
  expect(answerAboutUniverse).to.be.a('function');
});

it('Function returns correct result', () => {
  expect(answerAboutUniverse()).eq('42');
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
