// NAMEEN:
// NAMERU:Дюймы в сантиметры с округлением

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
В одном дюйме 2.54 сантиметра.

Напишите функцию `inchesToCm`, которая принимает число дюймов и возвращает число сантиметров, округленное до ближайшего целого.

Примеры запуска функции:
```javascript
inchesToCm(1) // 3
inchesToCm(2) // 5
inchesToCm(3) // 8
inchesToCm(55) // 140
inchesToCm(100) // 254
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
fun
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function inchesToCm(num) {
  return Math.round(num * 2.54);
}
// SOLUTIONEND

// OPENTESTSSTART
it('Created function inchesToCm', () => {
  expect(inchesToCm).to.be.a('function');
});

it('inchesToCm(1) should return 3', () => {
  expect(inchesToCm(1)).to.equal(3);
});

it('inchesToCm(2) should return 5', () => {
  expect(inchesToCm(2)).to.equal(5);
});

it('inchesToCm(3) should return 8', () => {
  expect(inchesToCm(3)).to.equal(8);
});

it('inchesToCm(55) should return 140', () => {
  expect(inchesToCm(55)).to.equal(140);
});

it('inchesToCm(100) should return 254', () => {
  expect(inchesToCm(100)).to.equal(254);
});

it('inchesToCm(156) should return 396', () => {
  expect(inchesToCm(156)).to.equal(396);
});

it('inchesToCm(0) should return 0', () => {
  expect(inchesToCm(0)).to.equal(0);
});

// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
