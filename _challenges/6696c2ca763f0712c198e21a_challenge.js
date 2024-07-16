// NAMEEN:
// NAMERU:Equal, если строго равны

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `showIsEqual`, которая принимает два аргумента `a` и `b`.

В теле функции определите, если аргументы строго равны.

Если строго равны — верните `Equal`, если нет — верните `Not Equal`.

INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
function showIsEqual(a, b){
  if (...) else
}
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function showIsEqual(a, b) {
  if (a === b) {
    return 'Equal';
  } else {
    return 'Not Equal';
  }
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function showIsEqual', () => {
  expect(showIsEqual).to.be.a('function');
});

it('Function returns correct result for arguments `1, 1', () => {
  expect(showIsEqual(1, 1)).eq('Equal');
});

it('Function returns correct result for arguments `1, 2`', () => {
  expect(showIsEqual(1, 2)).eq('Not Equal');
});

it('Function returns correct result for arguments `1, "1"`', () => {
  expect(showIsEqual(1, '1')).eq('Not Equal');
});

it('The function returns the correct result for arguments `1, true`', () => {
  expect(showIsEqual(1, true)).eq('Not Equal');
});

it('The function returns a valid result for arguments `0, null`', () => {
  expect(showIsEqual(0, null)).eq('Not Equal');
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
