// NAMEEN:
// NAMERU:Конвертировать мили в километры

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напиши функцию `mileToKm`, которая принимает в качестве аргумента число миль и возвращает число километров.

В одной миле `1.60934` километра.

Примеры:
```javascript
mileToKm(1); // 1.60934
mileToKm(2); // 3.21868
mileToKm(3); // 4.82802
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
fun
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function mileToKm(mile) {
  return mile * 1.60934;
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function mileToKm', () => {
  expect(mileToKm).to.be.a('function');
});

it('mileToKm(1) should return 1.60934', () => {
  expect(mileToKm(1)).to.be.equal(1.60934);
});

it('mileToKm(2) should return 3.21868', () => {
  expect(mileToKm(2)).to.be.equal(3.21868);
});

it('mileToKm(3) should return 4.82802', () => {
  expect(mileToKm(3)).to.be.equal(4.82802);
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
