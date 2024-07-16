// NAMEEN:
// NAMERU:Округлите площадь круга в меньшую сторону

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напиши функцию `roundArea`, которая принимает один параметр – диаметр круга, число.

Функция должна возвращать площадь круга, округленную в меньшую сторону.

В вычислениях необходимо использовать константу `Math.PI`.

Если округленное значение равно 0, то функция должна возвращать 1.
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
fun
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function roundArea(diameter) {
  const res = Math.floor(Math.PI * (diameter / 2) ** 2);
  return res === 0 ? 1 : res;
}
// SOLUTIONEND

// OPENTESTSSTART
it('Created function roundArea', () => {
  expect(roundArea).to.be.a('function');
});

it('roundArea(1) should return 1', () => {
  expect(roundArea(1)).to.equal(1);
});

it('roundArea(1.5) should return 1', () => {
  expect(roundArea(1.5)).to.equal(1);
});

it('roundArea(1.6) should return 2', () => {
  expect(roundArea(1.6)).to.equal(2);
});

it('roundArea(2) should return 3', () => {
  expect(roundArea(2)).to.equal(3);
});

it('roundArea(3) should return 7', () => {
  expect(roundArea(3)).to.equal(7);
});

it('roundArea(4) should return 12', () => {
  expect(roundArea(4)).to.equal(12);
});

// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
