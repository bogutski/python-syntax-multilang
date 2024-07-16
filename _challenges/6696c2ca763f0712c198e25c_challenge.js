// NAMEEN:
// NAMERU:Среди трех чисел есть одно четное

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напиши функцию `isEvenFromThree`, которая принимает три числа `n1`, `n2`, `n3` и возвращает `true`, если среди них есть хотя бы одно четное, и `false` - если нет.

Четное число - это число, которое делится на 2 без остатка.

Примеры запуска:
```javascript
isEvenFromThree(1, 2, 3); // true
isEvenFromThree(1, 3, 5); // false
isEvenFromThree(2, 4, 6); // true
isEvenFromThree(1, 3, 7); // false
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
fun
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function isEvenFromThree(n1, n2, n3) {
  if (n1 % 2 === 0 || n2 % 2 === 0 || n3 % 2 === 0) {
    return true;
  }
  return false;
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function isEvenFromThree', () => {
  expect(isEvenFromThree).to.be.a('function');
});

it('isEvenFromThree(1, 2, 3) should return true', () => {
  expect(isEvenFromThree(1, 2, 3)).to.be.equal(true);
});

it('isEvenFromThree(1, 3, 5) should return false', () => {
  expect(isEvenFromThree(1, 3, 5)).to.be.equal(false);
});

it('isEvenFromThree(2, 4, 6) should return true', () => {
  expect(isEvenFromThree(2, 4, 6)).to.be.equal(true);
});

it('isEvenFromThree(1, 3, 7) should return false', () => {
  expect(isEvenFromThree(1, 3, 7)).to.be.equal(false);
});

it('isEvenFromThree(1, 2, 4) should return true', () => {
  expect(isEvenFromThree(1, 2, 4)).to.be.equal(true);
});

it('isEvenFromThree(1, 2, 3) should return true', () => {
  expect(isEvenFromThree(1, 2, 3)).to.be.equal(true);
});

it('isEvenFromThree(1, 3, 5) should return false', () => {
  expect(isEvenFromThree(1, 3, 5)).to.be.equal(false);
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
