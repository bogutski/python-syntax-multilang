// NAMEEN:
// NAMERU:Определим, что число четное или нечетное

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Обратите внимание на несколько примеров:

```javascript
console.log(2 % 2 === 0); // true
console.log(3 % 2 === 0); // false
console.log(4 % 2 === 0); // true
console.log(5 % 2 === 0); // false
console.log(6 % 2 === 0); // true
console.log(7 % 2 === 0); // false
```

Видите чередование true и false? Это значит, что если число делится на 2 без остатка, то оно четное, иначе нечетное.

Напишите функцию `isEven`, которая принимает число и возвращает `true`, если число четное, и `false` если нечетное.
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
fun
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function isEven(num) {
  return num % 2 === 0
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function isEven', () => {
  expect(isEven).to.be.a('function');
});

it('isEven(2) should return true', () => {
  expect(isEven(2)).to.equal(true);
});

it('isEven(3) should return false', () => {
  expect(isEven(3)).to.equal(false);
});

it('isEven(4) should return true', () => {
  expect(isEven(4)).to.equal(true);
});

it('isEven(5) should return false', () => {
  expect(isEven(5)).to.equal(false);
});

it('isEven(-1) should return false', () => {
  expect(isEven(-1)).to.equal(false);
});

it('isEven(-6) should return true', () => {
  expect(isEven(-6)).to.equal(true);
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
