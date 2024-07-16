// NAMEEN:
// NAMERU:Рассчитать по формуле. Деление и умножение

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напиши функцию `formula`, которая принимает три параметра `param1`, `param2` и `param3` и возвращает результат вычисления по формуле `(param2 * param3) / (param1 + param3) * 2.5`.
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
fun
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function formula(param1, param2, param3) {
  return (param2 * param3) / (param1 + param3) * 2.5;
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function formula', () => {
  expect(formula).to.be.a('function');
});

it('formula(1, 2, 3) should return 3.75', () => {
  expect(formula(1, 2, 3)).to.equal(3.75);
});

it('formula(2, 3, 4) should return 5', () => {
  expect(formula(2, 3, 4)).to.equal(5);
});

it('formula(3, 4, 5) should return 6.25', () => {
  expect(formula(3, 4, 5)).to.equal(6.25);
});

it('formula(4, 5, 6) should return 7.5', () => {
  expect(formula(4, 5, 6)).to.equal(7.5);
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
