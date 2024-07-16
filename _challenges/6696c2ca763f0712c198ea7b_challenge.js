// NAMEEN:
// NAMERU:Нахождение суммы отрицательных чисел, кратных 3

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `negativeAndDivisibleBy3`, которая принимает два числа `n1` и `n2` и возвращает сумму всех отрицательных чисел, кратных 3, в диапазоне от `n1` до `n2` включительно.

`n1` всегда будет меньше или равно `n2`.

Что бы проверить, что число `n` кратно 3, используйте оператор `%` (остаток от деления).
Число `n` кратно 3, если остаток от деления на 3 равен 0.

Примеры запуска функции:
```javascript
negativeAndDivisibleBy3(-10, 10); // -9
negativeAndDivisibleBy3(-25, -10); // -18
negativeAndDivisibleBy3(0, 0); // 0
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
fun
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function negativeAndDivisibleBy3(n1, n2) {
  let sum = 0;
  for (let i = n1; i <= n2; i++) {
    if (i < 0 && i % 3 === 0) sum += i;
  }
  return sum;
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function negativeAndDivisibleBy3', () => {
  expect(negativeAndDivisibleBy3).to.be.a('function');
});

it('negativeAndDivisibleBy3(-10, 10) should return -18', () => {
  expect(negativeAndDivisibleBy3(-10, 10)).to.equal(-18);
});

it('negativeAndDivisibleBy3(-25, -10) should return -90', () => {
  expect(negativeAndDivisibleBy3(-25, -10)).to.equal(-90);
});

it('negativeAndDivisibleBy3(0, 0) should return 0', () => {
  expect(negativeAndDivisibleBy3(0, 0)).to.equal(0);
});

it('negativeAndDivisibleBy3(-150, -100) should return -2142', () => {
  expect(negativeAndDivisibleBy3(-150, -100)).to.equal(-2142);
});

it('negativeAndDivisibleBy3(50, 100) should return 0', () => {
  expect(negativeAndDivisibleBy3(50, 100)).to.equal(0);
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
