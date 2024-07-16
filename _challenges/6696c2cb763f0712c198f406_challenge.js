// NAMEEN:
// NAMERU:Объединение массивов с последующей ротацией

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `mergeAndRotate`, которая принимает три аргумента: два массива (array1 и array2) и число N.

Ваша задача — сначала объединить два данных массива в один, а затем "сдвинуть" элементы получившегося массива на N позиций.

* Если N положительное, сдвигайте элементы вправо, то есть последние `N` элементов переместятся в начало массива.
* Если N отрицательное, сдвигайте элементы влево, то есть первые `|N|` элементов переместятся в конец массива.

Функция должна возвращать новый массив после сдвига.


Пример запуска функции:
```javascript
mergeAndRotate([1, 2, 3], [4, 5, 6], 2); // [ 5, 6, 1, 2, 3, 4 ]
mergeAndRotate(['a', 'b'], ['c', 'd', 'e'], -1); // [ 'b', 'c', 'd', 'e', 'a' ]
mergeAndRotate([true, false], [false, true, true], 3); // [ false, true, true, true, false ]
mergeAndRotate([], [1, 2], 1); // [ 2, 1 ]
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
function mergeAndRotate(){

}
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function mergeAndRotate(arr1, arr2, n) {
  let res = [...arr1, ...arr2]

  if(n > 0){
    const elements = res.splice(-n)
    res.splice(0, 0, ...elements)
  }else {
    const elements = res.splice(0, -n)
    res.splice(res.length, 0, ...elements)
  }

  return res;
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function mergeAndRotate', () => {
  expect(mergeAndRotate).to.be.a('function');
});

it('Function mergeAndRotate should include methods splice()', () => {
  const res = mergeAndRotate.toString()
  expect(res).to.include('.splice(')
});

it("mergeAndRotate([1, 2, 3], [4, 5, 6], 2) should return [5, 6, 1, 2, 3, 4]", () => {
  expect(mergeAndRotate([1, 2, 3], [4, 5, 6], 2)).to.deep.equal([5, 6, 1, 2, 3, 4]);
});

it("mergeAndRotate(['a', 'b'], ['c', 'd', 'e'], -1) should return ['b', 'c', 'd', 'e', 'a']", () => {
  expect(mergeAndRotate(['a', 'b'], ['c', 'd', 'e'], -1)).to.deep.equal(['b', 'c', 'd', 'e', 'a']);
});

it("mergeAndRotate([true, false], [false, true, true], 3) should return [false, true, true, true, false]", () => {
  expect(mergeAndRotate([true, false], [false, true, true], 3)).to.deep.equal([false, true, true, true, false]);
});

it("mergeAndRotate([], [1, 2], 1) should return [2, 1] for rotating a single array", () => {
  expect(mergeAndRotate([], [1, 2], 1)).to.deep.equal([2, 1]);
});

it("mergeAndRotate([], [], 0) should return an empty array if both input arrays are empty", () => {
  expect(mergeAndRotate([], [], 0)).to.deep.equal([]);
});

it("mergeAndRotate([1, 2], [3, 4], 4) should return [1, 2, 3, 4] as rotating by the length of the array results in the same array", () => {
  expect(mergeAndRotate([1, 2], [3, 4], 4)).to.deep.equal([1, 2, 3, 4]);
});

it("mergeAndRotate([1, 2], [3, 4, 5, 6], 0) should return [1, 2, 3, 4, 5, 6] as rotating by 0 doesn't change the array", () => {
  expect(mergeAndRotate([1, 2], [3, 4, 5, 6], 0)).to.deep.equal([1, 2, 3, 4, 5, 6]);
});

it("mergeAndRotate(['x', 'y'], ['a', 'b', 'c'], -5) should return ['x', 'y', 'a', 'b', 'c']", () => {
  expect(mergeAndRotate(['x', 'y'], ['a', 'b', 'c'], -5)).to.deep.equal(['x', 'y', 'a', 'b', 'c']);
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
