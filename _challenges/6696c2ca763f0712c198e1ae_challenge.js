// NAMEEN:
// NAMERU:Охранник в ночном клубе

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напиши функцию `clubGuard`, которая принимает возраст посетителя клуба.

* Если посетителю  21 год и старше, то возвращаем строку `Welcome to the club!`
* Иначе возвращаем строку `You are not allowed to enter the club!`
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
fun
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function clubGuard(age) {
  return age >= 21 ? 'Welcome to the club!' : 'You are not allowed to enter the club!';
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function clubGuard', () => {
  expect(clubGuard).to.be.a('function');
});

it('clubGuard(22) returns "Welcome to the club!"', () => {
  expect(clubGuard(22)).to.equal('Welcome to the club!');
});

it('clubGuard(21) returns "Welcome to the club!"', () => {
  expect(clubGuard(21)).to.equal('Welcome to the club!');
});

it('clubGuard(20) returns "You are not allowed to enter the club!"', () => {
  expect(clubGuard(20)).to.equal('You are not allowed to enter the club!');
});

it('clubGuard(0) returns "You are not allowed to enter the club!"', () => {
  expect(clubGuard(0)).to.equal('You are not allowed to enter the club!');
});

it('clubGuard(-1) returns "You are not allowed to enter the club!"', () => {
  expect(clubGuard(-1)).to.equal('You are not allowed to enter the club!');
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
