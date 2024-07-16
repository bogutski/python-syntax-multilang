// NAMEEN:
// NAMERU:Удалить дубликаты второго массива из первого массива

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Функция `deleteDuplicates` принимает два массива `arr1` и `arr2`.

Необходимо удалить из массива `arr1` все элементы, которые встречаются в массиве `arr2`.

Функция должна вернуть массив `[arr1, arr2]`

Пример запуска функции:
```javascript
deleteDuplicates([1,2,3,4,5], [1,2,3,4,5]) // [[], [1, 2, 3, 4, 5]]
deleteDuplicates([1,2,3,4,5], [5,6,7,8,9]) // [[1, 2, 3, 4], [5, 6, 7, 8, 9]]
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
fun
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function deleteDuplicates(arr1, arr2) {
  for (let i = 0; i < arr2.length; i++) {
    if (arr1.includes(arr2[i])) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);
      i--
    }
  }
  return [arr1, arr2]
}

// SOLUTIONEND


// OPENTESTSSTART
it('Created function deleteDuplicates', () => {
  expect(deleteDuplicates).to.be.a('function');
});

it('deleteDuplicates([1,2,3,4,5], [1,2,3,4,5]) should return [[],[1, 2, 3, 4, 5]]', () => {
  expect(deleteDuplicates([1, 2, 3, 4, 5], [1, 2, 3, 4, 5])).to.deep.equal([[], [1, 2, 3, 4, 5]]);
});

it('deleteDuplicates([1,2,3,4,5], [5,6,7,8,9]) should return [[1, 2, 3, 4], 5, 6, 7, 8, 9]]', () => {
  expect(deleteDuplicates([1, 2, 3, 4, 5], [5, 6, 7, 8, 9])).to.deep.equal([[1, 2, 3, 4], [5, 6, 7, 8, 9]]);
});

it('deleteDuplicates(["hello", "world"], ["js", "world"]) should return [["hello"], ["js", "world"]]', () => {
  expect(deleteDuplicates(["hello", "world"], ["js", "world"])).to.deep.equal([["hello"], ["js", "world"]]);
});

it('deleteDuplicates(["", ""], [""]) should return [[], [""]]', () => {
  expect(deleteDuplicates(["", ""], [""])).to.deep.equal([[], [""]]);
});

it('deleteDuplicates([], []) should return [[], []]', () => {
  expect(deleteDuplicates([], [])).to.deep.equal([[], []]);
});

it('deleteDuplicates([1, 1, 1, 1], [1,2,3,4,5,6,7,8,9]) should return [[], [1, 2, 3, 4, 5, 6, 7, 8, 9]]', () => {
  expect(deleteDuplicates([1, 1, 1, 1], [1, 2, 3, 4, 5, 6, 7, 8, 9])).to.deep.equal([[], [1, 2, 3, 4, 5, 6, 7, 8, 9]]);
});

// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
