// NAMEEN:
// NAMERU:Сумма чисел от n1 до n2

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `sumFromN1ToN2`, которая принимает два числа `n1` и `n2` и возвращает сумму всех чисел от `n1` до `n2`, не включая эти числа.

`n1` всегда меньше `n2`.

Пример запуска функции:
```javascript
sumFromN1ToN2(0, 0); // 0
sumFromN1ToN2(1, 5); // 9
sumFromN1ToN2(1, 10); // 44
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
fun
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function sumFromN1ToN2(n1, n2) {
  let sum = 0;
  for (let i = n1 + 1; i < n2; i++) {
    sum += i;
  }
  return sum;
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function sumFromN1ToN2', () => {
  expect(sumFromN1ToN2).to.be.a('function');
});

it('sumFromN1ToN2(1, 5) should return 9', () => {
  expect(sumFromN1ToN2(1, 5)).to.equal(9);
});

it('sumFromN1ToN2(1, 10) should return 44', () => {
  expect(sumFromN1ToN2(1, 10)).to.equal(44);
});

it('sumFromN1ToN2(0, 0) should return 0', () => {
  expect(sumFromN1ToN2(0, 0)).to.equal(0);
});

it('sumFromN1ToN2(155, 175) should return 3135', () => {
  expect(sumFromN1ToN2(155, 175)).to.equal(3135);
});

it('sumFromN1ToN2(5, 6) should return 0', () => {
  expect(sumFromN1ToN2(5, 6)).to.equal(0);
});

it('sumFromN1ToN2(5, 7) should return 6', () => {
  expect(sumFromN1ToN2(5, 7)).to.equal(6);
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
