// NAMEEN:
// NAMERU:Функция определяет тип аргумента

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `defineType`, которая принимает 1 параметр и возвращает строку, в которой будет указан тип аргумента.


Примеры:
  * функция `defineType(1)` должна вернуть `'number'`;
  * функция `defineType('1')` должна вернуть `'string'`;

Используйте оператор `typeof` для определения типа аргумента.
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
fun
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function defineType(arg) {
  return typeof arg;
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function defineType', () => {
  expect(defineType).to.be.a('function');
});

it('Function returns correct result for argument `1`', () => {
  expect(defineType(1)).to.equal('number');
});

it('Function returns correct result for argument `\'1\'`', () => {
  expect(defineType('1')).to.equal('string');
});

it('Function returns correct result for argument `true`', () => {
  expect(defineType(true)).to.equal('boolean');
});

it('Function returns correct result for argument `null`', () => {
  expect(defineType(null)).to.equal('object');
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
