// NAMEEN:
// NAMERU:Определить время года по номеру месяца

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию 'getSeason', которая принимает номер месяца (от 1 до 12) и возвращает название времени года.

* 1-2 - `Winter`
* 3-5 - `Spring`
* 6-8 - `Summer`
* 9-11 - `Autumn`
* 12 - `Winter`


Например, если передать функции 2, то она должна вернуть "Winter". Если передать 5, то должно вернуться "Spring".

Если передать функции число, которое не является номером месяца, то она должна вернуть строку `No such month`.
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
fun
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function getSeason(month) {
  if (month === 12 || month === 1 || month === 2) {
    return 'Winter';
  } else if (month === 3 || month === 4 || month === 5) {
    return 'Spring';
  } else if (month === 6 || month === 7 || month === 8) {
    return 'Summer';
  } else if (month === 9 || month === 10 || month === 11) {
    return 'Autumn';
  }

  return 'No such month';
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function getSeason', () => {
  expect(getSeason).to.be.a('function');
});

it('getSeason(1) should return "Winter"', () => {
  expect(getSeason(1)).to.be.equal('Winter');
});

it('getSeason(2) should return "Winter"', () => {
  expect(getSeason(2)).to.be.equal('Winter');
});

it('getSeason(3) should return "Spring"', () => {
  expect(getSeason(3)).to.be.equal('Spring');
});

it('getSeason(4) should return "Spring"', () => {
  expect(getSeason(4)).to.be.equal('Spring');
});

it('getSeason(5) should return "Spring"', () => {
  expect(getSeason(5)).to.be.equal('Spring');
});

it('getSeason(6) should return "Summer"', () => {
  expect(getSeason(6)).to.be.equal('Summer');
});

it('getSeason(7) should return "Summer"', () => {
  expect(getSeason(7)).to.be.equal('Summer');
});

it('getSeason(8) should return "Summer"', () => {
  expect(getSeason(8)).to.be.equal('Summer');
});

it('getSeason(9) should return "Autumn"', () => {
  expect(getSeason(9)).to.be.equal('Autumn');
});

it('getSeason(10) should return "Autumn"', () => {
  expect(getSeason(10)).to.be.equal('Autumn');
});

it('getSeason(11) should return "Autumn"', () => {
  expect(getSeason(11)).to.be.equal('Autumn');
});

it('getSeason(12) should return "Winter"', () => {
  expect(getSeason(12)).to.be.equal('Winter');
});

it('getSeason(13) should return No such month', () => {
  expect(getSeason(13)).to.be.equal('No such month');
});

it('getSeason(0) should return No such month', () => {
  expect(getSeason(0)).to.be.equal('No such month');
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
