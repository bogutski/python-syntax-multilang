// NAMEEN:
// NAMERU:Исправьте ошибку в округлении суммы

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Функция `roundSum` принимает два числа и возвращает их сумму, округленную вниз.

Найдите ошибку в коде функции и исправьте ее.

Примеры запуска функции:
```javascript
roundSum(1.1, 2.3) // 3
roundSum(1.5, 2.5) // 4
roundSum(1.9, 2.1) // 4
```

INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
function roundSum() {
  return Math.flor(n1 + n2);

INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function roundSum(n1, n2) {
  return Math.floor(n1 + n2);
}
// SOLUTIONEND

// OPENTESTSSTART
it('Created function roundSum', () => {
  expect(roundSum).to.be.a('function');
});

it('roundSum(1.1, 2.3) should return 3', () => {
  expect(roundSum(1.1, 2.3)).to.equal(3);
});

it('roundSum(1.5, 2.5) should return 4', () => {
  expect(roundSum(1.5, 2.5)).to.equal(4);
});

it('roundSum(1.9, 2.1) should return 4', () => {
  expect(roundSum(1.9, 2.1)).to.equal(4);
});

it('roundSum(5.9, 1) should return 6', () => {
  expect(roundSum(5.9, 1)).to.equal(6);
});

// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
