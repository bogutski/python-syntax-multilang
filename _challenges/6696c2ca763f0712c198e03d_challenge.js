// NAMEEN:
// NAMERU:Четное – ноль, нечетное – десять

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напиши функцию `oddEvenTen`, которая принимает один параметр `num` и возвращает `0` если число четное, и `10` если число нечетное.

Вам нужно использовать оператор `%` (остаток от деления)

Нельзя использовать условный оператор `if` или тернарный оператор `? :`, а также нельзя использовать `switch`.

Подсказка: Используйте оператор `%` (остаток от деления) и оператор `*` (умножение).

При умножении любого числа на `0` результат будет `0`, а при умножении любого числа на `1` результат будет равен самому числу.
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
funk odd
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function oddEvenTen(num){
  return num % 2 * 10;
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function oddEvenTen', () => {
  expect(oddEvenTen).to.be.a('function');
});

it('oddEvenTen(2) should return 0', () => {
  expect(oddEvenTen(2)).to.equal(0);
} );

it('oddEvenTen(3) should return 10', () => {
  expect(oddEvenTen(3)).to.equal(10);
});

it('oddEvenTen(4) should return 0', () => {
  expect(oddEvenTen(4)).to.equal(0);
});

it('Function oddEvenTen has one parameter num', () => {
  // function to string and then to array of arguments
  const args = oddEvenTen.toString().match(/\(([^)]*)\)/)[1].split(',').map(arg => arg.trim());
  expect(args).to.be.eql(['num']);
});

// function body should not contain if statement
it('Function oddEvenTen should not contain if statement', () => {
  expect(oddEvenTen.toString().includes('if')).to.be.false;
});

// function body should not contain ternary operator
it('Function oddEvenTen should not contain ternary operator', () => {
  expect(oddEvenTen.toString().includes('?')).to.be.false;
  expect(oddEvenTen.toString().includes(':')).to.be.false;
});

// function body should not contain ternary operator
it('Function oddEvenTen should not contain switch', () => {
  expect(oddEvenTen.toString().includes('switch')).to.be.false;
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
