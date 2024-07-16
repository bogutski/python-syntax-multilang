// NAMEEN:
// NAMERU:Создаем первые переменные

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Создайте первую переменную `name` с помощью ключевого слова const и присвойте ей значение 'PASV'.

Создайте вторую переменную `age` с помощью ключевого слова const и присвойте ей значение 11.
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
// YOUR CODE HERE
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
const name = 'PASV';
const age = 11;
// SOLUTIONEND


// OPENTESTSSTART
it('Created variable name', () => {
  expect(name).to.be.a('string');
} );

it('Created variable age', () => {
  expect(age).to.be.a('number');
} );

it('Variable name has value PASV', () => {
  expect(name).to.be.equal('PASV');
} );

it('Variable age has value 11', () => {
  expect(age).to.be.equal(11);
} );
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
