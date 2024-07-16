// NAMEEN:
// NAMERU:Округлите квадратный корень

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `roundSqrt`, которая принимает одно число и возвращает его квадратный корень, округленный до ближайшего целого.

Используйте для округления `Math.round`.

Для вычисления квадратного корня возводите число в степень 1/2. Пример: `10 ** 0.5`.

Примеры запуска функции:
```javascript
roundSqrt(1) // 1
roundSqrt(2) // 1
roundSqrt(3) // 2
roundSqrt(4) // 2
roundSqrt(5) // 2
roundSqrt(6) // 2
roundSqrt(7) // 3
roundSqrt(8) // 3
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
fun
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function roundSqrt(num) {
  return Math.round(num ** 0.5);
}
// SOLUTIONEND

// OPENTESTSSTART
it('Created function roundSqrt', () => {
  expect(roundSqrt).to.be.a('function');
});

it('roundSqrt(1) should return 1', () => {
  expect(roundSqrt(1)).to.equal(1);
});

it('roundSqrt(2) should return 1', () => {
  expect(roundSqrt(2)).to.equal(1);
});

it('roundSqrt(3) should return 2', () => {
  expect(roundSqrt(3)).to.equal(2);
});

it('roundSqrt(4) should return 2', () => {
  expect(roundSqrt(4)).to.equal(2);
});

it('roundSqrt(5) should return 2', () => {
  expect(roundSqrt(5)).to.equal(2);
});

it('roundSqrt(6) should return 2', () => {
  expect(roundSqrt(6)).to.equal(2);
});

it('roundSqrt(7) should return 3', () => {
  expect(roundSqrt(7)).to.equal(3);
});

it('roundSqrt(8) should return 3', () => {
  expect(roundSqrt(8)).to.equal(3);
});

// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
