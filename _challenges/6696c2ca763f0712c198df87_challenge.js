// NAMEEN:
// NAMERU:Остаток от деления двух чисел

/*
INSTRUCTIONENSTART
Создайте функцию `remainder`, которая принимает два числа в качестве параметров и возвращает остаток от деления
первого параметра на второй.

Примеры:

* функция remainder(21, 10) должна вернуть 1;
* функция remainder(5, 8) должна вернуть 5;
* функция remainder(20, 3) должна вернуть 2;
INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Создайте функцию `remainder`, которая принимает два числа в качестве параметров и возвращает остаток от деления
первого параметра на второй.

Примеры:

* функция remainder(21, 10) должна вернуть 1;
* функция remainder(5, 8) должна вернуть 5;
* функция remainder(20, 3) должна вернуть 2;
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
function sum(num1, num2){

}
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function remainder(n1, n2) {
  return n1 % n2;
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function sum', () => {
  expect(remainder).to.be.a('function');
});

it('Function returns correct result for arguments `21, 10', () => {
  expect(remainder(21, 10)).eq(1);
});

it('Function returns correct result for arguments `5, 8`', () => {
  expect(remainder(5, 8)).eq(5);
});

it('Function returns correct result for arguments `-2, -35`', () => {
  expect(remainder(-2, -35)).eq(-2);
});

it('The function returns the correct result for arguments `20, -3`', () => {
  expect(remainder(20, -3)).eq(2);
});

it('The function returns a valid result for arguments `0, 0`', () => {
  expect(remainder(0, 0)).is.NaN;
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
