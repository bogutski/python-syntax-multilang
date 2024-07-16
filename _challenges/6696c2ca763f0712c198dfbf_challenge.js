// NAMEEN:
// NAMERU:Умножение двух чисел с параметрами по умолчанию

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Создайте функцию `multi`, которая принимает 2 параметра `a`, `b` и возвращает результат умножения.

Задайте параметрам значение по умолчанию `1`.
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
function multi(a, b){

}
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function multi(n1 = 1, n2 = 1) {
  return n1 * n2;
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function multi', () => {
  expect(multi).to.be.a('function');
});

it('Function returns correct result for arguments `-10, 10', () => {
  expect(multi(-10, 10)).eq(-100);
});

it('Function returns correct result for arguments `5, 8`', () => {
  expect(multi(5, 8)).eq(40);
});

it('Function returns correct result for arguments `-2, -35`', () => {
  expect(multi(-2, -35)).eq(70);
});

it('The function returns the correct result for arguments `20, -3`', () => {
  expect(multi(20, -3)).eq(-60);
});

it('The function returns a valid result for arguments `0, 0`', () => {
  expect(multi(0, 0)).eq(0);
});

it('The function returns the correct result for single argument `-9`', () => {
  expect(multi(-9)).eq(-9);
});

it('The function returns the correct result for single argument `3`', () => {
  expect(multi(3)).eq(3);
});

it('The function returns the correct result for single argument `67`', () => {
  expect(multi(67)).eq(67);
});

it('The function returns the correct result without arguments ``', () => {
  expect(multi()).eq(1);
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
