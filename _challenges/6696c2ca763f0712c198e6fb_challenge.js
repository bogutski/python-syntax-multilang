// NAMEEN:
// NAMERU:Найди самый короткий массив

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напиши функцию `shortArray`, которая принимает три параметра:
* `arr1` - массив элементов,
* `arr2` - массив элементов,
* `arr3` - массив элементов.

Функция должна возвращать самый короткий массив.

Пример запуска функции:
```javascript
shortArray([1, 2, 3], [7, 8, 9, 0], [11, 45, 34, 67, 90]);
// [1, 2, 3]
```

Сравнивайте длины массивов между собой.

INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
fun

INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function shortArray(arr1, arr2, arr3) {
  if( arr1.length < arr2.length && arr1.length < arr3.length){
    return arr1
  } else if (arr2.length < arr1.length && arr2.length < arr3.length){
    return arr2
  }
  return arr3
}

// SOLUTIONEND

// OPENTESTSSTART
it('Created function shortArray', () => {
  expect(shortArray).to.be.a('function');
});

it('Function shortArray([1, 2, 3], [1, 2, 3, 4], [1, 2, 3, 4, 5]) returns [1, 2, 3]', () => {
  expect(shortArray([1, 2, 3], [1, 2, 3, 4], [1, 2, 3, 4, 5])).to.deep.equal([1, 2, 3]);
});

it('Function shortArray([1, 2, 3, 4, 5], [1, 2, 3], [1, 2, 3, 4]) returns [1, 2, 3]', () => {
  expect(shortArray([1, 2, 3, 4, 5], [1, 2, 3], [1, 2, 3, 4])).to.deep.equal([1, 2, 3]);
});

it('Function shortArray([1, 2, 3, 4], [1, 2, 3, 4, 5], [1, 2, 3]) returns [1, 2, 3]', () => {
  expect(shortArray([1, 2, 3, 4], [1, 2, 3, 4, 5], [1, 2, 3])).to.deep.equal([1, 2, 3]);
});

it('Function shortArray([1, 2, 3], [1, 2, 3, 4], [1, 2, 3]) returns [1, 2, 3]', () => {
  expect(shortArray([1, 2, 3], [1, 2, 3, 4], [1, 2, 3])).to.deep.equal([1, 2, 3]);
});

it('Function shortArray([1, 2], [1, 2], [1, 2]) returns [1, 2, 3]', () => {
  expect(shortArray([1, 2], [1, 2], [1, 2])).to.deep.equal([1, 2]);
});

it('Function shortArray([1, 2, 3], [1, 2], [1, 2, 3, 4]) returns [1, 2]', () => {
  expect(shortArray([1, 2, 3], [1, 2], [1, 2, 3, 4])).to.deep.equal([1, 2]);
});

// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
