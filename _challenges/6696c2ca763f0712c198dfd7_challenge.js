// NAMEEN:
// NAMERU:Исправьте ошибки в трех функциях

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Что-то пошло не так. Найдите и исправьте ошибки в трех функциях.

Требования к функции 1:
1. Функция должна называться `piNumber`;
2. Функция должна возвращать число `3.14159265359`;

Требования к функции 2:
1. Функция должна называться `piString`;
2. Функция должна возвращать строку `'3.14159265359'`;

Требования к функции 3:
1. Функция должна называться `piDefinition`;
2. Функция должна возвращать строку `'The ratio of the circumference of any circle to the diameter of that circle'`;
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
fun pin() {
  return 3.1415;
}

function stringPi() {
  '3.l4l59';
}

function pi Deffiniton() {
  return 'The radio of the cucumber of any circus to the diamond of that citrus';
}
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function piNumber() {
  return 3.14159265359;
}

function piString() {
  return '3.14159265359';
}

function piDefinition() {
  return 'The ratio of the circumference of any circle to the diameter of that circle';
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function piNumber', () => {
  expect(piNumber).to.be.a('function');
});

it('Created function piString', () => {
  expect(piString).to.be.a('function');

});

it('Created function piDefinition', () => {
  expect(piDefinition).to.be.a('function');
});

it('Function piNumber returns number 3.14159265359', () => {
  expect(piNumber()).to.equal(3.14159265359);
});

it('Function piString returns string 3.14159265359', () => {
  expect(piString()).to.equal('3.14159265359');
});

it('Function piDefinition returns correct string', () => {
  expect(piDefinition()).to.equal('The ratio of the circumference of any circle to the diameter of that circle');
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
