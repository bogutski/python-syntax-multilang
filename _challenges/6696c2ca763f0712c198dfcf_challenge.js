// NAMEEN:
// NAMERU:Конвертируйте из градусов Цельсия в градусы Фаренгейта

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Для перевода градусов Цельсия в градусы Фаренгейта нужно умножить на 1.8 и прибавить 32.

Напиши функцию `fromCelsiusToFahrenheit`, которая принимает в качестве параметра градусы Цельсия и возвращает градусы Фаренгейта.
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
fun
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function fromCelsiusToFahrenheit(celsius) {
  return celsius * 1.8 + 32;
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function fromCelsiusToFahrenheit', () => {
  expect(fromCelsiusToFahrenheit).to.be.a('function');
});

it('fromCelsiusToFahrenheit(0) should return 32', () => {
  expect(fromCelsiusToFahrenheit(0)).to.equal(32);
});

it('fromCelsiusToFahrenheit(100) should return 212', () => {
  expect(fromCelsiusToFahrenheit(100)).to.equal(212);
});

it('fromCelsiusToFahrenheit(-40) should return -40', () => {
  expect(fromCelsiusToFahrenheit(-40)).to.equal(-40);
});

it('fromCelsiusToFahrenheit(38) should return 100.4', () => {
  expect(fromCelsiusToFahrenheit(38)).to.equal(100.4);
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
