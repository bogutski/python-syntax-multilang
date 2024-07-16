// NAMEEN:
// NAMERU:Fizz, Buzz, FizzBuzz

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Это классическая задача на программирование, которая называется FizzBuzz.

Напишите функцию `fizzBuzz`, которая принимает число и возвращает строку.

Если число делится на 3, то вернуть строку `Fizz`.

Если число делится на 5, то вернуть строку `Buzz`.

Если число делится на 3 и на 5, то вернуть строку `FizzBuzz`. Подсказка – то есть, если число делится на 15.

Если число не делится ни на 3, ни на 5, ни на 15, то вернуть само число.
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
fun
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function fizzBuzz(num) {
  if (num % 15 === 0) {
    return 'FizzBuzz';
  }

  if (num % 3 === 0) {
    return 'Fizz';
  }

  if (num % 5 === 0) {
    return 'Buzz';
  }

  return num;
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function fizzBuzz', () => {
  expect(fizzBuzz).to.be.a('function');
});

it('fizzBuzz(3) should return Fizz', () => {
  expect(fizzBuzz(3)).to.equal('Fizz');
} );

it('fizzBuzz(5) should return Buzz', () => {
  expect(fizzBuzz(5)).to.equal('Buzz');
} );

it('fizzBuzz(15) should return FizzBuzz', () => {
  expect(fizzBuzz(15)).to.equal('FizzBuzz');
} );

it('fizzBuzz(1) should return 1', () => {
  expect(fizzBuzz(1)).to.equal(1);
} );

it('fizzBuzz(2) should return 2', () => {
  expect(fizzBuzz(2)).to.equal(2);
} );

it('fizzBuzz(4) should return 4', () => {
  expect(fizzBuzz(4)).to.equal(4);
} );

it('fizzBuzz(30) should return FizzBuzz', () => {
  expect(fizzBuzz(30)).to.equal('FizzBuzz');
} );

it('fizzBuzz(35) should return Buzz', () => {
  expect(fizzBuzz(35)).to.equal('Buzz');
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
