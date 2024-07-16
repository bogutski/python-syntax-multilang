// NAMEEN:
// NAMERU:Проверка типов в массиве массивов

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `areAllTypesTheSame`, которая принимает массив массивов.

Функция должна проверить, что все элементы всех под-массивов имеют одинаковый тип данных.

Если один из подмассивов пустой, то функция должна вернуть строку `One or more sub-arrays are empty`.

Если внешний массив пустой, то функция должна вернуть строку `Array is empty`.


Примеры запуска функции:
```javascript
areAllTypesTheSame([ [1, 2], [3, 4], [5, 6] ]);              // true
areAllTypesTheSame([ [1, 2], [3, 4], [5, '6'] ]);            // false
areAllTypesTheSame([ ['abc'], ['test'], ['a', undefined] ]); // false
areAllTypesTheSame([ [], ['test'], ['a', 'b'], ['str'] ]);   // 'One or more sub-arrays are empty'
areAllTypesTheSame([ ]);                                     // 'Array is empty'
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
function areAllTypesTheSame(arr)
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function areAllTypesTheSame(arr){
  if(!arr.length) return 'Array is empty';
  let firstType = '';

  for(let i = 0; i < arr.length; i++){
    if(!arr[i].length) return 'One or more sub-arrays are empty';
    for(let j = 0; j < arr[i].length; j++){
      if(firstType === '' && arr[i].length) firstType = typeof arr[i][j];
      else if(firstType !== typeof arr[i][j]) return false;
    }
  }

  return true;
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function areAllTypesTheSame', () => {
  expect(areAllTypesTheSame).to.be.a('function');
});

it("areAllTypesTheSame([ [0, 1, 2], [3, NaN, 5], [6, 7, 8, 9] ]) should return true", () => {
  expect(areAllTypesTheSame([ [0, 1, 2], [3, NaN, 5], [6, 7, 8, 9] ])).to.be.true;
});

it("areAllTypesTheSame([ ['ab'], ['a', 'b', 'c'], ['test', 'string'] ]) should return true", () => {
  expect(areAllTypesTheSame([ ['ab'], ['a', 'b', 'c'], ['test', 'string'] ])).to.be.true;
});

it("areAllTypesTheSame([ [true, false], [true, 5 > 10], [false] ]) should return true", () => {
  expect(areAllTypesTheSame([ [true, false], [true, 5 > 10], [false] ])).to.be.true;
});

it("areAllTypesTheSame([ [undefined], [undefined], [undefined] ]) should return true", () => {
  expect(areAllTypesTheSame([ [undefined], [undefined], [undefined] ])).to.be.true;
});

it("areAllTypesTheSame([ [5], [10], [100], [0], [9999], ['123'] ]) should return false", () => {
  expect(areAllTypesTheSame([ [5], [10], [100], [0], [9999], ['123'] ])).to.be.false;
});

it("areAllTypesTheSame([ [], [], [null], [null] ]) should return 'One or more sub-arrays are empty'", () => {
  expect(areAllTypesTheSame([ [], [], [null], [null] ])).to.be.equal('One or more sub-arrays are empty');
});

it("areAllTypesTheSame([]) should return 'Array is empty'", () => {
  expect(areAllTypesTheSame([])).to.be.equal('Array is empty');
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
