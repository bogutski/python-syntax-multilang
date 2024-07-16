// NAMEEN:
// NAMERU:Делится на 3 и на 5

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `isDivisibleByThreeAndFive`, которая принимает число и возвращает `true`, если число делится на `3` и на `5`. В противном случае возвращает `false`.

Эту задачу можно решить с помощью `if`, но для тренировки попробуйте решить ее с помощью `&&`.

Похожий пример:
```javascript
function isDivisibleByTwoAndThree(number) {
  if (number % 2 === 0 && number % 3 === 0) {
    return true;
  }
  return false;
}
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
fun
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function isDivisibleByThreeAndFive(number) {
  if (number % 3 === 0 && number % 5 === 0) {
    return true;
  }
  return false;
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function isDivisibleByThreeAndFive', () => {
  expect(isDivisibleByThreeAndFive).to.be.a('function');
});

it('isDivisibleByThreeAndFive(15) should return true', () => {
  expect(isDivisibleByThreeAndFive(15)).to.be.equal(true);
});

it('isDivisibleByThreeAndFive(12) should return false', () => {
  expect(isDivisibleByThreeAndFive(12)).to.be.equal(false);
});

it('isDivisibleByThreeAndFive(10) should return false', () => {
  expect(isDivisibleByThreeAndFive(10)).to.be.equal(false);
});

it('isDivisibleByThreeAndFive(9) should return false', () => {
  expect(isDivisibleByThreeAndFive(9)).to.be.equal(false);
});

it('isDivisibleByThreeAndFive(6) should return false', () => {
  expect(isDivisibleByThreeAndFive(6)).to.be.equal(false);
});

it('isDivisibleByThreeAndFive(5) should return false', () => {
  expect(isDivisibleByThreeAndFive(5)).to.be.equal(false);
});

it('isDivisibleByThreeAndFive(3) should return false', () => {
  expect(isDivisibleByThreeAndFive(3)).to.be.equal(false);
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
