// NAMEEN:
// NAMERU:Округление суммы покупки в большую сторону.

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию с именем `roundTotal`, которая принимает один параметр – число.

Это число представляет собой сумму покупки.

Параметр назовите по своему усмотрению.

Пусть функция возвращает округленное в большую сторону число.
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
fun
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function roundTotal(num1) {
  return Math.ceil(num1);
}
// SOLUTIONEND

// OPENTESTSSTART
it('Created function roundTotal', () => {
  expect(roundTotal).to.be.a('function');
});

it('roundTotal(1.1) should return 2', () => {
  expect(roundTotal(1.1)).to.equal(2);
});

it('roundTotal(1.5) should return 2', () => {
  expect(roundTotal(1.5)).to.equal(2);
});

it('roundTotal(1.9) should return 2', () => {
  expect(roundTotal(1.9)).to.equal(2);
});

it('roundTotal(2.1) should return 3', () => {
  expect(roundTotal(2.1)).to.equal(3);
});

it('roundTotal(2.5) should return 3', () => {
  expect(roundTotal(2.5)).to.equal(3);
});

it('roundTotal(2.9) should return 3', () => {
  expect(roundTotal(2.9)).to.equal(3);
});

it('roundTotal(30.1) should return 31', () => {
  expect(roundTotal(30.1)).to.equal(31);
});

it('roundTotal(30.5) should return 31', () => {
  expect(roundTotal(30.5)).to.equal(31);
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
