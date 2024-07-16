// NAMEEN:
// NAMERU:Сумма всех чисел, если не встретился ноль

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `allButZero`, которая принимает два числа `n1` и `n2` и возвращает сумму всех чисел между `n1` и
`n2`, включительно.

Если в диапазоне между `n1` и `n2` встретился ноль, то функция должна вернуть строку `'Invalid input'`.

Примеры запуска функции:
```javascript
allButZero(1, 5) // 15
allButZero(-5, 5) // Invalid input
allButZero(0, 5) // Invalid input
allButZero(-25, -5) // -315
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
fun
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function allButZero(n1, n2) {
  let sum = 0;
  for(let i = n1; i <= n2; i++) {
    if(i === 0) return 'Invalid input';
    sum += i;
  }
  return sum;
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function allButZero', () => {
  expect(allButZero).to.be.a('function');
});

it('allButZero(1, 5) should return 15', () => {
  expect(allButZero(1, 5)).to.equal(15);
});

it("allButZero(-5, 5) should return 'Invalid input'", () => {
  expect(allButZero(-5, 5)).to.equal('Invalid input');
});

it("allButZero(0, 5) should return 'Invalid input'", () => {
  expect(allButZero(0, 5)).to.equal('Invalid input');
});

it('allButZero(-25, -5) should return -315', () => {
  expect(allButZero(-25, -5)).to.equal(-315);
});

it('allButZero(-20, -7) should return -189', () => {
  expect(allButZero(-20, -7)).to.equal(-189);
});

it('allButZero(100, 117) should return 1953', () => {
  expect(allButZero(100, 117)).to.equal(1953);
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
