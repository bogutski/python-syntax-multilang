// NAMEEN:
// NAMERU:Среднее арифметическое округленных пяти чисел

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Исправьте функцию, чтобы она возвращала среднее арифметическое округленных пяти чисел.

Каждое число округляется в меньшую сторону.

Результат округляется в большую сторону.

Название функции: `average`.
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
function Average(1, 2, 3, 4, 5)
  return Math.floor(1 + 2 + 3 + 4 + 5);
}
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function average(n1, n2, n3, n4, n5) {
  const sum =
    Math.floor(n1) + Math.floor(n2) + Math.floor(n3) + Math.floor(n4) + Math.floor(n5);
  return Math.ceil(sum / 5);
}
// SOLUTIONEND

// OPENTESTSSTART
it('Created function average', () => {
  expect(average).to.be.a('function');
});

it('average(1, 2, 3, 4, 5) should return 3', () => {
  expect(average(1, 2, 3, 4, 5)).to.equal(3);
});

it('average(1.1, 2.2, 3.3, 4.4, 5.5) should return 3', () => {
  expect(average(1.1, 2.2, 3.3, 4.4, 5.5)).to.equal(3);
});

it('average(1.5, 2.5, 3.5, 4.5, 5.5) should return 3', () => {
  expect(average(1.5, 2.5, 3.5, 4.5, 5.5)).to.equal(3);
});

it('average(1.5, 2.5, 3.5, 4.5, 6.5) should return 4', () => {
  expect(average(1.5, 2.5, 3.5, 4.5, 6.5)).to.equal(4);
});

it('average(4.5, 1.5, -0.5, 47.8, 11.5) should return 13', () => {
  expect(average(4.5, 1.5, -0.5, 47.8, 11.5)).to.equal(13);
});

// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
