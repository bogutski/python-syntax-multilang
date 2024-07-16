// NAMEEN:
// NAMERU:Две функции возвращают строки. Tasks

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите две функции.

Требования к функции 1:
1. Функция должна называться `task1`;
2. Функция должна возвращать строку `'Learn JS'`;

Требования к функции 2:
1. Функция должна называться `task2`;
2. Функция должна возвращать строку `'Learn HTML'`;
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
fun
fun
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function task1() {
  return 'Learn JS';
}

function task2() {
  return 'Learn HTML';
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function task1', () => {
  expect(task1).to.be.a('function');
});

it('Created function task2', () => {
  expect(task2).to.be.a('function');
});

it('Function task1 returns Learn JS', () => {
  expect(task1()).to.equal('Learn JS');
});

it('Function task2 returns Learn HTML', () => {
  expect(task2()).to.equal('Learn HTML');
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
