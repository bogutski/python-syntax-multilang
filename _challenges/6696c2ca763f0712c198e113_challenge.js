// NAMEEN:
// NAMERU:Длина окружности или периметр круга

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Окружность — замкнутая плоская кривая у которой все ее точки удалены от данной точки (центра) на одинаковое расстояние и лежат с ней в одной плоскости.

Формула для расчета длины окружности: `2 * PI * r`, где
`PI` - число 3.14,
`r` - радиус окружности.

Напишите функцию `circleLength`, которая принимает один аргумент `r` - радиус окружности и возвращает длину окружности.
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
fun
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function circleLength(r) {
  return 2 * 3.14 * r;
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function circleLength', () => {
  expect(circleLength).to.be.a('function');
});

it('circleLength(1) should return 6.28', () => {
  expect(circleLength(1)).to.equal(6.28);
});

it('circleLength(2) should return 12.56', () => {
  expect(circleLength(2)).to.equal(12.56);
});

it('circleLength(3) should return 18.84', () => {
  expect(circleLength(3)).to.equal(18.84);
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
