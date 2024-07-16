// NAMEEN:
// NAMERU:Напишите функцию без описания, но с примерами

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `round`, которая принимает одно число и возвращает его округленное значение.

Посмотрите примеры, чтобы понять, как должна работать функция.

Найдите закономерности.

Примеры запуска функции:
```javascript
round(1.1) // 2
round(-1.5) // -2
round(1.5) // 2
round(-1.6) // -2
round(10.9) // 11
round(-7.1) // -8
```

INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
fun
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function round(num) {
  if (num < 0) return Math.floor(num);
  return Math.ceil(num);
}
// SOLUTIONEND

// OPENTESTSSTART
it('Created function round', () => {
  expect(round).to.be.a('function');
});

it('round(1.1) should return 2', () => {
  expect(round(1.1)).to.equal(2);
});

it('round(-1.5) should return -2', () => {
  expect(round(-1.5)).to.equal(-2);
});

it('round(1.5) should return 2', () => {
  expect(round(1.5)).to.equal(2);
});

it('round(-1.6) should return -2', () => {
  expect(round(-1.6)).to.equal(-2);
});

it('round(10.9) should return 11', () => {
  expect(round(10.9)).to.equal(11);
});

it('round(-7.1) should return -8', () => {
  expect(round(-7.1)).to.equal(-8);
});

it('round(0) should return 0', () => {
  expect(round(0)).to.equal(0);
});

it('round(100.1) should return 101', () => {
  expect(round(100.1)).to.equal(101);
});

it('round(-100.1) should return -101', () => {
  expect(round(-100.1)).to.equal(-101);
});

// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
