// NAMEEN:
// NAMERU:Среднее арифметическое из трех чисел

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Создайте функцию `average`, которая находит среднее арифметическое из трех чисел  `n1`, `n2` и `n3` которые являются
ее параметрами.
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
fun
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function average(n1, n2, n3) {
  return (n1 + n2 + n3) / 3;
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function average', () => {
  expect(average).to.be.a('function');
});

it('Function returns correct result for arguments `26, 10, 3', () => {
  expect(average(26, 10, 3)).eq(13);
});

it('Function returns correct result for arguments `5, 8, 17`', () => {
  expect(average(5, 8, 17)).eq(10);
});

it('Function returns correct result for arguments `2, 35, 23`', () => {
  expect(average(2, 35, 23)).eq(20);
});

it('The function returns the correct result for arguments `20, 3, 28`', () => {
  expect(average(20, 3, 28)).eq(17);
});

it('The function returns a valid result for arguments `0, 0`', () => {
  expect(average(0, 0, 0)).eq(0);
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
