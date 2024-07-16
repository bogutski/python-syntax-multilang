// NAMEEN:
// NAMERU:Противоположное булево значение в форматированной строке

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `oppositeBooleanAnswer`, которая принимает одно значение и возвращает строку вида
`'The value 0 converted to opposite boolean is true'`, где
`0` - это значение, которое было передано в функцию, а
`true` - это результат преобразования этого значения в `boolean` и его инверсию.
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
fun
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function oppositeBooleanAnswer(value) {
  return 'The value ' + value + ' converted to opposite boolean is ' + !Boolean(value);
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function oppositeBooleanAnswer', () => {
  expect(oppositeBooleanAnswer).to.be.a('function');
});

it('oppositeBooleanAnswer(1) should return "The value 1 converted to opposite boolean is false"', () => {
  expect(oppositeBooleanAnswer(1)).to.equal('The value 1 converted to opposite boolean is false');
});

it('oppositeBooleanAnswer(0) should return "The value 0 converted to opposite boolean is true"', () => {
  expect(oppositeBooleanAnswer(0)).to.equal('The value 0 converted to opposite boolean is true');
});

it('oppositeBooleanAnswer(-1) should return "The value -1 converted to opposite boolean is false"', () => {
  expect(oppositeBooleanAnswer(-1)).to.equal('The value -1 converted to opposite boolean is false');
});

it('oppositeBooleanAnswer(2) should return "The value 2 converted to opposite boolean is false"', () => {
  expect(oppositeBooleanAnswer(2)).to.equal('The value 2 converted to opposite boolean is false');
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
