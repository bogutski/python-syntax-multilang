// NAMEEN:
// NAMERU:Округление среднего значения в большую сторону.

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `roundAverageUp`, которая принимает три числа и возвращает их среднее значение, округленное в большую сторону.

Числа могут быть целыми или дробными.

Примеры запуска функции:
```javascript
roundAverageUp(1, 2, 3) // 2
roundAverageUp(1, 2, 4) // 3
roundAverageUp(1, 2, 5) // 3
roundAverageUp(1, 2, 6) // 3
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
fun
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function roundAverageUp(n1, n2, n3) {
  return Math.ceil((n1 + n2 + n3) / 3);
}
// SOLUTIONEND

// OPENTESTSSTART
it('Created function roundAverageUp', () => {
  expect(roundAverageUp).to.be.a('function');
});

it('roundAverageUp(1, 2, 3) should return 2', () => {
  expect(roundAverageUp(1, 2, 3)).to.equal(2);
});

it('roundAverageUp(1, 2, 4) should return 3', () => {
  expect(roundAverageUp(1, 2, 4)).to.equal(3);
});

it('roundAverageUp(1, 2, 5) should return 3', () => {
  expect(roundAverageUp(1, 2, 5)).to.equal(3);
});

it('roundAverageUp(1, 2, 6) should return 3', () => {
  expect(roundAverageUp(1, 2, 6)).to.equal(3);
});

it('roundAverageUp(1, 2, 7) should return 4', () => {
  expect(roundAverageUp(1, 2, 7)).to.equal(4);
});

it('roundAverageUp(1.3, 2.4, 8.5) should return 5', () => {
  expect(roundAverageUp(1.3, 2.4, 8.5)).to.equal(5);
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
