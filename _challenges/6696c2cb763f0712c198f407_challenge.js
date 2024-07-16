// NAMEEN:
// NAMERU:Перемещение элементов между массивами

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `moveElements`, которая принимает два массива (firstArray и secondArray) и число N.

Функция должна удалить последние `N` элементов из `secondArray` и добавить эти элементы в начало `firstArray`.

В конце функция возвращает объект с двумя ключами: `FirstArray` и `SecondArray`, значения которых — это измененные массивы.

Если `N` меньше либо равно нулю, массивы должны остаться без изменений.


Пример запуска функции:
```javascript
moveElements(['a', 'b'], ['c', 'd', 'e'], 3); // { FirstArray: ['c', 'd', 'e', 'a', 'b'], SecondArray: [] }
moveElements([1, 2], [3, 4, 5, 6], 2); // { FirstArray: [5, 6, 1, 2], SecondArray: [3, 4] }
moveElements([], [10, 20, 30], 1); // { FirstArray: [30], SecondArray: [10, 20] }
moveElements([1, 2, 3], [], 2); // { FirstArray: [1, 2, 3], SecondArray: [] }
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
function moveElements(){

}
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function moveElements(arr1, arr2, n) {
  if(n <= 0) return {FirstArray: arr1, SecondArray: arr2};
  else{
    const elements = arr2.splice(-n)
    arr1.splice(0, 0, ...elements)

    return {FirstArray: arr1, SecondArray: arr2};
  }
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function moveElements', () => {
  expect(moveElements).to.be.a('function');
});

it('Function moveElements should include methods splice()', () => {
  const res = moveElements.toString()
  expect(res).to.include('.splice(')
});

it("moveElements([1, 2], [3, 4, 5, 6], 2) should correctly move elements", () => {
  expect(moveElements([1, 2], [3, 4, 5, 6], 2)).to.deep.equal({ FirstArray: [5, 6, 1, 2], SecondArray: [3, 4] });
});

it("moveElements(['a', 'b'], ['c', 'd', 'e'], 3) should move all elements from second to first array", () => {
  expect(moveElements(['a', 'b'], ['c', 'd', 'e'], 3)).to.deep.equal({ FirstArray: ['c', 'd', 'e', 'a', 'b'], SecondArray: [] });
});

it("moveElements([], [10, 20, 30], 1) should handle empty first array", () => {
  expect(moveElements([], [10, 20, 30], 1)).to.deep.equal({ FirstArray: [30], SecondArray: [10, 20] });
});

it("moveElements([1, 2, 3], [], 2) should return the first array unchanged if the second array is empty", () => {
  expect(moveElements([1, 2, 3], [], 2)).to.deep.equal({ FirstArray: [1, 2, 3], SecondArray: [] });
});

it("should handle the case when N is greater than the length of the second array", () => {
  expect(moveElements([1, 2], [3, 4], 3)).to.deep.equal({ FirstArray: [3, 4, 1, 2], SecondArray: [] });
});

it("should return both arrays unchanged when N is 0", () => {
  expect(moveElements([1, 2], [3, 4], 0)).to.deep.equal({ FirstArray: [1, 2], SecondArray: [3, 4] });
});

it("should correctly handle moving elements when N is 0, keeping both arrays unchanged", () => {
  let firstArray = [1, 2, 3];
  let secondArray = [4, 5, 6];
  let result = moveElements(firstArray, secondArray, 0);
  expect(result.FirstArray).to.deep.equal([1, 2, 3]);
  expect(result.SecondArray).to.deep.equal([4, 5, 6]);
});

it("should correctly handle negative N by not moving any elements and keeping both arrays unchanged", () => {
  let firstArray = ['a', 'b'];
  let secondArray = ['c', 'd', 'e'];
  let result = moveElements(firstArray, secondArray, -2);
  expect(result.FirstArray).to.deep.equal(['a', 'b']);
  expect(result.SecondArray).to.deep.equal(['c', 'd', 'e']);
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
