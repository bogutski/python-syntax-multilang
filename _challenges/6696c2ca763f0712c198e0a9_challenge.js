// NAMEEN:
// NAMERU:Конвертировать километры в мили

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напиши функцию `kmToMile`, которая принимает в качестве аргумента число километров и возвращает число миль.

В одной миле `1.60934` километра.

Примеры:
```javascript
kmToMile(1); // 0.6213727366498067
kmToMile(2); // 1.2427454732996135
kmToMile(3); // 1.8641182099494202
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
fun
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function kmToMile(km) {
  return km / 1.60934;
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function kmToMile', () => {
  expect(kmToMile).to.be.a('function');
});

it('kmToMile(1) should return 0.6213727366498067', () => {
  expect(kmToMile(1)).to.be.equal(0.6213727366498067);
});

it('kmToMile(2) should return 1.2427454732996135', () => {
  expect(kmToMile(2)).to.be.equal(1.2427454732996135);
});

it('kmToMile(3) should return 1.8641182099494202', () => {
  expect(kmToMile(3)).to.be.equal(1.8641182099494202);
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
