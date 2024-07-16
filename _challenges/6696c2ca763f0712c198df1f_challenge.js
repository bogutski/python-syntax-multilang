// NAMEEN:
// NAMERU:Функция `hello` выводит в консоль `Hello, world!`

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `hello`, которая выводит в консоль строку `Hello, world!`.

* Используйте одинарные кавычки.
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
fun
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function hello() {
  console.log('Hello, world!');
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function hello', () => {
  expect(hello).to.be.a('function');
});

it('Functions contains console.log(\'Hello, world!\')', () => {
  expect(hello.toString()).to.contain("console.log('Hello, world!')");
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
