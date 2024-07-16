// NAMEEN:
// NAMERU:Посчитать количество вхождений нечетных чисел

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Функция `countOddEl` принимает массив чисел.

Функция должна посчитать количество вхождений только нечетных чисел в массив
и вернуть результат в виде объекта, где ключ - нечетное число, значение - количество вхождений

Если массив пустой, то вернуть строку "Array is empty"

Примеры запуска функции:
```javascript
countOddEl([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]) // {1: 1, 3: 1, 5: 1, 7: 1, 9: 1}
countOddEl([1, 1, 1, 3, 3, 1]) // {1: 4, 3: 2}
countOddEl([2, 2, 2, 4, 4, 2]) // {}
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
fun
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function countOddEl(arr) {
  if (!arr.length) return "Array is empty";
  const result = {};
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 1 && result[arr[i]]) result[arr[i]]++;
    else if (arr[i] % 2 === 1 && !result[arr[i]]) result[arr[i]] = 1;
  }
  return result;
}

// SOLUTIONEND


// OPENTESTSSTART
it('Created function countOddEl', () => {
  expect(countOddEl).to.be.a('function');
});

it('countOddEl([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]) should return {1: 1, 3: 1, 5: 1, 7: 1, 9: 1}', () => {
  expect(countOddEl([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])).to.deep.equal({1: 1, 3: 1, 5: 1, 7: 1, 9: 1});
});

it('countOddEl([1, 1, 1, 3, 3, 1]) should return {1: 4, 3: 2}', () => {
  expect(countOddEl([1, 1, 1, 3, 3, 1])).to.deep.equal({1: 4, 3: 2});
});

it('countOddEl([2, 2, 2, 4, 4, 2]) should return {}', () => {
  expect(countOddEl([2, 2, 2, 4, 4, 2])).to.deep.equal({});
});

it('countOddEl([]) should return "Array is empty"', () => {
  expect(countOddEl([])).to.equal("Array is empty");
});

it('countOddEl([5, 5, 5, 5, 5]) should return {5: 5}', () => {
  expect(countOddEl([5, 5, 5, 5, 5])).to.deep.equal({5: 5});
});

// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
