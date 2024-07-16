// NAMEEN:
// NAMERU:Функция находит среднее арифметическое пяти чисел

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напиши функцию `averageFromFiveNumbers`, которая принимает пять параметров и возвращает среднее арифметическое этих пяти чисел.
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
fun
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function averageFromFiveNumbers(n1, n2, n3, n4, n5) {
  return (n1 + n2 + n3 + n4 + n5) / 5;
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function averageFromFiveNumbers', () => {
  expect(averageFromFiveNumbers).to.be.a('function');
});

it('averageFromFiveNumbers(4, 5, 3, 2, 1) should return 3', () => {
  expect(averageFromFiveNumbers(4, 5, 3, 2, 1)).to.equal(3);
} );

it('averageFromFiveNumbers(30, 20, 10, 40, 50) should return 30', () => {
  expect(averageFromFiveNumbers(30, 20, 10, 40, 50)).to.equal(30);
});

it('averageFromFiveNumbers(100, 500, 300, 400, 200) should return 300', () => {
  expect(averageFromFiveNumbers(100, 500, 300, 400, 200)).to.equal(300);
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
