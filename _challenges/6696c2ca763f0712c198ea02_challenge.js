// NAMEEN:
// NAMERU:Строка из чисел от 0 до n

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `fromZeroToN`, которая принимает число `n` и возвращает строку, состоящую из чисел от `0` до `n` включительно.

Примеры запуска функции:
```javascript
fromZeroToN(0) // '0'
fromZeroToN(5) // '012345'
fromZeroToN(10) // '012345678910'
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
fun
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function fromZeroToN(n) {
  let string = '';
  for (let i = 0; i <= n; i++) {
    string += i;
  }
  return string;
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function fromZeroToN', () => {
  expect(fromZeroToN).to.be.a('function');
});

it('fromZeroToN(5) should return 012345', () => {
  expect(fromZeroToN(5)).to.equal('012345');
});

it('fromZeroToN(10) should return 012345678910', () => {
  expect(fromZeroToN(10)).to.equal('012345678910');
});

it('fromZeroToN(20) should return 01234567891011121314151617181920', () => {
  expect(fromZeroToN(20)).to.equal('01234567891011121314151617181920');
});
it('fromZeroToN(0) should return 0', () => {
  expect(fromZeroToN(0)).to.equal('0');
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
