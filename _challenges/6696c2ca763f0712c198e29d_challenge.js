// NAMEEN:
// NAMERU:Номер века по году

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `century`, которая принимает целое положительное число `year` - номер года
в качестве параметра и возвращает номер столетия.

Примеры вызова функции:
```javascript
century(1900) // 19
century(1901) // 20
century(2000) // 20
century(2001) // 21
```

В решении пригодится `Math.ceil()`.
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
fun
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function century(year) {
  return Math.ceil(year / 100);
}
// SOLUTIONEND

// OPENTESTSSTART
it('Created function century', () => {
  expect(century).to.be.a('function');
});

it('century(1900) should return 19', () => {
  expect(century(1900)).to.equal(19);
});

it('century(1901) should return 20', () => {
  expect(century(1901)).to.equal(20);
});

it('century(2000) should return 20', () => {
  expect(century(2000)).to.equal(20);
});

it('century(2001) should return 21', () => {
  expect(century(2001)).to.equal(21);
});

it('century(200) should return 2', () => {
  expect(century(200)).to.equal(2);
});

it('century(10) should return 1', () => {
  expect(century(10)).to.equal(1);
});

it('century(5) should return 1', () => {
  expect(century(5)).to.equal(1);
});

it('century(321) should return 4', () => {
  expect(century(321)).to.equal(4);
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
