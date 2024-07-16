// NAMEEN:
// NAMERU:Перевернуть численные элементы во внутренних массивах

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `reverseInnerArraysWithNumbers`, которая принимает массив массивов с различными типами данных.

Функция должна вернуть новый массив, в котором во внутренних массивах числа должны быть в обратном порядке.

Если во внутреннем массиве элементы имеют другой тип данных, то они должны остаться без изменений.

Например: `[[1,2,3], ['4','5','6'], [7,8,9]]` => `[[3,2,1], ['4','5','6'], [9,8,7]]`, в этом примере элементы были
 перевернуты в первом и третьем под-массиве, так как они содержали числа.

Метод `reverse` использовать нельзя.

Если внешний массив пустой, то вернуть строку `'Array is empty'`.


Пример запуска функции:
```javascript
reverseInnerArraysWithNumbers([[1,2,3], ['4','5','6'], [7,8,9]]);              // [[3,2,1], ['4','5','6'], [9,8,7]]
reverseInnerArraysWithNumbers([['test', 'string'], [9, 8, 7]]);                // [['test', 'string'], [7, 8, 9]]
reverseInnerArraysWithNumbers([[true, false], ['a', 'b', 'c'], [55, 66, 77]]); // [[true, false], ['a', 'b', 'c'], [77, 66, 55]]
reverseInnerArraysWithNumbers([]);                                             // 'Array is empty'
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
fun
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function reverseInnerArraysWithNumbers(arr){
  if(!arr.length) return 'Array is empty';
  let newArr = [];

  for(let i = 0; i < arr.length; i++){
    let chunk = [];
    for(let j = 0; j < arr[i].length; j++){
      if(typeof arr[i][j] === 'number') chunk.unshift(arr[i][j]);
      else chunk.push(arr[i][j]);
    }
    newArr.push(chunk);
  }

  return newArr;
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function reverseInnerArraysWithNumbers', () => {
  expect(reverseInnerArraysWithNumbers).to.be.a('function');
});

it("Function reverseInnerArraysWithNumbers does not include '.reverse' method", () => {
  expect(reverseInnerArraysWithNumbers.toString()).to.not.include('.reverse');
});

it("reverseInnerArraysWithNumbers([[1,2,3], ['4','5','6'], [7,8,9]]) should return [[3,2,1], ['4','5','6'], [9,8,7]]", () => {
  expect(reverseInnerArraysWithNumbers([[1,2,3], ['4','5','6'], [7,8,9]])).to.eql([[3,2,1], ['4','5','6'], [9,8,7]]);
});

it("reverseInnerArraysWithNumbers([['a', 'b', 'c'], ['d', 'e', 'f'], [55, 67, 100]]) should return [['a', 'b', 'c'], ['d', 'e', 'f'], [100, 67, 55]]", () => {
  expect(reverseInnerArraysWithNumbers([['a', 'b', 'c'], ['d', 'e', 'f'], [55, 67, 100]])).to.eql([['a', 'b', 'c'], ['d', 'e', 'f'], [100, 67, 55]]);
});

it("reverseInnerArraysWithNumbers([[99, 100, 999, 10000]]) should return [[10000, 999, 100, 99]]", () => {
  expect(reverseInnerArraysWithNumbers([[99, 100, 999, 10000]])).to.eql([[10000, 999, 100, 99]]);
});

it("reverseInnerArraysWithNumbers([[true, false], ['one', 'two'], [{name: 'Jack'}, {name: 'John'}]]) should return [[true, false], ['one', 'two'], [{name: 'Jack'}, {name: 'John'}]]", () => {
  expect(reverseInnerArraysWithNumbers([[true, false], ['one', 'two'], [{name: 'Jack'}, {name: 'John'}]])).to.eql([[true, false], ['one', 'two'], [{name: 'Jack'}, {name: 'John'}]]);
});

it("reverseInnerArraysWithNumbers([[], [], []]) should return [[], [], []]", () => {
  expect(reverseInnerArraysWithNumbers([[], [], []])).to.eql([[], [], []]);
});

it("reverseInnerArraysWithNumbers([]) should return 'Array is empty'", () => {
  expect(reverseInnerArraysWithNumbers([])).to.eql('Array is empty');
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
