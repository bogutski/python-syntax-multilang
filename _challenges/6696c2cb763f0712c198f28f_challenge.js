// NAMEEN:
// NAMERU:Проверка типов в первом и последнем подмассиве

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `firstAndLast`, которая принимает массив массивов.

Функция должна вернуть `true`, если все элементы первого и последнего подмассивов имеют одинаковый тип данных.
В противном случае функция должна вернуть `false`.

Подмассивов будет либо больше двух, либо внешний массив будет пустой.

Первый и последний подмассивы всегда будут содержать хотя бы один элемент.

Если массив пустой, то функция должна вернуть строку 'Array is empty'.


Примеры запуска функции:
```javascript
firstAndLast([ [1, 2], ['555'], [true], [5, 6] ]);          // true
firstAndLast([ ['a', 'b', 'c'], [true], [true] ]);          // false
firstAndLast([ ['undefined', 'Hello'], ['world', '123'] ]); // true
firstAndLast([ [5 > 3, false], [], ['test'], [5, 3] ]);     // false
firstAndLast([ ]);                                          // 'Array is empty'
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
fun
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function firstAndLast(arr){
  if(!arr.length) return 'Array is empty';
  let firstType = '';

  for(let i = 0; i < arr.length; i += arr.length - 1){
    for(let j = 0; j < arr[i].length; j++){
      if(firstType === '' && arr[i].length) firstType = typeof arr[i][j];
      else if(firstType !== typeof arr[i][j]) return false;
    }
  }

  return true;
}
// SOLUTIONEND

// OPENTESTSSTART
it('Created function firstAndLast', () => {
  expect(firstAndLast).to.be.a('function');
});

it("firstAndLast([ [0, 1, 2], [3, NaN, 5], [6, 7, 8, 9] ]) should return true", () => {
  expect(firstAndLast([ [0, 1, 2], [3, NaN, 5], [6, 7, 8, 9] ])).to.be.true;
});

it("firstAndLast([ ['test'], ['a', 1, 'c'], ['test', 'string'] ]) should return true", () => {
  expect(firstAndLast([ ['test'], ['a', 1, 'c'], ['test', 'string'] ])).to.be.true;
});

it("firstAndLast([ [true, false], [true, 5 > 10], [true, 5 > 10] ]) should return true", () => {
  expect(firstAndLast([ [true, false], [1, 2, 3], [true, 5 > 10] ])).to.be.true;
});

it("firstAndLast([ [undefined], [null], [undefined] ]) should return true", () => {
  expect(firstAndLast([ [undefined], [null], [undefined] ])).to.be.true;
});

it("firstAndLast([ [5], [10], [100], [0], [9999], ['123'] ]) should return false", () => {
  expect(firstAndLast([ [5], [10], [100], [0], [9999], ['123'] ])).to.be.false;
});

it("firstAndLast([ [NaN, 5, 10], [], [null], ['null'] ]) should return false", () => {
  expect(firstAndLast([ [NaN, 5, 10], [], [null], ['null'] ])).to.be.false;
});

it("firstAndLast([]) should return 'Array is empty'", () => {
  expect(firstAndLast([])).to.be.equal('Array is empty');
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
