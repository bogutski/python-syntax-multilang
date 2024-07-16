// NAMEEN:
// NAMERU:Отформатировать ответ про boolean

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `booleanAnswer`, которая принимает одно значение и возвращает строку вида
`'The value 2 converted to boolean is true'`, где `2` - это значение, которое было передано в функцию, а `true` - это результат преобразования этого значения в `boolean`.
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
function sum(num1, num2){

}
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function booleanAnswer(value) {
  return 'The value ' + value + ' converted to boolean is ' + Boolean(value);
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function booleanAnswer', () => {
  expect(booleanAnswer).to.be.a('function');
});

it('booleanAnswer(1) should return "The value 1 converted to boolean is true"', () => {
  expect(booleanAnswer(1)).to.equal('The value 1 converted to boolean is true');
});

it('booleanAnswer(0) should return "The value 0 converted to boolean is false"', () => {
  expect(booleanAnswer(0)).to.equal('The value 0 converted to boolean is false');
});

it('booleanAnswer(-1) should return "The value -1 converted to boolean is true"', () => {
  expect(booleanAnswer(-1)).to.equal('The value -1 converted to boolean is true');
});

it('booleanAnswer(2) should return "The value 2 converted to boolean is true"', () => {
  expect(booleanAnswer(2)).to.equal('The value 2 converted to boolean is true');
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
