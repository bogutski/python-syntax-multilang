// NAMEEN:
// NAMERU:Рассчитать по формуле. Сумма и умножение

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напиши функцию `formula`, которая принимает три параметра `a`, `b` и `c` и возвращает результат вычисления по формуле `(a + b) * c`.
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
fun
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function formula(a, b, c) {
  return (a + b) * c;
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function formula', () => {
  expect(formula).to.be.a('function');
});

it('formula(1, 2, 3) should return 9', () => {
  expect(formula(1, 2, 3)).to.equal(9);
});

it('formula(2, 3, 4) should return 20', () => {
  expect(formula(2, 3, 4)).to.equal(20);
});

it('formula(3, 4, 5) should return 35', () => {
  expect(formula(3, 4, 5)).to.equal(35);
});

it('formula(4, 5, 6) should return 54', () => {
  expect(formula(4, 5, 6)).to.equal(54);
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
