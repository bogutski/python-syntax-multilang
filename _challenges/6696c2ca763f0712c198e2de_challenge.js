// NAMEEN:
// NAMERU:Реализовываем справедливое округление

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
В этой задаче мы реализуем почти справедливое округление – если дробная часть числа больше или равна 0.6, то число округляется вверх, иначе вниз.

Функция `round` принимает только положительные числа и возвращает округленные значения.

Примеры запуска функции:
```javascript
round(1.1) // 1
round(1.5) // 1
round(1.55) // 1
round(1.6) // 2
round(1.9) // 2
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
fun
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function round(n) {
  const fraction = n - Math.floor(n);
  return fraction >= 0.6 ? Math.ceil(n) : Math.floor(n);
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function round', () => {
  expect(round).to.be.a('function');
});

it('round(1.1) should return 1', () => {
  expect(round(1.1)).to.equal(1);
} );

it('round(1.5) should return 1', () => {
  expect(round(1.5)).to.equal(1);
} );

it('round(1.55) should return 1', () => {
  expect(round(1.55)).to.equal(1);
} );

it('round(1.6) should return 2', () => {
  expect(round(1.6)).to.equal(2);
});

it('round(1.9) should return 2', () => {
  expect(round(1.9)).to.equal(2);
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
