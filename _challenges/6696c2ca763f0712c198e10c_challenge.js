// NAMEEN:
// NAMERU:Сумма четырех чисел возведенных в квадрат

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Создайте функцию `powerOfTwo`, которая принимает число и возвращает его возведенное в квадрат.

Создайте функцию `sum`, которая принимает четыре числа и возвращает сумму квадратов этих чисел.

Используйте функцию `powerOfTwo` внутри функции `sum` для возведения каждого числа в квадрат.
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
fun
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function powerOfTwo(num) {
  return num * num;
}

function sum(num1, num2, num3, num4) {
  return powerOfTwo(num1) + powerOfTwo(num2) + powerOfTwo(num3) + powerOfTwo(num4);
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function powerOfTwo', () => {
  expect(powerOfTwo).to.be.a('function');
});

it('Created function sum', () => {
  expect(sum).to.be.a('function');
});

it('powerOfTwo(2) should return 4', () => {
  expect(powerOfTwo(2)).to.be.equal(4);
});

it('powerOfTwo(3) should return 9', () => {
  expect(powerOfTwo(3)).to.be.equal(9);
});

it('powerOfTwo(4) should return 16', () => {
  expect(powerOfTwo(4)).to.be.equal(16);
});

it('sum(2, 3, 4, 5) should return 100', () => {
  expect(sum(2, 3, 4, 5)).to.be.equal(54);
});

it('sum(3, 4, 5, 6) should return 169', () => {
  expect(sum(3, 4, 5, 6)).to.be.equal(86);
});

it('sum(4, 5, 6, 7) should return 256', () => {
  expect(sum(4, 5, 6, 7)).to.be.equal(126);
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
