// NAMEEN:
// NAMERU:Особое приветствие для 100+ летнего человека

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `greeting`, которая принимает два параметра: `age` и `name`.

Если `age` больше или равно 100, то вернуть строку `'Wow! Our special guest Sam!'`.

Если `age` меньше 100, то вернуть строку `'Hello, Sam!'`.

Вместо `Sam` должно быть имя, которое передано вторым параметром.
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
fun 100
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function greeting(age, name) {
  if (age >= 100) {
    return 'Wow! Our special guest ' + name + '!';
  }
  return 'Hello, ' + name + '!';
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function greeting', () => {
  expect(greeting).to.be.a('function');
});

it('greeting(21, "Jonny") should return "Hello, Jonny!"', () => {
  expect(greeting(21, 'Jonny')).to.equal('Hello, Jonny!');
});

it('greeting(101, "Peter") should return "Wow! Our special guest Peter!"', () => {
  expect(greeting(101, 'Peter')).to.equal('Wow! Our special guest Peter!');
});

it('greeting(99, "Peter") should return "Hello, Peter!"', () => {
  expect(greeting(99, 'Peter')).to.equal('Hello, Peter!');
});

it('greeting(100, "Abby") should return "Wow! Our special guest Abby!"', () => {
  expect(greeting(100, 'Abby')).to.equal('Wow! Our special guest Abby!');
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
