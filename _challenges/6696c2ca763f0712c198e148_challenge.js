// NAMEEN:
// NAMERU:Функция преобразует любое значение в boolean

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `toBoolean`, которая принимает одно значение и преобразует его в `boolean`, используя `Boolean(value)`.
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
fun
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function toBoolean(value) {
  return Boolean(value);
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function toBoolean', () => {
  expect(toBoolean).to.be.a('function');
} );

it('toBoolean(0) should return false', () => {
  expect(toBoolean(0)).to.equal(false);
} );

it('toBoolean(1) should return true', () => {
  expect(toBoolean(1)).to.equal(true);
} );

it('toBoolean(NaN) should return false', () => {
  expect(toBoolean(NaN)).to.equal(false);
});

it('toBoolean(\'a\') should return true', () => {
  expect(toBoolean('a')).to.equal(true);
} );

it('function should contain Boolean', function () {
  expect(toBoolean.toString().indexOf('Boolean')).to.not.equal(-1);
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
