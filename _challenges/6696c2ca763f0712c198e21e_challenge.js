// NAMEEN:
// NAMERU:Кодовое приветствие

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Создайте функцию с именем `spyGreeting` и принимающую один параметр `phrase`.

Если параметр `phrase` равен строке 'So beautiful day!', то функция должна возвращать строку 'Hello, Mr. Bond!'.

Во всех остальных случаях функция должна возвращать строку 'Hi there!'.
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
fun
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function spyGreeting(phrase) {
  if (phrase === 'So beautiful day!') {
    return 'Hello, Mr. Bond!';
  } else {
    return 'Hi there!';
  }
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function spyGreeting', () => {
  expect(spyGreeting).to.be.a('function');
});

it('Function returns correct result for argument "So beautiful day!"', () => {
  expect(spyGreeting('So beautiful day!')).eq('Hello, Mr. Bond!');
});

it('Function returns correct result for argument "Hello!"', () => {
  expect(spyGreeting('Hello!')).eq('Hi there!');
});

it('Function returns correct result for argument "Hi!"', () => {
  expect(spyGreeting('Hi!')).eq('Hi there!');
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
