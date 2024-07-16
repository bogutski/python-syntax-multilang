// NAMEEN:
// NAMERU:Функция возвращает число золотого сечения

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `goldenRatio`, которая возвращает число золотого сечения `1.618033988749895`.
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
fun here
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function goldenRatio() {
  return 1.618033988749895;
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function goldenRatio', () => {
  expect(goldenRatio).to.be.a('function');
});

it('Function returns correct result', () => {
  expect(goldenRatio()).eq(1.618033988749895);
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
