// NAMEEN:
// NAMERU:Рассчитать по формуле. Степень

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напиши функцию `formula`, которая принимает три параметра `n`, `m`, `p`

Возвращает результат вычисления по формуле `m - (n + p) ** 2`.

` ** ` - оператор возведения в степень.
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
fun
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function formula(n, m, p) {
  return m - (n + p) ** 2;
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function formula', () => {
  expect(formula).to.be.a('function');
});

it('formula(1, 2, 3) should return -16', () => {
  expect(formula(1, 2, 3)).to.equal(-14);
});

it('formula(2, 3, 4) should return -27', () => {
  expect(formula(2, 3, 4)).to.equal(-33);
});

it('formula(3, 4, 5) should return -40', () => {
  expect(formula(3, 4, 5)).to.equal(-60);
});

it('formula(4, 5, 6) should return -55', () => {
  expect(formula(4, 5, 6)).to.equal(-95);
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
