// NAMEEN:
// NAMERU:Геометрическая прогрессия

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
`Геометрическая прогрессия` — это последовательность чисел, в которой каждое последующее число, начиная со второго, получается из предыдущего умножением его на определённое число `q` (называемое `знаменателем прогрессии`).

Например, последовательность 2, 6, 18, 54, 162, … — геометрическая прогрессия с первым членом 2 и знаменателем 3.

Значение `n`-го члена геометрической прогрессии вычисляется по одной из формул:

`an = a1 * q^(n-1)`

где `a1` - первый член прогрессии и `q` знаменатель или

`an = an-1 * q`

где `an-1` - предыдущий член прогрессии и `q` знаменатель.

Напишите функцию `progressionMembers`, которая принимает три аргумента:

* `firstMember` - первый член прогрессии,
* `denominator` - знаменатель прогрессии
* `n` - количество членов прогрессии

Функция должна возвращать массив, заполненный первыми `n` членами геометрической прогрессии.

Пример вычисления первых 4х членов прогрессии с первым членом 2 и знаменателем 5:

```javascript
const first = 2;
const denominator = 5;
const n = 4;
for (let i = 1; i <= n; i++) {
  console.log(first * denominator ** (i - 1));
}
// 2
// 10
// 50
// 250
```

Примеры запуска функции:

```javascript
progressionMembers(2, 3, 5); // [2, 6, 18, 54, 162]
progressionMembers(1, 2, 10); // [1, 2, 4, 8, 16, 32, 64, 128, 256, 512]
progressionMembers(0, 4, 3); // [0, 0, 0]
progressionMembers(5, 0, 6); // [5, 0, 0, 0, 0, 0]
progressionMembers(1, 10, 0); // []
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
function progressionMembers(firstMember, denominator, n) {
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function progressionMembers(firstMember, denominator, n) {
  const result = [];
  for (let i = 1; i <= n; i++) {
    result.push(firstMember * denominator ** (i - 1));
  }
  return result;
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function progressionMembers', () => {
  expect(progressionMembers).to.be.a('function');
});

it('progressionMembers(3, 4, 10) should return [3, 12, 48, 192, 768, 3072, 12288, 49152, 196608, 786432]', () => {
  expect(progressionMembers(3, 4, 10)).to.deep.equal([3, 12, 48, 192, 768, 3072, 12288, 49152, 196608, 786432]);
});

it('progressionMembers(1, 1, 10) should return [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]', () => {
  expect(progressionMembers(1, 1, 10)).to.deep.equal([1, 1, 1, 1, 1, 1, 1, 1, 1, 1]);
});

it('progressionMembers(0, 2, 10) should return [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]', () => {
  expect(progressionMembers(0, 2, 10)).to.deep.equal([0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
});

it('progressionMembers(1, 0, 10) should return [1, 0, 0, 0, 0, 0, 0, 0, 0, 0]', () => {
  expect(progressionMembers(1, 0, 10)).to.deep.equal([1, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
});

it('progressionMembers(1, 2, 0) should return []', () => {
  expect(progressionMembers(1, 2, 0)).to.deep.equal([]);
});

it('progressionMembers(5, 2, 1) should return [5]', () => {
  expect(progressionMembers(5, 2, 1)).to.deep.equal([5]);
});

it('progressionMembers(-5, 2, 5) should return [-5, -10, -20, -40, -80]', () => {
  expect(progressionMembers(-5, 2, 5)).to.deep.equal([-5, -10, -20, -40, -80]);
});

it('progressionMembers(5, -2, 5) should return [5, -10, 20, -40, 80]', () => {
  expect(progressionMembers(5, -2, 5)).to.deep.equal([5, -10, 20, -40, 80]);
});

it('progressionMembers(-5, -2, 5) should return [-5, 10, -20, 40, -80]', () => {
  expect(progressionMembers(-5, -2, 5)).to.deep.equal([-5, 10, -20, 40, -80]);
});

it('progressionMembers(5, 2, -5) should return []', () => {
  expect(progressionMembers(5, 2, -5)).to.deep.equal([]);
});

// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
