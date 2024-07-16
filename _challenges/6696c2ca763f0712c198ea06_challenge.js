// NAMEEN:
// NAMERU:Сумма четных чисел от n1 до n2

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `sumOfEvenNumbers`, которая принимает два числа `n1` и `n2` и возвращает сумму всех четных чисел в диапазоне от `n1` до `n2` включительно.

`n1` всегда будет меньше или равно `n2`.

Примеры запуска функции:
```javascript
sumOfEvenNumbers(1, 10); // 30
sumOfEvenNumbers(1, 11); // 30
sumOfEvenNumbers(15, 37); // 286
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
fun
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function sumOfEvenNumbers(n1, n2) {
  let sum = 0;
  for (let i = n1; i <= n2; i++) {
    if (i % 2 === 0) sum += i;
  }
  return sum;
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function sumOfEvenNumbers', () => {
  expect(sumOfEvenNumbers).to.be.a('function');
});

it('sumOfEvenNumbers(1, 10) should return 30', () => {
  expect(sumOfEvenNumbers(1, 10)).to.equal(30);
});

it('sumOfEvenNumbers(1, 11) should return 30', () => {
  expect(sumOfEvenNumbers(1, 11)).to.equal(30);
});

it('sumOfEvenNumbers(15, 37) should return 286', () => {
  expect(sumOfEvenNumbers(15, 37)).to.equal(286);
});

it('sumOfEvenNumbers(-7, 27) should return 170', () => {
  expect(sumOfEvenNumbers(-7, 27)).to.equal(170);
});

it('sumOfEvenNumbers(2000, 2010) should return 12030', () => {
  expect(sumOfEvenNumbers(2000, 2010)).to.equal(12030);
});

it('sumOfEvenNumbers(0, 0) should return 0', () => {
  expect(sumOfEvenNumbers(0, 0)).to.equal(0);
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
