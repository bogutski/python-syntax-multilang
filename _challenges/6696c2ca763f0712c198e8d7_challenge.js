// NAMEEN:
// NAMERU:Заполнить массив целыми числами кратными 5.
/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Создайте функцию `multiplesOf5`.

Функция принимает целое неотрицательное число `n`.

Функция должна вернуть массив, заполненный целыми числами от `0` до `n` включительно, кратными `5`.

Если чисел кратных 5 в диапазоне нет, то функция должна вернуть пустой массив.

Число кратно 5, если остаток от деления этого числа на 5 равен 0.

Примеры запуска функции:

```javascript
multiplesOf5(10); // [0, 5, 10]
multiplesOf5(37); // [0, 5, 10, 15, 20, 25, 30, 35]
multiplesOf5(0);  // [0]
multiplesOf5(1);  // [0]
```

INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
fun
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function multiplesOf5(n) {
  const result = [];
  for (let i = 0; i <= n; i += 5) {
    result.push(i);
  }
  return result;
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function multiplesOf5', () => {
  expect(multiplesOf5).to.be.a('function');
});

it('multiplesOf5(20) should return [0, 5, 10, 15, 20]', () => {
  expect(multiplesOf5(20)).to.deep.equal([0, 5, 10, 15, 20]);
});

it('multiplesOf5(38) should return [0, 5, 10, 15, 20, 25, 30, 35]', () => {
  expect(multiplesOf5(38)).to.deep.equal([0, 5, 10, 15, 20, 25, 30, 35]);
});

it('multiplesOf5(0) should return [0]', () => {
  expect(multiplesOf5(0)).to.deep.equal([0]);
});

it('multiplesOf5(4) should return [0]', () => {
  expect(multiplesOf5(4)).to.deep.equal([0]);
});

it('multiplesOf5(5) should return [0, 5]', () => {
  expect(multiplesOf5(5)).to.deep.equal([0, 5]);
});

it('multiplesOf5(51) should return [0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50]', () => {
  expect(multiplesOf5(51)).to.deep.equal([0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50]);
});

// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
