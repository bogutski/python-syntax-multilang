// NAMEEN:
// NAMERU:Проверка что строка пустая

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `isEmptyString`, которая при вызове принимает строку и возвращает `true`, если строка пустая, и `false` если не пустая.
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
fun
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function isEmptyString(str) {
  return !str;
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function isEmptyString', () => {
  expect(isEmptyString).to.be.a('function');
});

it('isEmptyString("") should return true', () => {
  expect(isEmptyString('')).to.equal(true);
});

it('isEmptyString(" ") should return false', () => {
  expect(isEmptyString(' ')).to.equal(false);
});

it('isEmptyString("a") should return false', () => {
  expect(isEmptyString('a')).to.equal(false);
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
