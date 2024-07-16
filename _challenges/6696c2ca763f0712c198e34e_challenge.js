// NAMEEN:
// NAMERU:Обратное округление

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `swapRound`, которая принимает число и возвращает его округленное значение.

Правила округления:
* Если дробная часть числа больше или равна 0.5, то округляем вниз.
* Если дробная часть числа меньше 0.5, то округляем вверх.

INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
fun
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function swapRound(number) {
  const fraction = number - Math.floor(number);
  if (fraction >= 0.5) return Math.floor(number);
  return Math.ceil(number);
}
// SOLUTIONEND

// OPENTESTSSTART
it('Created function swapRound', () => {
  expect(swapRound).to.be.a('function');
});

it('swapRound(1.5) should return 1', () => {
  expect(swapRound(1.5)).to.be.equal(1);
});

it('swapRound(1.4) should return 2', () => {
  expect(swapRound(1.4)).to.be.equal(2);
});

it('swapRound(1.6) should return 1', () => {
  expect(swapRound(1.6)).to.be.equal(1);
});

it('swapRound(104.345) should return 105', () => {
  expect(swapRound(104.345)).to.be.equal(105);
});

it('swapRound(104.745) should return 104', () => {
  expect(swapRound(104.745)).to.be.equal(104);
});

// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
