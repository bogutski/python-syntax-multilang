// NAMEEN:
// NAMERU:Вычислить периметр прямоугольника

/*
INSTRUCTIONENSTART
Создайте функцию `perimeter`, параметрами которой будут длины двух сторон прямоугольника.

Функция должна возвращать периметр этого прямоугольника.

Примеры:

* функция perimeter(8, 12) должна вернуть 40;
* функция perimeter(5, 8) должна вернуть 26;
* функция perimeter(31, 55) должна вернуть 172;
INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Создайте функцию `perimeter`, параметрами которой будут длины двух сторон прямоугольника.

Функция должна возвращать периметр этого прямоугольника.

Примеры:

* функция perimeter(8, 12) должна вернуть 40;
* функция perimeter(5, 8) должна вернуть 26;
* функция perimeter(31, 55) должна вернуть 172;
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
fun
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function perimeter(side1, side2) {
  return (side1 + side2) * 2;
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function perimeter', () => {
  expect(perimeter).to.be.a('function');
});

it('Function returns correct result for arguments `8, 12', () => {
  expect(perimeter(8, 12)).eq(40);
});

it('Function returns correct result for arguments `5, 8`', () => {
  expect(perimeter(5, 8)).eq(26);
});

it('Function returns correct result for arguments `31, 55`', () => {
  expect(perimeter(31, 55)).eq(172);
});

it('The function returns the correct result for arguments `20, 13`', () => {
  expect(perimeter(20, 13)).eq(66);
});

it('The function returns a valid result for arguments `0, 0`', () => {
  expect(perimeter(0, 0)).eq(0);
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
