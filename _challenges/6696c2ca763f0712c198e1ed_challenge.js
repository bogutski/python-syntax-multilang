// NAMEEN:
// NAMERU:Определяем что это строка

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напиши функцию `isString`, которая принимает строку и возвращает строку:
* `Empty string` если это пустая строка
* `String` если это строка
* `Not a string` если это не строка

Придерживайся последовательности проверок:
* str === '' - пустая строка
* typeof str === 'string' - строка
* else - не строка
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
fun
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function isString(str) {
  if (str === '') return 'Empty string';
  if (typeof str === 'string') return 'String';
  return 'Not a string';
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function isString', () => {
  expect(isString).to.be.a('function');
});

it('isString(\'\') should return \'Empty string\'', () => {
  expect(isString('')).to.equal('Empty string');
});

it('isString(\'Hello\') should return \'String\'', () => {
  expect(isString('Hello')).to.equal('String');
});

it('isString(123) should return \'Not a string\'', () => {
  expect(isString(123)).to.equal('Not a string');
});

it('isString(true) should return \'Not a string\'', () => {
  expect(isString(true)).to.equal('Not a string');
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
