// NAMEEN:
// NAMERU:Среднее арифметическое из двух чисел

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `average`, которая принимает 2 аргумента `num1` и `num2` и возвращает их среднее арифметическое.

Чтобы найти среднее арифметическое, сложите два числа и разделите их на 2.

Задайте параметрам `num1` и `num2` значение по умолчанию `0`.

Примеры:
  * функция `average(2, 2)` должна вернуть `2`;
  * функция `average(4, 2)` должна вернуть `3`;
  * функция `average(-2, 2)` должна вернуть `0`.
  * функция `average(10)` должна вернуть `5`.
  * функция `average()` должна вернуть `0`.
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
function
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function average(num1 = 0, num2 = 0) {
  return (num1 + num2) / 2;
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function average', () => {
  expect(average).to.be.a('function');
});

it('Function returns correct result for arguments `5, 5`', () => {
  expect(average(5, 5)).to.equal(5);
});

it('Function returns correct result for arguments `10, 5`', () => {
  expect(average(10, 5)).to.equal(7.5);
});

it('Function returns correct result for arguments `0, 0`', () => {
  expect(average(0, 0)).to.equal(0);
});

it('Function returns correct result for arguments `0, 10`', () => {
  expect(average(0, 10)).to.equal(5);
});

it('Function returns correct result for arguments `-22, 2`', () => {
  expect(average(-22, 2)).to.equal(-10);
});

it('Function returns correct result for arguments `-22, -2`', () => {
  expect(average(-22, -2)).to.equal(-12);
});

it('Function returns correct result for argument `10`', () => {
  expect(average(10)).to.equal(5);
});

it('Function returns correct result for argument `0`', () => {
  expect(average(0)).to.equal(0);
});

it('Function returns correct result without arguments', () => {
  expect(average()).to.equal(0);
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
