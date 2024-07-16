// NAMEEN:
// NAMERU:Сумма двух чисел и остаток от деления на 3

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
На вход функция принимает два числа.

Напиши функцию `remainder`, которая возвращает остаток от деления суммы двух чисел на 3.
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
fun
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function remainder(num1, num2) {
  return (num1 + num2) % 3;
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function remainder', () => {
  expect(remainder).to.be.a('function');
});

it('remainder(1, 2) should return 0', () => {
  expect(remainder(1, 2)).to.equal(0);
} );

it('remainder(3, 4) should return 1', () => {
  expect(remainder(3, 4)).to.equal(1);
} );

it('remainder(5, 6) should return 2', () => {
  expect(remainder(5, 6)).to.equal(2);
} );
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
