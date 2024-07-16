// NAMEEN:
// NAMERU:Разделить массив на два массива

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Функция `splitArray` принимает массив, который может содержать числа и/или строки.

Массив состоит из четного количества элементов или может быть пустым.

Необходимо вернуть массив, состоящий из двух элементов - массивов:
* разделить исходный массив на 2 одинаковых по длине массива

Используйте метод массива `splice` для выполнения этой задачи.

Пример запуска функции:
```javascript
let colors = ['white', 'red', 'orange', 'green', 'blue', 'violet']
let half = colors.splice(0, colors.length/2);
console.log([half, colors])                                  // [['white', 'red', 'orange'] ['green', 'blue', 'violet']]

numbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);                    // [[1, 2, 3, 4, 5] [6, 7, 8, 9, 10]]
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
function
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function splitArray(arr) {
  let arr1 = arr.splice(0, arr.length / 2);
  return [arr1, arr]
}

// SOLUTIONEND


// OPENTESTSSTART
it('Created function splitArray', () => {
  expect(splitArray).to.be.a('function');
});

it(`splitArray([1, 2, 3, 4, 5, 6]) should return [[1, 2, 3], [4, 5, 6]]`, () => {
  expect(splitArray([1, 2, 3, 4, 5, 6])).to.eql([[1, 2, 3], [4, 5, 6]]);
});


it(`splitArray(['a', 'b']) should return [['a'], ['b']]`, () => {
  expect(splitArray(['a', 'b'])).to.eql([['a'], ['b']]);
});

it(`splitArray(['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j']) should return [['a', 'b', 'c', 'd', 'e'], ['f', 'g', 'h', 'i', 'j']]`, () => {
  expect(splitArray(['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'])).to.eql([['a', 'b', 'c', 'd', 'e'], ['f', 'g', 'h', 'i', 'j']]);
});

it(`splitArray([]) should return [[], []]`, () => {
  expect(splitArray([])).to.eql([[], []]);
});

it(`splitArray([1, 2]) should return [[1], [2]]`, () => {
  expect(splitArray([1, 2])).to.eql([[1], [2]]);
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
