// NAMEEN:
// NAMERU:Заполнить массив нечетными числами от m до n

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `oddFromRange`, которая принимает два целых числа `m` и `n`, таких что `m` <= `n`, и возвращает массив, заполненный нечетными числами из диапазона от `m` до `n` включительно.

Если нечетных чисел в указанном диапазоне не содержится, то функция должна вернуть пустой массив.

Примеры запуска функции:

```javascript
fillArray(1, 5);   // [1, 3, 5]
fillArray(-5, 5);  // [-5, -3, -1, 1, 3, 5]
fillArray(5, 5);   // [5]
```

INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
fun
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function oddFromRange(m, n) {
  const result = [];
  for (let i = m; i <= n; i += 1) {
    if (i % 2 !== 0) {
      result.push(i);
    }
  }
  return result;
}

// SOLUTIONEND


// OPENTESTSSTART
it('Created function oddFromRange', () => {
  expect(oddFromRange).to.be.a('function');
});

it(`oddFromRange(1, 5) should return [1, 3, 5]`, () => {
  expect(oddFromRange(1, 5)).to.deep.equal([1, 3, 5]);
});

it(`oddFromRange(-10, 15) should return [-9, -7, -5, -3, -1, 1, 3, 5, 7, 9, 11, 13, 15]`, () => {
  expect(oddFromRange(-10, 15)).to.deep.equal([-9, -7, -5, -3, -1, 1, 3, 5, 7, 9, 11, 13, 15]);
});

it(`oddFromRange(1, 1) should return [1]`, () => {
  expect(oddFromRange(1, 1)).to.deep.equal([1]);
});

it(`oddFromRange(-2, 2) should return [-1, 1]`, () => {
  expect(oddFromRange(-2, 2)).to.deep.equal([-1, 1]);
});

it(`oddFromRange(0, 0) should return []`, () => {
  expect(oddFromRange(0, 0)).to.deep.equal([]);
});

it(`oddFromRange(0, 1) should return [1]`, () => {
  expect(oddFromRange(0, 1)).to.deep.equal([1]);
});

it(`oddFromRange(0, 25) should return [1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25]`, () => {
  expect(oddFromRange(0, 25)).to.deep.equal([1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25]);
});

it(`oddFromRange(1, 26) should return [1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25]`, () => {
  expect(oddFromRange(1, 26)).to.deep.equal([1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25]);
});

// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
