// NAMEEN:
// NAMERU:Если отрицательное число, то вернуть положительное

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `abs`, которая принимает число и возвращает его абсолютное значение.

Если число отрицательное, то вернуть положительное.

Если число положительное, то вернуть его же.

Вам это поможет:
```javascript
const num = -10;
console.log(-num); // 10
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
fun
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function abs(num) {
  return num < 0 ? -num : num;
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function abs', () => {
  expect(abs).to.be.a('function');
});

it('abs(-10) should return 10', () => {
  expect(abs(-10)).to.equal(10);
});

it('abs(10) should return 10', () => {
  expect(abs(10)).to.equal(10);
});

it('abs(0) should return 0', () => {
  expect(abs(0)).to.equal(0);
});

it('abs(-0) should return 0', () => {
  expect(abs(-0)).to.equal(0);
});

it('abs(1) should return 1', () => {
  expect(abs(1)).to.equal(1);
});

it('abs(-1) should return 1', () => {
  expect(abs(-1)).to.equal(1);
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
