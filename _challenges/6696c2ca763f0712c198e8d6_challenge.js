// NAMEEN:
// NAMERU:Заполнить массив квадратами четных чисел от n до n*3

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `squaresOfEven`, которая принимает целое число `n` и возвращает массив, заполненный квадратами четных чисел от `n` до `n*3` включительно.

Если `n` отрицательное число или ноль, то функция должна вернуть сообщение об ошибке: `'Error: n must be a positive number'`.

Для возведения числа в квадрат можно использовать оператор `**` или функцию `Math.pow(x,power)`.

Примеры запуска функции:

```javascript
squaresOfEven(0);   // "Error: n must be a positive number"
squaresOfEven(-1);  // "Error: n must be a positive number"
squaresOfEven(1);   // [4]
squaresOfEven(2);   // [4, 16, 36]
squaresOfEven(5);   // [36, 64, 100, 144, 196]
```


INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
function squaresOfEven(n) {
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function squaresOfEven(n) {
  if (n <= 0) {
    return 'Error: n must be a positive number';
  }
  const result = [];
  for (let i = n; i <= n * 3; i += 1) {
    if (i % 2 === 0) {
      result.push(i ** 2);
    }
  }
  return result;
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function squaresOfEven', () => {
  expect(squaresOfEven).to.be.a('function');
});

it(`squaresOfEven(0) should return "Error: n must be a positive number"`, () => {
  expect(squaresOfEven(0)).to.equal('Error: n must be a positive number');
});

it(`squaresOfEven(-11) should return "Error: n must be a positive number"`, () => {
  expect(squaresOfEven(-11)).to.equal('Error: n must be a positive number');
});

it(`squaresOfEven(1) should return [4]`, () => {
  expect(squaresOfEven(1)).to.deep.equal([4]);
});

it(`squaresOfEven(2) should return [4, 16, 36]`, () => {
  expect(squaresOfEven(2)).to.deep.equal([4, 16, 36]);
});

it(`squaresOfEven(10) should return [100, 144, 196, 256, 324, 400, 484, 576, 676, 784, 900]`, () => {
  expect(squaresOfEven(10)).to.deep.equal([100, 144, 196, 256, 324, 400, 484, 576, 676, 784, 900]);
});

// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
