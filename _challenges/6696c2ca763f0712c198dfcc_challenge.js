// NAMEEN:
// NAMERU:Вычислить половину площади прямоугольника

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Нам нужно вычислить половину площади прямоугольной комнаты.

Напишите функцию `halfArea`, которая принимает 2 параметра `width` и `height` и возвращает половину площади прямоугольника.
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
function ()

}
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function halfArea(num1, num2) {
  return (num1 * num2) / 2;
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function halfArea', () => {
  expect(halfArea).to.be.a('function');
});

it('Function returns correct result for arguments `5, 5`', () => {
  expect(halfArea(5, 5)).to.equal(12.5);
});

it('Function returns correct result for arguments `10, 5`', () => {
  expect(halfArea(10, 5)).to.equal(25);
});

it('Function returns correct result for arguments `0, 0`', () => {
  expect(halfArea(0, 0)).to.equal(0);
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
