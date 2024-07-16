// NAMEEN:
// NAMERU:Округление до ближайшего следующего четного числа

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `roundToNearestEven`, которая принимает одно число и возвращает это число, округленное до ближайшего четного числа.

Числа могут быть целыми или дробными.

Посмотрите примеры, чтобы понять, как должна работать функция.
```javascript
roundToNearestEven(0) // 0
roundToNearestEven(0.1) // 2

roundToNearestEven(1) // 2
roundToNearestEven(1.1) // 2

roundToNearestEven(2) // 2
roundToNearestEven(2.1) // 4

roundToNearestEven(3) // 4
roundToNearestEven(3.1) // 4

roundToNearestEven(4) // 4
roundToNearestEven(4.1) // 6

INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
fun
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function roundToNearestEven(n) {
  const rounded = Math.ceil(n);
  return rounded % 2 === 0 ? rounded : rounded + 1;
}
// SOLUTIONEND

// OPENTESTSSTART
it('Created function roundToNearestEven', () => {
  expect(roundToNearestEven).to.be.a('function');
});

it('roundToNearestEven(0) should return 0', () => {
  expect(roundToNearestEven(0)).to.equal(0);
});

it('roundToNearestEven(0.1) should return 2', () => {
  expect(roundToNearestEven(0.1)).to.equal(2);
});

it('roundToNearestEven(1) should return 2', () => {
  expect(roundToNearestEven(1)).to.equal(2);
});

it('roundToNearestEven(1.1) should return 2', () => {
  expect(roundToNearestEven(1.1)).to.equal(2);
});

it('roundToNearestEven(2) should return 2', () => {
  expect(roundToNearestEven(2)).to.equal(2);
});

it('roundToNearestEven(2.1) should return 4', () => {
  expect(roundToNearestEven(2.1)).to.equal(4);
});

it('roundToNearestEven(3) should return 4', () => {
  expect(roundToNearestEven(3)).to.equal(4);
});

it('roundToNearestEven(3.1) should return 4', () => {
  expect(roundToNearestEven(3.1)).to.equal(4);
});

it('roundToNearestEven(4) should return 4', () => {
  expect(roundToNearestEven(4)).to.equal(4);
});

it('roundToNearestEven(4.1) should return 6', () => {
  expect(roundToNearestEven(4.1)).to.equal(6);
});

// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
