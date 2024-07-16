// NAMEEN:
// NAMERU:Определение типа аргумента функции с параметром по умолчанию

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `defineTypeArg`, которая принимает 1 параметр `arg` и возвращает его тип.
Если аргумент не передан, то функция должна вернуть строку `'string'`.

Примеры:
  * функция `defineTypeArg(1)` должна вернуть `'number'`;
  * функция `defineTypeArg('1')` должна вернуть `'string'`;
  * функция `defineTypeArg()` должна вернуть `'string'`;
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
fun
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function defineTypeArg(arg = '') {
  return typeof arg;
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function defineTypeArg', () => {
  expect(defineTypeArg).to.be.a('function');
});

it('Function returns correct result for argument 1', () => {
  expect(defineTypeArg(1)).to.equal('number');
});

it('Function returns correct result for argument `one`', () => {
  expect(defineTypeArg('one')).to.equal('string');
});

it('Function returns correct result without argument', () => {
  expect(defineTypeArg()).to.equal('string');
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
