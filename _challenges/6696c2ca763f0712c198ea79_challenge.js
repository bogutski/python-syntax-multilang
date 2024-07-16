// NAMEEN:
// NAMERU:Сумма чисел, делимых на 5

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `divisibleByFive`, которая принимает два числа `n1` и `n2`.

Функция должна вернуть сумму всех чисел, которые делятся на 5 без остатка, в диапазоне от `n1` до `n2`, не включая `n1` и `n2`.

`n1` всегда будет меньше `n2`.

Примеры запуска функции:
```javascript
divisibleByFive(1, 11); // 15
divisibleByFive(5, 15); // 10
divisibleByFive(4, 14); // 15
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
fun
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function divisibleByFive(n1, n2) {
  let sum = 0;
  for (let i = n1 + 1; i < n2; i++) {
    if (i % 5 === 0) sum += i;
  }
  return sum;
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function divisibleByFive', () => {
  expect(divisibleByFive).to.be.a('function');
});

it('divisibleByFive(1, 11) should return 15', () => {
  expect(divisibleByFive(1, 11)).to.equal(15);
});

it('divisibleByFive(5, 15) should return 10', () => {
  expect(divisibleByFive(5, 15)).to.equal(10);
});

it('divisibleByFive(150, 1579) should return 246525', () => {
  expect(divisibleByFive(150, 1579)).to.equal(246525);
});

it('divisibleByFive(0, 0) should return 0', () => {
  expect(divisibleByFive(0, 0)).to.equal(0);
});

it('divisibleByFive(-250, -200) should return -2025', () => {
  expect(divisibleByFive(-250, -200)).to.equal(-2025);
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
