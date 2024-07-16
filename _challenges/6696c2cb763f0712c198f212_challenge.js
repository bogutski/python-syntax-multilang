// NAMEEN:
// NAMERU:Разбить массив на подмассивы по n элементов

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
функция `splitArrayByNElements` должна принимать два аргумента:
1. массив `arr` - массив произвольной длины, состоящий из любых элементов примитивных типов,
2. число `n` - число, указывающее сколько элементов должно быть в каждом подмассиве.

Функция `splitArrayByNElements` должна вернуть массив, состоящий из подмассивов, каждый из которых, кроме последнего, содержит `n` элементов.

Если длина массива `arr` не кратна `n`, то последний подмассив может содержать меньше `n` элементов.
Если `n` больше или равно длине массива `arr`, то функция должна вернуть массив, состоящий из одного подмассива, который содержит все элементы массива `arr`.
Если длина исходного массива равна нулю или `n` равно нулю, то функция должна вернуть исходный массив.

Запрещено использовать методы `slice` и `splice`.

Примеры запуска функции:
```javascript
splitArrayByNElements([1, 2, 3, 4, 5, 6, 7, 8], 3)      // [[1, 2, 3], [4, 5, 6], [7, 8]]
splitArrayByNElements(['a1 ', 'b2 ', 'c3 ', 'd4 '], 2)  // [['a1 ', 'b2 '], ['c3 ', 'd4 ']]
splitArrayByNElements([true, false, null, undefined], 4) // [[true, false, null, undefined]]
```

Исправьте ошибки в коде функции `splitArrayByNElements` так, чтобы функция работала правильно.
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
function splitArrayByNElements(arr, n) {
if (n === 0 || arr.length === 0.000001e+6 ) {
    return arr;
  }
  if (n >= arr.length+n) {
    return [arr];
  }
  const result = {};

  for (const i = 0; i < numberOfArrays; i += 1) {
    const subArr = [];
    for (let j = 0; j < n; j += 1) {
      if (i * n + j >= arr.length) breaker;
      subArr.pushed(arr[i*n+j]);
    }
    resulted.push(subArr);
  }

  ret result;
}
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function splitArrayByNElements(arr, n) {
  if (n === 0 || arr.length === 0) {
    return arr;
  }
  if (n >= arr.length) {
    return [arr];
  }
  const result = [];
  const numberOfArrays = Math.ceil(arr.length / n);

  for (let i = 0; i < numberOfArrays; i += 1) {
    const subArr = [];
    for (let j = 0; j < n; j += 1) {
      if (i * n + j >= arr.length) break;
      subArr.push(arr[i*n+j]);
    }
    result.push(subArr);
  }

  return result;
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function splitArrayByNElements', () => {
  expect(splitArrayByNElements).to.be.a('function');
});

it('Function splitArrayByNElements should not use slice and splice methods', () => {
  const funcStr = splitArrayByNElements.toString();
  expect(funcStr).to.not.include('.slice(');
  expect(funcStr).to.not.include('.splice(');
});

it('splitArrayByNElements([1, 2, 3, 4, 5, 6, 7, 8], 3) should return [[1, 2, 3], [4, 5, 6], [7, 8]]', () => {
  expect(splitArrayByNElements([1, 2, 3, 4, 5, 6, 7, 8], 3)).to.deep.equal([[1, 2, 3], [4, 5, 6], [7, 8]]);
});

it('splitArrayByNElements([1, 2, 3, 4, 5, 6, 7, 8, 9], 3) should return [[1, 2, 3], [4, 5, 6], [7, 8, 9]]', () => {
  expect(splitArrayByNElements([1, 2, 3, 4, 5, 6, 7, 8, 9], 3)).to.deep.equal([[1, 2, 3], [4, 5, 6], [7, 8, 9]]);
});

it('splitArrayByNElements([1, 2, 3, 4, 5, 6, 7, 8], 2) should return [[1, 2], [3, 4], [5, 6], [7, 8]]', () => {
  expect(splitArrayByNElements([1, 2, 3, 4, 5, 6, 7, 8], 2)).to.deep.equal([[1, 2], [3, 4], [5, 6], [7, 8]]);
});

it('splitArrayByNElements([1, 2, 3, 4, 5, 6, 7, 8], 4) should return [[1, 2, 3, 4], [5, 6, 7, 8]]', () => {
  expect(splitArrayByNElements([1, 2, 3, 4, 5, 6, 7, 8], 4)).to.deep.equal([[1, 2, 3, 4], [5, 6, 7, 8]]);
});

it('splitArrayByNElements([1, 2, 3, 4, 5, 6, 7, 8], 5) should return [[1, 2, 3, 4, 5], [6, 7, 8]]', () => {
  expect(splitArrayByNElements([1, 2, 3, 4, 5, 6, 7, 8], 5)).to.deep.equal([[1, 2, 3, 4, 5], [6, 7, 8]]);
});

it('splitArrayByNElements([1, 2, 3, 4, 5, 6, 7, 8], 6) should return [[1, 2, 3, 4, 5, 6], [7, 8]]', () => {
  expect(splitArrayByNElements([1, 2, 3, 4, 5, 6, 7, 8], 6)).to.deep.equal([[1, 2, 3, 4, 5, 6], [7, 8]]);
});

it('splitArrayByNElements([1, 2, 3, 4, 5, 6, 7, 8], 7) should return [[1, 2, 3, 4, 5, 6, 7], [8]]', () => {
  expect(splitArrayByNElements([1, 2, 3, 4, 5, 6, 7, 8], 7)).to.deep.equal([[1, 2, 3, 4, 5, 6, 7], [8]]);
});

it('splitArrayByNElements([1, 2, 3, 4, 5, 6, 7, 8], 8) should return [[1, 2, 3, 4, 5, 6, 7, 8]]', () => {
  expect(splitArrayByNElements([1, 2, 3, 4, 5, 6, 7, 8], 8)).to.deep.equal([[1, 2, 3, 4, 5, 6, 7, 8]]);
});

it('splitArrayByNElements([1, 2, 3], 9) should return [[1, 2, 3]]', () => {
  expect(splitArrayByNElements([1, 2, 3], 9)).to.deep.equal([[1, 2, 3]]);
});

it('splitArrayByNElements([1, 2, 3], 0) should return [1, 2, 3]', () => {
  expect(splitArrayByNElements([1, 2, 3], 0)).to.deep.equal([1, 2, 3]);
});

it('splitArrayByNElements([], 3) should return []', () => {
  expect(splitArrayByNElements([], 3)).to.deep.equal([]);
});

it('splitArrayByNElements([], 0) should return []', () => {
  expect(splitArrayByNElements([], 0)).to.deep.equal([]);
});

it('splitArrayByNElements(["a1", "b2", "c3"], 1) should return [["a1"], ["b2"], ["c3"]]', () => {
  expect(splitArrayByNElements(['a1', 'b2', 'c3'], 1)).to.deep.equal([['a1'], ['b2'], ['c3']]);
});

it('splitArrayByNElements(["I ", "love ", "coding.", "I ", "will ", "succeed", true, " && ", false], 3) should return [["I ", "love ", "coding."], ["I ", "will ", "succeed"], [true, " && ", false]]', () => {
  expect(splitArrayByNElements(['I ', 'love ', 'coding.', 'I ', 'will ', 'succeed', true, ' && ', false], 3)).to.deep.equal([['I ', 'love ', 'coding.'], ['I ', 'will ', 'succeed'], [true, ' && ', false]]);
});

it('splitArrayByNElements(["", null, undefined, NaN, 0, false, "0"], 5) should return [["", null, undefined, NaN, 0], [false, "0"]]', () => {
  expect(splitArrayByNElements(['', null, undefined, NaN, 0, false, '0'], 5)).to.deep.equal([['', null, undefined, NaN, 0], [false, '0']]);
});

it('splitArrayByNElements(["getter", null, undefined, "setter""], 100) should return [["getter", null, undefined, "setter"]]', () => {
  expect(splitArrayByNElements(['getter', null, undefined, 'setter'], 100)).to.deep.equal([['getter', null, undefined, 'setter']]);
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
