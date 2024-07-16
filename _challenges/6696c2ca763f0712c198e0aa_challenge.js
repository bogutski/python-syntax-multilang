// NAMEEN:
// NAMERU:Конвертировать метры в футы

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напиши функцию `meterToFoot`, которая принимает в качестве аргумента число метров и возвращает число футов.

В одном футе `0.3048` метра.

Примеры:
```javascript
meterToFoot(1); // 3.280839895013123
meterToFoot(2); // 6.561679790026246
meterToFoot(3); // 9.84251968503937
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
fun
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function meterToFoot(m) {
  return m / 0.3048;
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function meterToFoot', () => {
  expect(meterToFoot).to.be.a('function');
});

it('meterToFoot(1) should return 3.280839895013123', () => {
  expect(meterToFoot(1)).to.be.equal(3.280839895013123);
});

it('meterToFoot(2) should return 6.561679790026246', () => {
  expect(meterToFoot(2)).to.be.equal(6.561679790026246);
});

it('meterToFoot(3) should return 9.84251968503937', () => {
  expect(meterToFoot(3)).to.be.equal(9.84251968503937);
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
