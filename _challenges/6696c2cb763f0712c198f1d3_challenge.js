// NAMEEN:
// NAMERU:Перевернуть элементы внутренних массивов

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `reverseInnerArrays`, которая принимает массив массивов c разными типами данных.

Функция должна вернуть новый массив, в котором во внутренних массивах элементы будут расположены в обратном порядке.

Например: `[[1, 2, 3], ['a', 'b', 'c']]` => `[[3, 2, 1], ['c', 'b', 'a']]`

Если внешний массив пустой, то вернуть строку `'Array is empty'`.

Использование метода `reverse` запрещено.


Примеры запуска функции:
```javascript
reverseInnerArrays([[1,2,3], [7,8,9]]);                  // [[3,2,1], [9,8,7]]
reverseInnerArrays([['one', 'two'], ['three', 'four']]); // [['two', 'one'], ['four', 'three']]
reverseInnerArrays([[true, false], [false, false]]);     // [[false, true], [false, false]]
reverseInnerArrays([]);                                  // 'Array is empty'
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
fun
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function reverseInnerArrays(arr){
  if(!arr.length) return 'Array is empty';
  let newArr = [];
  for(let i = 0; i < arr.length; i++){
    let chunk = [];
    for(let j = 0; j < arr[i].length; j++){
      chunk.unshift(arr[i][j]);
    }
    newArr.push(chunk);
  }
  return newArr;
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function reverseInnerArrays', () => {
  expect(reverseInnerArrays).to.be.a('function');
});

it("Function reverseInnerArrays does not include '.reverse' method", () => {
  expect(reverseInnerArrays.toString()).to.not.include('.reverse');
});

it("reverseInnerArrays([[1,2,3], [4,5,6], [7,8,9]]) should return [[3,2,1], [6,5,4], [9,8,7]]", () => {
  expect(reverseInnerArrays([[1,2,3], [4,5,6], [7,8,9]])).to.deep.equal([[3,2,1], [6,5,4], [9,8,7]]);
});

it("reverseInnerArrays([['one', 'two'], ['three', 'four']]) should return [['two', 'one'], ['four', 'three']]", () => {
  expect(reverseInnerArrays([['one', 'two'], ['three', 'four']])).to.deep.equal([['two', 'one'], ['four', 'three']]);
});

it("reverseInnerArrays([[true, false], [false, false], [5 > 6, 5 < 6]]) should return [[false, true], [false, false], [true, false]]", () => {
  expect(reverseInnerArrays([[true, false], [false, false], [5 > 6, 5 < 6]])).to.deep.equal([[false, true], [false, false], [true, false]]);
});

it("reverseInnerArrays([['one', 'two'], [1, 2, 3], []]) should return [['two', 'one'], [3, 2, 1], []]", () => {
  expect(reverseInnerArrays([['one', 'two'], [1, 2, 3], []])).to.deep.equal([['two', 'one'], [3, 2, 1], []]);
});

it("reverseInnerArrays([]) should return 'Array is empty'", () => {
  expect(reverseInnerArrays([])).to.equal('Array is empty');
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
