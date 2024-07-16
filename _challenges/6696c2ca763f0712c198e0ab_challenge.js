// NAMEEN:
// NAMERU:Конвертировать футы в метры

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напиши функцию `footToMeter`, которая принимает в качестве аргумента число футов и возвращает число метров.

В одном футе `0.3048` метра.

Примеры:
```javascript
footToMeter(1); // 0.3048
footToMeter(2); // 0.6096
footToMeter(3); // 0.9144000000000001
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
fun
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function footToMeter(foot) {
  return foot * 0.3048;
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function footToMeter', () => {
  expect(footToMeter).to.be.a('function');
});

it('footToMeter(1) should return 0.3048', () => {
  expect(footToMeter(1)).to.be.equal(0.3048);
});

it('footToMeter(2) should return 0.6096', () => {
  expect(footToMeter(2)).to.be.equal(0.6096);
});

it('footToMeter(3) should return 0.9144', () => {
  expect(footToMeter(3)).to.be.equal(0.9144000000000001);
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
