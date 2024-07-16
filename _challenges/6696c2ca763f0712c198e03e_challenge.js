// NAMEEN:
// NAMERU:Функция считает половину четвертной степени числа

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
На вход функция принимает одно число.

Напиши функцию `halfCube`, которая возводит число в четвертую степень и возвращает половину.
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
fun
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function halfCube(num) {
  return num ** 4 / 2;
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function halfCube', () => {
  expect(halfCube).to.be.a('function');
});

it('halfCube(2) should return 8', () => {
  expect(halfCube(2)).to.equal(8);
});

it('halfCube(3) should return 40.5', () => {
  expect(halfCube(3)).to.equal(40.5);
});

it('halfCube(4) should return 64', () => {
  expect(halfCube(4)).to.equal(128);
});

it('halfCube(5) should return 312.5', () => {
  expect(halfCube(5)).to.equal(312.5);
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
