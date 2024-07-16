// NAMEEN:
// NAMERU:Округлите результат деления

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Создайте функцию `roundDivision`.

Функция принимает два числа, возвращает результат деления первого числа на второе, округленный до ближайшего целого.

Используйте `Math.round`.

Примеры запуска функции:
```javascript
roundDivision(1, 2) // 0
roundDivision(1, 3) // 0
roundDivision(1, 4) // 0
roundDivision(5, 2) // 2
roundDivision(5, 3) // 2
roundDivision(5, 4) // 1
```

INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
fun
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function roundDivision(num1, num2) {
  return Math.round(num1 / num2);
}
// SOLUTIONEND

// OPENTESTSSTART
it('Created function roundDivision', () => {
  expect(roundDivision).to.be.a('function');
});

it('roundDivision(1, 2) should return 1', () => {
  expect(roundDivision(1, 2)).to.equal(1);
});

it('roundDivision(1, 3) should return 0', () => {
  expect(roundDivision(1, 3)).to.equal(0);
});

it('roundDivision(1, 4) should return 0', () => {
  expect(roundDivision(1, 4)).to.equal(0);
});

it('roundDivision(5, 2) should return 3', () => {
  expect(roundDivision(5, 2)).to.equal(3);
});

it('roundDivision(5, 3) should return 2', () => {
  expect(roundDivision(5, 3)).to.equal(2);
});

it('roundDivision(5, 4) should return 1', () => {
  expect(roundDivision(5, 4)).to.equal(1);
});

it('roundDivision(5, 5) should return 1', () => {
  expect(roundDivision(5, 5)).to.equal(1);
});

it('roundDivision(5, 6) should return 1', () => {
  expect(roundDivision(5, 6)).to.equal(1);
});

it('roundDivision(5, 7) should return 1', () => {
  expect(roundDivision(5, 7)).to.equal(1);
});

it('roundDivision(5, 8) should return 1', () => {
  expect(roundDivision(5, 8)).to.equal(1);
});

// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
