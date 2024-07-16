// NAMEEN:
// NAMERU:True если числа равны

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `isEqual`, которая принимает два параметра `num1` и `num2`.

Возвращает `true`, если `num1` равно `num2`, и false, если `num1` не равно `num2`.


Примеры:
```javascript
isEqual(1, 1); // true
isEqual(1, 2); // false
isEqual(1, -1); // false
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
fun
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function isEqual(num1, num2) {
  return num1 === num2;
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function isEqual', () => {
  expect(isEqual).to.be.a('function');
});

it('isEqual(1, 1) should return true', () => {
  expect(isEqual(1, 1)).to.equal(true);
});

it('isEqual(1, 2) should return false', () => {
  expect(isEqual(1, 2)).to.equal(false);
});

it('isEqual(1, -1) should return false', () => {
  expect(isEqual(1, -1)).to.equal(false);
});

it('isEqual(0, 0) should return true', () => {
  expect(isEqual(0, 0)).to.equal(true);
});

it('isEqual(100, -100) should return false', () => {
  expect(isEqual(100, -100)).to.equal(false);
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
