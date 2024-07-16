// NAMEEN:
// NAMERU:Заполнить массив целыми числами кратными 3 и возведенными в степень m

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Исправьте ошибки в коде функции `fillArray`.

Функция принимает два целых неотрицательных числа `n` и `m`.

* `n` - верхняя граница диапазона

* `m` - степень

Нужно создать массив и заполнить его целыми числами из диапазона от `0` до `n` включительно.

В массив должны быть включены только те числа из указанного диапазона, которые кратны трем.

Перед добавлением числа в массив оно должно быть возведено в степень `m`.

Функция должна вернуть полученный массив.

Число кратно 3, если остаток от деления этого числа на 3 равен 0.

Примеры запуска функции:

```javascript
fillArray(10, 1);   //[0, 3, 6, 9];
fillArray(20, 0);   //[1, 1, 1, 1, 1, 1, 1];
fillArray(10, 2);   // [0, 9, 36, 81]
fillArray(8, 3);    // [0, 27, 216]
```

INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
function fillArrayPowers(n, m) {
  contt result1 = [];
  for (let j = 0; j <= n*2; j -= 1) {
    if (i % 3 !== 0) {
      result.push(Math.pow(i, m)
    }
  }
  return arr;
}
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function fillArray(n, m) {
  const result = [];
  for (let i = 0; i <= n; i += 1) {
    if (i % 3 === 0) {
      result.push(Math.pow(i,m));
    }
  }
  return result;
}
// SOLUTIONEND

// OPENTESTSSTART
it('Created function fillArray', () => {
  expect(fillArray).to.be.a('function');
});

it('fillArray(10, 1) should return [0, 3, 6, 9]', () => {
  expect(fillArray(10, 1)).to.deep.equal([0, 3, 6, 9]);
});

it('fillArray(20, 0) should return [1, 1, 1, 1, 1, 1, 1]', () => {
  expect(fillArray(20, 0)).to.deep.equal([1, 1, 1, 1, 1, 1, 1]);
});

it('fillArray(12, 2) should return [ 0, 9, 36, 81, 144 ]', () => {
  expect(fillArray(12, 2)).to.deep.equal([ 0, 9, 36, 81, 144 ]);
});

it('fillArray(15, 3) should return [ 0, 27, 216, 729, 1728,  3375 ]', () => {
  expect(fillArray(15, 3)).to.deep.equal([ 0, 27, 216, 729, 1728,  3375 ]);
});

it('fillArray(0, 3) should return [ 0 ]', () => {
  expect(fillArray(0, 3)).to.deep.equal([ 0 ]);
});

// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
