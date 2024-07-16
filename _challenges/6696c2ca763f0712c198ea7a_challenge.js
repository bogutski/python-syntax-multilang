// NAMEEN:
// NAMERU:Сумма положительных чисел от n1 до n2

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `sumOfPositive`, которая принимает два числа `n1` и `n2` и возвращает сумму всех положительных чисел от `n1` до `n2` включительно.

`n1` всегда меньше или равно `n2`.

Примеры запуска функции:
```javascript
sumOfPositive(1, 10) // 55
sumOfPositive(-15, 15) // 120
sumOfPositive(0, 0) // 0
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
fun
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function sumOfPositive(n1, n2) {
  if(n2 <= 0) return 0;
  if(n1 < 0) n1 = 1;
  let sum = 0;
  for (let i = n1; i <= n2; i++) {
    sum += i;
  }
  return sum;
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function sumOfPositive', () => {
  expect(sumOfPositive).to.be.a('function');
});

it('sumOfPositive(1, 10) should return 55', () => {
  expect(sumOfPositive(1, 10)).to.equal(55);
});

it('sumOfPositive(-15, 15) should return 120', () => {
  expect(sumOfPositive(-15, 15)).to.equal(120);
});

it('sumOfPositive(0, 0) should return 0', () => {
  expect(sumOfPositive(0, 0)).to.equal(0);
});

it('sumOfPositive(-50, -31) should return 0', () => {
  expect(sumOfPositive(-50, -31)).to.equal(0);
});

it('sumOfPositive(8000, 8044) should return 360990', () => {
  expect(sumOfPositive(8000, 8044)).to.equal(360990);
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
