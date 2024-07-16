// NAMEEN:
// NAMERU:Найти сумму четырех чисел

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `sumFour`, которая принимает 4 параметра `num1`, `num2`, `num3` и `num4` и возвращает их сумму.

Все аргументы будут числами.
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
fun
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function sumFour(num1, num2, num3, num4) {
  return num1 + num2 + num3 + num4;
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function sumFour', () => {
  expect(sumFour).to.be.a('function');
});

it('Function returns correct result for arguments `1, 2, 3, 4`', () => {
  expect(sumFour(1, 2, 3, 4)).to.equal(10);
});

it('Function returns correct result for arguments `0, 0, 0, 0`', () => {
  expect(sumFour(0, 0, 0, 0)).to.equal(0);
});

it('Function returns correct result for arguments `1, 2, 3, -4`', () => {
  expect(sumFour(1, 2, 3, -4)).to.equal(2);
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
