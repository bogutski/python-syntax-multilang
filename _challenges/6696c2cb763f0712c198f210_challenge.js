// NAMEEN:
// NAMERU:Разделить массив на 2 подмассива по четному и нечетному индексу

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Функция `splitArrayByIndex` должна принимать произвольный массив и возвращать массив из двух подмассивов, первый из которых содержит элементы из входного массива с четными индексами, а второй - с нечетными.
Если массив пустой, то функция должна сообщение "Array is empty".
Если массив содержит только один элемент, то функция должна сообщение "Array has only one element".

Примеры запуска функции:
```javascript
splitArrayByIndex([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]) // [[0, 2, 4, 6, 8], [1, 3, 5, 7, 9]]
splitArrayByIndex(['a', 'b', 'c', 'd', 'e', 'f']) // [['a', 'c', 'e'], ['b', 'd', 'f']]
splitArrayByIndex([]) // 'Array is empty'
splitArrayByIndex([1]) // 'Array has only one element'
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
fun
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function splitArrayByIndex(array) {
  if (array.length === 0) {
    return 'Array is empty';
  }

  if (array.length === 1) {
    return 'Array has only one element';
  }

  const even = [];
  const odd = [];

  for (let i = 0; i < array.length; i++) {
    if (i % 2 === 0) {
      even.push(array[i]);
    } else {
      odd.push(array[i]);
    }
  }

  return [even, odd];
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function splitArrayByIndex', () => {
  expect(splitArrayByIndex).to.be.a('function');
});

it('splitArrayByIndex([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]) should return [[0, 2, 4, 6, 8], [1, 3, 5, 7, 9]]', () => {
  expect(splitArrayByIndex([0, 1, 2, 3, 4, 5, 6, 7, 8, 9])).to.deep.equal([[0, 2, 4, 6, 8], [1, 3, 5, 7, 9]]);
});

it('splitArrayByIndex(["a", "b", "c", "d", "e", "f"]) should return [["a", "c", "e"], ["b", "d", "f"]]', () => {
  expect(splitArrayByIndex(['a', 'b', 'c', 'd', 'e', 'f'])).to.deep.equal([['a', 'c', 'e'], ['b', 'd', 'f']]);
});

it('splitArrayByIndex([]) should return "Array is empty"', () => {
  expect(splitArrayByIndex([])).to.equal('Array is empty');
});

it('splitArrayByIndex([true]) should return "Array has only one element"', () => {
  expect(splitArrayByIndex([true])).to.equal('Array has only one element');
});

it('splitArrayByIndex(["cat", "dog", "mouse", "bird", "fish"]) should return [["cat", "mouse", "fish"], ["dog", "bird"]]', () => {
  expect(splitArrayByIndex(['cat', 'dog', 'mouse', 'bird', 'fish'])).to.deep.equal([['cat', 'mouse', 'fish'], ['dog', 'bird']]);
});

it('splitArrayByIndex([-202.678, false]) should return [[-202.678], [false]]', () => {
  expect(splitArrayByIndex([-202.678, false])).to.deep.equal([[-202.678], [false]]);
});

it('splitArrayByIndex([11, 56.78, -7756, -23, 55.01 , true, null, "count zero", "", undefined]) should return [[11, -7756, 55.01, null, ""], [56.78, -23, true, "count zero", undefined]]', () => {
  expect(splitArrayByIndex([11, 56.78, -7756, -23, 55.01, true, null, 'count zero', '', undefined])).to.deep.equal([[11, -7756, 55.01, null, ''], [56.78, -23, true, 'count zero', undefined]]);
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
