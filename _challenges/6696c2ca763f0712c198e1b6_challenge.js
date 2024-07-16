// NAMEEN:
// NAMERU:Программа работы кондиционера

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `conditioner`, которая принимает температуру воздуха в фаренгейтах и возвращает состояние кондиционера.

Если температура воздуха меньше 60, то возвращаем `cold`, если от 60 до 80, то `normal`, если от 80 до 90, то `warm`, если от 90, то `hot`.
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
fun
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function conditioner(temp) {
  if (temp < 60) {
    return 'cold';
  } else if (temp < 80) {
    return 'normal';
  } else if (temp < 90) {
    return 'warm';
  } else {
    return 'hot';
  }
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function conditioner', () => {
  expect(conditioner).to.be.a('function');
});

it('conditioner(59) returns cold', () => {
  expect(conditioner(59)).to.equal('cold');
});

it('conditioner(60) returns normal', () => {
  expect(conditioner(60)).to.equal('normal');
});

it('conditioner(79) returns normal', () => {
  expect(conditioner(79)).to.equal('normal');
});

it('conditioner(80) returns warm', () => {
  expect(conditioner(80)).to.equal('warm');
});

it('conditioner(89) returns warm', () => {
  expect(conditioner(89)).to.equal('warm');
});

it('conditioner(90) returns hot', () => {
  expect(conditioner(90)).to.equal('hot');
});

it('conditioner(100) returns hot', () => {
  expect(conditioner(100)).to.equal('hot');
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
